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
        VideoTools.stopVideo();
        canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
        //disable all other camera control buttons.
      } else {
        button.toggleAttribute("data-on");
        button.innerHTML = "Webcam Off";
        VideoTools.startVideo(videoElement);
      }
    });
  },

  captureImage: function(webcamToggle, canvasCtx, videoElement){
    console.log("capturing");
  },

  clickAnimation: function(faceMesh){
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
      btn.addEventListener('mousedown', (e) => {
        let button = e.target;
        button.style.boxShadow = "0px 0px 10px purple, 0px 0px 50px purple, inset 0px 0px 5px #c1c1c1";
        button.style.border = "1px solid pink";
        button.style.color = "pink";
        button.style.transform = "scale(.97)";
      });
    });
    buttons.forEach(btn => {
      btn.addEventListener('mouseup', (e) => {
        let button = e.target;
        button.style.boxShadow = "";
        button.style.border = "1px solid #7998EE";
        button.style.color = "#7998EE";
        button.style.transform = "scale(1)";
      });
    });

    const filterOptions = document.querySelectorAll('.filter-select');
    filterOptions.forEach(opt => {
      opt.addEventListener('mousedown', (e) => {
        let filter = e.target;
        let fName = filter.getAttribute("value");
        // faceMesh.
      });
    });
  }
}

export default Controls;