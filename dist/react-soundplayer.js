(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("soundcloud-audio"));
	else if(typeof define === 'function' && define.amd)
		define("ReactSoundplayer", ["react", "soundcloud-audio"], factory);
	else if(typeof exports === 'object')
		exports["ReactSoundplayer"] = factory(require("react"), require("soundcloud-audio"));
	else
		root["ReactSoundplayer"] = factory(root["React"], root["SoundCloudAudio"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(26)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(25)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VolumeIconMuteSVG = exports.VolumeIconLoudSVG = exports.VolumeIconSVG = exports.PrevIconSVG = exports.NextIconSVG = exports.PauseIconSVG = exports.PlayIconSVG = exports.ButtonIconSVG = exports.SoundCloudLogoSVG = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// SoundCloud Logo
var SoundCloudLogoSVG = exports.SoundCloudLogoSVG = function SoundCloudLogoSVG() {
  return _react2.default.createElement("svg", {
    className: "sb-soundplayer-cover-logo",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor"
  }, _react2.default.createElement("path", { d: "M10.517 3.742c-.323 0-.49.363-.49.582 0 0-.244 3.591-.244 4.641 0 1.602.15 2.621.15 2.621 0 .222.261.401.584.401.321 0 .519-.179.519-.401 0 0 .398-1.038.398-2.639 0-1.837-.153-4.127-.284-4.592-.112-.395-.313-.613-.633-.613zm-1.996.268c-.323 0-.49.363-.49.582 0 0-.244 3.322-.244 4.372 0 1.602.119 2.621.119 2.621 0 .222.26.401.584.401.321 0 .581-.179.581-.401 0 0 .081-1.007.081-2.608 0-1.837-.206-4.386-.206-4.386 0-.218-.104-.581-.425-.581zm-2.021 1.729c-.324 0-.49.362-.49.582 0 0-.272 1.594-.272 2.644 0 1.602.179 2.559.179 2.559 0 .222.229.463.552.463.321 0 .519-.241.519-.463 0 0 .19-.944.19-2.546 0-1.837-.253-2.657-.253-2.657 0-.22-.104-.582-.425-.582zm-2.046-.358c-.323 0-.49.363-.49.582 0 0-.162 1.92-.162 2.97 0 1.602.069 2.496.069 2.496 0 .222.26.557.584.557.321 0 .581-.304.581-.526 0 0 .143-.936.143-2.538 0-1.837-.206-2.96-.206-2.96 0-.218-.198-.581-.519-.581zm-2.169 1.482c-.272 0-.232.218-.232.218v3.982s-.04.335.232.335c.351 0 .716-.832.716-2.348 0-1.245-.436-2.187-.716-2.187zm18.715-.976c-.289 0-.567.042-.832.116-.417-2.266-2.806-3.989-5.263-3.989-1.127 0-2.095.705-2.931 1.316v8.16s0 .484.5.484h8.526c1.655 0 3-1.55 3-3.155 0-1.607-1.346-2.932-3-2.932zm10.17.857c-1.077-.253-1.368-.389-1.368-.815 0-.3.242-.611.97-.611.621 0 1.106.253 1.542.699l.981-.951c-.641-.669-1.417-1.067-2.474-1.067-1.339 0-2.425.757-2.425 1.99 0 1.338.873 1.736 2.124 2.026 1.281.291 1.513.486 1.513.923 0 .514-.379.738-1.184.738-.65 0-1.26-.223-1.736-.777l-.98.873c.514.757 1.504 1.232 2.639 1.232 1.853 0 2.668-.873 2.668-2.163 0-1.477-1.193-1.845-2.27-2.097zm6.803-2.745c-1.853 0-2.949 1.435-2.949 3.502s1.096 3.501 2.949 3.501c1.852 0 2.949-1.434 2.949-3.501s-1.096-3.502-2.949-3.502zm0 5.655c-1.097 0-1.553-.941-1.553-2.153 0-1.213.456-2.153 1.553-2.153 1.096 0 1.551.94 1.551 2.153.001 1.213-.454 2.153-1.551 2.153zm8.939-1.736c0 1.086-.533 1.756-1.396 1.756-.864 0-1.388-.689-1.388-1.775v-3.897h-1.358v3.916c0 1.978 1.106 3.084 2.746 3.084 1.726 0 2.754-1.136 2.754-3.103v-3.897h-1.358v3.916zm8.142-.89l.019 1.485c-.087-.174-.31-.515-.475-.768l-2.703-3.692h-1.362v6.894h1.401v-2.988l-.02-1.484c.088.175.311.514.475.767l2.79 3.705h1.213v-6.894h-1.339v2.975zm5.895-2.923h-2.124v6.791h2.027c1.746 0 3.474-1.01 3.474-3.395 0-2.484-1.437-3.396-3.377-3.396zm-.097 5.472h-.67v-4.152h.719c1.436 0 2.028.688 2.028 2.076 0 1.242-.651 2.076-2.077 2.076zm7.909-4.229c.611 0 1 .271 1.242.737l1.26-.582c-.426-.883-1.202-1.503-2.483-1.503-1.775 0-3.016 1.435-3.016 3.502 0 2.143 1.191 3.501 2.968 3.501 1.232 0 2.047-.572 2.513-1.533l-1.145-.68c-.358.602-.718.864-1.329.864-1.019 0-1.611-.932-1.611-2.153-.001-1.261.583-2.153 1.601-2.153zm5.17-1.192h-1.359v6.791h4.083v-1.338h-2.724v-5.453zm6.396-.157c-1.854 0-2.949 1.435-2.949 3.502s1.095 3.501 2.949 3.501c1.853 0 2.95-1.434 2.95-3.501s-1.097-3.502-2.95-3.502zm0 5.655c-1.097 0-1.553-.941-1.553-2.153 0-1.213.456-2.153 1.553-2.153 1.095 0 1.55.94 1.55 2.153.001 1.213-.454 2.153-1.55 2.153zm8.557-1.736c0 1.086-.532 1.756-1.396 1.756-.864 0-1.388-.689-1.388-1.775v-3.794h-1.358v3.813c0 1.978 1.106 3.084 2.746 3.084 1.726 0 2.755-1.136 2.755-3.103v-3.794h-1.36v3.813zm5.449-3.907h-2.318v6.978h2.211c1.908 0 3.789-1.037 3.789-3.489 0-2.552-1.565-3.489-3.682-3.489zm-.108 5.623h-.729v-4.266h.783c1.565 0 2.21.706 2.21 2.133.001 1.276-.707 2.133-2.264 2.133z" }));
};

// Player Button Icons
var ButtonIconSVG = exports.ButtonIconSVG = function ButtonIconSVG(props) {
  return _react2.default.createElement("svg", {
    className: "sb-soundplayer-icon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor"
  }, props.children);
};

// |> Play
var PlayIconSVG = exports.PlayIconSVG = function PlayIconSVG() {
  return _react2.default.createElement(ButtonIconSVG, null, _react2.default.createElement("path", { d: "M0 0 L32 16 L0 32 z" }));
};

// || Pause
var PauseIconSVG = exports.PauseIconSVG = function PauseIconSVG() {
  return _react2.default.createElement(ButtonIconSVG, null, _react2.default.createElement("path", { d: "M0 0 H12 V32 H0 z M20 0 H32 V32 H20 z" }));
};

// |>| Next
var NextIconSVG = exports.NextIconSVG = function NextIconSVG() {
  return _react2.default.createElement(ButtonIconSVG, null, _react2.default.createElement("path", { d: "M4 4 L24 14 V4 H28 V28 H24 V18 L4 28 z " }));
};

// |<| Prev
var PrevIconSVG = exports.PrevIconSVG = function PrevIconSVG() {
  return _react2.default.createElement(ButtonIconSVG, null, _react2.default.createElement("path", { d: "M4 4 H8 V14 L28 4 V28 L8 18 V28 H4 z " }));
};

// Volume
var VolumeIconSVG = exports.VolumeIconSVG = function VolumeIconSVG(props) {
  return _react2.default.createElement("svg", {
    className: "sb-soundplayer-icon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 75 75",
    fill: "currentColor",
    stroke: "currentColor"
  }, props.children);
};
var VolumeIconLoudSVG = exports.VolumeIconLoudSVG = function VolumeIconLoudSVG() {
  return _react2.default.createElement(VolumeIconSVG, null, _react2.default.createElement("polygon", { points: "39.389,13.769 22.235,28.606 6,28.606 6,47.699 21.989,47.699 39.389,62.75 39.389,13.769", style: { strokeWidth: 5, strokeLinejoin: 'round' } }), _react2.default.createElement("path", { d: "M 48.128,49.03 C 50.057,45.934 51.19,42.291 51.19,38.377 C 51.19,34.399 50.026,30.703 48.043,27.577", style: { fill: 'none', strokeWidth: 5, strokeLinecap: 'round' } }), _react2.default.createElement("path", { d: "M 55.082,20.537 C 58.777,25.523 60.966,31.694 60.966,38.377 C 60.966,44.998 58.815,51.115 55.178,56.076", style: { fill: 'none', strokeWidth: 5, strokeLinecap: 'round' } }), _react2.default.createElement("path", { d: "M 61.71,62.611 C 66.977,55.945 70.128,47.531 70.128,38.378 C 70.128,29.161 66.936,20.696 61.609,14.01", style: { fill: 'none', strokeWidth: 5, strokeLinecap: 'round' } }));
};

var VolumeIconMuteSVG = exports.VolumeIconMuteSVG = function VolumeIconMuteSVG() {
  return _react2.default.createElement(VolumeIconSVG, null, _react2.default.createElement("polygon", { points: "39.389,13.769 22.235,28.606 6,28.606 6,47.699 21.989,47.699 39.389,62.75 39.389,13.769", style: { stroke: '#11111', strokeWidth: 5, strokeLinejoin: 'round' } }), _react2.default.createElement("path", { d: "M 48.651772,50.269646 69.395223,25.971024", style: { fill: 'none', strokeWidth: 5, strokeLinecap: 'round' } }), _react2.default.createElement("path", { d: "M 69.395223,50.269646 48.651772,25.971024", style: { fill: 'none', strokeWidth: 5, strokeLinecap: 'round' } }));
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

exports.default = withSoundCloudAudio;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _soundcloudAudio = __webpack_require__(3);

var _soundcloudAudio2 = _interopRequireDefault(_soundcloudAudio);

var _hoistNonReactStatics = __webpack_require__(22);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _audioStore = __webpack_require__(21);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function withSoundCloudAudio(WrappedComponent) {
  var WithSoundCloudAudio = function (_Component) {
    _inherits(WithSoundCloudAudio, _Component);

    function WithSoundCloudAudio(props, context) {
      _classCallCheck(this, WithSoundCloudAudio);

      var _this = _possibleConstructorReturn(this, (WithSoundCloudAudio.__proto__ || Object.getPrototypeOf(WithSoundCloudAudio)).call(this, props, context));

      if (!props.clientId && !props.soundCloudAudio && !props.streamUrl) {
        console.warn('You need to get a clientId from SoundCloud,\n          pass in an instance of SoundCloudAudio\n          or use streamUrl with audio source instead\n          https://github.com/soundblogs/react-soundplayer#examples');
      }

      // Don't create a SoundCloudAudio instance
      // if there is no `window`
      if ('undefined' !== typeof window) {
        if (props.soundCloudAudio) {
          _this.soundCloudAudio = props.soundCloudAudio;
        } else {
          _this.soundCloudAudio = new _soundcloudAudio2.default(props.clientId);
        }
      }

      _this.state = {
        duration: 0,
        currentTime: 0,
        seeking: false,
        playing: false,
        volume: 1,
        isMuted: false
      };
      return _this;
    }

    _createClass(WithSoundCloudAudio, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.mounted = true;

        this.requestAudio();
        this.listenAudioEvents();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.mounted = false;

        (0, _audioStore.resetPlayedStore)();
        this.soundCloudAudio.unbindAll();
      }
    }, {
      key: 'requestAudio',
      value: function requestAudio() {
        var _this2 = this;

        var soundCloudAudio = this.soundCloudAudio;
        var _props = this.props,
            resolveUrl = _props.resolveUrl,
            streamUrl = _props.streamUrl,
            preloadType = _props.preloadType,
            onReady = _props.onReady;

        if (streamUrl) {
          soundCloudAudio.preload(streamUrl, preloadType);
        } else if (resolveUrl) {
          soundCloudAudio.resolve(resolveUrl, function (data) {
            if (!_this2.mounted) {
              return;
            }

            _this2.setState(_defineProperty({}, data.tracks ? 'playlist' : 'track', data), function () {
              return onReady && onReady();
            });
          });
        }
      }
    }, {
      key: 'listenAudioEvents',
      value: function listenAudioEvents() {
        var soundCloudAudio = this.soundCloudAudio;

        // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events

        soundCloudAudio.on('playing', this.onAudioStarted.bind(this));
        soundCloudAudio.on('timeupdate', this.getCurrentTime.bind(this));
        soundCloudAudio.on('loadedmetadata', this.getDuration.bind(this));
        soundCloudAudio.on('seeking', this.onSeekingTrack.bind(this));
        soundCloudAudio.on('seeked', this.onSeekedTrack.bind(this));
        soundCloudAudio.on('pause', this.onAudioPaused.bind(this));
        soundCloudAudio.on('ended', this.onAudioEnded.bind(this));
        soundCloudAudio.on('volumechange', this.onVolumeChange.bind(this));
      }
    }, {
      key: 'onSeekingTrack',
      value: function onSeekingTrack() {
        this.setState({ seeking: true });
      }
    }, {
      key: 'onSeekedTrack',
      value: function onSeekedTrack() {
        this.setState({ seeking: false });
      }
    }, {
      key: 'onAudioStarted',
      value: function onAudioStarted() {
        var soundCloudAudio = this.soundCloudAudio;
        var onStartTrack = this.props.onStartTrack;

        this.setState({ playing: true });

        (0, _audioStore.stopAllOther)(soundCloudAudio.playing);
        (0, _audioStore.addToPlayedStore)(soundCloudAudio);

        onStartTrack && onStartTrack(soundCloudAudio, soundCloudAudio.playing);
      }
    }, {
      key: 'onAudioPaused',
      value: function onAudioPaused() {
        var onPauseTrack = this.props.onPauseTrack;

        this.setState({ playing: false });

        onPauseTrack && onPauseTrack(this.soundCloudAudio);
      }
    }, {
      key: 'onAudioEnded',
      value: function onAudioEnded() {
        var onStopTrack = this.props.onStopTrack;

        this.setState({ playing: false });

        onStopTrack && onStopTrack(this.soundCloudAudio);
      }
    }, {
      key: 'onVolumeChange',
      value: function onVolumeChange() {
        this.setState({
          volume: this.soundCloudAudio.audio.volume,
          isMuted: this.soundCloudAudio.audio.muted
        });
      }
    }, {
      key: 'getCurrentTime',
      value: function getCurrentTime() {
        this.setState({
          currentTime: this.soundCloudAudio.audio.currentTime
        });
      }
    }, {
      key: 'getDuration',
      value: function getDuration() {
        this.setState({
          duration: this.soundCloudAudio.audio.duration
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, _extends({}, this.props, {
          soundCloudAudio: this.soundCloudAudio
        }, this.state));
      }
    }]);

    return WithSoundCloudAudio;
  }(_react.Component);

  WithSoundCloudAudio.displayName = 'withSoundCloudAudio(' + getDisplayName(WrappedComponent) + ')';
  WithSoundCloudAudio.WrappedComponent = WrappedComponent;

  return (0, _hoistNonReactStatics2.default)(WithSoundCloudAudio, WrappedComponent);
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(12);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(20);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  components: __webpack_require__(9),
  addons: __webpack_require__(8)
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _soundcloudAudio = __webpack_require__(3);

var _soundcloudAudio2 = _interopRequireDefault(_soundcloudAudio);

var _withSoundCloudAudio = __webpack_require__(7);

var _withSoundCloudAudio2 = _interopRequireDefault(_withSoundCloudAudio);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // IMPORTANT NOTE!
// This container is deprecated, please use `withSoundCloudAudio` instead
// HOC pattern docs - https://reactjs.org/docs/higher-order-components.html

var SoundPlayerContainer = function (_Component) {
  _inherits(SoundPlayerContainer, _Component);

  function SoundPlayerContainer() {
    _classCallCheck(this, SoundPlayerContainer);

    return _possibleConstructorReturn(this, (SoundPlayerContainer.__proto__ || Object.getPrototypeOf(SoundPlayerContainer)).apply(this, arguments));
  }

  _createClass(SoundPlayerContainer, [{
    key: 'wrapChild',
    value: function wrapChild(child) {
      return _react2.default.cloneElement(child, this.props);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      console.warn('\n      <SoundPlayerContainer /> is deprecated! Please use HOC addons/withSoundCloudAudio instead.\n      https://reactjs.org/docs/higher-order-components.html\n      https://labs.voronianski.com/react-soundplayer/#Containers\n    ');
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      if (!children) {
        return;
      }

      if (!Array.isArray(children)) {
        return this.wrapChild(children);
      }

      return _react2.default.createElement('span', null, _react2.default.Children.map(children, this.wrapChild.bind(this)));
    }
  }]);

  return SoundPlayerContainer;
}(_react.Component);

SoundPlayerContainer.propTypes = {
  streamUrl: _propTypes2.default.string,
  resolveUrl: _propTypes2.default.string,
  clientId: _propTypes2.default.string,
  soundCloudAudio: _propTypes2.default.instanceOf(_soundcloudAudio2.default),
  onStartTrack: _propTypes2.default.func,
  onStopTrack: _propTypes2.default.func,
  onPauseTrack: _propTypes2.default.func,
  onVolumeChange: _propTypes2.default.func,
  onReady: _propTypes2.default.func
};

exports.default = (0, _withSoundCloudAudio2.default)(SoundPlayerContainer);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SoundPlayerContainer = exports.withSoundCloudAudio = exports.withCustomAudio = undefined;

var _withSoundCloudAudio2 = __webpack_require__(7);

var _withSoundCloudAudio3 = _interopRequireDefault(_withSoundCloudAudio2);

var _SoundPlayerContainer2 = __webpack_require__(11);

var _SoundPlayerContainer3 = _interopRequireDefault(_SoundPlayerContainer2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.withCustomAudio = _withSoundCloudAudio3.default;
exports.withSoundCloudAudio = _withSoundCloudAudio3.default;
exports.SoundPlayerContainer = _SoundPlayerContainer3.default;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _Icons = __webpack_require__(4);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Cover = function (_Component) {
  _inherits(Cover, _Component);

  function Cover() {
    _classCallCheck(this, Cover);

    return _possibleConstructorReturn(this, (Cover.__proto__ || Object.getPrototypeOf(Cover)).apply(this, arguments));
  }

  _createClass(Cover, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          backgroundUrl = _props.backgroundUrl,
          trackName = _props.trackName,
          artistName = _props.artistName,
          className = _props.className,
          style = _props.style,
          children = _props.children;

      var classNames = (0, _classnames2.default)('sb-soundplayer-cover', className);

      return _react2.default.createElement('div', {
        className: classNames,
        style: _extends({}, style, { backgroundImage: 'url(' + backgroundUrl + ')' }) }, _react2.default.createElement('div', null, _react2.default.createElement(_Icons.SoundCloudLogoSVG, null)), _react2.default.createElement('div', null, _react2.default.createElement('span', { className: 'sb-soundplayer-track sb-soundplayer-info-box' }, trackName)), _react2.default.createElement('div', null, _react2.default.createElement('span', { className: 'sb-soundplayer-artist sb-soundplayer-info-box' }, 'by ', artistName)), _react2.default.Children.map(children, _react2.default.cloneElement));
    }
  }]);

  return Cover;
}(_react.Component);

