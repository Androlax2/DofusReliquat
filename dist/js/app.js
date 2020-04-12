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
reliquatCalc.add('1 résistance terre, -reliquat');
reliquatCalc.add('-reliquat');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0NhbnRDYWxjdWxhdGVSZWxpcXVhdEV4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvUmVsaXF1YXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcnVuZXMvTWlzc2luZ1J1bmVXZWlnaHRFeGNlcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3J1bmVzL1J1bmVzV2VpZ2h0RlIuanMiXSwibmFtZXMiOlsiQ2FudENhbGN1bGF0ZVJlbGlxdWF0RXhjZXB0aW9uIiwibmFtZSIsIm1lc3NhZ2UiLCJzdGFjayIsIkVycm9yIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJSZWxpcXVhdCIsIlJ1bmVzV2VpZ2h0IiwicnVuZXNXZWlnaHQiLCJyZWxpcXVhdCIsImxpbmUiLCJsaW5lU3BsaXR0ZWQiLCJzcGxpdCIsImxpbmVWYWx1ZXMiLCJmb3JFYWNoIiwicHVzaCIsImVuZCIsImxlbmd0aCIsInBvcCIsImxvc2VzIiwid2lucyIsImxpbmVSZWxpcXVhdCIsImxpbmVWYWx1ZSIsInZhbHVlIiwicGFyc2VJbnQiLCJzdGF0IiwidG9TdHJpbmciLCJyZXBsYWNlIiwiUmVnRXhwIiwidG9Mb3dlckNhc2UiLCJ0cmltIiwid2VpZ2h0T2ZTdGF0IiwiZ2V0V2VpZ2h0T2YiLCJNYXRoIiwiYWJzIiwiYWRkVmFsdWUiLCJfYnJlYWtMaW5lIiwicmVsaXF1YXRUeXBlIiwiX3JlbGlxdWF0VHlwZSIsIl9saW5lUmVsaXF1YXQiLCJyZWxpcXVhdENhbGMiLCJSdW5lc1dlaWdodEZSIiwiYWRkIiwiY29uc29sZSIsImxvZyIsImNhbGMiLCJNaXNzaW5nUnVuZVdlaWdodEV4Y2VwdGlvbiIsImhhc093blByb3BlcnR5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNB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QUFZLENBTEc7QUFNZixzQkFBaUIsQ0FORjtBQU9mLG9CQUFlLEdBUEE7QUFRZixxQkFBZ0IsQ0FSRDtBQVNmLGdCQUFXLEVBVEk7QUFVZixZQUFPLEVBVlE7QUFXZixZQUFPLEVBWFE7QUFZZixZQUFPLEdBWlE7QUFhZixlQUFVLEVBYks7QUFjZixtQkFBYyxDQWRDO0FBZWYsd0JBQW1CLENBZko7QUFnQmYsMkJBQXFCLENBaEJOO0FBaUJmLHdCQUFrQixDQWpCSDtBQWtCZix3QkFBa0IsQ0FsQkg7QUFtQmYsMEJBQW9CLENBbkJMO0FBb0JmLHNCQUFpQixDQXBCRjtBQXFCZiw0QkFBdUIsQ0FyQlI7QUFzQmYsd0JBQW1CLENBdEJKO0FBdUJmLHlCQUFtQixDQXZCSjtBQXdCZixzQkFBZ0IsQ0F4QkQ7QUF5QmYsc0JBQWlCLENBekJGO0FBMEJmLDRCQUF1QixDQTFCUjtBQTJCZiwwQkFBcUIsQ0EzQk47QUE0QmYsMEJBQXFCLENBNUJOO0FBNkJmLDBCQUFxQixDQTdCTjtBQThCZiw2QkFBd0IsQ0E5QlQ7QUErQmYsb0JBQWUsRUEvQkE7QUFnQ2YsZUFBVSxDQWhDSztBQWlDZixxQkFBZ0IsRUFqQ0Q7QUFrQ2Ysa0JBQWEsRUFsQ0U7QUFtQ2YsZUFBVSxDQW5DSztBQW9DZixvQkFBYztBQXBDQyxLQUFuQjtBQXNDSDtBQUVEOzs7Ozs7Ozs7O2dDQU1ZaUIsSSxFQUNaO0FBQ0ksVUFBSSxDQUFDLEtBQUtqQixXQUFMLENBQWlCdUMsY0FBakIsQ0FBZ0N0QixJQUFoQyxDQUFMLEVBQTRDLE1BQU0sSUFBSXFCLG1FQUFKLENBQStCckIsSUFBL0IsQ0FBTjtBQUM1QyxhQUFPLEtBQUtqQixXQUFMLENBQWlCaUIsSUFBakIsQ0FBUDtBQUNIIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qKlxuICogSGFuZGxlIHdoZW4gd2UgY2FuJ3QgY2FsY3VsYXRlIHRoZSByZWxpcXVhdCAobWlzc2luZyBkYXRhKVxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDYW50Q2FsY3VsYXRlUmVsaXF1YXRFeGNlcHRpb24oKVxue1xuICAgIHRoaXMubmFtZSA9IFwiQ2FudENhbGN1bGF0ZVJlbGlxdWF0RXhjZXB0aW9uXCI7XG4gICAgdGhpcy5tZXNzYWdlID0gYENBTidUIENBTENVTEFURSBUSElTIFJFTElRVUFULiBNSVNTSU5HIERBVEFgO1xuICAgIHRoaXMuc3RhY2sgPSAobmV3IEVycm9yKCkpLnN0YWNrO1xufVxuQ2FudENhbGN1bGF0ZVJlbGlxdWF0RXhjZXB0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbkNhbnRDYWxjdWxhdGVSZWxpcXVhdEV4Y2VwdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDYW50Q2FsY3VsYXRlUmVsaXF1YXRFeGNlcHRpb247XG5cbmV4cG9ydCBkZWZhdWx0IENhbnRDYWxjdWxhdGVSZWxpcXVhdEV4Y2VwdGlvbjsiLCIvKipcbiAqIFRoaXMgb2JqZWN0IGNhbGN1bGF0ZSB0aGUgcmVsaXF1YXQgb2YgdGhlIGdhbWUgRE9GVVNcbiAqICh1c2VkIGluIFwiRm9yZ2VtYWdpZVwiKVxuICovXG5pbXBvcnQgQ2FudENhbGN1bGF0ZVJlbGlxdWF0RXhjZXB0aW9uIGZyb20gXCIuL0NhbnRDYWxjdWxhdGVSZWxpcXVhdEV4Y2VwdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWxpcXVhdCB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW4gb2JqZWN0IHRvIGNhbGN1bGF0ZSB0aGUgcmVsaXF1YXQuXG4gICAgICogSW5pdGlhbGl6ZSByZWxpcXVhdCB0byAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0gUnVuZXNXZWlnaHQgY2xhc3MgdG8gbWFuYWdlIHJ1bmVzIHdlaWdodCBpbiBkaWZmZXJlbnQgbGFuZ3VhZ2VzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoUnVuZXNXZWlnaHQpXG4gICAge1xuICAgICAgICB0aGlzLnJ1bmVzV2VpZ2h0ID0gUnVuZXNXZWlnaHQ7XG4gICAgICAgIHRoaXMucmVsaXF1YXQgPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJyZWFrIGEgbGluZSBpbnRvIGFuIGFycmF5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGluZSBzdHJpbmcgbGlrZSBcIi0xNSBWaXRhbGl0w6ksICsxNSBTYWdlc3NlLCArcmVsaXF1YXRcIlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2JyZWFrTGluZShsaW5lKVxuICAgIHtcbiAgICAgICAgbGV0IGxpbmVTcGxpdHRlZCA9IGxpbmUuc3BsaXQoJywgJyksXG4gICAgICAgICAgICBsaW5lVmFsdWVzID0gW107XG5cbiAgICAgICAgbGluZVNwbGl0dGVkLmZvckVhY2gobGluZSA9PiBsaW5lVmFsdWVzLnB1c2goW2xpbmVdKSk7XG5cbiAgICAgICAgcmV0dXJuIGxpbmVWYWx1ZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBHZXQgdGhlIHJlbGlxdWF0IHR5cGUgKC1yZWxpcXVhdCBvciArcmVsaXF1YXQpXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGluZVZhbHVlcyBhcnJheSBvZiBhIGxpbmUgbGlrZSA6IFtbXCI1IHZpdGFsaXTDqVwiXSwgW1wiLTE1IFNhZ2Vzc2VcIl0sIFtcIityZWxpcXVhdFwiXV1cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBub3RoaW5nIG9yIGFkZFJlbGlxdWF0IChmb3IgK3JlbGlxdWF0KSBvciByZW1vdmVSZWxpcXVhdCAoZm9yIC1yZWxpcXVhdClcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9yZWxpcXVhdFR5cGUobGluZVZhbHVlcylcbiAgICB7XG4gICAgICAgIGxldCBlbmQgPSBsaW5lVmFsdWVzW2xpbmVWYWx1ZXMubGVuZ3RoIC0xXTtcblxuICAgICAgICBpZiAoZW5kICE9ICctcmVsaXF1YXQnICYmIGVuZCAhPSAnK3JlbGlxdWF0JykgcmV0dXJuOyAvLyBEb24ndCBwcm9jZXNzIHRvIHJlbGlxdWF0IGNhbGN1bGF0aW9uIGlmIHRoZXJlJ3Mgbm8gbGluZSB3aXRoIHJlbGlxdWF0XG4gICAgICAgIGlmIChlbmQgPT0gJytyZWxpcXVhdCcpIHJldHVybiAnYWRkUmVsaXF1YXQnO1xuICAgICAgICBpZiAoZW5kID09ICctcmVsaXF1YXQnKSByZXR1cm4gJ3JlbW92ZVJlbGlxdWF0JztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgdGhlIHJlbGlxdWF0IG9mIHRoZSBsaW5lXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGluZVZhbHVlcyBhcnJheSBvZiBhIGxpbmUgbGlrZSA6IFtbXCI1IHZpdGFsaXTDqVwiXSwgW1wiLTE1IFNhZ2Vzc2VcIl0sIFtcIityZWxpcXVhdFwiXV1cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbnxudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfbGluZVJlbGlxdWF0KGxpbmVWYWx1ZXMpXG4gICAge1xuICAgICAgICBpZiAobGluZVZhbHVlcy5sZW5ndGggPiAwKSBsaW5lVmFsdWVzLnBvcCgpOyAvLyBSZW1vdmUgdGhlICtyZWxpcXVhdCBvciAtcmVsaXF1YXRcblxuICAgICAgICBsZXQgbG9zZXMgPSAwLFxuICAgICAgICAgICAgd2lucyA9IDAsXG4gICAgICAgICAgICBsaW5lUmVsaXF1YXQgPSAwO1xuXG4gICAgICAgIGxpbmVWYWx1ZXMuZm9yRWFjaChsaW5lVmFsdWUgPT4ge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VJbnQobGluZVZhbHVlKSxcbiAgICAgICAgICAgICAgICBzdGF0ID0gbGluZVZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZShuZXcgUmVnRXhwKCdbMC05LV0rJyksICcnKS50b0xvd2VyQ2FzZSgpLnRyaW0oKSxcbiAgICAgICAgICAgICAgICB3ZWlnaHRPZlN0YXQgPSB0aGlzLnJ1bmVzV2VpZ2h0LmdldFdlaWdodE9mKHN0YXQpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgPCAwICYmIHdlaWdodE9mU3RhdCA+IDApIGxvc2VzICs9IHdlaWdodE9mU3RhdCAqIE1hdGguYWJzKHZhbHVlKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlID4gMCkgd2lucyArPSB3ZWlnaHRPZlN0YXQgKiBNYXRoLmFicyh2YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gMCAmJiB3ZWlnaHRPZlN0YXQgPiAwKSBsaW5lUmVsaXF1YXQgPSBsb3NlcyAtIHdpbnM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh3aW5zID09PSAwKSB0aHJvdyBuZXcgQ2FudENhbGN1bGF0ZVJlbGlxdWF0RXhjZXB0aW9uKCk7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhsaW5lUmVsaXF1YXQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGxpbmUgaW4gdGhlIHJlbGlxdWF0IGNhbGN1bGF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGluZSBzdHJpbmcgbGlrZSBcIi0xNSBWaXRhbGl0w6ksICsxNSBTYWdlc3NlLCArcmVsaXF1YXRcIlxuICAgICAqIEBwYXJhbSBhZGRWYWx1ZSBzdHJpbmcgYWRkIG1pc3NlZCBkYXRhIHRvIHRoZSBjYWxjdWxhdGlvblxuICAgICAqL1xuICAgIGFkZChsaW5lLCBhZGRWYWx1ZSlcbiAgICB7XG4gICAgICAgIGlmIChsaW5lID09PSBudWxsIHx8IHR5cGVvZiBsaW5lID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuXG4gICAgICAgIGlmIChhZGRWYWx1ZSkgbGluZSA9IGAke2FkZFZhbHVlfSwgJHtsaW5lfWA7IC8vIEFkZCB0aGUgdmFsdWUgdG8gdGhlIGxpbmUgKHJ1bmUgdXNlZCBieSB0aGUgdXNlcilcblxuICAgICAgICBjb25zdCBsaW5lU3BsaXR0ZWQgPSB0aGlzLl9icmVha0xpbmUobGluZSk7XG4gICAgICAgIGNvbnN0IHJlbGlxdWF0VHlwZSA9IHRoaXMuX3JlbGlxdWF0VHlwZShsaW5lU3BsaXR0ZWQpO1xuICAgICAgICBsZXQgbGluZVJlbGlxdWF0ID0gdGhpcy5fbGluZVJlbGlxdWF0KGxpbmVTcGxpdHRlZCwgcmVsaXF1YXRUeXBlLCBhZGRWYWx1ZSk7XG5cbiAgICAgICAgc3dpdGNoIChyZWxpcXVhdFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FkZFJlbGlxdWF0JzpcbiAgICAgICAgICAgICAgICB0aGlzLnJlbGlxdWF0ICs9IGxpbmVSZWxpcXVhdDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JlbW92ZVJlbGlxdWF0JzpcbiAgICAgICAgICAgICAgICB0aGlzLnJlbGlxdWF0IC09IGxpbmVSZWxpcXVhdDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgcmVsaXF1YXRcbiAgICAgKi9cbiAgICBjYWxjKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbGlxdWF0O1xuICAgIH1cblxufSIsIid1c2Ugc3RyaWN0JztcbmltcG9ydCBSZWxpcXVhdCBmcm9tICcuL1JlbGlxdWF0JztcbmltcG9ydCBSdW5lc1dlaWdodEZSIGZyb20gXCIuL3J1bmVzL1J1bmVzV2VpZ2h0RlJcIjtcblxuY29uc3QgcmVsaXF1YXRDYWxjID0gbmV3IFJlbGlxdWF0KG5ldyBSdW5lc1dlaWdodEZSKCkpO1xuXG5yZWxpcXVhdENhbGMuYWRkKCctMSBQQSwgK3JlbGlxdWF0JywgJzEgcsOpc2lzdGFuY2UgdGVycmUnKTtcbnJlbGlxdWF0Q2FsYy5hZGQoJzEgcsOpc2lzdGFuY2UgdGVycmUsIC1yZWxpcXVhdCcpO1xucmVsaXF1YXRDYWxjLmFkZCgnMSByw6lzaXN0YW5jZSB0ZXJyZSwgLXJlbGlxdWF0Jyk7XG5yZWxpcXVhdENhbGMuYWRkKCctcmVsaXF1YXQnKTtcblxuY29uc29sZS5sb2cocmVsaXF1YXRDYWxjLmNhbGMoKSk7IiwiLyoqXG4gKiBIYW5kbGUgbWlzc2luZyBkYXRhIGV4Y2VwdGlvbiBmb3IgcnVuZXMgd2VpZ2h0c1xuICpcbiAqIEBwYXJhbSBzdGF0XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gTWlzc2luZ1J1bmVXZWlnaHRFeGNlcHRpb24oc3RhdClcbntcbiAgICB0aGlzLm5hbWUgPSBcIk1pc3NpbmdSdW5lV2VpZ2h0RXhjZXB0aW9uXCI7XG4gICAgdGhpcy5tZXNzYWdlID0gYERBVEEgQVJFIE1JU1NJTkcgRk9SICR7c3RhdH1gO1xuICAgIHRoaXMuc3RhY2sgPSAobmV3IEVycm9yKCkpLnN0YWNrO1xufVxuTWlzc2luZ1J1bmVXZWlnaHRFeGNlcHRpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuTWlzc2luZ1J1bmVXZWlnaHRFeGNlcHRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWlzc2luZ1J1bmVXZWlnaHRFeGNlcHRpb247XG5cbmV4cG9ydCBkZWZhdWx0IE1pc3NpbmdSdW5lV2VpZ2h0RXhjZXB0aW9uOyIsIi8qKlxuICogRlJFTkNIXG4gKlxuICogVGhpcyBvYmplY3QgZ2V0IHRoZSB3ZWlnaHQgb2YgZWFjaCBydW5lcyBvZiBET0ZVU1xuICogKHVzZWQgaW4gXCJGb3JnZW1hZ2llXCIpXG4gKi9cbmltcG9ydCBNaXNzaW5nUnVuZVdlaWdodEV4Y2VwdGlvbiBmcm9tIFwiLi9NaXNzaW5nUnVuZVdlaWdodEV4Y2VwdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdW5lc1dlaWdodEZSIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbiBvYmplY3Qgd2l0aCBhbGwgdGhlIHJ1bmVzIHdlaWdodCBpbiBmcmVuY2hcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICB0aGlzLnJ1bmVzV2VpZ2h0ID0ge1xuICAgICAgICAgICAgJ3ZpdGFsaXTDqScgOiAwLjIsXG4gICAgICAgICAgICAnc2FnZXNzZScgOiAzLFxuICAgICAgICAgICAgJ2ZvcmNlJyA6IDEsXG4gICAgICAgICAgICAnY2hhbmNlJyA6IDEsXG4gICAgICAgICAgICAnYWdpbGl0w6knIDogMSxcbiAgICAgICAgICAgICdpbnRlbGxpZ2VuY2UnIDogMSxcbiAgICAgICAgICAgICdpbml0aWF0aXZlJyA6IDAuMSxcbiAgICAgICAgICAgICdwcm9zcGVjdGlvbicgOiAzLFxuICAgICAgICAgICAgJ3BvcnTDqWUnIDogNTEsXG4gICAgICAgICAgICAncG8nIDogNTEsXG4gICAgICAgICAgICAncG0nIDogOTAsXG4gICAgICAgICAgICAncGEnIDogMTAwLFxuICAgICAgICAgICAgJ3NvaW5zJyA6IDEwLFxuICAgICAgICAgICAgJ3B1aXNzYW5jZScgOiAyLFxuICAgICAgICAgICAgJ3LDqXNpc3RhbmNlIGFpcicgOiAyLFxuICAgICAgICAgICAgJ3LDqXNpc3RhbmNlIG5ldXRyZSc6IDIsXG4gICAgICAgICAgICAncmVzaXN0YW5jZSBmZXUnOiAyLFxuICAgICAgICAgICAgJ3LDqXNpc3RhbmNlIGVhdSc6IDIsXG4gICAgICAgICAgICAncsOpc2lzdGFuY2UgdGVycmUnOiAyLFxuICAgICAgICAgICAgJ2RvbW1hZ2VzIGVhdScgOiA1LFxuICAgICAgICAgICAgJ2RvbW1hZ2VzIGNyaXRpcXVlcycgOiA1LFxuICAgICAgICAgICAgJ2RvbW1hZ2VzIHRlcnJlJyA6IDUsXG4gICAgICAgICAgICAnZG9tbWFnZXMgbmV1dHJlJzogNSxcbiAgICAgICAgICAgICdkb21tYWdlcyBmZXUnOiA1LFxuICAgICAgICAgICAgJ2RvbW1hZ2VzIGFpcicgOiA1LFxuICAgICAgICAgICAgJyUgcsOpc2lzdGFuY2UgdGVycmUnIDogNixcbiAgICAgICAgICAgICclIHLDqXNpc3RhbmNlIGVhdScgOiA2LFxuICAgICAgICAgICAgJyUgcsOpc2lzdGFuY2UgZmV1JyA6IDYsXG4gICAgICAgICAgICAnJSByw6lzaXN0YW5jZSBhaXInIDogNixcbiAgICAgICAgICAgICclIHLDqXNpc3RhbmNlIG5ldXRyZScgOiA2LFxuICAgICAgICAgICAgJyUgY3JpdGlxdWUnIDogMTAsXG4gICAgICAgICAgICAnZnVpdGUnIDogNCxcbiAgICAgICAgICAgICdpbnZvY2F0aW9ucycgOiAzMCxcbiAgICAgICAgICAgICdkb21tYWdlcycgOiAyMCxcbiAgICAgICAgICAgICd0YWNsZScgOiA0LFxuICAgICAgICAgICAgJ2VzcXVpdmUgcG0nOiA3XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSB3ZWlnaHQgb2YgdGhlIHN0YXRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdGF0IHN0cmluZyBsaWtlIFwidml0YWxpdMOpXCJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbnwqfSBmYWxzZSBpZiB0aGUgc3RhdCBkb2Vzbid0IGV4aXN0IGluIHRoZSBhcnJheS4gVGhlIHdlaWdodCBpZiBpdCBleGlzdHNcbiAgICAgKi9cbiAgICBnZXRXZWlnaHRPZihzdGF0KVxuICAgIHtcbiAgICAgICAgaWYgKCF0aGlzLnJ1bmVzV2VpZ2h0Lmhhc093blByb3BlcnR5KHN0YXQpKSB0aHJvdyBuZXcgTWlzc2luZ1J1bmVXZWlnaHRFeGNlcHRpb24oc3RhdCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJ1bmVzV2VpZ2h0W3N0YXRdO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=