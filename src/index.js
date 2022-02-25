//Add a script for the filter class
//Add a script for the video display class
//Add a script(s) for button effects

window.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('game-canvas');
  let ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth * (.8);
  if (canvas.width > 800) canvas.width = 800;
  canvas.height = canvas.width * (5/7);

  let background = new Image();
  background.src = "https://thediscerningcat.com/wp-content/uploads/2021/09/british-short-hair-chincilla-up-close.jpg";

  background.onload = function(){
    ctx.drawImage(background,0,0,canvas.width, canvas.height);   
  }

  
  const video = document.querySelector("#video");

  function startVideo () {
    navigator.getUserMedia(
      { video: { width: 1280, height: 720 } },
      function(stream) { 
        video.srcObject = stream
        video.onloadedmetadata = function(e) {
          video.play();
       };
      },
      function(err) {
        console.error(err)
      }
    )
  }

  video.style.opacity = 0;

  video.oncanplay = function() {
      fade(video);
  };

  function fade(element) {
      var op = 0;
      var timer = setInterval(function() {
          if (op >= 1) clearInterval(timer);
          element.style.opacity = op;
          element.style.filter = 'alpha(opacity=' + op * 100 + ")";
          op += op * 0.1 || 0.1;
      }, 40);
  }


//   navigator.getUserMedia = navigator.getUserMedia ||
//                          navigator.webkitGetUserMedia ||
//                          navigator.mozGetUserMedia;

  // function startVideo() {
  //   navigator.getUserMedia(
  //     { video: {width: 1280, height: 720} },
  //     stream => video.srcObject = stream,
  //     err => console.error(err)
  //   )
  // }

  startVideo();

});