Cover.propTypes = {
  className: _propTypes2.default.string,
  backgroundUrl: _propTypes2.default.string.isRequired,
  trackName: _propTypes2.default.string.isRequired,
  artistName: _propTypes2.default.string.isRequired
};
Cover.defaultProps = {
  style: {}
};

exports.default = Cover;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _soundcloudAudio = __webpack_require__(3);

var _soundcloudAudio2 = _interopRequireDefault(_soundcloudAudio);

var _Icons = __webpack_require__(4);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var NextButton = function (_Component) {
  _inherits(NextButton, _Component);

  function NextButton() {
    _classCallCheck(this, NextButton);

    return _possibleConstructorReturn(this, (NextButton.__proto__ || Object.getPrototypeOf(NextButton)).apply(this, arguments));
  }

  _createClass(NextButton, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var _props = this.props,
          soundCloudAudio = _props.soundCloudAudio,
          onNextClick = _props.onNextClick;

      soundCloudAudio && soundCloudAudio.next();
      onNextClick && onNextClick(e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          style = _props2.style;

      var classNames = (0, _classnames2.default)('sb-soundplayer-btn sb-soundplayer-next-btn', className);

      return _react2.default.createElement('button', { type: 'button', className: classNames, style: style, onClick: this.handleClick.bind(this) }, _react2.default.createElement(_Icons.NextIconSVG, null));
    }
  }]);

  return NextButton;
}(_react.Component);

