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
     * @returns {string} nothing or addReliquat (for +reliquat) or removeReliquat (for -reliquat)
     * @private
     */

  }, {
    key: "_reliquatType",
    value: function _reliquatType(lineValues) {
      var end = lineValues[lineValues.length - 1];
      if (end != '-reliquat' && end != '+reliquat') return; // Don't process to reliquat calculation if there's no line with reliquat

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

      if (lineValues.length > 1) lineValues.pop(); // Remove the +reliquat or -reliquat

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

      var lineReliquat = this._lineReliquat(lineSplitted, reliquatType, addValue);

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
reliquatCalc.add('-1 PA, +reliquat', '1 résistance terre');
reliquatCalc.add('1 résistance terre, -reliquat');
reliquatCalc.add('-reliquat', '15 sagesse');
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
      'resistance feu': 2,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0NhbnRDYWxjdWxhdGVSZWxpcXVhdEV4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvUmVsaXF1YXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcnVuZXMvTWlzc2luZ1J1bmVXZWlnaHRFeGNlcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3J1bmVzL1J1bmVzV2VpZ2h0RlIuanMiXSwibmFtZXMiOlsiQ2FudENhbGN1bGF0ZVJlbGlxdWF0RXhjZXB0aW9uIiwibmFtZSIsIm1lc3NhZ2UiLCJzdGFjayIsIkVycm9yIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJSZWxpcXVhdCIsIlJ1bmVzV2VpZ2h0IiwicnVuZXNXZWlnaHQiLCJyZWxpcXVhdCIsImxpbmUiLCJsaW5lU3BsaXR0ZWQiLCJzcGxpdCIsImxpbmVWYWx1ZXMiLCJmb3JFYWNoIiwicHVzaCIsImVuZCIsImxlbmd0aCIsInBvcCIsImxvc2VzIiwid2lucyIsImxpbmVSZWxpcXVhdCIsImxpbmVWYWx1ZSIsInZhbHVlIiwicGFyc2VJbnQiLCJzdGF0IiwidG9TdHJpbmciLCJyZXBsYWNlIiwiUmVnRXhwIiwidG9Mb3dlckNhc2UiLCJ0cmltIiwid2VpZ2h0T2ZTdGF0IiwiZ2V0V2VpZ2h0T2YiLCJNYXRoIiwiYWJzIiwiYWRkVmFsdWUiLCJfYnJlYWtMaW5lIiwicmVsaXF1YXRUeXBlIiwiX3JlbGlxdWF0VHlwZSIsIl9saW5lUmVsaXF1YXQiLCJyZWxpcXVhdENhbGMiLCJSdW5lc1dlaWdodEZSIiwiYWRkIiwiY29uc29sZSIsImxvZyIsImNhbGMiLCJNaXNzaW5nUnVuZVdlaWdodEV4Y2VwdGlvbiIsImhhc093blByb3BlcnR5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNB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TkY7QUFPZixvQkFBZSxHQVBBO0FBUWYscUJBQWdCLENBUkQ7QUFTZixnQkFBVyxFQVRJO0FBVWYsWUFBTyxFQVZRO0FBV2YsWUFBTyxFQVhRO0FBWWYsWUFBTyxHQVpRO0FBYWYsZUFBVSxFQWJLO0FBY2YsbUJBQWMsQ0FkQztBQWVmLHdCQUFtQixDQWZKO0FBZ0JmLDJCQUFxQixDQWhCTjtBQWlCZix3QkFBa0IsQ0FqQkg7QUFrQmYsd0JBQWtCLENBbEJIO0FBbUJmLDBCQUFvQixDQW5CTDtBQW9CZixzQkFBaUIsQ0FwQkY7QUFxQmYsNEJBQXVCLENBckJSO0FBc0JmLHdCQUFtQixDQXRCSjtBQXVCZix5QkFBbUIsQ0F2Qko7QUF3QmYsc0JBQWdCLENBeEJEO0FBeUJmLHNCQUFpQixDQXpCRjtBQTBCZiw0QkFBdUIsQ0ExQlI7QUEyQmYsMEJBQXFCLENBM0JOO0FBNEJmLDBCQUFxQixDQTVCTjtBQTZCZiwwQkFBcUIsQ0E3Qk47QUE4QmYsNkJBQXdCLENBOUJUO0FBK0JmLG9CQUFlLEVBL0JBO0FBZ0NmLGVBQVUsQ0FoQ0s7QUFpQ2YscUJBQWdCLEVBakNEO0FBa0NmLGtCQUFhLEVBbENFO0FBbUNmLGVBQVUsQ0FuQ0s7QUFvQ2Ysb0JBQWM7QUFwQ0MsS0FBbkI7QUFzQ0g7QUFFRDs7Ozs7Ozs7OztnQ0FNWWlCLEksRUFDWjtBQUNJLFVBQUksQ0FBQyxLQUFLakIsV0FBTCxDQUFpQnVDLGNBQWpCLENBQWdDdEIsSUFBaEMsQ0FBTCxFQUE0QyxNQUFNLElBQUlxQixtRUFBSixDQUErQnJCLElBQS9CLENBQU47QUFDNUMsYUFBTyxLQUFLakIsV0FBTCxDQUFpQmlCLElBQWpCLENBQVA7QUFDSCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKipcbiAqIEhhbmRsZSB3aGVuIHdlIGNhbid0IGNhbGN1bGF0ZSB0aGUgcmVsaXF1YXQgKG1pc3NpbmcgZGF0YSlcbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQ2FudENhbGN1bGF0ZVJlbGlxdWF0RXhjZXB0aW9uKClcbntcbiAgICB0aGlzLm5hbWUgPSBcIkNhbnRDYWxjdWxhdGVSZWxpcXVhdEV4Y2VwdGlvblwiO1xuICAgIHRoaXMubWVzc2FnZSA9IGBDQU4nVCBDQUxDVUxBVEUgVEhJUyBSRUxJUVVBVC4gTUlTU0lORyBEQVRBYDtcbiAgICB0aGlzLnN0YWNrID0gKG5ldyBFcnJvcigpKS5zdGFjaztcbn1cbkNhbnRDYWxjdWxhdGVSZWxpcXVhdEV4Y2VwdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5DYW50Q2FsY3VsYXRlUmVsaXF1YXRFeGNlcHRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ2FudENhbGN1bGF0ZVJlbGlxdWF0RXhjZXB0aW9uO1xuXG5leHBvcnQgZGVmYXVsdCBDYW50Q2FsY3VsYXRlUmVsaXF1YXRFeGNlcHRpb247IiwiLyoqXG4gKiBUaGlzIG9iamVjdCBjYWxjdWxhdGUgdGhlIHJlbGlxdWF0IG9mIHRoZSBnYW1lIERPRlVTXG4gKiAodXNlZCBpbiBcIkZvcmdlbWFnaWVcIilcbiAqL1xuaW1wb3J0IENhbnRDYWxjdWxhdGVSZWxpcXVhdEV4Y2VwdGlvbiBmcm9tIFwiLi9DYW50Q2FsY3VsYXRlUmVsaXF1YXRFeGNlcHRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsaXF1YXQge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuIG9iamVjdCB0byBjYWxjdWxhdGUgdGhlIHJlbGlxdWF0LlxuICAgICAqIEluaXRpYWxpemUgcmVsaXF1YXQgdG8gMFxuICAgICAqXG4gICAgICogQHBhcmFtIFJ1bmVzV2VpZ2h0IGNsYXNzIHRvIG1hbmFnZSBydW5lcyB3ZWlnaHQgaW4gZGlmZmVyZW50IGxhbmd1YWdlc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKFJ1bmVzV2VpZ2h0KVxuICAgIHtcbiAgICAgICAgdGhpcy5ydW5lc1dlaWdodCA9IFJ1bmVzV2VpZ2h0O1xuICAgICAgICB0aGlzLnJlbGlxdWF0ID0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCcmVhayBhIGxpbmUgaW50byBhbiBhcnJheVxuICAgICAqXG4gICAgICogQHBhcmFtIGxpbmUgc3RyaW5nIGxpa2UgXCItMTUgVml0YWxpdMOpLCArMTUgU2FnZXNzZSwgK3JlbGlxdWF0XCJcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9icmVha0xpbmUobGluZSlcbiAgICB7XG4gICAgICAgIGxldCBsaW5lU3BsaXR0ZWQgPSBsaW5lLnNwbGl0KCcsICcpLFxuICAgICAgICAgICAgbGluZVZhbHVlcyA9IFtdO1xuXG4gICAgICAgIGxpbmVTcGxpdHRlZC5mb3JFYWNoKGxpbmUgPT4gbGluZVZhbHVlcy5wdXNoKFtsaW5lXSkpO1xuXG4gICAgICAgIHJldHVybiBsaW5lVmFsdWVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogR2V0IHRoZSByZWxpcXVhdCB0eXBlICgtcmVsaXF1YXQgb3IgK3JlbGlxdWF0KVxuICAgICAqXG4gICAgICogQHBhcmFtIGxpbmVWYWx1ZXMgYXJyYXkgb2YgYSBsaW5lIGxpa2UgOiBbW1wiNSB2aXRhbGl0w6lcIl0sIFtcIi0xNSBTYWdlc3NlXCJdLCBbXCIrcmVsaXF1YXRcIl1dXG4gICAgICogQHJldHVybnMge3N0cmluZ30gbm90aGluZyBvciBhZGRSZWxpcXVhdCAoZm9yICtyZWxpcXVhdCkgb3IgcmVtb3ZlUmVsaXF1YXQgKGZvciAtcmVsaXF1YXQpXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfcmVsaXF1YXRUeXBlKGxpbmVWYWx1ZXMpXG4gICAge1xuICAgICAgICBsZXQgZW5kID0gbGluZVZhbHVlc1tsaW5lVmFsdWVzLmxlbmd0aCAtMV07XG5cbiAgICAgICAgaWYgKGVuZCAhPSAnLXJlbGlxdWF0JyAmJiBlbmQgIT0gJytyZWxpcXVhdCcpIHJldHVybjsgLy8gRG9uJ3QgcHJvY2VzcyB0byByZWxpcXVhdCBjYWxjdWxhdGlvbiBpZiB0aGVyZSdzIG5vIGxpbmUgd2l0aCByZWxpcXVhdFxuICAgICAgICBpZiAoZW5kID09ICcrcmVsaXF1YXQnKSByZXR1cm4gJ2FkZFJlbGlxdWF0JztcbiAgICAgICAgaWYgKGVuZCA9PSAnLXJlbGlxdWF0JykgcmV0dXJuICdyZW1vdmVSZWxpcXVhdCc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIHRoZSByZWxpcXVhdCBvZiB0aGUgbGluZVxuICAgICAqXG4gICAgICogQHBhcmFtIGxpbmVWYWx1ZXMgYXJyYXkgb2YgYSBsaW5lIGxpa2UgOiBbW1wiNSB2aXRhbGl0w6lcIl0sIFtcIi0xNSBTYWdlc3NlXCJdLCBbXCIrcmVsaXF1YXRcIl1dXG4gICAgICogQHJldHVybnMge2Jvb2xlYW58bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2xpbmVSZWxpcXVhdChsaW5lVmFsdWVzKVxuICAgIHtcbiAgICAgICAgaWYgKGxpbmVWYWx1ZXMubGVuZ3RoID4gMSkgbGluZVZhbHVlcy5wb3AoKTsgLy8gUmVtb3ZlIHRoZSArcmVsaXF1YXQgb3IgLXJlbGlxdWF0XG5cbiAgICAgICAgbGV0IGxvc2VzID0gMCxcbiAgICAgICAgICAgIHdpbnMgPSAwLFxuICAgICAgICAgICAgbGluZVJlbGlxdWF0ID0gMDtcblxuICAgICAgICBsaW5lVmFsdWVzLmZvckVhY2gobGluZVZhbHVlID0+IHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlSW50KGxpbmVWYWx1ZSksXG4gICAgICAgICAgICAgICAgc3RhdCA9IGxpbmVWYWx1ZS50b1N0cmluZygpLnJlcGxhY2UobmV3IFJlZ0V4cCgnWzAtOS1dKycpLCAnJykudG9Mb3dlckNhc2UoKS50cmltKCksXG4gICAgICAgICAgICAgICAgd2VpZ2h0T2ZTdGF0ID0gdGhpcy5ydW5lc1dlaWdodC5nZXRXZWlnaHRPZihzdGF0KTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlIDwgMCAmJiB3ZWlnaHRPZlN0YXQgPiAwKSBsb3NlcyArPSB3ZWlnaHRPZlN0YXQgKiBNYXRoLmFicyh2YWx1ZSk7XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA+IDApIHdpbnMgKz0gd2VpZ2h0T2ZTdGF0ICogTWF0aC5hYnModmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IDAgJiYgd2VpZ2h0T2ZTdGF0ID4gMCkgbGluZVJlbGlxdWF0ID0gbG9zZXMgLSB3aW5zO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAod2lucyA9PT0gMCkgdGhyb3cgbmV3IENhbnRDYWxjdWxhdGVSZWxpcXVhdEV4Y2VwdGlvbigpO1xuICAgICAgICByZXR1cm4gTWF0aC5hYnMobGluZVJlbGlxdWF0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBsaW5lIGluIHRoZSByZWxpcXVhdCBjYWxjdWxhdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIGxpbmUgc3RyaW5nIGxpa2UgXCItMTUgVml0YWxpdMOpLCArMTUgU2FnZXNzZSwgK3JlbGlxdWF0XCJcbiAgICAgKiBAcGFyYW0gYWRkVmFsdWUgc3RyaW5nIGFkZCBtaXNzZWQgZGF0YSB0byB0aGUgY2FsY3VsYXRpb25cbiAgICAgKi9cbiAgICBhZGQobGluZSwgYWRkVmFsdWUpXG4gICAge1xuICAgICAgICBpZiAobGluZSA9PT0gbnVsbCB8fCB0eXBlb2YgbGluZSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcblxuICAgICAgICBpZiAoYWRkVmFsdWUpIGxpbmUgPSBgJHthZGRWYWx1ZX0sICR7bGluZX1gOyAvLyBBZGQgdGhlIHZhbHVlIHRvIHRoZSBsaW5lIChydW5lIHVzZWQgYnkgdGhlIHVzZXIpXG5cbiAgICAgICAgY29uc3QgbGluZVNwbGl0dGVkID0gdGhpcy5fYnJlYWtMaW5lKGxpbmUpO1xuICAgICAgICBjb25zdCByZWxpcXVhdFR5cGUgPSB0aGlzLl9yZWxpcXVhdFR5cGUobGluZVNwbGl0dGVkKTtcbiAgICAgICAgbGV0IGxpbmVSZWxpcXVhdCA9IHRoaXMuX2xpbmVSZWxpcXVhdChsaW5lU3BsaXR0ZWQsIHJlbGlxdWF0VHlwZSwgYWRkVmFsdWUpO1xuXG4gICAgICAgIHN3aXRjaCAocmVsaXF1YXRUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdhZGRSZWxpcXVhdCc6XG4gICAgICAgICAgICAgICAgdGhpcy5yZWxpcXVhdCArPSBsaW5lUmVsaXF1YXQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZW1vdmVSZWxpcXVhdCc6XG4gICAgICAgICAgICAgICAgdGhpcy5yZWxpcXVhdCAtPSBsaW5lUmVsaXF1YXQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHJlbGlxdWF0XG4gICAgICovXG4gICAgY2FsYygpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWxpcXVhdDtcbiAgICB9XG5cbn0iLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgUmVsaXF1YXQgZnJvbSAnLi9SZWxpcXVhdCc7XG5pbXBvcnQgUnVuZXNXZWlnaHRGUiBmcm9tIFwiLi9ydW5lcy9SdW5lc1dlaWdodEZSXCI7XG5cbmNvbnN0IHJlbGlxdWF0Q2FsYyA9IG5ldyBSZWxpcXVhdChuZXcgUnVuZXNXZWlnaHRGUigpKTtcblxucmVsaXF1YXRDYWxjLmFkZCgnLTEgUEEsICtyZWxpcXVhdCcsICcxIHLDqXNpc3RhbmNlIHRlcnJlJyk7XG5yZWxpcXVhdENhbGMuYWRkKCcxIHLDqXNpc3RhbmNlIHRlcnJlLCAtcmVsaXF1YXQnKTtcbnJlbGlxdWF0Q2FsYy5hZGQoJy1yZWxpcXVhdCcsICcxNSBzYWdlc3NlJyk7XG5cbmNvbnNvbGUubG9nKHJlbGlxdWF0Q2FsYy5jYWxjKCkpOyIsIi8qKlxuICogSGFuZGxlIG1pc3NpbmcgZGF0YSBleGNlcHRpb24gZm9yIHJ1bmVzIHdlaWdodHNcbiAqXG4gKiBAcGFyYW0gc3RhdFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIE1pc3NpbmdSdW5lV2VpZ2h0RXhjZXB0aW9uKHN0YXQpXG57XG4gICAgdGhpcy5uYW1lID0gXCJNaXNzaW5nUnVuZVdlaWdodEV4Y2VwdGlvblwiO1xuICAgIHRoaXMubWVzc2FnZSA9IGBEQVRBIEFSRSBNSVNTSU5HIEZPUiAke3N0YXR9YDtcbiAgICB0aGlzLnN0YWNrID0gKG5ldyBFcnJvcigpKS5zdGFjaztcbn1cbk1pc3NpbmdSdW5lV2VpZ2h0RXhjZXB0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbk1pc3NpbmdSdW5lV2VpZ2h0RXhjZXB0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1pc3NpbmdSdW5lV2VpZ2h0RXhjZXB0aW9uO1xuXG5leHBvcnQgZGVmYXVsdCBNaXNzaW5nUnVuZVdlaWdodEV4Y2VwdGlvbjsiLCIvKipcbiAqIEZSRU5DSFxuICpcbiAqIFRoaXMgb2JqZWN0IGdldCB0aGUgd2VpZ2h0IG9mIGVhY2ggcnVuZXMgb2YgRE9GVVNcbiAqICh1c2VkIGluIFwiRm9yZ2VtYWdpZVwiKVxuICovXG5pbXBvcnQgTWlzc2luZ1J1bmVXZWlnaHRFeGNlcHRpb24gZnJvbSBcIi4vTWlzc2luZ1J1bmVXZWlnaHRFeGNlcHRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVuZXNXZWlnaHRGUiB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW4gb2JqZWN0IHdpdGggYWxsIHRoZSBydW5lcyB3ZWlnaHQgaW4gZnJlbmNoXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgdGhpcy5ydW5lc1dlaWdodCA9IHtcbiAgICAgICAgICAgICd2aXRhbGl0w6knIDogMC4yLFxuICAgICAgICAgICAgJ3NhZ2Vzc2UnIDogMyxcbiAgICAgICAgICAgICdmb3JjZScgOiAxLFxuICAgICAgICAgICAgJ2NoYW5jZScgOiAxLFxuICAgICAgICAgICAgJ2FnaWxpdMOpJyA6IDEsXG4gICAgICAgICAgICAnaW50ZWxsaWdlbmNlJyA6IDEsXG4gICAgICAgICAgICAnaW5pdGlhdGl2ZScgOiAwLjEsXG4gICAgICAgICAgICAncHJvc3BlY3Rpb24nIDogMyxcbiAgICAgICAgICAgICdwb3J0w6llJyA6IDUxLFxuICAgICAgICAgICAgJ3BvJyA6IDUxLFxuICAgICAgICAgICAgJ3BtJyA6IDkwLFxuICAgICAgICAgICAgJ3BhJyA6IDEwMCxcbiAgICAgICAgICAgICdzb2lucycgOiAxMCxcbiAgICAgICAgICAgICdwdWlzc2FuY2UnIDogMixcbiAgICAgICAgICAgICdyw6lzaXN0YW5jZSBhaXInIDogMixcbiAgICAgICAgICAgICdyw6lzaXN0YW5jZSBuZXV0cmUnOiAyLFxuICAgICAgICAgICAgJ3Jlc2lzdGFuY2UgZmV1JzogMixcbiAgICAgICAgICAgICdyw6lzaXN0YW5jZSBlYXUnOiAyLFxuICAgICAgICAgICAgJ3LDqXNpc3RhbmNlIHRlcnJlJzogMixcbiAgICAgICAgICAgICdkb21tYWdlcyBlYXUnIDogNSxcbiAgICAgICAgICAgICdkb21tYWdlcyBjcml0aXF1ZXMnIDogNSxcbiAgICAgICAgICAgICdkb21tYWdlcyB0ZXJyZScgOiA1LFxuICAgICAgICAgICAgJ2RvbW1hZ2VzIG5ldXRyZSc6IDUsXG4gICAgICAgICAgICAnZG9tbWFnZXMgZmV1JzogNSxcbiAgICAgICAgICAgICdkb21tYWdlcyBhaXInIDogNSxcbiAgICAgICAgICAgICclIHLDqXNpc3RhbmNlIHRlcnJlJyA6IDYsXG4gICAgICAgICAgICAnJSByw6lzaXN0YW5jZSBlYXUnIDogNixcbiAgICAgICAgICAgICclIHLDqXNpc3RhbmNlIGZldScgOiA2LFxuICAgICAgICAgICAgJyUgcsOpc2lzdGFuY2UgYWlyJyA6IDYsXG4gICAgICAgICAgICAnJSByw6lzaXN0YW5jZSBuZXV0cmUnIDogNixcbiAgICAgICAgICAgICclIGNyaXRpcXVlJyA6IDEwLFxuICAgICAgICAgICAgJ2Z1aXRlJyA6IDQsXG4gICAgICAgICAgICAnaW52b2NhdGlvbnMnIDogMzAsXG4gICAgICAgICAgICAnZG9tbWFnZXMnIDogMjAsXG4gICAgICAgICAgICAndGFjbGUnIDogNCxcbiAgICAgICAgICAgICdlc3F1aXZlIHBtJzogN1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgd2VpZ2h0IG9mIHRoZSBzdGF0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RhdCBzdHJpbmcgbGlrZSBcInZpdGFsaXTDqVwiXG4gICAgICogQHJldHVybnMge2Jvb2xlYW58Kn0gZmFsc2UgaWYgdGhlIHN0YXQgZG9lc24ndCBleGlzdCBpbiB0aGUgYXJyYXkuIFRoZSB3ZWlnaHQgaWYgaXQgZXhpc3RzXG4gICAgICovXG4gICAgZ2V0V2VpZ2h0T2Yoc3RhdClcbiAgICB7XG4gICAgICAgIGlmICghdGhpcy5ydW5lc1dlaWdodC5oYXNPd25Qcm9wZXJ0eShzdGF0KSkgdGhyb3cgbmV3IE1pc3NpbmdSdW5lV2VpZ2h0RXhjZXB0aW9uKHN0YXQpO1xuICAgICAgICByZXR1cm4gdGhpcy5ydW5lc1dlaWdodFtzdGF0XTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9