const VideoTools = {
  startVideo: function (videoElement) {
    navigator.getUserMedia(
      { video: { width: 1280, height: 720 } },
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
    navigator.mediaDevices.getUserMedia({audio: false, video: true})
    .then(mediaStream => {
      const videoElement = document.querySelector('#video')

      for (const track of videoElement.srcObject.getTracks()) {
        track.stop();
      }
      
      mediaStream.getTracks().forEach((track) => {
        track.stop();
      });
    })
  }
}

export default VideoTools;
// only one export default allowed per file
// export {VideoTools}