NextButton.propTypes = {
  className: _propTypes2.default.string,
  onNextClick: _propTypes2.default.func,
  soundCloudAudio: _propTypes2.default.instanceOf(_soundcloudAudio2.default)
};

exports.default = NextButton;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _soundcloudAudio = __webpack_require__(3);

var _soundcloudAudio2 = _interopRequireDefault(_soundcloudAudio);

var _Icons = __webpack_require__(4);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var PlayButton = function (_Component) {
  _inherits(PlayButton, _Component);

  function PlayButton() {
    _classCallCheck(this, PlayButton);

    return _possibleConstructorReturn(this, (PlayButton.__proto__ || Object.getPrototypeOf(PlayButton)).apply(this, arguments));
  }

  _createClass(PlayButton, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _props = this.props,
          playing = _props.playing,
          seeking = _props.seeking;

      return playing !== nextProps.playing || seeking !== nextProps.seeking;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var _props2 = this.props,
          playing = _props2.playing,
          soundCloudAudio = _props2.soundCloudAudio,
          onTogglePlay = _props2.onTogglePlay;

      if (!playing) {
        soundCloudAudio && soundCloudAudio.play({
          playlistIndex: soundCloudAudio._playlistIndex
        });
      } else {
        soundCloudAudio && soundCloudAudio.pause();
      }

      onTogglePlay && onTogglePlay(e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          playing = _props3.playing,
          seekingIcon = _props3.seekingIcon,
          seeking = _props3.seeking,
          className = _props3.className,
          style = _props3.style;

      var iconNode = void 0;

      if (seeking && seekingIcon) {
        iconNode = _react2.default.cloneElement(seekingIcon);
      } else if (playing) {
        iconNode = _react2.default.createElement(_Icons.PauseIconSVG, null);
      } else {
        iconNode = _react2.default.createElement(_Icons.PlayIconSVG, null);
      }

      var classNames = (0, _classnames2.default)('sb-soundplayer-btn sb-soundplayer-play-btn', className);

      return _react2.default.createElement('button', { type: 'button', className: classNames, style: style, onClick: this.handleClick.bind(this) }, iconNode);
    }
  }]);

  return PlayButton;
}(_react.Component);

