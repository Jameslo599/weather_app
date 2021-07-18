/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/body-elements.js":
/*!******************************!*\
  !*** ./src/body-elements.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _make_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./make-elements */ "./src/make-elements.js");


var generateMainDisplay = function generateMainDisplay() {
  var cityDisplay = (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: 'div',
    id: 'cityDiv',
    className: 'main'
  });
  var city = (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: 'h1',
    id: 'cityName',
    className: ''
  });
  city.innerHTML = 'Dallas';
  cityDisplay.appendChild(city);
  var condition = (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: 'h2',
    id: 'conditionName',
    className: ''
  });
  condition.innerHTML = 'Clear';
  var temperature = (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: 'h1',
    id: 'mainTemperature',
    className: ''
  });
  temperature.innerHTML = '100 F';
  var minMaxHolder = (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: 'div',
    id: 'minMaxHolder',
    className: ''
  });
  var highTemp = (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: 'h2',
    id: 'mainHigh',
    className: 'minMax'
  });
  highTemp.innerHTML = 'H: 105F';
  minMaxHolder.appendChild(highTemp);
  var lowTemp = (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: 'h2',
    id: 'mainLow',
    className: 'minMax'
  });
  lowTemp.innerHTML = 'L: 85F';
  minMaxHolder.appendChild(lowTemp);
  var cityArray = [city, condition, temperature, minMaxHolder];
  var forecastDisplay = (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: 'div',
    id: 'forecastDiv',
    className: 'main'
  });
  var forecastHolder = (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: 'div',
    id: 'forecastHolder',
    className: ''
  });
  forecastDisplay.appendChild(forecastHolder);

  for (var i = 0; i <= 30; i += 1) {
    var forecast = (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
      type: 'p',
      id: "forecast".concat(i),
      className: 'forecast'
    });
    forecastHolder.appendChild(forecast);
    forecast.innerHTML = 'james';
  }

  var descriptionDisplay = (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: 'div',
    id: 'descriptionDiv',
    className: 'description'
  });
  var description = (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: 'h2',
    id: 'description',
    className: ''
  });
  description.innerHTML = 'Today';
  descriptionDisplay.appendChild(description);
  var divArray = [cityDisplay, forecastDisplay, descriptionDisplay];
  divArray.forEach(function (element) {
    (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.elementMethods)(element).appendToBody('grid');
  });
  cityArray.forEach(function (element) {
    (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.elementMethods)(element).appendToBody('cityDiv');
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateMainDisplay);

/***/ }),

/***/ "./src/make-elements.js":
/*!******************************!*\
  !*** ./src/make-elements.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeElement": () => (/* binding */ makeElement),
/* harmony export */   "elementMethods": () => (/* binding */ elementMethods)
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

var elementMethods = function elementMethods(element) {
  var appendToBody = function appendToBody(destination) {
    return document.getElementById(destination).appendChild(element);
  };

  return {
    appendToBody: appendToBody
  };
};



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
  var navBar = (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "ul",
    id: "navbar",
    className: "navbar"
  });
  content.appendChild(navBar);
  var navLogo = (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "i",
    id: "navLogo",
    className: "fad fa-sun-haze fa-swap-opacity"
  });
  navLogo.style = "--fa-primary-color: #046582; --fa-secondary-color: #CD113B; --fa-secondary-opacity: 1";
  navBar.appendChild(navLogo);
  var navTitle = (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "li",
    id: "nav",
    className: "nav"
  });
  navTitle.innerHTML = "Weather";
  navBar.appendChild(navTitle);
  var searchContainer = (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "div",
    id: "searchHolder",
    className: ""
  });
  navBar.appendChild(searchContainer);
  var searchBar = (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "input",
    id: "textInput",
    className: "bar"
  });
  searchBar.setAttribute('type', 'text');
  searchBar.setAttribute('placeholder', 'Enter City Name');
  searchContainer.appendChild(searchBar);
  var searchButton = (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "button",
    id: "searchButton",
    className: "bar"
  });
  searchButton.innerHTML = 'Search';
  searchContainer.appendChild(searchButton);
  var convertButton = (0,_make_elements__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "button",
    id: "convertButton",
    className: ""
  });
  searchContainer.appendChild(searchButton);
  searchContainer.appendChild(convertButton);
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
/* harmony import */ var _body_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body-elements */ "./src/body-elements.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");



