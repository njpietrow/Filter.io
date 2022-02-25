/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("window.addEventListener('DOMContentLoaded', function () {\n  var canvas = document.getElementById('game-canvas');\n  var ctx = canvas.getContext('2d');\n  canvas.width = window.innerWidth * .8;\n  canvas.height = canvas.width * (5 / 7);\n  var background = new Image();\n  background.src = \"https://thediscerningcat.com/wp-content/uploads/2021/09/british-short-hair-chincilla-up-close.jpg\";\n\n  background.onload = function () {\n    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);\n  }; // ctx.fillStyle = \"blue\";\n  // ctx.fillRect(0, 0, canvas.width, canvas.height); \n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GaWx0ZXJpby8uL3NyYy9pbmRleC5qcz9iNjM1Il0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImJhY2tncm91bmQiLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsImRyYXdJbWFnZSJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFlBQU07QUFDaEQsTUFBSUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBYjtBQUNBLE1BQUlDLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVY7QUFDQUosRUFBQUEsTUFBTSxDQUFDSyxLQUFQLEdBQWVQLE1BQU0sQ0FBQ1EsVUFBUCxHQUFtQixFQUFsQztBQUNBTixFQUFBQSxNQUFNLENBQUNPLE1BQVAsR0FBZ0JQLE1BQU0sQ0FBQ0ssS0FBUCxJQUFnQixJQUFFLENBQWxCLENBQWhCO0FBRUEsTUFBSUcsVUFBVSxHQUFHLElBQUlDLEtBQUosRUFBakI7QUFDQUQsRUFBQUEsVUFBVSxDQUFDRSxHQUFYLEdBQWlCLG1HQUFqQjs7QUFFQUYsRUFBQUEsVUFBVSxDQUFDRyxNQUFYLEdBQW9CLFlBQVU7QUFDNUJSLElBQUFBLEdBQUcsQ0FBQ1MsU0FBSixDQUFjSixVQUFkLEVBQXlCLENBQXpCLEVBQTJCLENBQTNCLEVBQTZCUixNQUFNLENBQUNLLEtBQXBDLEVBQTJDTCxNQUFNLENBQUNPLE1BQWxEO0FBQ0QsR0FGRCxDQVRnRCxDQVloRDtBQUNBOztBQUNELENBZEQiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWNhbnZhcycpO1xuICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoKiguOCk7XG4gIGNhbnZhcy5oZWlnaHQgPSBjYW52YXMud2lkdGggKiAoNS83KTtcblxuICBsZXQgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuICBiYWNrZ3JvdW5kLnNyYyA9IFwiaHR0cHM6Ly90aGVkaXNjZXJuaW5nY2F0LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wOS9icml0aXNoLXNob3J0LWhhaXItY2hpbmNpbGxhLXVwLWNsb3NlLmpwZ1wiO1xuXG4gIGJhY2tncm91bmQub25sb2FkID0gZnVuY3Rpb24oKXtcbiAgICBjdHguZHJhd0ltYWdlKGJhY2tncm91bmQsMCwwLGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7ICAgXG4gIH1cbiAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiYmx1ZVwiO1xuICAvLyBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTsgXG59KTsiXSwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GaWx0ZXJpby8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;