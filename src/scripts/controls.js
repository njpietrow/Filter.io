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
      
      let disableButtons = function(){
        //loop through all OTHER buttons, gray them out and disable them
        console.log("disabling")
        const offable = document.querySelectorAll('.off-able');
        console.log(offable);
        offable.forEach(button => {
          button.toggleAttribute("disabled");
          button.style.color = "#C0C0C070";
          button.style.boxShadow = "none";
          button.style.textShadow = "none";
          button.style.border = "1px solid #C0C0C070";
          button.style.cursor = "not-allowed";
        });
      }

      let enableButtons = function(){
        //loop through all OTHER buttons, gray them out and disable them
        console.log("enabling")
        const offable = document.querySelectorAll('.off-able');
        console.log(offable);
        offable.forEach(button => {
          button.toggleAttribute("disabled");
          button.style.color = "";
          button.style.boxShadow = "";
          button.style.textShadow = "";
          button.style.border = "";
          button.style.cursor = "";
        });
      }

      if(button.hasAttribute("data-on")){
        button.toggleAttribute("data-on");
        // button.style.color = "rgba(121, 152, 238, .8)";
        VideoTools.stopVideo();
        canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
        //disable all other camera control buttons.
        console.log("disabling in listneer");
        disableButtons();
      } else {
        button.toggleAttribute("data-on");
        // button.style.color = "";
        VideoTools.startVideo();
        //enable all other camera control buttons
        enableButtons();
      }
    });
  },

  // disableButtons: function(){
  //   //loop through all OTHER buttons, gray them out and disable them
  //   console.log("disabling")
  //   const offable = document.querySelectorAll('.off-able');
  //   console.log(offable);
  //   offable.forEach(button => {
  //     button.toggleAttribute("disabled");
  //     button.style.color = "#C0C0C070";
  //     button.style.boxShadow = "none";
  //     button.style.textShadow = "none";
  //     button.style.border = "1px solid #C0C0C070";
  //   });

  // },

  // enableButtons: function(){
  //   //loop through all OTHER buttons, gray them out and disable them
  //   console.log("enabling")
  //   const offable = document.querySelectorAll('.off-able');
  //   console.log(offable);
  //   offable.forEach(button => {
  //     button.toggleAttribute("disabled");
  //     button.style.color = "";
  //     button.style.boxShadow = "";
  //     button.style.textShadow = "";
  //     button.style.border = "";
  //   });
  // },

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
        if (filterName === "flappy") console.log("you chose flappy"); 
        else faceMesh.changeFilter(filterName);
      });
      opt.addEventListener('keypress', (e) => {
        let filterOption = e.target;
        let filterName = filterOption.getAttribute("value");
        if (filterName === "flappy") console.log("you chose flappy"); 
        else faceMesh.changeFilter(filterName);
      });
    });
  }
  
}

export default Controls;