PlayButton.propTypes = {
  className: _propTypes2.default.string,
  seeking: _propTypes2.default.bool,
  playing: _propTypes2.default.bool,
  onTogglePlay: _propTypes2.default.func,
  seekingIcon: _propTypes2.default.node,
  soundCloudAudio: _propTypes2.default.instanceOf(_soundcloudAudio2.default)
};

PlayButton.defaultProps = {
  playing: false,
  seeking: false
};

exports.default = PlayButton;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _soundcloudAudio = __webpack_require__(3);

var _soundcloudAudio2 = _interopRequireDefault(_soundcloudAudio);

var _Icons = __webpack_require__(4);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var PrevButton = function (_Component) {
  _inherits(PrevButton, _Component);

  function PrevButton() {
    _classCallCheck(this, PrevButton);

    return _possibleConstructorReturn(this, (PrevButton.__proto__ || Object.getPrototypeOf(PrevButton)).apply(this, arguments));
  }

  _createClass(PrevButton, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var _props = this.props,
          soundCloudAudio = _props.soundCloudAudio,
          onPrevClick = _props.onPrevClick;

      soundCloudAudio && soundCloudAudio.previous();
      onPrevClick && onPrevClick(e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          style = _props2.style;

      var classNames = (0, _classnames2.default)('sb-soundplayer-btn sb-soundplayer-prev-btn', className);

      return _react2.default.createElement('button', { type: 'button', className: classNames, style: style, onClick: this.handleClick.bind(this) }, _react2.default.createElement(_Icons.PrevIconSVG, null));
    }
  }]);

  return PrevButton;
}(_react.Component);

