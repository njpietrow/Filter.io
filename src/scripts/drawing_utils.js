import { DEFAULT_SKEW } from "./video_dimensions";

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

  mask: function(canvasCtx,landmarks, type){
    let mutations = this.calculateSkew(canvasCtx, landmarks);

    let canvas = canvasCtx.canvas;
    let xpos = landmarks[1].x*canvas.width;
    let ypos = landmarks[1].y*canvas.height;
    var img = new Image;
    img.src = `assets/mask.png`;
    const dim = canvas.width*mutations.scale*2.4;
    // console.log(mutations.scale)
    canvasCtx.save(); 
    canvasCtx.translate(xpos, ypos);
    canvasCtx.rotate(mutations.roll);
    canvasCtx.drawImage(img, -(dim/2), -(dim/2)+15,dim,dim);
    canvasCtx.restore(); 
  },
  
  tessalate: function(canvasCtx, landmarks){
    drawConnectors(canvasCtx, landmarks, FACEMESH_TESSELATION,
      {color: 'night', lineWidth: 1});
  },

  none: function(){
    
  },
  
  calculateSkew: function(canvasCtx, landmarks){
    
    //use 0 for middle, 359 for top right, and 130 for top left.
    const leftEyeCorner = landmarks[130];
    const rightEyeCorner = landmarks[359];
    const upperLip = landmarks[164];
    
    //midpoint between eye landmarks
    const eyeMidPoint = {x: (rightEyeCorner.x + leftEyeCorner.x)/2,
                         y: (rightEyeCorner.y + leftEyeCorner.y)/2,
                         z: (rightEyeCorner.z + leftEyeCorner.z)/2};

    //get frame of reference to display slopes
    const originPoint = {x: upperLip.x,
                        y: eyeMidPoint.y,
                        z: upperLip.z};
    
    //calculate angle between eye connector and x-axis
    const roll = Math.atan2(
      (rightEyeCorner.y - leftEyeCorner.y),
      (rightEyeCorner.x - leftEyeCorner.x)
    );

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

/*     //draw key landmarks
    this.drawPoints(canvasCtx,
      {leftEyeCorner, rightEyeCorner, upperLip, eyeMidPoint, originPoint});
      
    //draw lines beteen key points.
    drawConnectors(canvasCtx,
      {0: leftEyeCorner, 1: rightEyeCorner, 2: upperLip, 3: eyeMidPoint, 4: originPoint},
      [[0,1],[2,3],[2,4]],
      {color: 'red', lineWidth: 1}) */
    
    //return roll and pitch angles in radians 
    return {roll: roll, scale: scale}
  },

  distance: function(pos1, pos2){
    return Math.sqrt((pos1.x - pos2.x) ** 2 + (pos1.y - pos2.y) ** 2 + (pos1.z - pos2.z) ** 2)
  }

}
export default DrawingUtils;