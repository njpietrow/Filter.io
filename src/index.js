import VideoTools from './scripts/video_tools';
import DrawingUtils from './scripts/drawing_utils'
import Conrols from './scripts/controls'
//Add a script for the filter class
//Add a script(s) for button effects
let detections = [];

window.addEventListener('DOMContentLoaded', async () => {
  const videoElement = document.querySelector("#video");
  const canvasElement = document.querySelector("#game-canvas")
  const canvasCtx = canvasElement.getContext('2d');
  const webcamToggle = document.querySelector('.webcam-toggle');

  
  canvasElement.width = window.innerWidth * (.8);
  if (canvasElement.width > 700) canvasElement.width = 700;
  canvasElement.height = canvasElement.width * (720/1280);
  
  videoElement.oncanplay = function() {
    videoElement.style.opacity = 0;
    VideoTools.fadeIn(videoElement); //video is playing in the background behind the canvas.
    VideoTools.fadeIn(canvasElement)
  };
  
  function drawFaces(results) {
    // return
    detections = results;
    DrawingUtils.draw(canvasCtx, detections, "drawPoints");
  }

  const faceMesh = new FaceMesh({locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
  }});
  faceMesh.setOptions({
    maxNumFaces: 3,
    refineLandmarks: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
  });
  faceMesh.onResults(drawFaces);

  const camera = new Camera(videoElement, {
    onFrame: async () => {
      await faceMesh.send({image: videoElement});
    },
    width: 1280,
    height: 720
  });
  camera.start();

  Conrols.toggleVideo(webcamToggle, canvasCtx, videoElement);

 

  // 

});