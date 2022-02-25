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
  fade: function(element) {
    var op = 0;
    var timer = setInterval(function() {
        if (op >= 1) clearInterval(timer);
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1 || 0.1;
    }, 40);
  }
}

export {VideoTools}