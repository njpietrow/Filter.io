<a href="https://njpietrow.github.io/Filter.io/"><h1>Filterio</h1></a> 
<img src="https://raw.githubusercontent.com/njpietrow/Filter.io/main/assets/favicon.ico" alt="">
<br>
---
<a href="https://njpietrow.github.io/Filter.io/">Filterio</a> is a photobooth appliction that uses facial recognition to overlay face filters onto a webcam video feed. By tracking specific facial features like eyes and a nose, Filterio can map filters onto a face by rotating and translating the filters accordingly. The design of the page takes influences from 80's synthwave styles. After exploring the available filter options, snap a picture with the capture button to save a photo and share with your friends! 
<br>


## Technologies Used
Filter.io was built using the following technologies: 

* MediaPipe Face Mesh library for facial landmark mapping
* Canvas API to render video and face filters and save captured images
* Webpack and Babel to bundle and transpile the source JavaScript code
* npm to manage project dependencies
* Sass to bring variables to stylesheets

## Functionality
With this application, users will be able to:
* View a live video feed on the webpage sourced to their webcam
* View video filters that have been mapped onto their face in the video feed
* See filters respond to movement as their face rotates, tilts, and translates across the screen
* Select from multiple options of video filters
* Take pictures using the webcam, photbooth style.
* Start and stop the live video feed

In addition, the project will include:
* Links to the creator's personal pages
* An introductory instruction popup
* A descriptive readme and licenses/credits

### Filter Processing
To apply a filter on top of a face we need to know where the face is on the screen and how it is oriented. The Face Mesh library gives us access to coordinates of 468 facial landmarks so we can use those 3D coordinates to draw our filters.

<img src="https://github.com/njpietrow/Filter.io/blob/readme/assets/landmarks.png"  height="100" width="80" alt="">

The approriate filter rotation is calculated using select facial landmarks from the Face Mesh tracking output. Once we have the coordinates, we can calculate the appropriate amount of rotation to apply to the face filter when drawing it on the canvas. Using the atan2 function, we can get a continous output even if we go below 0 radians, which is a limitation of the original arctangent function.
```javaScript
//select landmarks from Face Mesh output landmarks array
const leftEyeCorner = landmarks[130];
const rightEyeCorner = landmarks[359];
      
//calculate angle in radians between eye-connection-line and x-axis
const roll = Math.atan2(
  (rightEyeCorner.y - leftEyeCorner.y),
  (rightEyeCorner.x - leftEyeCorner.x)
);
```
Similarly, we also want to know the proper scale of the filer since the perceived size of a face will change depending on the distance from the webcam. We can scale our filters by assuming that the distance between the users eyes will remain consistent. This calculation gets the distance between 2 points in a 3D space and also accounts for the aspect ratio scaling for the x and y coordinates becuase the landmarks are 1:1 and the video is 4:3.
```javaScript
distance: function(pos1, pos2){
  let aspectRatio = VIDEO_WIDTH/VIDEO_HEIGHT;
  return Math.sqrt(
    (pos1.x - pos2.x) ** 2 * aspectRatio + 
    (pos1.y - pos2.y) ** 2 / aspectRatio +
    (pos1.z - pos2.z) ** 2
  );
}
```


## Upcoming Features
* option for camera shutter sound effect
* flappy bird mini game controlled by position of nose
* mobile device responsiveness

## Credit


## Contributors
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/njpietrow">
        <img src="https://avatars.githubusercontent.com/u/25106777?s=400&u=8952a11bc2abc791633bc27f941ed601499c1294&v=4" width="140px;" alt=""/>
        <br>
        <sub><b>Nick Pietrow</b></sub>
      </a>
    </td>
  </tr>
</table>
