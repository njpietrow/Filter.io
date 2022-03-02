import { VIDEO_WIDTH, VIDEO_HEIGHT } from "./video_dimensions";

const CameraEffects = {

  fadeIn: function(videoElement) {
    let op = 0;
    let timer = setInterval(function() {
        if (op > 1) clearInterval(timer);
        videoElement.style.opacity = op;
        op ||= 0.1;
        op += op * 0.1;
    }, 20);
  },

  countdownAnimation: function(i) {
    //draw the number i in the middle of the screen and provide dimming effect.
    //could absolute position a div in the center
    //cound send trigger to rm wrapper to 

    const canvasElement = document.querySelector("#effect-canvas");
    const canvasCtx = canvasElement.getContext('2d');
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.fillStyle = "white";
    canvasCtx.font = 'bold 66px Arial';
    canvasCtx.fillText(i, VIDEO_WIDTH/2-20, VIDEO_HEIGHT/2+20);
    
  },
  
  captureAnimation: async function() {
    //do lens click animation, flash of white.
    const canvasElement = document.querySelector("#effect-canvas");
    const canvasCtx = canvasElement.getContext('2d');
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.fillStyle = "rgba(255, 255, 255, 1)";
    canvasCtx.fillRect(0, 0, VIDEO_WIDTH, VIDEO_HEIGHT);
    let timer = async function(time){
      return new Promise(resolve => setTimeout(resolve, time));
    }
    await timer(60);
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  }
}

export default CameraEffects;