const DrawingUtils = {
  draw: function(canvasCtx, detections, functionName){
    //save the context of 2d plane before transforming it to draw
    canvasCtx.save(); 
    let canvas = canvasCtx.canvas
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    if (detections.multiFaceLandmarks !== undefined) {
      for (const landmarks of detections.multiFaceLandmarks) {        
        this[functionName](canvasCtx, landmarks);
      }
    }
    //revert back to the last saved context on the stack
    canvasCtx.restore(); 
  },

  drawImage: function(canvasCtx, landmarks){
  let canvas = canvasCtx.canvas
  let xpos = landmarks[1].x*canvas.width;
  let ypos = landmarks[1].y*canvas.height;
  var img = new Image;
  img.src = "assets/Clown_nose_large.png";
  const dim = 90; //90 is the hardcoded height of the image.
  canvasCtx.drawImage(img,
              xpos-90/2, 
              ypos-90/2,90,90)
  },

  drawPoints: function(canvasCtx, landmarks){
    for (const [idx,dot] of Object.entries(landmarks)){  
      let canvas = canvasCtx.canvas
      let xpos = dot.x*canvas.width;
      let ypos = dot.y*canvas.height;
      canvasCtx.beginPath()
      canvasCtx.arc(xpos, ypos, 1, 0, 2 * Math.PI,true);
      canvasCtx.fillStyle = 'white';
      canvasCtx.fill();
      canvasCtx.font = "6px Arial";
      canvasCtx.fillStyle = 'orange';
      // canvasCtx.fillText(idx, xpos, ypos);
    }
  }
}
export default DrawingUtils;