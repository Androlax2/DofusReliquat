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

/***/ "./src/js/Reliquat.js":
/*!****************************!*\
  !*** ./src/js/Reliquat.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Reliquat; });
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
      if (wins === 0 || loses === 0) return false; // We cant' calculate the reliquat if we miss data

      return lineReliquat;
    }
    /**
     * Add a line in the reliquat calculation
     *
     * @param line string like "-15 Vitalité, +15 Sagesse, +reliquat"
     * @param addValue string add missed data to the calculation
     * @returns {number|boolean}
     */

  }, {
    key: "add",
    value: function add(line, addValue) {
      if (line === null || typeof line === 'undefined') return;
      if (addValue) line = "".concat(addValue, ", ").concat(line); // Add the value to the line (rune used by the user)

      var lineSplitted = this._breakLine(line);

      var reliquatType = this._reliquatType(lineSplitted);

      var lineReliquat = this._lineReliquat(lineSplitted);

      switch (reliquatType) {
        case 'addReliquat':
          this.reliquat += lineReliquat;
          break;

        case 'removeReliquat':
          this.reliquat -= lineReliquat;
          break;
      }

      return lineReliquat;
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
reliquatCalc.add('-1 PA, +reliquat', '5 Vitalité');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1JlbGlxdWF0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3J1bmVzL01pc3NpbmdSdW5lV2VpZ2h0RXhjZXB0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ydW5lcy9SdW5lc1dlaWdodEZSLmpzIl0sIm5hbWVzIjpbIlJlbGlxdWF0IiwiUnVuZXNXZWlnaHQiLCJydW5lc1dlaWdodCIsInJlbGlxdWF0IiwibGluZSIsImxpbmVTcGxpdHRlZCIsInNwbGl0IiwibGluZVZhbHVlcyIsImZvckVhY2giLCJwdXNoIiwiZW5kIiwibGVuZ3RoIiwicG9wIiwibG9zZXMiLCJ3aW5zIiwibGluZVJlbGlxdWF0IiwibGluZVZhbHVlIiwidmFsdWUiLCJwYXJzZUludCIsInN0YXQiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJSZWdFeHAiLCJ0b0xvd2VyQ2FzZSIsInRyaW0iLCJ3ZWlnaHRPZlN0YXQiLCJnZXRXZWlnaHRPZiIsIk1hdGgiLCJhYnMiLCJhZGRWYWx1ZSIsIl9icmVha0xpbmUiLCJyZWxpcXVhdFR5cGUiLCJfcmVsaXF1YXRUeXBlIiwiX2xpbmVSZWxpcXVhdCIsInJlbGlxdWF0Q2FsYyIsIlJ1bmVzV2VpZ2h0RlIiLCJhZGQiLCJjb25zb2xlIiwibG9nIiwiY2FsYyIsIk1pc3NpbmdSdW5lV2VpZ2h0RXhjZXB0aW9uIiwibmFtZSIsIm1lc3NhZ2UiLCJzdGFjayIsIkVycm9yIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNB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QWtDZixrQkFBYSxFQWxDRTtBQW1DZixlQUFVLENBbkNLO0FBb0NmLG9CQUFjO0FBcENDLEtBQW5CO0FBc0NIO0FBRUQ7Ozs7Ozs7Ozs7Z0NBTVlpQixJLEVBQ1o7QUFDSSxVQUFJLENBQUMsS0FBS2pCLFdBQUwsQ0FBaUIrQyxjQUFqQixDQUFnQzlCLElBQWhDLENBQUwsRUFBNEMsTUFBTSxJQUFJcUIsbUVBQUosQ0FBK0JyQixJQUEvQixDQUFOO0FBQzVDLGFBQU8sS0FBS2pCLFdBQUwsQ0FBaUJpQixJQUFqQixDQUFQO0FBQ0giLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyoqXG4gKiBUaGlzIG9iamVjdCBjYWxjdWxhdGUgdGhlIHJlbGlxdWF0IG9mIHRoZSBnYW1lIERPRlVTXG4gKiAodXNlZCBpbiBcIkZvcmdlbWFnaWVcIilcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsaXF1YXQge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuIG9iamVjdCB0byBjYWxjdWxhdGUgdGhlIHJlbGlxdWF0LlxuICAgICAqIEluaXRpYWxpemUgcmVsaXF1YXQgdG8gMFxuICAgICAqXG4gICAgICogQHBhcmFtIFJ1bmVzV2VpZ2h0IGNsYXNzIHRvIG1hbmFnZSBydW5lcyB3ZWlnaHQgaW4gZGlmZmVyZW50IGxhbmd1YWdlc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKFJ1bmVzV2VpZ2h0KVxuICAgIHtcbiAgICAgICAgdGhpcy5ydW5lc1dlaWdodCA9IFJ1bmVzV2VpZ2h0O1xuICAgICAgICB0aGlzLnJlbGlxdWF0ID0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCcmVhayBhIGxpbmUgaW50byBhbiBhcnJheVxuICAgICAqXG4gICAgICogQHBhcmFtIGxpbmUgc3RyaW5nIGxpa2UgXCItMTUgVml0YWxpdMOpLCArMTUgU2FnZXNzZSwgK3JlbGlxdWF0XCJcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9icmVha0xpbmUobGluZSlcbiAgICB7XG4gICAgICAgIGxldCBsaW5lU3BsaXR0ZWQgPSBsaW5lLnNwbGl0KCcsICcpLFxuICAgICAgICAgICAgbGluZVZhbHVlcyA9IFtdO1xuXG4gICAgICAgIGxpbmVTcGxpdHRlZC5mb3JFYWNoKGxpbmUgPT4gbGluZVZhbHVlcy5wdXNoKFtsaW5lXSkpO1xuXG4gICAgICAgIHJldHVybiBsaW5lVmFsdWVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogR2V0IHRoZSByZWxpcXVhdCB0eXBlICgtcmVsaXF1YXQgb3IgK3JlbGlxdWF0KVxuICAgICAqXG4gICAgICogQHBhcmFtIGxpbmVWYWx1ZXMgYXJyYXkgb2YgYSBsaW5lIGxpa2UgOiBbW1wiNSB2aXRhbGl0w6lcIl0sIFtcIi0xNSBTYWdlc3NlXCJdLCBbXCIrcmVsaXF1YXRcIl1dXG4gICAgICogQHJldHVybnMge3N0cmluZ30gbm90aGluZyBvciBhZGRSZWxpcXVhdCAoZm9yICtyZWxpcXVhdCkgb3IgcmVtb3ZlUmVsaXF1YXQgKGZvciAtcmVsaXF1YXQpXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfcmVsaXF1YXRUeXBlKGxpbmVWYWx1ZXMpXG4gICAge1xuICAgICAgICBsZXQgZW5kID0gbGluZVZhbHVlc1tsaW5lVmFsdWVzLmxlbmd0aCAtMV07XG5cbiAgICAgICAgaWYgKGVuZCAhPSAnLXJlbGlxdWF0JyAmJiBlbmQgIT0gJytyZWxpcXVhdCcpIHJldHVybjsgLy8gRG9uJ3QgcHJvY2VzcyB0byByZWxpcXVhdCBjYWxjdWxhdGlvbiBpZiB0aGVyZSdzIG5vIGxpbmUgd2l0aCByZWxpcXVhdFxuICAgICAgICBpZiAoZW5kID09ICcrcmVsaXF1YXQnKSByZXR1cm4gJ2FkZFJlbGlxdWF0JztcbiAgICAgICAgaWYgKGVuZCA9PSAnLXJlbGlxdWF0JykgcmV0dXJuICdyZW1vdmVSZWxpcXVhdCc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIHRoZSByZWxpcXVhdCBvZiB0aGUgbGluZVxuICAgICAqXG4gICAgICogQHBhcmFtIGxpbmVWYWx1ZXMgYXJyYXkgb2YgYSBsaW5lIGxpa2UgOiBbW1wiNSB2aXRhbGl0w6lcIl0sIFtcIi0xNSBTYWdlc3NlXCJdLCBbXCIrcmVsaXF1YXRcIl1dXG4gICAgICogQHJldHVybnMge2Jvb2xlYW58bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2xpbmVSZWxpcXVhdChsaW5lVmFsdWVzKVxuICAgIHtcbiAgICAgICAgaWYgKGxpbmVWYWx1ZXMubGVuZ3RoID4gMSkgbGluZVZhbHVlcy5wb3AoKTsgLy8gUmVtb3ZlIHRoZSArcmVsaXF1YXQgb3IgLXJlbGlxdWF0XG5cbiAgICAgICAgbGV0IGxvc2VzID0gMCxcbiAgICAgICAgICAgIHdpbnMgPSAwLFxuICAgICAgICAgICAgbGluZVJlbGlxdWF0ID0gMDtcblxuICAgICAgICBsaW5lVmFsdWVzLmZvckVhY2gobGluZVZhbHVlID0+IHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlSW50KGxpbmVWYWx1ZSksXG4gICAgICAgICAgICAgICAgc3RhdCA9IGxpbmVWYWx1ZS50b1N0cmluZygpLnJlcGxhY2UobmV3IFJlZ0V4cCgnWzAtOS1dKycpLCAnJykudG9Mb3dlckNhc2UoKS50cmltKCksXG4gICAgICAgICAgICAgICAgd2VpZ2h0T2ZTdGF0ID0gdGhpcy5ydW5lc1dlaWdodC5nZXRXZWlnaHRPZihzdGF0KTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlIDwgMCAmJiB3ZWlnaHRPZlN0YXQgPiAwKSBsb3NlcyArPSB3ZWlnaHRPZlN0YXQgKiBNYXRoLmFicyh2YWx1ZSk7XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA+IDApIHdpbnMgKz0gd2VpZ2h0T2ZTdGF0ICogTWF0aC5hYnModmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IDAgJiYgd2VpZ2h0T2ZTdGF0ID4gMCkgbGluZVJlbGlxdWF0ID0gbG9zZXMgLSB3aW5zO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAod2lucyA9PT0gMCB8fCBsb3NlcyA9PT0gMCkgcmV0dXJuIGZhbHNlOyAvLyBXZSBjYW50JyBjYWxjdWxhdGUgdGhlIHJlbGlxdWF0IGlmIHdlIG1pc3MgZGF0YVxuICAgICAgICByZXR1cm4gbGluZVJlbGlxdWF0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGxpbmUgaW4gdGhlIHJlbGlxdWF0IGNhbGN1bGF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGluZSBzdHJpbmcgbGlrZSBcIi0xNSBWaXRhbGl0w6ksICsxNSBTYWdlc3NlLCArcmVsaXF1YXRcIlxuICAgICAqIEBwYXJhbSBhZGRWYWx1ZSBzdHJpbmcgYWRkIG1pc3NlZCBkYXRhIHRvIHRoZSBjYWxjdWxhdGlvblxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ8Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBhZGQobGluZSwgYWRkVmFsdWUpXG4gICAge1xuICAgICAgICBpZiAobGluZSA9PT0gbnVsbCB8fCB0eXBlb2YgbGluZSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICAgICAgaWYgKGFkZFZhbHVlKSBsaW5lID0gYCR7YWRkVmFsdWV9LCAke2xpbmV9YDsgLy8gQWRkIHRoZSB2YWx1ZSB0byB0aGUgbGluZSAocnVuZSB1c2VkIGJ5IHRoZSB1c2VyKVxuXG4gICAgICAgIGNvbnN0IGxpbmVTcGxpdHRlZCA9IHRoaXMuX2JyZWFrTGluZShsaW5lKTtcbiAgICAgICAgY29uc3QgcmVsaXF1YXRUeXBlID0gdGhpcy5fcmVsaXF1YXRUeXBlKGxpbmVTcGxpdHRlZCk7XG4gICAgICAgIGxldCBsaW5lUmVsaXF1YXQgPSB0aGlzLl9saW5lUmVsaXF1YXQobGluZVNwbGl0dGVkKTtcblxuICAgICAgICBzd2l0Y2ggKHJlbGlxdWF0VHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnYWRkUmVsaXF1YXQnOlxuICAgICAgICAgICAgICAgIHRoaXMucmVsaXF1YXQgKz0gbGluZVJlbGlxdWF0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVtb3ZlUmVsaXF1YXQnOlxuICAgICAgICAgICAgICAgIHRoaXMucmVsaXF1YXQgLT0gbGluZVJlbGlxdWF0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpbmVSZWxpcXVhdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHJlbGlxdWF0XG4gICAgICovXG4gICAgY2FsYygpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWxpcXVhdDtcbiAgICB9XG5cbn0iLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgUmVsaXF1YXQgZnJvbSAnLi9SZWxpcXVhdCc7XG5pbXBvcnQgUnVuZXNXZWlnaHRGUiBmcm9tIFwiLi9ydW5lcy9SdW5lc1dlaWdodEZSXCI7XG5cbmNvbnN0IHJlbGlxdWF0Q2FsYyA9IG5ldyBSZWxpcXVhdChuZXcgUnVuZXNXZWlnaHRGUigpKTtcblxucmVsaXF1YXRDYWxjXG4gICAgLmFkZCgnLTEgUEEsICtyZWxpcXVhdCcsICc1IFZpdGFsaXTDqScpO1xuXG5jb25zb2xlLmxvZyhyZWxpcXVhdENhbGMuY2FsYygpKTsiLCIvKipcbiAqIEhhbmRsZSBtaXNzaW5nIGRhdGEgZXhjZXB0aW9uIGZvciBydW5lcyB3ZWlnaHRzXG4gKlxuICogQHBhcmFtIHN0YXRcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBNaXNzaW5nUnVuZVdlaWdodEV4Y2VwdGlvbihzdGF0KVxue1xuICAgIHRoaXMubmFtZSA9IFwiTWlzc2luZ1J1bmVXZWlnaHRFeGNlcHRpb25cIjtcbiAgICB0aGlzLm1lc3NhZ2UgPSBgREFUQSBBUkUgTUlTU0lORyBGT1IgJHtzdGF0fWA7XG4gICAgdGhpcy5zdGFjayA9IChuZXcgRXJyb3IoKSkuc3RhY2s7XG59XG5NaXNzaW5nUnVuZVdlaWdodEV4Y2VwdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5NaXNzaW5nUnVuZVdlaWdodEV4Y2VwdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNaXNzaW5nUnVuZVdlaWdodEV4Y2VwdGlvbjtcblxuZXhwb3J0IGRlZmF1bHQgTWlzc2luZ1J1bmVXZWlnaHRFeGNlcHRpb247IiwiLyoqXG4gKiBGUkVOQ0hcbiAqXG4gKiBUaGlzIG9iamVjdCBnZXQgdGhlIHdlaWdodCBvZiBlYWNoIHJ1bmVzIG9mIERPRlVTXG4gKiAodXNlZCBpbiBcIkZvcmdlbWFnaWVcIilcbiAqL1xuaW1wb3J0IE1pc3NpbmdSdW5lV2VpZ2h0RXhjZXB0aW9uIGZyb20gXCIuL01pc3NpbmdSdW5lV2VpZ2h0RXhjZXB0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bmVzV2VpZ2h0RlIge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuIG9iamVjdCB3aXRoIGFsbCB0aGUgcnVuZXMgd2VpZ2h0IGluIGZyZW5jaFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKClcbiAgICB7XG4gICAgICAgIHRoaXMucnVuZXNXZWlnaHQgPSB7XG4gICAgICAgICAgICAndml0YWxpdMOpJyA6IDAuMixcbiAgICAgICAgICAgICdzYWdlc3NlJyA6IDMsXG4gICAgICAgICAgICAnZm9yY2UnIDogMSxcbiAgICAgICAgICAgICdjaGFuY2UnIDogMSxcbiAgICAgICAgICAgICdhZ2lsaXTDqScgOiAxLFxuICAgICAgICAgICAgJ2ludGVsbGlnZW5jZScgOiAxLFxuICAgICAgICAgICAgJ2luaXRpYXRpdmUnIDogMC4xLFxuICAgICAgICAgICAgJ3Byb3NwZWN0aW9uJyA6IDMsXG4gICAgICAgICAgICAncG9ydMOpZScgOiA1MSxcbiAgICAgICAgICAgICdwbycgOiA1MSxcbiAgICAgICAgICAgICdwbScgOiA5MCxcbiAgICAgICAgICAgICdwYScgOiAxMDAsXG4gICAgICAgICAgICAnc29pbnMnIDogMTAsXG4gICAgICAgICAgICAncHVpc3NhbmNlJyA6IDIsXG4gICAgICAgICAgICAncsOpc2lzdGFuY2UgYWlyJyA6IDIsXG4gICAgICAgICAgICAncsOpc2lzdGFuY2UgbmV1dHJlJzogMixcbiAgICAgICAgICAgICdyZXNpc3RhbmNlIGZldSc6IDIsXG4gICAgICAgICAgICAncsOpc2lzdGFuY2UgZWF1JzogMixcbiAgICAgICAgICAgICdyw6lzaXN0YW5jZSB0ZXJyZSc6IDIsXG4gICAgICAgICAgICAnZG9tbWFnZXMgZWF1JyA6IDUsXG4gICAgICAgICAgICAnZG9tbWFnZXMgY3JpdGlxdWVzJyA6IDUsXG4gICAgICAgICAgICAnZG9tbWFnZXMgdGVycmUnIDogNSxcbiAgICAgICAgICAgICdkb21tYWdlcyBuZXV0cmUnOiA1LFxuICAgICAgICAgICAgJ2RvbW1hZ2VzIGZldSc6IDUsXG4gICAgICAgICAgICAnZG9tbWFnZXMgYWlyJyA6IDUsXG4gICAgICAgICAgICAnJSByw6lzaXN0YW5jZSB0ZXJyZScgOiA2LFxuICAgICAgICAgICAgJyUgcsOpc2lzdGFuY2UgZWF1JyA6IDYsXG4gICAgICAgICAgICAnJSByw6lzaXN0YW5jZSBmZXUnIDogNixcbiAgICAgICAgICAgICclIHLDqXNpc3RhbmNlIGFpcicgOiA2LFxuICAgICAgICAgICAgJyUgcsOpc2lzdGFuY2UgbmV1dHJlJyA6IDYsXG4gICAgICAgICAgICAnJSBjcml0aXF1ZScgOiAxMCxcbiAgICAgICAgICAgICdmdWl0ZScgOiA0LFxuICAgICAgICAgICAgJ2ludm9jYXRpb25zJyA6IDMwLFxuICAgICAgICAgICAgJ2RvbW1hZ2VzJyA6IDIwLFxuICAgICAgICAgICAgJ3RhY2xlJyA6IDQsXG4gICAgICAgICAgICAnZXNxdWl2ZSBwbSc6IDdcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHdlaWdodCBvZiB0aGUgc3RhdFxuICAgICAqXG4gICAgICogQHBhcmFtIHN0YXQgc3RyaW5nIGxpa2UgXCJ2aXRhbGl0w6lcIlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufCp9IGZhbHNlIGlmIHRoZSBzdGF0IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIGFycmF5LiBUaGUgd2VpZ2h0IGlmIGl0IGV4aXN0c1xuICAgICAqL1xuICAgIGdldFdlaWdodE9mKHN0YXQpXG4gICAge1xuICAgICAgICBpZiAoIXRoaXMucnVuZXNXZWlnaHQuaGFzT3duUHJvcGVydHkoc3RhdCkpIHRocm93IG5ldyBNaXNzaW5nUnVuZVdlaWdodEV4Y2VwdGlvbihzdGF0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMucnVuZXNXZWlnaHRbc3RhdF07XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==