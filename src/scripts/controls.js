import VideoTools from './video_tools';
import CameraEffects from './camera_effects';

const Controls = {
  toggleVideo: function(){
    const canvasElement = document.querySelector("#game-canvas");
    const canvasCtx = canvasElement.getContext('2d');
    const webcamToggle = document.querySelector('.webcam-toggle');
    let canvas = canvasCtx.canvas;
    webcamToggle.addEventListener('click', (e) => {
      let button = e.target
    
      if(button.hasAttribute("data-on")){
        button.toggleAttribute("data-on");
        VideoTools.stopVideo();
        canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
        //disable all other camera control buttons.
        Controls.disableButtons();
      } else {
        button.toggleAttribute("data-on");
        VideoTools.startVideo();
        //enable all other camera control buttons
        Controls.enableButtons();
      }
    });
  },

  bindOnCanPlay: function(){
    const videoElement = document.querySelector("#video");
    const canvasElement = document.querySelector("#game-canvas")
    // const canvasCtx = canvasElement.getContext('2d');
    
    videoElement.oncanplay = function() {
      // set opacity of visible elements to 0 to fade them in.
      videoElement.style.opacity = 0; 
      canvasElement.style.opacity = 0;
      CameraEffects.fadeIn(videoElement); //video is playing in the background behind the canvas.
      CameraEffects.fadeIn(canvasElement)
    };
  },

  disableButtons: function(){
    //loop through all OTHER buttons, enable them
    const offable = document.querySelectorAll('.off-able');
    offable.forEach(button => {
      button.toggleAttribute("disabled");
    });
  },

  enableButtons: function(){
    //loop through all OTHER buttons, enable them
    const offable = document.querySelectorAll('.off-able');
    offable.forEach(button => {
      button.toggleAttribute("disabled");
    });
  },

  bindTakePicture: function(){
    const captureButton = document.querySelector('.capture');
    captureButton.addEventListener('click', (e) => {
      VideoTools.captureImage();
    });
  },

  bindFilterSelect: function(faceMesh){
    const filterOptions = document.querySelectorAll('.filter-select');
    filterOptions.forEach(opt => {
      opt.addEventListener('mousedown', (e) => {
        let filterOption = e.target;
        let filterName = filterOption.getAttribute("value");
        faceMesh.changeFilter(filterName);
      });
      opt.addEventListener('keypress', (e) => {
        let filterOption = e.target;
        let filterName = filterOption.getAttribute("value");
        faceMesh.changeFilter(filterName);
      });
    });
  }
  
}

export default Controls;