import VideoTools from './video_tools';

const Controls = {
  toggleVideo: function(canvasCtx, videoElement){
    const webcamToggle = document.querySelector('.webcam-toggle');
    let canvas = canvasCtx.canvas;
    webcamToggle.addEventListener('click', (e) => {
      let button = e.target
      if(button.hasAttribute("data-on")){
        button.toggleAttribute("data-on");
        button.innerHTML = "Webcam On ";
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
    console.log("capturing");
  },

  clickAnimation: function(){
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
      btn.addEventListener('mousedown', (e) => {
        let button = e.target
        button.style.boxShadow = "0px 0px 10px purple, 0px 0px 50px purple";
        button.style.border = "1px solid pink"
      });
    });
    buttons.forEach(btn => {
      btn.addEventListener('mouseup', (e) => {
        let button = e.target
        button.style.boxShadow = "";
        button.style.border = "1px solid #7998EE"
      });
    });
  
  }
}

export default Controls;