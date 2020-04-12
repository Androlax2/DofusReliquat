/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/CantCalculateReliquatException.js":
/*!**************************************************!*\
  !*** ./src/js/CantCalculateReliquatException.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Handle when we can't calculate the reliquat (missing data)
 *
 * @constructor
 */
function CantCalculateReliquatException() {
  this.name = "CantCalculateReliquatException";
  this.message = "CAN'T CALCULATE THIS RELIQUAT. MISSING DATA";
  this.stack = new Error().stack;
}

CantCalculateReliquatException.prototype = Object.create(Error.prototype);
CantCalculateReliquatException.prototype.constructor = CantCalculateReliquatException;
/* harmony default export */ __webpack_exports__["default"] = (CantCalculateReliquatException);

/***/ }),

/***/ "./src/js/Reliquat.js":
/*!****************************!*\
  !*** ./src/js/Reliquat.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Reliquat; });
/* harmony import */ var _CantCalculateReliquatException__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CantCalculateReliquatException */ "./src/js/CantCalculateReliquatException.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * This object calculate the reliquat of the game DOFUS
 * (used in "Forgemagie")
 */


var Reliquat = /*#__PURE__*/function () {
  /**
   * Create an object to calculate the reliquat.
   * Initialize reliquat to 0
   *
   * @param RunesWeight class to manage runes weight in different languages
   */
  function Reliquat(RunesWeight) {
    _classCallCheck(this, Reliquat);

    this.runesWeight = RunesWeight;
    this.reliquat = 0;
  }
  /**
   * Break a line into an array
   *
   * @param line string like "-15 Vitalité, +15 Sagesse, +reliquat"
   * @private
   */


  _createClass(Reliquat, [{
    key: "_breakLine",
    value: function _breakLine(line) {
      var lineSplitted = line.split(', '),
          lineValues = [];
      lineSplitted.forEach(function (line) {
        return lineValues.push([line]);
      });
      return lineValues;
    }
    /**
     *
     * Get the reliquat type (-reliquat or +reliquat)
     *
     * @param lineValues array of a line like : [["5 vitalité"], ["-15 Sagesse"], ["+reliquat"]]
     * @returns false or addReliquat (for +reliquat) or removeReliquat (for -reliquat)
     * @private
     */

  }, {
    key: "_reliquatType",
    value: function _reliquatType(lineValues) {
      var end = lineValues[lineValues.length - 1];
      if (end != '-reliquat' && end != '+reliquat') return false; // Don't process to reliquat calculation if there's no line with reliquat

      if (end == '+reliquat') return 'addReliquat';
      if (end == '-reliquat') return 'removeReliquat';
    }
    /**
     * Calculate the reliquat of the line
     *
     * @param lineValues array of a line like : [["5 vitalité"], ["-15 Sagesse"], ["+reliquat"]]
     * @returns {boolean|number}
     * @private
     */

  }, {
    key: "_lineReliquat",
    value: function _lineReliquat(lineValues) {
      var _this = this;

      if (lineValues.length > 0) lineValues.pop(); // Remove the +reliquat or -reliquat

      var loses = 0,
          wins = 0,
          lineReliquat = 0;
      lineValues.forEach(function (lineValue) {
        var value = parseInt(lineValue),
            stat = lineValue.toString().replace(new RegExp('[0-9-]+'), '').toLowerCase().trim(),
            weightOfStat = _this.runesWeight.getWeightOf(stat);

        if (value < 0 && weightOfStat > 0) loses += weightOfStat * Math.abs(value);else if (value > 0) wins += weightOfStat * Math.abs(value);
        if (value !== 0 && weightOfStat > 0) lineReliquat = loses - wins;
      });
      if (wins === 0) throw new _CantCalculateReliquatException__WEBPACK_IMPORTED_MODULE_0__["default"]();
      return Math.abs(lineReliquat);
    }
    /**
     * Add a line in the reliquat calculation
     *
     * @param line string like "-15 Vitalité, +15 Sagesse, +reliquat"
     * @param addValue string add missed data to the calculation
     */

  }, {
    key: "add",
    value: function add(line, addValue) {
      if (line === null || typeof line === 'undefined') return;
      if (addValue) line = "".concat(addValue, ", ").concat(line); // Add the value to the line (rune used by the user)

      var lineSplitted = this._breakLine(line);

      var reliquatType = this._reliquatType(lineSplitted);

      if (!reliquatType) return;

      var lineReliquat = this._lineReliquat(lineSplitted);

      switch (reliquatType) {
        case 'addReliquat':
          this.reliquat += lineReliquat;
          break;

        case 'removeReliquat':
          this.reliquat -= lineReliquat;
          break;
      }
    }
    /**
     * Return the reliquat
     */

  }, {
    key: "calc",
    value: function calc() {
      return this.reliquat;
    }
  }]);

  return Reliquat;
}();



