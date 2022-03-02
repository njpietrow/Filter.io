import {VIDEO_WIDTH,VIDEO_HEIGHT} from './video_dimensions'
import DrawingUtils from './drawing_utils';
import CameraEffects from './camera_effects';

const VideoTools = {

  startVideo: function () {
    const videoElement = document.querySelector("#video");
    navigator.getUserMedia(
      { video: { width: VIDEO_WIDTH, height: VIDEO_HEIGHT } },
      function(mediaStream) { 
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = function(e) {
          videoElement.play();
        };
      },
      function(err) {
        console.error(err)
      }
    )
  },

  stopVideo: function(){
    const videoElement = document.querySelector('#video')
    videoElement.srcObject.getTracks()[0].stop()
  },

  countdown: async function() {
    let i=3;
    let timer = setInterval(function() {
      if (i <= 0) {
        clearInterval(timer);

      } else {
        CameraEffects.countdownAnimation(i); //draw the current countdown on the canvas
      }
      i--;
    }, 1000);

    //slight delay to show camera flash. and wait for above loop to finish
    return new Promise(resolve => setTimeout(resolve, 4000)); 
  },

  capture: async function() {
    CameraEffects.captureAnimation();
    return new Promise(resolve => setTimeout(resolve, 0));
  },

  loadingAnimation: function() {
    
  },
  
  captureImage: async function(){
    await this.countdown();
    await this.capture();

    // wait for the countdown animation function to finish.

    const canvas = document.querySelector("#game-canvas");
    const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    const a = document.createElement('a');
    a.setAttribute('download', 'filterio_capture.png');
    a.setAttribute('href', image);
    a.click();
  },

}

export default VideoTools;