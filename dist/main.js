/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/make-elements.js":
/*!******************************!*\
  !*** ./src/make-elements.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var makeElement = function makeElement() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "" : _ref$type,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? "" : _ref$id,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className;

  var element = document.createElement(type);
  element.setAttribute("id", id);
  element.setAttribute("class", className);
  return element;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeElement);

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeNavbar": () => (/* binding */ makeNavbar),
/* harmony export */   "content": () => (/* binding */ content)
/* harmony export */ });
/* harmony import */ var _make_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./make-elements */ "./src/make-elements.js");

var content = document.getElementById("content"); // Generates complete navbar

var makeNavbar = function makeNavbar() {
  var navBar = (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.default)({
    type: "ul",
    id: "navbar",
    className: "navbar"
  });
  content.appendChild(navBar);
  var navLogo = (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.default)({
    type: "i",
    id: "navLogo",
    className: "fad fa-sun-haze fa-swap-opacity"
  });
  navLogo.style = "--fa-primary-color: #046582; --fa-secondary-color: #CD113B; --fa-secondary-opacity: 1";
  navBar.appendChild(navLogo);
  var navItems = (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.default)({
    type: "li",
    id: "nav",
    className: "nav"
  });
  navItems.innerHTML = "Weather";
  navBar.appendChild(navItems);
  var taskLink = (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.default)({
    type: "a",
    href: "#"
  });
  navBar.appendChild(taskLink);
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");


(function () {
  (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.makeNavbar)();
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9tYWtlLWVsZW1lbnRzLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL25hdmJhci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1ha2VFbGVtZW50IiwidHlwZSIsImlkIiwiY2xhc3NOYW1lIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImNvbnRlbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1ha2VOYXZiYXIiLCJuYXZCYXIiLCJhcHBlbmRDaGlsZCIsIm5hdkxvZ28iLCJzdHlsZSIsIm5hdkl0ZW1zIiwiaW5uZXJIVE1MIiwidGFza0xpbmsiLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBSVA7QUFBQSxpRkFBUCxFQUFPO0FBQUEsdUJBSFpDLElBR1k7QUFBQSxNQUhaQSxJQUdZLDBCQUhMLEVBR0s7QUFBQSxxQkFGWkMsRUFFWTtBQUFBLE1BRlpBLEVBRVksd0JBRlAsRUFFTztBQUFBLDRCQURaQyxTQUNZO0FBQUEsTUFEWkEsU0FDWSwrQkFEQSxFQUNBOztBQUNaLE1BQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCTCxJQUF2QixDQUFoQjtBQUNBRyxTQUFPLENBQUNHLFlBQVIsQ0FBcUIsSUFBckIsRUFBMkJMLEVBQTNCO0FBQ0FFLFNBQU8sQ0FBQ0csWUFBUixDQUFxQixPQUFyQixFQUE4QkosU0FBOUI7QUFDQSxTQUFPQyxPQUFQO0FBQ0UsQ0FUSDs7QUFXRSxpRUFBZUosV0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDWEY7QUFFQSxJQUFNUSxPQUFPLEdBQUdILFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixTQUF4QixDQUFoQixDLENBRUE7O0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixNQUFNQyxNQUFNLEdBQUdYLHVEQUFXLENBQUM7QUFBRUMsUUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBRSxFQUFFLFFBQWxCO0FBQTRCQyxhQUFTLEVBQUU7QUFBdkMsR0FBRCxDQUExQjtBQUNBSyxTQUFPLENBQUNJLFdBQVIsQ0FBb0JELE1BQXBCO0FBRUEsTUFBTUUsT0FBTyxHQUFHYix1REFBVyxDQUFDO0FBQzFCQyxRQUFJLEVBQUUsR0FEb0I7QUFFMUJDLE1BQUUsRUFBRSxTQUZzQjtBQUcxQkMsYUFBUyxFQUFFO0FBSGUsR0FBRCxDQUEzQjtBQUtBVSxTQUFPLENBQUNDLEtBQVIsR0FBZ0IsdUZBQWhCO0FBQ0FILFFBQU0sQ0FBQ0MsV0FBUCxDQUFtQkMsT0FBbkI7QUFFQSxNQUFNRSxRQUFRLEdBQUdmLHVEQUFXLENBQUM7QUFBRUMsUUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBRSxFQUFFLEtBQWxCO0FBQXlCQyxhQUFTLEVBQUU7QUFBcEMsR0FBRCxDQUE1QjtBQUNBWSxVQUFRLENBQUNDLFNBQVQsR0FBcUIsU0FBckI7QUFDQUwsUUFBTSxDQUFDQyxXQUFQLENBQW1CRyxRQUFuQjtBQUVBLE1BQU1FLFFBQVEsR0FBR2pCLHVEQUFXLENBQUM7QUFBRUMsUUFBSSxFQUFFLEdBQVI7QUFBYWlCLFFBQUksRUFBRTtBQUFuQixHQUFELENBQTVCO0FBQ0FQLFFBQU0sQ0FBQ0MsV0FBUCxDQUFtQkssUUFBbkI7QUFDRCxDQWxCRDs7Ozs7Ozs7VUNMQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBLENBQUMsWUFBVztBQUNYUCxxREFBVTtBQUNWLENBRkQsSSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWFrZUVsZW1lbnQgPSAoe1xuXHR0eXBlID0gXCJcIixcblx0aWQgPSBcIlwiLFxuXHRjbGFzc05hbWUgPSBcIlwiLFxuICB9ID0ge30pID0+IHtcblx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5cdGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuXHRlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGNsYXNzTmFtZSk7XG5cdHJldHVybiBlbGVtZW50O1xuICB9O1xuICBcbiAgZXhwb3J0IGRlZmF1bHQgbWFrZUVsZW1lbnQiLCJpbXBvcnQgbWFrZUVsZW1lbnQgZnJvbSBcIi4vbWFrZS1lbGVtZW50c1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4vLyBHZW5lcmF0ZXMgY29tcGxldGUgbmF2YmFyXG5jb25zdCBtYWtlTmF2YmFyID0gKCkgPT4ge1xuICBjb25zdCBuYXZCYXIgPSBtYWtlRWxlbWVudCh7IHR5cGU6IFwidWxcIiwgaWQ6IFwibmF2YmFyXCIsIGNsYXNzTmFtZTogXCJuYXZiYXJcIiB9KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChuYXZCYXIpO1xuXG4gIGNvbnN0IG5hdkxvZ28gPSBtYWtlRWxlbWVudCh7XG4gICAgdHlwZTogXCJpXCIsXG4gICAgaWQ6IFwibmF2TG9nb1wiLFxuICAgIGNsYXNzTmFtZTogXCJmYWQgZmEtc3VuLWhhemUgZmEtc3dhcC1vcGFjaXR5XCIsXG4gIH0pO1xuICBuYXZMb2dvLnN0eWxlID0gXCItLWZhLXByaW1hcnktY29sb3I6ICMwNDY1ODI7IC0tZmEtc2Vjb25kYXJ5LWNvbG9yOiAjQ0QxMTNCOyAtLWZhLXNlY29uZGFyeS1vcGFjaXR5OiAxXCI7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChuYXZMb2dvKTtcblxuICBjb25zdCBuYXZJdGVtcyA9IG1ha2VFbGVtZW50KHsgdHlwZTogXCJsaVwiLCBpZDogXCJuYXZcIiwgY2xhc3NOYW1lOiBcIm5hdlwiIH0pO1xuICBuYXZJdGVtcy5pbm5lckhUTUwgPSBcIldlYXRoZXJcIjtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdkl0ZW1zKTtcblxuICBjb25zdCB0YXNrTGluayA9IG1ha2VFbGVtZW50KHsgdHlwZTogXCJhXCIsIGhyZWY6IFwiI1wiIH0pO1xuICBuYXZCYXIuYXBwZW5kQ2hpbGQodGFza0xpbmspO1xufTtcblxuZXhwb3J0IHsgbWFrZU5hdmJhciwgY29udGVudCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBtYWtlTmF2YmFyIH0gZnJvbSBcIi4vbmF2YmFyXCI7XG5cbihmdW5jdGlvbigpIHtcblx0bWFrZU5hdmJhcigpO1xufSkoKTsiXSwic291cmNlUm9vdCI6IiJ9