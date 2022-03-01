import VideoTools from './scripts/video_tools';
import FM from './scripts/fm_wrapper'

window.addEventListener('DOMContentLoaded', async () => {
  const videoElement = document.querySelector("#video");
  const canvasElement = document.querySelector("#game-canvas")
  // const canvasCtx = canvasElement.getContext('2d');
  
  videoElement.oncanplay = function() {
    // set opacity of visible elements to 0 to fade them in.
    videoElement.style.opacity = 0; 
    canvasElement.style.opacity = 0;
    VideoTools.fadeIn(videoElement); //video is playing in the background behind the canvas.
    VideoTools.fadeIn(canvasElement)
  };

  new FM();

});