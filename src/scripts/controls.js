  import VideoTools from './video_tools';

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
        button.innerHTML = "Webcam On ";
        VideoTools.stopVideo();
        canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
        //disable all other camera control buttons.
      } else {
        button.toggleAttribute("data-on");
        button.innerHTML = "Webcam Off";
        VideoTools.startVideo();
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
      VideoTools.fadeIn(videoElement); //video is playing in the background behind the canvas.
      VideoTools.fadeIn(canvasElement)
    };
  },

  disableButtons: function(){

  },

  bindTakePicture: function(){

  },

  clickAnimation: function(faceMesh){
    const buttons = document.querySelectorAll('.btn');
    // buttons.forEach(btn => {
    //   btn.addEventListener('mousedown', (e) => {
    //     let button = e.target;
    //     button.style.boxShadow = "0px 0px 10px purple, 0px 0px 50px purple, inset 0px 0px 5px gray";
    //     button.style.border = "1px solid pink";
    //     button.style.color = "pink";
    //     button.style.transform = "scale(.97)";
    //   });
    //   btn.addEventListener('mouseup', (e) => {
    //     let button = e.target;
    //     button.style.boxShadow = "";
    //     button.style.border = "1px solid #7998EE";
    //     button.style.color = "#7998EE";
    //     button.style.transform = "scale(1)";
    //   });
    // }); 

    const filterOptions = document.querySelectorAll('.filter-select');
    filterOptions.forEach(opt => {
      opt.addEventListener('mousedown', (e) => {
        let filterOption = e.target;
        let filterName = filterOption.getAttribute("value");
        if (filterName === "flappy") console.log("you chose flappy"); 
        else faceMesh.changeFilter(filterName);
      });
    });
  }
  
}

export default Controls;