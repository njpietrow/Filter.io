import {VIDEO_WIDTH,VIDEO_HEIGHT} from './video_dimensions'

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

  fadeIn: function(videoElement) {
    let op = 0;
    let timer = setInterval(function() {
        if (op > 1) clearInterval(timer);
        videoElement.style.opacity = op;
        op ||= 0.1;
        op += op * 0.1;
    }, 20);
  },

  stopVideo: function(){
    const videoElement = document.querySelector('#video')
    videoElement.srcObject.getTracks()[0].stop()
  },

  captureAnimation: function() {

  },

  loadingAnimation: function() {
    
  },
  
  captureImage: function(){
    this.captureAnimation();
    const canvas = document.querySelector("#game-canvas");
    const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    const a = document.createElement('a');
    a.setAttribute('download', 'filterio_capture.png');
    a.setAttribute('href', image);
    a.click();
  },

}

export default VideoTools;