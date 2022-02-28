import {VIDEO_WIDTH,VIDEO_HEIGHT} from './video_dimensions'

const VideoTools = {
  startVideo: function (videoElement) {
    navigator.getUserMedia(
      { video: { width: VIDEO_WIDTH, height: VIDEO_HEIGHT } },
      function(mediaStream) { 
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = function(e) {
          videoElement.play();
        };
        console.log(mediaStream.getTracks())
      },
      function(err) {
        console.error(err)
      }
    )
  },
  fadeIn: function(videoElement) {
    let op = 0;
    let timer = setInterval(function() {
        if (op >= 1) clearInterval(timer);
        videoElement.style.opacity = op;
        op ||= 0.1;
        op += op * 0.1;
    }, 30);
  },
  stopVideo: function(){
    const videoElement = document.querySelector('#video')
    for (const track of videoElement.srcObject.getTracks()) {
      track.stop();
    }
  }
}

export default VideoTools;
// only one export default allowed per file
// export {VideoTools}