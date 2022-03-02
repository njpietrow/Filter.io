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
  
  captureImage: function(canvasCtx, videoElement){
    console.log("capturing");
  },

}

export default VideoTools;