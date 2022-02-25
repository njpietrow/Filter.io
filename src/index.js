//Add a script for the filter class
//Add a script for the video display class
import {VideoTools} from './scripts/video_tools';
//Add a script(s) for button effects

window.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('game-canvas');
  let ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth * (.8);
  if (canvas.width > 700) canvas.width = 700;
  canvas.height = canvas.width * (5/7);

  // let background = new Image();
  // background.src = "https://thediscerningcat.com/wp-content/uploads/2021/09/british-short-hair-chincilla-up-close.jpg";

  // background.onload = function(){
  //   ctx.drawImage(background,0,0,canvas.width, canvas.height);   
  // }

  
  const video = document.querySelector("#video");
  VideoTools.startVideo(video);

  video.style.opacity = 0;

  video.oncanplay = function() {
    VideoTools.fade(video);
  };

 

 

});