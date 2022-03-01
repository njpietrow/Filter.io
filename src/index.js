import VideoTools from './scripts/video_tools';
import DrawingUtils from './scripts/drawing_utils'
import Controls from './scripts/controls'
import {VIDEO_WIDTH,VIDEO_HEIGHT} from './scripts/video_dimensions'
import FM from './scripts/fm_wrapper'
//Add a script for the filter class

window.addEventListener('DOMContentLoaded', async () => {
  const videoElement = document.querySelector("#video");
  const canvasElement = document.querySelector("#game-canvas")
  const canvasCtx = canvasElement.getContext('2d');
  

  canvasElement.width = window.innerWidth * (.8);
  if (canvasElement.width > VIDEO_WIDTH) canvasElement.width = VIDEO_WIDTH;
  canvasElement.height = canvasElement.width * (VIDEO_HEIGHT/VIDEO_WIDTH);
  
  videoElement.oncanplay = function() {
    // set opacity of visible elements to 0 to fade them in.
    videoElement.style.opacity = 0; 
    canvasElement.style.opacity = 0;
    VideoTools.fadeIn(videoElement); //video is playing in the background behind the canvas.
    VideoTools.fadeIn(canvasElement)
  };
  
  /* callback for facemesh onResults function to operate on the resulting
  face detections */
  // function drawFaces(detections) {
    
  //   // DrawingUtils.draw(canvasCtx, detections, "drawClownNose");
  //   // DrawingUtils.draw(canvasCtx, detections, "drawFilter");
  //   DrawingUtils.draw(canvasCtx, detections, "mask");
  // }

  const fm = new FM("mask")

  Controls.toggleVideo(canvasCtx, videoElement);

  Controls.clickAnimation()

});