PrevButton.propTypes = {
  className: _propTypes2.default.string,
  onPrevClick: _propTypes2.default.func,
  soundCloudAudio: _propTypes2.default.instanceOf(_soundcloudAudio2.default)
};

exports.default = PrevButton;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _soundcloudAudio = __webpack_require__(3);

var _soundcloudAudio2 = _interopRequireDefault(_soundcloudAudio);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Progress = function (_Component) {
  _inherits(Progress, _Component);

  function Progress() {
    _classCallCheck(this, Progress);

    return _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
  }

  _createClass(Progress, [{
    key: 'handleSeekTrack',
    value: function handleSeekTrack(e) {
      var _props = this.props,
          onSeekTrack = _props.onSeekTrack,
          soundCloudAudio = _props.soundCloudAudio;

      var xPos = (e.pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth;

      if (soundCloudAudio && !isNaN(soundCloudAudio.audio.duration)) {
        soundCloudAudio.audio.currentTime = xPos * soundCloudAudio.audio.duration;
      }

      onSeekTrack && onSeekTrack.call(this, xPos, e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          innerClassName = _props2.innerClassName,
          style = _props2.style,
          currentTime = _props2.currentTime,
          duration = _props2.duration;
      var _props3 = this.props,
          value = _props3.value,
          innerStyle = _props3.innerStyle;

      if (!value && currentTime && duration) {
        value = currentTime / duration * 100 || 0;
      }

      if (value < 0) {
        value = 0;
      }

      if (value > 100) {
        value = 100;
      }

      var classNames = (0, _classnames2.default)('sb-soundplayer-progress-container', className);
      var innerClassNames = (0, _classnames2.default)('sb-soundplayer-progress-inner', innerClassName);

      if (!innerStyle) {
        innerStyle = {};
      }

      innerStyle = _extends({}, innerStyle, { width: value + '%' });

      return _react2.default.createElement('div', { className: classNames, style: style, onClick: this.handleSeekTrack.bind(this) }, _react2.default.createElement('div', { className: innerClassNames, style: innerStyle }));
    }
  }]);

  return Progress;
}(_react.Component);

Progress.propTypes = {
  className: _propTypes2.default.string,
  innerClassName: _propTypes2.default.string,
  innerStyle: _propTypes2.default.object,
  value: _propTypes2.default.number,
  onSeekTrack: _propTypes2.default.func,
  soundCloudAudio: _propTypes2.default.instanceOf(_soundcloudAudio2.default)
};

Progress.defaultProps = {
  value: 0
};

exports.default = Progress;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Timer = function (_Component) {
  _inherits(Timer, _Component);

  function Timer() {
    _classCallCheck(this, Timer);

    return _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).apply(this, arguments));
  }

  _createClass(Timer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          currentTime = _props.currentTime,
          className = _props.className,
          style = _props.style,
          soundCloudAudio = _props.soundCloudAudio;
      var duration = this.props.duration;

      var classNames = (0, _classnames2.default)('sb-soundplayer-timer', className);

      if (!duration && soundCloudAudio && soundCloudAudio.duration) {
        duration = soundCloudAudio.duration;
      }

      return _react2.default.createElement('div', { className: classNames, style: style }, Timer.prettyTime(currentTime), ' / ', Timer.prettyTime(duration));
    }
  }], [{
    key: 'prettyTime',
    value: function prettyTime(time) {
      var hours = Math.floor(time / 3600);
      var mins = '0' + Math.floor(time % 3600 / 60);
      var secs = '0' + Math.floor(time % 60);

      mins = mins.substr(mins.length - 2);
      secs = secs.substr(secs.length - 2);

      if (!isNaN(secs)) {
        if (hours) {
          return hours + ':' + mins + ':' + secs;
        }
        return mins + ':' + secs;
      }
      return '00:00';
    }
  }]);

  return Timer;
}(_react.Component);

