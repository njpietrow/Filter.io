import VideoTools from './video_tools';

const Controls = {
  toggleVideo: function(webcamToggle, canvasCtx, videoElement){
    let canvas = canvasCtx.canvas;
    webcamToggle.addEventListener('click', (e) => {
      let button = e.target
      if(button.hasAttribute("data-on")){
        button.toggleAttribute("data-on");
        button.innerHTML = "Webcam On";
        //add feature to disable button until video has stopped.
        VideoTools.stopVideo();
        canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
      } else {
        button.toggleAttribute("data-on");
        button.innerHTML = "Webcam Off";
        //add feature to disable button until video has started again.
        VideoTools.startVideo(videoElement);
      }
    });
  },

  captureImage: function(webcamToggle, canvasCtx, videoElement){
    
  }
}

export default Controls;