/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _forecast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecast */ \"./src/forecast.js\");\n\n\nconst cityForm = document.querySelector('form');\nconst card = document.querySelector('.card');\nconst details = document.querySelector('.details');\nconst time = document.querySelector('img.time');\nconst icon = document.querySelector('.icon img');\nconst forecast = new _forecast__WEBPACK_IMPORTED_MODULE_0__.default();\n\nconst updateUI = (data) => {\n  // destructure properties\n  const { cityDets, weather } = data;\n\n  // update details template\n  details.innerHTML = `\n    <h5 class=\"my-3\">${cityDets.EnglishName}</h5>\n    <div class=\"my-3\">${weather.WeatherText}</div>\n    <div class=\"display-4 my-4\">\n      <span>${weather.Temperature.Metric.Value}</span>\n      <span>&deg;C</span>\n    </div>\n  `;\n\n  // update the night/day & icon images\n  // const iconSrc = `../img/icons/${weather.WeatherIcon}.svg`;\n  // icon.setAttribute('src', iconSrc);\n  \n  const timeSrc = weather.IsDayTime ? '../img/day.svg' : '../img/night.svg';\n  time.setAttribute('src', timeSrc);\n\n  // remove the d-none class if present\n  if ( card.classList.contains ('d-none')){\n    card.classList.remove('d-none');\n  }\n};\n\ncityForm.addEventListener('submit', e => {\n  // prevent default action\n  e.preventDefault();\n  \n  // get city value\n  const city = cityForm.city.value.trim();\n  cityForm.reset();\n\n  // update the ui with new city\n  forecast.updateCity(city)\n    .then(data => updateUI(data))\n    .catch(err => console.log(err));\n\n  // set local storage\n  localStorage.setItem('city', city);\n\n});\n\nif(localStorage.getItem('city')){\n  forecast.updateCity(localStorage.getItem('city'))\n    .then(data => updateUI(data))\n    .catch(err => console.log(err));\n}\n//export default app;\n\n//# sourceURL=webpack://weather-app/./src/app.js?");

/***/ }),

/***/ "./src/forecast.js":
/*!*************************!*\
  !*** ./src/forecast.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nclass Forecast {\n  constructor(){\n    this.key = 'QUiPjDfmvmLGf6YhYwVwbOQUFnSzOYZM';\n    this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';\n    this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';\n  }\n  async updateCity(city){\n    const cityDets = await this.getCity(city);\n    const weather = await this.getWeather(cityDets.Key);\n    return { cityDets, weather };\n  }\n  async getWeather(id){\n    const query = `${id}?apikey=${this.key}`;\n    const response = await fetch(this.weatherURI + query);\n    const data = await response.json();\n    return data[0];\n  }\n  async getCity(city){\n    const query = `?apikey=${this.key}&q=${city}`;\n    const response = await fetch(this.cityURI + query);\n    const data = await response.json();\n    return data[0];\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Forecast);\n\n//# sourceURL=webpack://weather-app/./src/forecast.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n//import './forecast'\n\n\n\n//const app = new updateUI();\n//app.run();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;