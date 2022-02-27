const VideoTools = {
  startVideo: function (videoElement) {
    navigator.getUserMedia(
      { video: { width: 1280, height: 720 } },
      function(stream) { 
        videoElement.srcObject = stream;
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
        if (op >= 1) clearInterval(timer);
        videoElement.style.opacity = op;
        op ||= 0.1;
        op += op * 0.1;
    }, 30);
  },
  stopVideo: function(){
    navigator.mediaDevices.getUserMedia({audio: false, video: true})
    .then(mediaStream => {
      document.querySelector('#video').srcObject = mediaStream;
      // Stop the stream after 5 seconds
        const tracks = mediaStream.getTracks()
        tracks[0].stop()
    })
  }
}

export default VideoTools;
// only one export default allowed per file
// export {VideoTools}