(function () {
  (0,_navbar__WEBPACK_IMPORTED_MODULE_1__.makeNavbar)();
  (0,_body_elements__WEBPACK_IMPORTED_MODULE_0__.default)();
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9ib2R5LWVsZW1lbnRzLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL21ha2UtZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiZ2VuZXJhdGVNYWluRGlzcGxheSIsImNpdHlEaXNwbGF5IiwibWFrZUVsZW1lbnQiLCJ0eXBlIiwiaWQiLCJjbGFzc05hbWUiLCJjaXR5IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJjb25kaXRpb24iLCJ0ZW1wZXJhdHVyZSIsIm1pbk1heEhvbGRlciIsImhpZ2hUZW1wIiwibG93VGVtcCIsImNpdHlBcnJheSIsImZvcmVjYXN0RGlzcGxheSIsImZvcmVjYXN0SG9sZGVyIiwiaSIsImZvcmVjYXN0IiwiZGVzY3JpcHRpb25EaXNwbGF5IiwiZGVzY3JpcHRpb24iLCJkaXZBcnJheSIsImZvckVhY2giLCJlbGVtZW50IiwiZWxlbWVudE1ldGhvZHMiLCJhcHBlbmRUb0JvZHkiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJkZXN0aW5hdGlvbiIsImdldEVsZW1lbnRCeUlkIiwiY29udGVudCIsIm1ha2VOYXZiYXIiLCJuYXZCYXIiLCJuYXZMb2dvIiwic3R5bGUiLCJuYXZUaXRs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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBLENBQUMsWUFBVztBQUNYUixxREFBVTtBQUNWaEMseURBQW1CO0FBQ25CLENBSEQsSSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZUVsZW1lbnQsIGVsZW1lbnRNZXRob2RzfSBmcm9tIFwiLi9tYWtlLWVsZW1lbnRzXCI7XG5cbmNvbnN0IGdlbmVyYXRlTWFpbkRpc3BsYXkgPSAoKSA9PiB7XG5cdGNvbnN0IGNpdHlEaXNwbGF5ID0gbWFrZUVsZW1lbnQoe3R5cGU6ICdkaXYnLCBpZDogJ2NpdHlEaXYnLCBjbGFzc05hbWU6ICdtYWluJ30pO1xuXHRcdGNvbnN0IGNpdHkgPSBtYWtlRWxlbWVudCh7dHlwZTogJ2gxJywgaWQ6ICdjaXR5TmFtZScsIGNsYXNzTmFtZTogJyd9KTtcblx0XHRjaXR5LmlubmVySFRNTCA9ICdEYWxsYXMnXG5cdFx0Y2l0eURpc3BsYXkuYXBwZW5kQ2hpbGQoY2l0eSk7XG5cdFx0Y29uc3QgY29uZGl0aW9uID0gbWFrZUVsZW1lbnQoe3R5cGU6ICdoMicsIGlkOiAnY29uZGl0aW9uTmFtZScsIGNsYXNzTmFtZTogJyd9KVxuXHRcdGNvbmRpdGlvbi5pbm5lckhUTUwgPSAnQ2xlYXInXG5cdFx0Y29uc3QgdGVtcGVyYXR1cmUgPSBtYWtlRWxlbWVudCh7dHlwZTogJ2gxJywgaWQ6ICdtYWluVGVtcGVyYXR1cmUnLCBjbGFzc05hbWU6ICcnfSlcblx0XHR0ZW1wZXJhdHVyZS5pbm5lckhUTUwgPSAnMTAwIEYnXG5cdFx0Y29uc3QgbWluTWF4SG9sZGVyID0gbWFrZUVsZW1lbnQoe3R5cGU6ICdkaXYnLCBpZDogJ21pbk1heEhvbGRlcicsIGNsYXNzTmFtZTogJyd9KVxuXHRcdGNvbnN0IGhpZ2hUZW1wID0gbWFrZUVsZW1lbnQoe3R5cGU6ICdoMicsIGlkOiAnbWFpbkhpZ2gnLCBjbGFzc05hbWU6ICdtaW5NYXgnfSlcblx0XHRoaWdoVGVtcC5pbm5lckhUTUwgPSAnSDogMTA1Ridcblx0XHRtaW5NYXhIb2xkZXIuYXBwZW5kQ2hpbGQoaGlnaFRlbXApXG5cdFx0Y29uc3QgbG93VGVtcCA9IG1ha2VFbGVtZW50KHt0eXBlOiAnaDInLCBpZDogJ21haW5Mb3cnLCBjbGFzc05hbWU6ICdtaW5NYXgnfSlcblx0XHRsb3dUZW1wLmlubmVySFRNTCA9ICdMOiA4NUYnXG5cdFx0bWluTWF4SG9sZGVyLmFwcGVuZENoaWxkKGxvd1RlbXApXG5cdFx0Y29uc3QgY2l0eUFycmF5ID0gW2NpdHksIGNvbmRpdGlvbiwgdGVtcGVyYXR1cmUsIG1pbk1heEhvbGRlcl07XG5cdFx0XG5cdFx0XG5cblx0Y29uc3QgZm9yZWNhc3REaXNwbGF5ID0gbWFrZUVsZW1lbnQoe3R5cGU6ICdkaXYnLCBpZDogJ2ZvcmVjYXN0RGl2JywgY2xhc3NOYW1lOiAnbWFpbid9KTtcblx0XHRjb25zdCBmb3JlY2FzdEhvbGRlciA9IG1ha2VFbGVtZW50KHt0eXBlOiAnZGl2JywgaWQ6ICdmb3JlY2FzdEhvbGRlcicsIGNsYXNzTmFtZTogJyd9KVxuXHRcdGZvcmVjYXN0RGlzcGxheS5hcHBlbmRDaGlsZChmb3JlY2FzdEhvbGRlcik7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGk8PTMwOyBpICs9IDEpIHtcblx0XHRcdGNvbnN0IGZvcmVjYXN0ID0gbWFrZUVsZW1lbnQoe3R5cGU6ICdwJywgaWQ6IGBmb3JlY2FzdCR7aX1gLCBjbGFzc05hbWU6ICdmb3JlY2FzdCd9KTtcblx0XHRcdGZvcmVjYXN0SG9sZGVyLmFwcGVuZENoaWxkKGZvcmVjYXN0KTtcblx0XHRcdGZvcmVjYXN0LmlubmVySFRNTCA9ICdqYW1lcydcblx0XHR9XG5cdGNvbnN0IGRlc2NyaXB0aW9uRGlzcGxheSA9IG1ha2VFbGVtZW50KHt0eXBlOiAnZGl2JywgaWQ6ICdkZXNjcmlwdGlvbkRpdicsIGNsYXNzTmFtZTogJ2Rlc2NyaXB0aW9uJ30pO1xuXHRcdGNvbnN0IGRlc2NyaXB0aW9uID0gbWFrZUVsZW1lbnQoe3R5cGU6ICdoMicsIGlkOiAnZGVzY3JpcHRpb24nLCBjbGFzc05hbWU6ICcnfSk7XG5cdFx0ZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gJ1RvZGF5J1xuXHRcdGRlc2NyaXB0aW9uRGlzcGxheS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cdGNvbnN0IGRpdkFycmF5ID0gW2NpdHlEaXNwbGF5LCBmb3JlY2FzdERpc3BsYXksIGRlc2NyaXB0aW9uRGlzcGxheV07XG5cdGRpdkFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG5cdFx0ZWxlbWVudE1ldGhvZHMoZWxlbWVudCkuYXBwZW5kVG9Cb2R5KCdncmlkJylcblx0fSk7XG5cdGNpdHlBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHRcdGVsZW1lbnRNZXRob2RzKGVsZW1lbnQpLmFwcGVuZFRvQm9keSgnY2l0eURpdicpXG5cdH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVNYWluRGlzcGxheTsiLCJjb25zdCBtYWtlRWxlbWVudCA9ICh7XG5cdHR5cGUgPSBcIlwiLFxuXHRpZCA9IFwiXCIsXG5cdGNsYXNzTmFtZSA9IFwiXCIsXG4gIH0gPSB7fSkgPT4ge1xuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG5cdGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgY2xhc3NOYW1lKTtcblx0cmV0dXJuIGVsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3QgZWxlbWVudE1ldGhvZHMgPSAoZWxlbWVudCkgPT4ge1xuXHRjb25zdCBhcHBlbmRUb0JvZHkgPSAoZGVzdGluYXRpb24pID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlc3RpbmF0aW9uKS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblx0cmV0dXJuIHthcHBlbmRUb0JvZHl9O1xuICB9O1xuICBcbiAgZXhwb3J0IHttYWtlRWxlbWVudCwgZWxlbWVudE1ldGhvZHN9IiwiaW1wb3J0IHsgbWFrZUVsZW1lbnQgfSBmcm9tIFwiLi9tYWtlLWVsZW1lbnRzXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbi8vIEdlbmVyYXRlcyBjb21wbGV0ZSBuYXZiYXJcbmNvbnN0IG1ha2VOYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdkJhciA9IG1ha2VFbGVtZW50KHsgdHlwZTogXCJ1bFwiLCBpZDogXCJuYXZiYXJcIiwgY2xhc3NOYW1lOiBcIm5hdmJhclwiIH0pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG5hdkJhcik7XG5cbiAgY29uc3QgbmF2TG9nbyA9IG1ha2VFbGVtZW50KHtcbiAgICB0eXBlOiBcImlcIixcbiAgICBpZDogXCJuYXZMb2dvXCIsXG4gICAgY2xhc3NOYW1lOiBcImZhZCBmYS1zdW4taGF6ZSBmYS1zd2FwLW9wYWNpdHlcIixcbiAgfSk7XG4gIG5hdkxvZ28uc3R5bGUgPSBcIi0tZmEtcHJpbWFyeS1jb2xvcjogIzA0NjU4MjsgLS1mYS1zZWNvbmRhcnktY29sb3I6ICNDRDExM0I7IC0tZmEtc2Vjb25kYXJ5LW9wYWNpdHk6IDFcIjtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdkxvZ28pO1xuXG4gIGNvbnN0IG5hdlRpdGxlID0gbWFrZUVsZW1lbnQoeyB0eXBlOiBcImxpXCIsIGlkOiBcIm5hdlwiLCBjbGFzc05hbWU6IFwibmF2XCIgfSk7XG4gIG5hdlRpdGxlLmlubmVySFRNTCA9IFwiV2VhdGhlclwiO1xuICBuYXZCYXIuYXBwZW5kQ2hpbGQobmF2VGl0bGUpO1xuXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IG1ha2VFbGVtZW50KHsgdHlwZTogXCJkaXZcIiwgaWQ6IFwic2VhcmNoSG9sZGVyXCIsIGNsYXNzTmFtZTogXCJcIiB9KTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKHNlYXJjaENvbnRhaW5lcik7XG5cbiAgY29uc3Qgc2VhcmNoQmFyID0gbWFrZUVsZW1lbnQoeyB0eXBlOiBcImlucHV0XCIsIGlkOiBcInRleHRJbnB1dFwiLCBjbGFzc05hbWU6IFwiYmFyXCIgfSk7XG5cdHNlYXJjaEJhci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuXHRzZWFyY2hCYXIuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBDaXR5IE5hbWUnKVxuXHRzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoQmFyKTtcblxuICBjb25zdCBzZWFyY2hCdXR0b24gPSBtYWtlRWxlbWVudCh7IHR5cGU6IFwiYnV0dG9uXCIsIGlkOiBcInNlYXJjaEJ1dHRvblwiLCBjbGFzc05hbWU6IFwiYmFyXCIgfSk7XG4gIHNlYXJjaEJ1dHRvbi5pbm5lckhUTUwgPSAnU2VhcmNoJ1xuICBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoQnV0dG9uKTtcblxuICBjb25zdCBjb252ZXJ0QnV0dG9uID0gbWFrZUVsZW1lbnQoeyB0eXBlOiBcImJ1dHRvblwiLCBpZDogXCJjb252ZXJ0QnV0dG9uXCIsIGNsYXNzTmFtZTogXCJcIiB9KTtcbiAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaEJ1dHRvbik7XG4gIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChjb252ZXJ0QnV0dG9uKVxuXG5cbn07XG5cbmV4cG9ydCB7IG1ha2VOYXZiYXIsIGNvbnRlbnQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGdlbmVyYXRlTWFpbkRpc3BsYXkgZnJvbSBcIi4vYm9keS1lbGVtZW50c1wiO1xuaW1wb3J0IHsgbWFrZU5hdmJhciB9IGZyb20gXCIuL25hdmJhclwiO1xuXG4oZnVuY3Rpb24oKSB7XG5cdG1ha2VOYXZiYXIoKTtcblx0Z2VuZXJhdGVNYWluRGlzcGxheSgpO1xufSkoKTsiXSwic291cmNlUm9vdCI6IiJ9