const VideoTools = {
  startVideo: function (videoElement) {
    navigator.getUserMedia(
      { video: { width: 1280, height: 720 } },
      function(stream) { 
        videoElement.srcObject = stream
        videoElement.onloadedmetadata = function(e) {
          videoElement.play();
      };
      },
      function(err) {
        console.error(err)
      }
    )
  },
  fade: function(videoElement) {
    let op = 0;
    let timer = setInterval(function() {
        if (op >= 1) clearInterval(timer);
        videoElement.style.opacity = op;
        op ||= 0.1;
        op += op * 0.1;
    }, 30);
  }
}

export default VideoTools
// only one export default allowed per file
// export {VideoTools}