Timer.propTypes = {
  className: _propTypes2.default.string,
  duration: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  currentTime: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Timer.defaultProps = {
  duration: 0,
  currentTime: 0
};

exports.default = Timer;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _soundcloudAudio = __webpack_require__(3);

var _soundcloudAudio2 = _interopRequireDefault(_soundcloudAudio);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _Icons = __webpack_require__(4);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var VolumeControl = function (_Component) {
  _inherits(VolumeControl, _Component);

  function VolumeControl() {
    _classCallCheck(this, VolumeControl);

    return _possibleConstructorReturn(this, (VolumeControl.__proto__ || Object.getPrototypeOf(VolumeControl)).apply(this, arguments));
  }

  _createClass(VolumeControl, [{
    key: 'handleVolumeChange',
    value: function handleVolumeChange(e) {
      var _props = this.props,
          onVolumeChange = _props.onVolumeChange,
          onToggleMute = _props.onToggleMute,
          soundCloudAudio = _props.soundCloudAudio,
          isMuted = _props.isMuted;

      var xPos = e.target.value / 100;
      var mute = xPos <= 0 && !isMuted;

      if (soundCloudAudio && !isNaN(soundCloudAudio.audio.volume)) {
        soundCloudAudio.audio.volume = xPos;
        soundCloudAudio.audio.muted = mute;
      }

      if (mute !== isMuted) {
        onToggleMute && onToggleMute.call(this, mute, e);
      }

      onVolumeChange && onVolumeChange.call(this, xPos, e);
    }
  }, {
    key: 'handleMute',
    value: function handleMute(e) {
      var _props2 = this.props,
          onToggleMute = _props2.onToggleMute,
          soundCloudAudio = _props2.soundCloudAudio;

      if (soundCloudAudio && !isNaN(soundCloudAudio.audio.muted)) {
        soundCloudAudio.audio.muted = !soundCloudAudio.audio.muted;
      }

      onToggleMute && onToggleMute.call(this, !this.props.isMuted, e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          className = _props3.className,
          buttonClassName = _props3.buttonClassName,
          rangeClassName = _props3.rangeClassName,
          volume = _props3.volume,
          isMuted = _props3.isMuted;

      var value = volume * 100 || 0;

      if (value < 0 || isMuted) {
        value = 0;
      }

      if (value > 100) {
        value = 100;
      }

      var classNames = (0, _classnames2.default)('sb-soundplayer-volume', className);
      var buttonClassNames = (0, _classnames2.default)('sb-soundplayer-btn sb-soundplayer-volume-btn', buttonClassName);
      var rangeClassNames = (0, _classnames2.default)('sb-soundplayer-volume-range', rangeClassName);

      return _react2.default.createElement('div', { className: classNames }, _react2.default.createElement('button', { className: buttonClassNames, onClick: this.handleMute.bind(this) }, isMuted ? _react2.default.createElement(_Icons.VolumeIconMuteSVG, null) : _react2.default.createElement(_Icons.VolumeIconLoudSVG, null)), _react2.default.createElement('div', null, _react2.default.createElement('input', { className: rangeClassNames, type: 'range', min: '0', max: '100', step: '1', value: value, onChange: this.handleVolumeChange.bind(this) })));
    }
  }]);

  return VolumeControl;
}(_react.Component);

VolumeControl.propTypes = {
  className: _propTypes2.default.string,
  buttonClassName: _propTypes2.default.string,
  rangeClassName: _propTypes2.default.string,
  volume: _propTypes2.default.number,
  onVolumeChange: _propTypes2.default.func,
  onToggleMute: _propTypes2.default.func,
  soundCloudAudio: _propTypes2.default.instanceOf(_soundcloudAudio2.default)
};

VolumeControl.defaultProps = {
  volume: 1,
  isMuted: 0
};

exports.default = VolumeControl;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icons = exports.Cover = exports.Timer = exports.Progress = exports.PrevButton = exports.NextButton = exports.PlayButton = exports.VolumeControl = undefined;

var _VolumeControl2 = __webpack_require__(19);

var _VolumeControl3 = _interopRequireDefault(_VolumeControl2);

var _PlayButton2 = __webpack_require__(15);

var _PlayButton3 = _interopRequireDefault(_PlayButton2);

var _NextButton2 = __webpack_require__(14);

var _NextButton3 = _interopRequireDefault(_NextButton2);

var _PrevButton2 = __webpack_require__(16);

var _PrevButton3 = _interopRequireDefault(_PrevButton2);

var _Progress2 = __webpack_require__(17);

var _Progress3 = _interopRequireDefault(_Progress2);

var _Timer2 = __webpack_require__(18);

var _Timer3 = _interopRequireDefault(_Timer2);

var _Cover2 = __webpack_require__(13);

var _Cover3 = _interopRequireDefault(_Cover2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.VolumeControl = _VolumeControl3.default;
exports.PlayButton = _PlayButton3.default;
exports.NextButton = _NextButton3.default;
exports.PrevButton = _PrevButton3.default;
exports.Progress = _Progress3.default;
exports.Timer = _Timer3.default;
exports.Cover = _Cover3.default;

// workaround for dists

var Icons = exports.Icons = __webpack_require__(4);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stopAllOther = stopAllOther;
exports.addToPlayedStore = addToPlayedStore;
exports.resetPlayedStore = resetPlayedStore;
// handling multiple audio on the page helpers
var _playedAudios = [];

function each(arr, cb) {
  if (arr) {
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] && cb(arr[i], i, arr)) {
        break;
      }
    }
  }
}

function stopAllOther(playing) {
  each(_playedAudios, function (soundCloudAudio) {
    if (soundCloudAudio.playing && soundCloudAudio.playing !== playing) {
      soundCloudAudio.stop();
    }
  });
}

function addToPlayedStore(soundCloudAudio) {
  var isPresent = false;

  each(_playedAudios, function (_soundCloudAudio) {
    if (_soundCloudAudio.playing === soundCloudAudio.playing) {
      isPresent = true;
      return true;
    }
  });

  if (!isPresent) {
    _playedAudios.push(soundCloudAudio);
  }
}

function resetPlayedStore() {
  each(_playedAudios, function (soundCloudAudio) {
    soundCloudAudio.stop();
  });

  _playedAudios = [];
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = __webpack_require__(6);
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(6);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(23);

var ReactPropTypesSecret = __webpack_require__(6);
var checkPropTypes = __webpack_require__(24);

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ })
/******/ ]);
});