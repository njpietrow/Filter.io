import VideoTools from './video_tools';

const Controls = {
  toggleVideo: function(webcamToggle, canvasCtx, videoElement){
    let canvas = canvasCtx.canvas;
    webcamToggle.addEventListener('click',(e) => {
      let button = e.target
      if(button.hasAttribute("data-on")){
        button.toggleAttribute("data-on");
        VideoTools.stopVideo();
        canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
      } else {
        button.toggleAttribute("data-on");
        VideoTools.startVideo(videoElement);
        canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
      }
    });
  }
}

export default Controls;