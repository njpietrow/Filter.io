//Add a script for the filter class
//add a script for the face mesh
import VideoTools from './scripts/video_tools';
import {FaceMesh} from './../node_modules/@mediapipe/face_mesh/face_mesh'
// const faceMesh = require('@tensorflow-models/facemesh');
//Add a script(s) for button effects

window.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('game-canvas');
  let ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth * (.8);
  if (canvas.width > 700) canvas.width = 700;
  canvas.height = canvas.width * (720/1280);

  ctx.fillStyle = "rgba(255, 200, 150, 0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(400, 90, 25, 0, 2 * Math.PI);
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 10;
  ctx.stroke();
  ctx.fillStyle = 'pink';
  ctx.fill();


  // // let background = new Image();
  // // background.src = "https://thediscerningcat.com/wp-content/uploads/2021/09/british-short-hair-chincilla-up-close.jpg";

  // // background.onload = function(){
  // //   ctx.drawImage(background,0,0,canvas.width, canvas.height);   
  // // }

  
  const video = document.querySelector("#video");
  VideoTools.startVideo(video);

  video.style.opacity = 0;

  video.oncanplay = function() {
    VideoTools.fade(video);
  };


  const faceMesh = new FaceMesh({locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
  }});
  faceMesh.setOptions({
    maxNumFaces: 1,
    refineLandmarks: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
  });

  console.log(faceMesh);


  //interval loop to redraw all applicable filters
    //redraw canvas border

  // video.addEventListener( "loadedmetadata", function (e) {
  //   var width = this.videoWidth,
  //       height = this.videoHeight;
  //   console.log(width)
  //   console.log(height)
  // }, false ); 


});