/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reliquat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reliquat */ "./src/js/Reliquat.js");
/* harmony import */ var _runes_RunesWeightFR__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./runes/RunesWeightFR */ "./src/js/runes/RunesWeightFR.js");




var reliquatCalc = new _Reliquat__WEBPACK_IMPORTED_MODULE_0__["default"](new _runes_RunesWeightFR__WEBPACK_IMPORTED_MODULE_1__["default"]());
reliquatCalc.add('-1 Sagesse, 1 Résistance Feu, +reliquat');
reliquatCalc.add('1 Résistance Terre');
reliquatCalc.add('-1 PA, +reliquat', '1 résistance air');
console.log(reliquatCalc.calc());

/***/ }),

/***/ "./src/js/runes/MissingRuneWeightException.js":
/*!****************************************************!*\
  !*** ./src/js/runes/MissingRuneWeightException.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Handle missing data exception for runes weights
 *
 * @param stat
 * @constructor
 */
function MissingRuneWeightException(stat) {
  this.name = "MissingRuneWeightException";
  this.message = "DATA ARE MISSING FOR ".concat(stat);
  this.stack = new Error().stack;
}

MissingRuneWeightException.prototype = Object.create(Error.prototype);
MissingRuneWeightException.prototype.constructor = MissingRuneWeightException;
/* harmony default export */ __webpack_exports__["default"] = (MissingRuneWeightException);

/***/ }),

/***/ "./src/js/runes/RunesWeightFR.js":
/*!***************************************!*\
  !*** ./src/js/runes/RunesWeightFR.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RunesWeightFR; });
/* harmony import */ var _MissingRuneWeightException__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MissingRuneWeightException */ "./src/js/runes/MissingRuneWeightException.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * FRENCH
 *
 * This object get the weight of each runes of DOFUS
 * (used in "Forgemagie")
 */


var RunesWeightFR = /*#__PURE__*/function () {
  /**
   * Create an object with all the runes weight in french
   */
  function RunesWeightFR() {
    _classCallCheck(this, RunesWeightFR);

    this.runesWeight = {
      'vitalité': 0.2,
      'sagesse': 3,
      'force': 1,
      'chance': 1,
      'agilité': 1,
      'intelligence': 1,
      'initiative': 0.1,
      'prospection': 3,
      'portée': 51,
      'po': 51,
      'pm': 90,
      'pa': 100,
      'soins': 10,
      'puissance': 2,
      'résistance air': 2,
      'résistance neutre': 2,
      'résistance feu': 2,
      'résistance eau': 2,
      'résistance terre': 2,
      'dommages eau': 5,
      'dommages critiques': 5,
      'dommages terre': 5,
      'dommages neutre': 5,
      'dommages feu': 5,
      'dommages air': 5,
      '% résistance terre': 6,
      '% résistance eau': 6,
      '% résistance feu': 6,
      '% résistance air': 6,
      '% résistance neutre': 6,
      '% critique': 10,
      'fuite': 4,
      'invocations': 30,
      'dommages': 20,
      'tacle': 4,
      'esquive pm': 7
    };
  }
  /**
   * Return the weight of the stat
   *
   * @param stat string like "vitalité"
   * @returns {boolean|*} false if the stat doesn't exist in the array. The weight if it exists
   */


  _createClass(RunesWeightFR, [{
    key: "getWeightOf",
    value: function getWeightOf(stat) {
      if (!this.runesWeight.hasOwnProperty(stat)) throw new _MissingRuneWeightException__WEBPACK_IMPORTED_MODULE_0__["default"](stat);
      return this.runesWeight[stat];
    }
  }]);

  return RunesWeightFR;
}();



