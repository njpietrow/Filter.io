import VideoTools from './scripts/video_tools';
//Add a script for the filter class
//Add a script(s) for button effects

window.addEventListener('DOMContentLoaded', () => {
  
  // const canvasElement = document.getElementsByClassName('output_canvas')[0];
  // const canvasCtx = canvasElement.getContext('2d');
  
  const videoElement = document.querySelector("#video");
  const canvasElement = document.querySelector("#game-canvas")
  const canvasCtx = canvasElement.getContext('2d');
  
  canvasElement.width = window.innerWidth * (.8);
  if (canvasElement.width > 700) canvasElement.width = 700;
  canvasElement.height = canvasElement.width * (720/1280);
  
  canvasCtx.fillStyle = "rgba(255, 200, 150, 0.3)";
  // canvasCtx.fillRect(0, 0, canvasElement.width, canvasElement.height);
  
  let drawCircle = function(){
    canvasCtx.beginPath();
    canvasCtx.arc(400, 90, 25, 0, 2 * Math.PI);
    canvasCtx.strokeStyle = 'blue';
    canvasCtx.lineWidth = 10;
    canvasCtx.stroke();
    canvasCtx.fillStyle = 'pink';
    canvasCtx.fill();
  }
  // drawCircle();
  
  
  //interval loop to redraw all applicable filters
    //redraw canvas border

  VideoTools.startVideo(videoElement);

  videoElement.style.opacity = 0;

  videoElement.oncanplay = function() {
    VideoTools.fade(videoElement); //video is playing in the background behind the canvas.
    VideoTools.fade(canvasElement)
  };

  function onResults(results) {
    console.log(results)
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(
        results.image, 0, 0, canvasElement.width, canvasElement.height);
    if (results.multiFaceLandmarks) {
      for (const landmarks of results.multiFaceLandmarks) {
        drawConnectors(canvasCtx, landmarks, FACEMESH_TESSELATION, {color: '#C0C0C070', lineWidth: 1});
        drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_EYE, {color: '#FF3030'});
        drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_EYEBROW, {color: '#FF3030'});
        drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_IRIS, {color: '#FF3030'});
        drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_EYE, {color: '#30FF30'});
        drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_EYEBROW, {color: '#30FF30'});
        drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_IRIS, {color: '#30FF30'});
        drawConnectors(canvasCtx, landmarks, FACEMESH_FACE_OVAL, {color: '#E0E0E0'});
        drawConnectors(canvasCtx, landmarks, FACEMESH_LIPS, {color: '#E0E0E0'});
      }
    }
    canvasCtx.restore();
  }

  const faceMesh = new FaceMesh({locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
  }});
  faceMesh.setOptions({
    maxNumFaces: 1,
    refineLandmarks: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
  });
  faceMesh.onResults(onResults);
  // console.log(faceMesh);


  const camera = new Camera(videoElement, {
    onFrame: async () => {
      await faceMesh.send({image: videoElement});
    },
    width: 1280,
    height: 720
  });
  camera.start();






});