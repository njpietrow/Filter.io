# Filterio
Filterio uses facial recognition to overlay images and filters onto a video feed from a webcam. By tracking specific facial features like eyes and a nose, Filterio can accurately map images onto the video stream of a face and display the output on a screen.

## Functionality & MVPs
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
* A descriptive readme and liceses/credits

## Wireframes
<img src="https://github.com/njpietrow/Filterio/blob/main/readme_files/Screen%20Shot%202022-02-24%20at%204.35.53%20PM.png"> 

## Technologies, Libraries, APIs
This project will be implemented with the following technologies:

* The Canvas API to render the face filters as pngs
* Webpack and Babel to bundle and transpile the source JavaScript code
* npm to manage project dependencies
* Tracking.js library to bring computer vision algorithms to the browser for facial recognition and facial landmark mapping

## Implementation Timeline
* **Thursday** - research the tracking js libary and learn how to use/import
* **Friday** - Setup project, including getting webpack up and running. Design structure of page
* **Saturday/Sunday** - Display Live camera feed and display face recognition and landmarks
* **Monday** - Create face filters to map to user face
* **Tuesday** - Warp/skew filters based on face angle. Tune refresh rate
* **Wednesday** - Allow users to select filters and revamp page UI. 
* **Thursday Morning** - Deploy to GitHub pages. If time, rewrite this proposal as a production README.

