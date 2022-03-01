import DrawingUtils from "./drawing_utils";
import {VIDEO_WIDTH,VIDEO_HEIGHT} from './video_dimensions'

class FM {
  constructor(filterName) {
    this.videoElement = document.querySelector("#video");
    this.canvasElement = document.querySelector("#game-canvas");
    this.canvasCtx = this.canvasElement.getContext('2d');
    this.filterName = filterName;
    console.log(this.videoElement)

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
  }

  drawFaces(detections) {
    
    // DrawingUtils.draw(canvasCtx, detections, "drawClownNose", "mask");
    // DrawingUtils.draw(canvasCtx, detections, "drawFilter", "mask");
    // DrawingUtils.draw(canvasCtx, detections, "mask");
    DrawingUtils.draw(this.canvasCtx, detections, this.filterName);
  }
}

export default FM;