import { VIDEO_WIDTH, VIDEO_HEIGHT } from "./video_dimensions";
import Controls from "./controls";

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

  clearCanvas: function(){
    const canvasElement = document.querySelector("#effect-canvas");
    const canvasCtx = canvasElement.getContext('2d');
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    return canvasCtx
  },

  countdownAnimation: function(i) {
    const canvasCtx = this.clearCanvas();
    canvasCtx.fillStyle = "white";
    canvasCtx.font = 'bold 66px Arial';
    canvasCtx.fillText(i, VIDEO_WIDTH/2-20, VIDEO_HEIGHT/2+20);
  },
  
  captureAnimation: async function() {
    const canvasCtx = this.clearCanvas();
    await Controls.timer(20);
    canvasCtx.fillStyle = "rgba(255, 255, 255, .7)";
    canvasCtx.fillRect(0, 0, VIDEO_WIDTH, VIDEO_HEIGHT);
   
    await Controls.timer(100);
    this.clearCanvas();
  }

}

export default CameraEffects;