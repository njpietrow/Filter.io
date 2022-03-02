import DrawingUtils from "./drawing_utils";
import CameraEffects from "./camera_effects";
import Controls from "./controls";
import {VIDEO_WIDTH,VIDEO_HEIGHT} from './video_dimensions'

class FM {
  constructor(filterName) {
    this.videoElement = document.querySelector("#video");
    this.canvasElement = document.querySelector("#game-canvas");
    this.canvasCtx = this.canvasElement.getContext('2d');
    this.filterName = filterName || "none";
    this.countdown = false;

    this.faceMesh = new FaceMesh({locateFile: (file) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
    }});
    this.faceMesh.setOptions({
      maxNumFaces: 3,
      refineLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    });
    this.faceMesh.onResults(this.drawFaces.bind(this));
  
    this.camera = new Camera(this.videoElement, {
      onFrame: async () => {
        await this.faceMesh.send({image: this.videoElement});
      },
      width: VIDEO_WIDTH,
      height: VIDEO_HEIGHT
    });
    this.camera.start();

    this.bindControls.apply(this);
  }

  /* recall facemesh onResults function with the updated callback function
  to draw the new filter on the canvas */
  changeFilter(filterName) {
    this.filterName = filterName;
    this.faceMesh.onResults(this.drawFaces.bind(this));
  }

  bindControls(){
    Controls.toggleVideo();
    Controls.bindFilterSelect(this);
    Controls.bindOnCanPlay();
    Controls.bindTakePicture();
  }

  /* callback for facemesh onResults function to operate on the resulting
  face detections */
  drawFaces(detections) {
    DrawingUtils.draw(this.canvasCtx, detections, this.filterName, this.countdown);
  }
}

export default FM;