/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/theobenoit/Desktop/Dev/Dofus/ReliquatJS/src/js/app.js */"./src/js/app.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0NhbnRDYWxjdWxhdGVSZWxpcXVhdEV4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvUmVsaXF1YXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcnVuZXMvTWlzc2luZ1J1bmVXZWlnaHRFeGNlcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3J1bmVzL1J1bmVzV2VpZ2h0RlIuanMiXSwibmFtZXMiOlsiQ2FudENhbGN1bGF0ZVJlbGlxdWF0RXhjZXB0aW9uIiwibmFtZSIsIm1lc3NhZ2UiLCJzdGFjayIsIkVycm9yIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJSZWxpcXVhdCIsIlJ1bmVzV2VpZ2h0IiwicnVuZXNXZWlnaHQiLCJyZWxpcXVhdCIsImxpbmUiLCJsaW5lU3BsaXR0ZWQiLCJzcGxpdCIsImxpbmVWYWx1ZXMiLCJmb3JFYWNoIiwicHVzaCIsImVuZCIsImxlbmd0aCIsInBvcCIsImxvc2VzIiwid2lucyIsImxpbmVSZWxpcXVhdCIsImxpbmVWYWx1ZSIsInZhbHVlIiwicGFyc2VJbnQiLCJzdGF0IiwidG9TdHJpbmciLCJyZXBsYWNlIiwiUmVnRXhwIiwidG9Mb3dlckNhc2UiLCJ0cmltIiwid2VpZ2h0T2ZTdGF0IiwiZ2V0V2VpZ2h0T2YiLCJNYXRoIiwiYWJzIiwiYWRkVmFsdWUiLCJfYnJlYWtMaW5lIiwicmVsaXF1YXRUeXBlIiwiX3JlbGlxdWF0VHlwZSIsIl9saW5lUmVsaXF1YXQiLCJyZWxpcXVhdENhbGMiLCJSdW5lc1dlaWdodEZSIiwiYWRkIiwiY29uc29sZSIsImxvZyIsImNhbGMiLCJNaXNzaW5nUnVuZVdlaWdodEV4Y2VwdGlvbiIsImhhc093blByb3BlcnR5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNB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QixDQU5GO0FBT2Ysb0JBQWUsR0FQQTtBQVFmLHFCQUFnQixDQVJEO0FBU2YsZ0JBQVcsRUFUSTtBQVVmLFlBQU8sRUFWUTtBQVdmLFlBQU8sRUFYUTtBQVlmLFlBQU8sR0FaUTtBQWFmLGVBQVUsRUFiSztBQWNmLG1CQUFjLENBZEM7QUFlZix3QkFBbUIsQ0FmSjtBQWdCZiwyQkFBcUIsQ0FoQk47QUFpQmYsd0JBQWtCLENBakJIO0FBa0JmLHdCQUFrQixDQWxCSDtBQW1CZiwwQkFBb0IsQ0FuQkw7QUFvQmYsc0JBQWlCLENBcEJGO0FBcUJmLDRCQUF1QixDQXJCUjtBQXNCZix3QkFBbUIsQ0F0Qko7QUF1QmYseUJBQW1CLENBdkJKO0FBd0JmLHNCQUFnQixDQXhCRDtBQXlCZixzQkFBaUIsQ0F6QkY7QUEwQmYsNEJBQXVCLENBMUJSO0FBMkJmLDBCQUFxQixDQTNCTjtBQTRCZiwwQkFBcUIsQ0E1Qk47QUE2QmYsMEJBQXFCLENBN0JOO0FBOEJmLDZCQUF3QixDQTlCVDtBQStCZixvQkFBZSxFQS9CQTtBQWdDZixlQUFVLENBaENLO0FBaUNmLHFCQUFnQixFQWpDRDtBQWtDZixrQkFBYSxFQWxDRTtBQW1DZixlQUFVLENBbkNLO0FBb0NmLG9CQUFjO0FBcENDLEtBQW5CO0FBc0NIO0FBRUQ7Ozs7Ozs7Ozs7Z0NBTVlpQixJLEVBQ1o7QUFDSSxVQUFJLENBQUMsS0FBS2pCLFdBQUwsQ0FBaUJ1QyxjQUFqQixDQUFnQ3RCLElBQWhDLENBQUwsRUFBNEMsTUFBTSxJQUFJcUIsbUVBQUosQ0FBK0JyQixJQUEvQixDQUFOO0FBQzVDLGFBQU8sS0FBS2pCLFdBQUwsQ0FBaUJpQixJQUFqQixDQUFQO0FBQ0giLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyoqXG4gKiBIYW5kbGUgd2hlbiB3ZSBjYW4ndCBjYWxjdWxhdGUgdGhlIHJlbGlxdWF0IChtaXNzaW5nIGRhdGEpXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIENhbnRDYWxjdWxhdGVSZWxpcXVhdEV4Y2VwdGlvbigpXG57XG4gICAgdGhpcy5uYW1lID0gXCJDYW50Q2FsY3VsYXRlUmVsaXF1YXRFeGNlcHRpb25cIjtcbiAgICB0aGlzLm1lc3NhZ2UgPSBgQ0FOJ1QgQ0FMQ1VMQVRFIFRISVMgUkVMSVFVQVQuIE1JU1NJTkcgREFUQWA7XG4gICAgdGhpcy5zdGFjayA9IChuZXcgRXJyb3IoKSkuc3RhY2s7XG59XG5DYW50Q2FsY3VsYXRlUmVsaXF1YXRFeGNlcHRpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuQ2FudENhbGN1bGF0ZVJlbGlxdWF0RXhjZXB0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENhbnRDYWxjdWxhdGVSZWxpcXVhdEV4Y2VwdGlvbjtcblxuZXhwb3J0IGRlZmF1bHQgQ2FudENhbGN1bGF0ZVJlbGlxdWF0RXhjZXB0aW9uOyIsIi8qKlxuICogVGhpcyBvYmplY3QgY2FsY3VsYXRlIHRoZSByZWxpcXVhdCBvZiB0aGUgZ2FtZSBET0ZVU1xuICogKHVzZWQgaW4gXCJGb3JnZW1hZ2llXCIpXG4gKi9cbmltcG9ydCBDYW50Q2FsY3VsYXRlUmVsaXF1YXRFeGNlcHRpb24gZnJvbSBcIi4vQ2FudENhbGN1bGF0ZVJlbGlxdWF0RXhjZXB0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbGlxdWF0IHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbiBvYmplY3QgdG8gY2FsY3VsYXRlIHRoZSByZWxpcXVhdC5cbiAgICAgKiBJbml0aWFsaXplIHJlbGlxdWF0IHRvIDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSBSdW5lc1dlaWdodCBjbGFzcyB0byBtYW5hZ2UgcnVuZXMgd2VpZ2h0IGluIGRpZmZlcmVudCBsYW5ndWFnZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihSdW5lc1dlaWdodClcbiAgICB7XG4gICAgICAgIHRoaXMucnVuZXNXZWlnaHQgPSBSdW5lc1dlaWdodDtcbiAgICAgICAgdGhpcy5yZWxpcXVhdCA9IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnJlYWsgYSBsaW5lIGludG8gYW4gYXJyYXlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBsaW5lIHN0cmluZyBsaWtlIFwiLTE1IFZpdGFsaXTDqSwgKzE1IFNhZ2Vzc2UsICtyZWxpcXVhdFwiXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfYnJlYWtMaW5lKGxpbmUpXG4gICAge1xuICAgICAgICBsZXQgbGluZVNwbGl0dGVkID0gbGluZS5zcGxpdCgnLCAnKSxcbiAgICAgICAgICAgIGxpbmVWYWx1ZXMgPSBbXTtcblxuICAgICAgICBsaW5lU3BsaXR0ZWQuZm9yRWFjaChsaW5lID0+IGxpbmVWYWx1ZXMucHVzaChbbGluZV0pKTtcblxuICAgICAgICByZXR1cm4gbGluZVZhbHVlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEdldCB0aGUgcmVsaXF1YXQgdHlwZSAoLXJlbGlxdWF0IG9yICtyZWxpcXVhdClcbiAgICAgKlxuICAgICAqIEBwYXJhbSBsaW5lVmFsdWVzIGFycmF5IG9mIGEgbGluZSBsaWtlIDogW1tcIjUgdml0YWxpdMOpXCJdLCBbXCItMTUgU2FnZXNzZVwiXSwgW1wiK3JlbGlxdWF0XCJdXVxuICAgICAqIEByZXR1cm5zIGZhbHNlIG9yIGFkZFJlbGlxdWF0IChmb3IgK3JlbGlxdWF0KSBvciByZW1vdmVSZWxpcXVhdCAoZm9yIC1yZWxpcXVhdClcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9yZWxpcXVhdFR5cGUobGluZVZhbHVlcylcbiAgICB7XG4gICAgICAgIGxldCBlbmQgPSBsaW5lVmFsdWVzW2xpbmVWYWx1ZXMubGVuZ3RoIC0xXTtcblxuICAgICAgICBpZiAoZW5kICE9ICctcmVsaXF1YXQnICYmIGVuZCAhPSAnK3JlbGlxdWF0JykgcmV0dXJuIGZhbHNlOyAvLyBEb24ndCBwcm9jZXNzIHRvIHJlbGlxdWF0IGNhbGN1bGF0aW9uIGlmIHRoZXJlJ3Mgbm8gbGluZSB3aXRoIHJlbGlxdWF0XG4gICAgICAgIGlmIChlbmQgPT0gJytyZWxpcXVhdCcpIHJldHVybiAnYWRkUmVsaXF1YXQnO1xuICAgICAgICBpZiAoZW5kID09ICctcmVsaXF1YXQnKSByZXR1cm4gJ3JlbW92ZVJlbGlxdWF0JztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgdGhlIHJlbGlxdWF0IG9mIHRoZSBsaW5lXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGluZVZhbHVlcyBhcnJheSBvZiBhIGxpbmUgbGlrZSA6IFtbXCI1IHZpdGFsaXTDqVwiXSwgW1wiLTE1IFNhZ2Vzc2VcIl0sIFtcIityZWxpcXVhdFwiXV1cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbnxudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfbGluZVJlbGlxdWF0KGxpbmVWYWx1ZXMpXG4gICAge1xuICAgICAgICBpZiAobGluZVZhbHVlcy5sZW5ndGggPiAwKSBsaW5lVmFsdWVzLnBvcCgpOyAvLyBSZW1vdmUgdGhlICtyZWxpcXVhdCBvciAtcmVsaXF1YXRcblxuICAgICAgICBsZXQgbG9zZXMgPSAwLFxuICAgICAgICAgICAgd2lucyA9IDAsXG4gICAgICAgICAgICBsaW5lUmVsaXF1YXQgPSAwO1xuXG4gICAgICAgIGxpbmVWYWx1ZXMuZm9yRWFjaChsaW5lVmFsdWUgPT4ge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VJbnQobGluZVZhbHVlKSxcbiAgICAgICAgICAgICAgICBzdGF0ID0gbGluZVZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZShuZXcgUmVnRXhwKCdbMC05LV0rJyksICcnKS50b0xvd2VyQ2FzZSgpLnRyaW0oKSxcbiAgICAgICAgICAgICAgICB3ZWlnaHRPZlN0YXQgPSB0aGlzLnJ1bmVzV2VpZ2h0LmdldFdlaWdodE9mKHN0YXQpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgPCAwICYmIHdlaWdodE9mU3RhdCA+IDApIGxvc2VzICs9IHdlaWdodE9mU3RhdCAqIE1hdGguYWJzKHZhbHVlKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlID4gMCkgd2lucyArPSB3ZWlnaHRPZlN0YXQgKiBNYXRoLmFicyh2YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gMCAmJiB3ZWlnaHRPZlN0YXQgPiAwKSBsaW5lUmVsaXF1YXQgPSBsb3NlcyAtIHdpbnM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh3aW5zID09PSAwKSB0aHJvdyBuZXcgQ2FudENhbGN1bGF0ZVJlbGlxdWF0RXhjZXB0aW9uKCk7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhsaW5lUmVsaXF1YXQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGxpbmUgaW4gdGhlIHJlbGlxdWF0IGNhbGN1bGF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGluZSBzdHJpbmcgbGlrZSBcIi0xNSBWaXRhbGl0w6ksICsxNSBTYWdlc3NlLCArcmVsaXF1YXRcIlxuICAgICAqIEBwYXJhbSBhZGRWYWx1ZSBzdHJpbmcgYWRkIG1pc3NlZCBkYXRhIHRvIHRoZSBjYWxjdWxhdGlvblxuICAgICAqL1xuICAgIGFkZChsaW5lLCBhZGRWYWx1ZSlcbiAgICB7XG4gICAgICAgIGlmIChsaW5lID09PSBudWxsIHx8IHR5cGVvZiBsaW5lID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuXG4gICAgICAgIGlmIChhZGRWYWx1ZSkgbGluZSA9IGAke2FkZFZhbHVlfSwgJHtsaW5lfWA7IC8vIEFkZCB0aGUgdmFsdWUgdG8gdGhlIGxpbmUgKHJ1bmUgdXNlZCBieSB0aGUgdXNlcilcblxuICAgICAgICBjb25zdCBsaW5lU3BsaXR0ZWQgPSB0aGlzLl9icmVha0xpbmUobGluZSk7XG4gICAgICAgIGNvbnN0IHJlbGlxdWF0VHlwZSA9IHRoaXMuX3JlbGlxdWF0VHlwZShsaW5lU3BsaXR0ZWQpO1xuXG4gICAgICAgIGlmICghcmVsaXF1YXRUeXBlKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGxpbmVSZWxpcXVhdCA9IHRoaXMuX2xpbmVSZWxpcXVhdChsaW5lU3BsaXR0ZWQpO1xuXG4gICAgICAgIHN3aXRjaCAocmVsaXF1YXRUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdhZGRSZWxpcXVhdCc6XG4gICAgICAgICAgICAgICAgdGhpcy5yZWxpcXVhdCArPSBsaW5lUmVsaXF1YXQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZW1vdmVSZWxpcXVhdCc6XG4gICAgICAgICAgICAgICAgdGhpcy5yZWxpcXVhdCAtPSBsaW5lUmVsaXF1YXQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHJlbGlxdWF0XG4gICAgICovXG4gICAgY2FsYygpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWxpcXVhdDtcbiAgICB9XG5cbn0iLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgUmVsaXF1YXQgZnJvbSAnLi9SZWxpcXVhdCc7XG5pbXBvcnQgUnVuZXNXZWlnaHRGUiBmcm9tIFwiLi9ydW5lcy9SdW5lc1dlaWdodEZSXCI7XG5cbmNvbnN0IHJlbGlxdWF0Q2FsYyA9IG5ldyBSZWxpcXVhdChuZXcgUnVuZXNXZWlnaHRGUigpKTtcblxucmVsaXF1YXRDYWxjLmFkZCgnLTEgU2FnZXNzZSwgMSBSw6lzaXN0YW5jZSBGZXUsICtyZWxpcXVhdCcpO1xucmVsaXF1YXRDYWxjLmFkZCgnMSBSw6lzaXN0YW5jZSBUZXJyZScpO1xucmVsaXF1YXRDYWxjLmFkZCgnLTEgUEEsICtyZWxpcXVhdCcsICcxIHLDqXNpc3RhbmNlIGFpcicpO1xuXG5jb25zb2xlLmxvZyhyZWxpcXVhdENhbGMuY2FsYygpKTsiLCIvKipcbiAqIEhhbmRsZSBtaXNzaW5nIGRhdGEgZXhjZXB0aW9uIGZvciBydW5lcyB3ZWlnaHRzXG4gKlxuICogQHBhcmFtIHN0YXRcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBNaXNzaW5nUnVuZVdlaWdodEV4Y2VwdGlvbihzdGF0KVxue1xuICAgIHRoaXMubmFtZSA9IFwiTWlzc2luZ1J1bmVXZWlnaHRFeGNlcHRpb25cIjtcbiAgICB0aGlzLm1lc3NhZ2UgPSBgREFUQSBBUkUgTUlTU0lORyBGT1IgJHtzdGF0fWA7XG4gICAgdGhpcy5zdGFjayA9IChuZXcgRXJyb3IoKSkuc3RhY2s7XG59XG5NaXNzaW5nUnVuZVdlaWdodEV4Y2VwdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5NaXNzaW5nUnVuZVdlaWdodEV4Y2VwdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNaXNzaW5nUnVuZVdlaWdodEV4Y2VwdGlvbjtcblxuZXhwb3J0IGRlZmF1bHQgTWlzc2luZ1J1bmVXZWlnaHRFeGNlcHRpb247IiwiLyoqXG4gKiBGUkVOQ0hcbiAqXG4gKiBUaGlzIG9iamVjdCBnZXQgdGhlIHdlaWdodCBvZiBlYWNoIHJ1bmVzIG9mIERPRlVTXG4gKiAodXNlZCBpbiBcIkZvcmdlbWFnaWVcIilcbiAqL1xuaW1wb3J0IE1pc3NpbmdSdW5lV2VpZ2h0RXhjZXB0aW9uIGZyb20gXCIuL01pc3NpbmdSdW5lV2VpZ2h0RXhjZXB0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bmVzV2VpZ2h0RlIge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuIG9iamVjdCB3aXRoIGFsbCB0aGUgcnVuZXMgd2VpZ2h0IGluIGZyZW5jaFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKClcbiAgICB7XG4gICAgICAgIHRoaXMucnVuZXNXZWlnaHQgPSB7XG4gICAgICAgICAgICAndml0YWxpdMOpJyA6IDAuMixcbiAgICAgICAgICAgICdzYWdlc3NlJyA6IDMsXG4gICAgICAgICAgICAnZm9yY2UnIDogMSxcbiAgICAgICAgICAgICdjaGFuY2UnIDogMSxcbiAgICAgICAgICAgICdhZ2lsaXTDqScgOiAxLFxuICAgICAgICAgICAgJ2ludGVsbGlnZW5jZScgOiAxLFxuICAgICAgICAgICAgJ2luaXRpYXRpdmUnIDogMC4xLFxuICAgICAgICAgICAgJ3Byb3NwZWN0aW9uJyA6IDMsXG4gICAgICAgICAgICAncG9ydMOpZScgOiA1MSxcbiAgICAgICAgICAgICdwbycgOiA1MSxcbiAgICAgICAgICAgICdwbScgOiA5MCxcbiAgICAgICAgICAgICdwYScgOiAxMDAsXG4gICAgICAgICAgICAnc29pbnMnIDogMTAsXG4gICAgICAgICAgICAncHVpc3NhbmNlJyA6IDIsXG4gICAgICAgICAgICAncsOpc2lzdGFuY2UgYWlyJyA6IDIsXG4gICAgICAgICAgICAncsOpc2lzdGFuY2UgbmV1dHJlJzogMixcbiAgICAgICAgICAgICdyw6lzaXN0YW5jZSBmZXUnOiAyLFxuICAgICAgICAgICAgJ3LDqXNpc3RhbmNlIGVhdSc6IDIsXG4gICAgICAgICAgICAncsOpc2lzdGFuY2UgdGVycmUnOiAyLFxuICAgICAgICAgICAgJ2RvbW1hZ2VzIGVhdScgOiA1LFxuICAgICAgICAgICAgJ2RvbW1hZ2VzIGNyaXRpcXVlcycgOiA1LFxuICAgICAgICAgICAgJ2RvbW1hZ2VzIHRlcnJlJyA6IDUsXG4gICAgICAgICAgICAnZG9tbWFnZXMgbmV1dHJlJzogNSxcbiAgICAgICAgICAgICdkb21tYWdlcyBmZXUnOiA1LFxuICAgICAgICAgICAgJ2RvbW1hZ2VzIGFpcicgOiA1LFxuICAgICAgICAgICAgJyUgcsOpc2lzdGFuY2UgdGVycmUnIDogNixcbiAgICAgICAgICAgICclIHLDqXNpc3RhbmNlIGVhdScgOiA2LFxuICAgICAgICAgICAgJyUgcsOpc2lzdGFuY2UgZmV1JyA6IDYsXG4gICAgICAgICAgICAnJSByw6lzaXN0YW5jZSBhaXInIDogNixcbiAgICAgICAgICAgICclIHLDqXNpc3RhbmNlIG5ldXRyZScgOiA2LFxuICAgICAgICAgICAgJyUgY3JpdGlxdWUnIDogMTAsXG4gICAgICAgICAgICAnZnVpdGUnIDogNCxcbiAgICAgICAgICAgICdpbnZvY2F0aW9ucycgOiAzMCxcbiAgICAgICAgICAgICdkb21tYWdlcycgOiAyMCxcbiAgICAgICAgICAgICd0YWNsZScgOiA0LFxuICAgICAgICAgICAgJ2VzcXVpdmUgcG0nOiA3XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSB3ZWlnaHQgb2YgdGhlIHN0YXRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdGF0IHN0cmluZyBsaWtlIFwidml0YWxpdMOpXCJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbnwqfSBmYWxzZSBpZiB0aGUgc3RhdCBkb2Vzbid0IGV4aXN0IGluIHRoZSBhcnJheS4gVGhlIHdlaWdodCBpZiBpdCBleGlzdHNcbiAgICAgKi9cbiAgICBnZXRXZWlnaHRPZihzdGF0KVxuICAgIHtcbiAgICAgICAgaWYgKCF0aGlzLnJ1bmVzV2VpZ2h0Lmhhc093blByb3BlcnR5KHN0YXQpKSB0aHJvdyBuZXcgTWlzc2luZ1J1bmVXZWlnaHRFeGNlcHRpb24oc3RhdCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJ1bmVzV2VpZ2h0W3N0YXRdO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=