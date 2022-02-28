import { FACEMESH_RIGHT_EYE, FACEMESH_TESSELATION } from "@mediapipe/face_mesh";

const DrawingUtils = {

  draw: function(canvasCtx, detections, functionName){
    //save the context of 2d plane before transforming it to draw
    canvasCtx.save(); 
    //get the canvas element out of the context
    let canvas = canvasCtx.canvas;
    //clear the canvasCtx using the height and width of the canvas
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    //if there are any faces detected
    if (detections.multiFaceLandmarks !== undefined) { 
      //interate over each face
      for (const landmarks of detections.multiFaceLandmarks) { 
        //call the specific drawing function with the landmarks per face
        this[functionName](canvasCtx, landmarks);
      }
    }
    //revert back to the last saved context on the stack
    canvasCtx.restore(); 
  },

  drawClownNose: function(canvasCtx, landmarks){
    // console.log(landmarks);
    let canvas = canvasCtx.canvas;
    let xpos = landmarks[1].x*canvas.width;
    let ypos = landmarks[1].y*canvas.height;
    var img = new Image;
    img.src = "assets/Clown_nose_large.png";
    const dim = 90; //90 is the hardcoded height of the image.
    canvasCtx.drawImage(img,
                        xpos-dim/2, 
                        ypos-dim/2,dim,dim)
  },

  drawFilter: function(canvasCtx,landmarks){
    this.calculateSkew(canvasCtx, landmarks);
  },
  
  drawPoints: function(canvasCtx, landmarks){
    for (const [idx,dot] of Object.entries(landmarks)){  
      let canvas = canvasCtx.canvas
      let xpos = dot.x * canvas.width;
      let ypos = dot.y * canvas.height;
      canvasCtx.beginPath()
      canvasCtx.arc(xpos, ypos, 1, 0, 2 * Math.PI,true);
      canvasCtx.fillStyle = 'white';
      canvasCtx.fill();
      // canvasCtx.font = "6px Arial";
      // canvasCtx.fillStyle = 'orange';
      // canvasCtx.fillText(idx, xpos, ypos);
    }
  },
  
  calculateSkew: function(canvasCtx, landmarks){
    const leftEyeCorner = landmarks[130];
    const rightEyeCorner = landmarks[359];
    const upperLip = landmarks[164];
    //use 0 for middle, 359 for top right, and 130 for top left.
    //rotation given angle to the horizon using line from the eyes
    const eyeSlope = ((rightEyeCorner.y - leftEyeCorner.y)/
                      (rightEyeCorner.x - leftEyeCorner.x));
    const rotation = Math.atan(eyeSlope);
    // console.log(eyeAngle);

    //tilt given angle from upper lip to eye line comared to vertical
    const eyeMidPoint = {x: (rightEyeCorner.x + leftEyeCorner.x)/2,
                         y: (rightEyeCorner.y + leftEyeCorner.y)/2,
                         z: (rightEyeCorner.z + leftEyeCorner.z)/2}
    const faceSlope = ((eyeMidPoint.z - upperLip.z)/
                       (eyeMidPoint.y - upperLip.y));
    const skew = Math.atan(faceSlope);
    // console.log(skew);
    const originPoint = {x: .5,
                         y: eyeMidPoint.y,
                         z: upperLip.z}
    // drawConnectors(canvasCtx, landmarks, FACEMESH_TESSELATION,
    //   {color: '#C0C0C070', lineWidth: 1});
    // console.log({leftEyeCorner, rightEyeCorner, upperLip, eyeMidPoint});
    // console.log(landmarks);
    drawConnectors(canvasCtx,{0: leftEyeCorner, 1: rightEyeCorner, 2: upperLip, 3: eyeMidPoint, 4: originPoint},[[0,1],[2,3],[2,4]],{color: 'red', lineWidth: 1})
    this.drawPoints(canvasCtx,{leftEyeCorner, rightEyeCorner, upperLip, eyeMidPoint, originPoint});
  }

}
export default DrawingUtils;