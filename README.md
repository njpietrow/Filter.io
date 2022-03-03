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
* View a live stream video feed from their webcam
* Explore filter options from a dropdown menu
* Interact with responsive filters that react to movement
* Snap photobooth pictures using the capture button
* Toggle the webcam on and off

Additional features
* An introductory instruction popup
* Licenses and credits
* Links to personal websites

## Filter Processing
To apply a filter on top of a face we need to know where the face is on the screen and how it is oriented. The Face Mesh library gives us access to coordinates of 468 facial landmarks so we can use those 3D coordinates to draw our filters. Here's a glimpse of what the landmarks look like.

<img src="https://github.com/njpietrow/Filter.io/blob/readme/assets/landmarks.png"  height="300" width="240" alt="">

The approriate filter rotation is calculated using a landmarks for the eyes. Once we have the coordinates, we can calculate the appropriate amount of rotation to apply to the face filter when drawing it on the canvas. Using the atan2 function, we can get a continous output even if we go below 0 radians, which is a limitation of the original arctangent function.
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
Similarly, we also want to know the proper scale of the filter since the perceived size of a face will change depending on the distance from the webcam. We can scale our filters by assuming that the distance between the users eyes will remain consistent. The below calculation gets the distance between 2 points in a 3D space and also accounts for the aspect ratio scaling for the x and y coordinates becuase the landmarks are 1:1 and the video is 4:3.
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
* Option for camera shutter sound effect
* Flappy Bird mini game controlled by position of nose
* Mobile device responsiveness

## Credit
* Shoutout to <a href="https://kongmunist.medium.com/">Andy Kong</a> and <a href="https://www.youtube.com/channel/UCACzb9JwH0ppt9Xwcpz9Bmw">Kazuki Umeda</a> for the helpful guides on understanding how the Face Mesh Library works
* Special thanks to Kyle at <a href="https://twitter.com/DevSimplified?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">Web Dev Simplified Umeda</a> for the project inspiration


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
