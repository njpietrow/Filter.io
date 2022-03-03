import { VIDEO_HEIGHT, VIDEO_WIDTH, DEFAULT_SKEW } from "./video_dimensions";

const DrawingUtils = {

  draw: function(canvasCtx, detections, functionName, filterName){
    //save the context of 2d plane before transforming it to draw
    canvasCtx.save(); 
    //get the canvas element out of the context
    let canvas = canvasCtx.canvas;
    //mirror the canvas to match mirrored video
    canvasCtx.translate(canvas.width, 0);
    canvasCtx.scale(-1, 1);
    //clear the canvasCtx using the height and width of the canvas
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    const vid = document.querySelector("#video");
    canvasCtx.drawImage(vid, 0, 0);
    //if there are any faces detected
    if (detections.multiFaceLandmarks !== undefined) { 
      //interate over each face
      for (const landmarks of detections.multiFaceLandmarks) { 
        //call the specific drawing function with the landmarks per face
        this[functionName](canvasCtx, landmarks, filterName);
      }
    }
    //revert back to the last saved context on the stack
    canvasCtx.restore(); 
  },

  nose: function(canvasCtx, landmarks){
    let canvas = canvasCtx.canvas;
    let xpos = landmarks[1].x*canvas.width;
    let ypos = landmarks[1].y*canvas.height;
    var img = new Image;
    img.src = "assets/nose.png";
    const dim = 120; //90 is the hardcoded height of the image.
    canvasCtx.drawImage(img, xpos-dim/2, ypos-dim/2,dim,dim)
  },

  mask: function(canvasCtx,landmarks){
    let mutations = this.calculateSkew(landmarks);

    let canvas = canvasCtx.canvas;
    let xpos = landmarks[1].x*canvas.width;
    let ypos = landmarks[1].y*canvas.height;
    var img = new Image;
    img.src = `assets/mask.png`;
    const dim = canvas.width*mutations.scale*2.2;
    // console.log(mutations.scale)
    canvasCtx.save(); 
    canvasCtx.translate(xpos, ypos);
    canvasCtx.rotate(mutations.roll*.9);
    canvasCtx.drawImage(img, -(dim/2), -(dim/2)+17,dim,dim);
    canvasCtx.restore(); 
  },

  ears: function(canvasCtx,landmarks){
    let mutations = this.calculateSkew(landmarks);

    let canvas = canvasCtx.canvas;
    let xpos = landmarks[1].x*canvas.width;
    let ypos = landmarks[1].y*canvas.height;
    var img = new Image;
    img.src = `assets/ears.png`;
    const dim = canvas.width*mutations.scale*1.4;
    // console.log(mutations.scale)
    canvasCtx.save(); 
    canvasCtx.translate(xpos, ypos);
    canvasCtx.rotate(mutations.roll*.9);
    canvasCtx.drawImage(img, -(dim/2), -(dim/2)-50,dim,(dim/2.55));
    canvasCtx.restore(); 
  },

  flowers: function(canvasCtx,landmarks){
    let mutations = this.calculateSkew(landmarks);

    let canvas = canvasCtx.canvas;
    let xpos = landmarks[1].x*canvas.width;
    let ypos = landmarks[1].y*canvas.height;
    var img = new Image;
    img.src = `assets/flowers.png`;
    const dim = canvas.width*mutations.scale*1.7;
    // console.log(mutations.scale)
    canvasCtx.save(); 
    canvasCtx.translate(xpos, ypos);
    canvasCtx.rotate(mutations.roll*.9);
    canvasCtx.drawImage(img, -(dim/2), -(dim/2)-60,dim,(dim/1.81));
    canvasCtx.restore(); 
  },

  mustache: function(canvasCtx,landmarks){
    let mutations = this.calculateSkew(landmarks);

    let canvas = canvasCtx.canvas;
    let xpos = landmarks[1].x*canvas.width;
    let ypos = landmarks[1].y*canvas.height;
    var img = new Image;
    img.src = `assets/mustache.png`;
    const dim = canvas.width*mutations.scale*1.2;
    // console.log(mutations.scale)
    canvasCtx.save(); 
    canvasCtx.translate(xpos, ypos);
    canvasCtx.rotate(mutations.roll*.9);
    canvasCtx.drawImage(img, -(dim/2), -(dim/2)+15,dim,(dim));
    canvasCtx.restore(); 
  },
  
  
  tessalate: function(canvasCtx, landmarks){
    drawConnectors(canvasCtx, landmarks, FACEMESH_TESSELATION,
      {color: '#C0C0C070', lineWidth: 1});
    drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_EYE, {color: 'yellow'});
    // drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_IRIS, {color: 'white'});
    drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_EYEBROW, {color: '#FF3030'});
    drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_EYE, {color: 'blue'});
    // drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_IRIS, {color: 'white'});
    drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_EYEBROW, {color: '#30FF30'});
    drawConnectors(canvasCtx, landmarks, FACEMESH_LIPS, 
      {color: 'red'});

    // this.nose(canvasCtx, landmarks)
  },

  none: function(){ 
    //empty callback for FM onResults 
  },
  
  calculateSkew: function(landmarks){
    
    //use 0 for middle, 359 for top right, and 130 for top left.
    const leftEyeCorner = landmarks[130];
    const rightEyeCorner = landmarks[359];
    const upperLip = landmarks[164];
    
    //midpoint between eye landmarks
    const eyeMidPoint = {
      x: (rightEyeCorner.x + leftEyeCorner.x)/2,
      y: (rightEyeCorner.y + leftEyeCorner.y)/2,
      z: (rightEyeCorner.z + leftEyeCorner.z)/2
    };
         
    //calculate angle in radians between eye connector and x-axis
    const roll = Math.atan2(
      (rightEyeCorner.y - leftEyeCorner.y),
      (rightEyeCorner.x - leftEyeCorner.x)
    );
                           
    //get frame of reference to display slopes
    const originPoint = {
      x: upperLip.x,
      y: eyeMidPoint.y,
      z: upperLip.z
    };
    //calculate angle between face slope and y-axis
    const pitch = Math.atan2(
      (eyeMidPoint.z - upperLip.z),
      (eyeMidPoint.y - upperLip.y) 
    );

    //calculate angle between (eyeMid -> upperlip) and z-axis
    const yaw = Math.atan2(
      (eyeMidPoint.z - upperLip.z),
      (eyeMidPoint.x - upperLip.x) 
    );

    const scale = this.distance(rightEyeCorner,leftEyeCorner); 

    //draw lines beteen key points.
  /*   drawConnectors(canvasCtx,
      {0: leftEyeCorner, 1: rightEyeCorner, 2: upperLip, 3: eyeMidPoint, 4: originPoint},
      [[0,1],[2,3],[2,4]],
      {color: 'red', lineWidth: 1}) */
    
    return {roll: roll, scale: scale}
  },

  distance: function(pos1, pos2){
    // get ratio of video element since x and y coordinates are given assuming square element
    let aspectRatio = VIDEO_WIDTH/VIDEO_HEIGHT;

    return Math.sqrt(
      (pos1.x - pos2.x) ** 2 * aspectRatio + 
      (pos1.y - pos2.y) ** 2 / aspectRatio +
      (pos1.z - pos2.z) ** 2
    );
  }

}
export default DrawingUtils;