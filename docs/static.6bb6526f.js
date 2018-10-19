(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _CTA = __webpack_require__(24);

var _CTA2 = _interopRequireDefault(_CTA);

var _Embed = __webpack_require__(26);

var _Embed2 = _interopRequireDefault(_Embed);

var _ImageQuote = __webpack_require__(28);

var _ImageQuote2 = _interopRequireDefault(_ImageQuote);

var _Stats = __webpack_require__(30);

var _Stats2 = _interopRequireDefault(_Stats);

var _Footer = __webpack_require__(32);

var _Footer2 = _interopRequireDefault(_Footer);

var _Spacer = __webpack_require__(36);

var _Spacer2 = _interopRequireDefault(_Spacer);

var _cell = __webpack_require__(38);

var _cell2 = _interopRequireDefault(_cell);

var _david_bg = __webpack_require__(39);

var _david_bg2 = _interopRequireDefault(_david_bg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withSiteData)(function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('img', { src: _cell2.default, alt: 'Image of a prison cell with a shaft of light from a small window' }),
    _react2.default.createElement(_Embed2.default, null),
    _react2.default.createElement(_Spacer2.default, { height: '12vh' }),
    _react2.default.createElement(_Stats2.default, null),
    _react2.default.createElement(_Spacer2.default, { height: '12vh' }),
    _react2.default.createElement(
      _CTA2.default,
      null,
      _react2.default.createElement(
        'a',
        { className: 'emphasize', href: '#' },
        'Learn more'
      ),
      ' about the provisions of this bill and the fight to get it passed.'
    ),
    _react2.default.createElement(_Spacer2.default, { height: '12vh' }),
    _react2.default.createElement(
      _ImageQuote2.default,
      { alt: 'Image of David Sloan', src: _david_bg2.default, attribution: 'David Sloan, Progressive Massachusetts' },
      '"Having a program, a structure, an organization around the state gives us a lot of opportunity to plug people in week after week."'
    ),
    _react2.default.createElement(_Spacer2.default, { height: '12vh' }),
    _react2.default.createElement(
      _CTA2.default,
      null,
      'Support an organization dedicated to organized action and real change.'
    ),
    _react2.default.createElement(
      _CTA.MiniQuote,
      null,
      'We need your help to take the next step.'
    ),
    _react2.default.createElement(_Spacer2.default, { height: '12vh' }),
    _react2.default.createElement(
      'div',
      { className: 'pm__donation-form pm--centered' },
      'Donation Form'
    ),
    _react2.default.createElement(_Spacer2.default, { height: '12vh' }),
    _react2.default.createElement(_Footer2.default, null),
    _react2.default.createElement(_Spacer2.default, { height: '12vh' })
  );
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'This is what we\'re all about.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'React, static sites, performance, speed. It\'s the stuff that makes us tick.'
    )
  );
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var posts = _ref.posts;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'It\'s blog time.'
    ),
    _react2.default.createElement('br', null),
    'All Posts:',
    _react2.default.createElement(
      'ul',
      null,
      posts.map(function (post) {
        return _react2.default.createElement(
          'li',
          { key: post.id },
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/blog/post/' + post.id + '/' },
            post.title
          )
        );
      })
    )
  );
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var post = _ref.post;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactStatic.Link,
      { to: '/blog/' },
      '<',
      ' Back'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h3',
      null,
      post.title
    ),
    _react2.default.createElement(
      'p',
      null,
      post.body
    )
  );
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      '404 - Oh no\'s! We couldn\'t find that page :('
    )
  );
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(13);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _reactHotLoader = __webpack_require__(14);

var _reactStaticRoutes = __webpack_require__(15);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _Nav = __webpack_require__(40);

var _Nav2 = _interopRequireDefault(_Nav);

__webpack_require__(42);

__webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var App = function App() {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Nav2.default, null),
      _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(_reactStaticRoutes2.default, null)
      )
    )
  );
};

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(16);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(17);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(18);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(19);

var _reactUniversalComponent = __webpack_require__(20);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Home',
  file: '/Users/jonathanreilly/Personal/ProgressiveMassachusettsCJR/docs/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 6)), (0, _importCss3.default)('src/containers/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(6);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/About',
  file: '/Users/jonathanreilly/Personal/ProgressiveMassachusettsCJR/docs/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 7)), (0, _importCss3.default)('src/containers/About', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/About');
  },
  resolve: function resolve() {
    return /*require.resolve*/(7);
  },
  chunkName: function chunkName() {
    return 'src/containers/About';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Blog',
  file: '/Users/jonathanreilly/Personal/ProgressiveMassachusettsCJR/docs/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 8)), (0, _importCss3.default)('src/containers/Blog', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Blog');
  },
  resolve: function resolve() {
    return /*require.resolve*/(8);
  },
  chunkName: function chunkName() {
    return 'src/containers/Blog';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Post',
  file: '/Users/jonathanreilly/Personal/ProgressiveMassachusettsCJR/docs/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 9)), (0, _importCss3.default)('src/containers/Post', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(9);
  },
  chunkName: function chunkName() {
    return 'src/containers/Post';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: '/Users/jonathanreilly/Personal/ProgressiveMassachusettsCJR/docs/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 10)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(10);
  },
  chunkName: function chunkName() {
    return 'src/containers/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 4

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(21);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(22);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(23);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(4);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MiniQuote = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'p',
    { className: 'pm__cta' },
    children
  );
};

var MiniQuote = exports.MiniQuote = function MiniQuote(_ref2) {
  var children = _ref2.children;
  return _react2.default.createElement(
    'p',
    { className: 'pm__mini-quote' },
    children
  );
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".pm__cta{font-size:2.35vh}.pm__cta,.pm__mini-quote{line-height:1.65em;max-width:var(--desktop-width);margin:0 auto;text-align:center}.pm__mini-quote{font-size:2vh}", ""]);

// exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    'div',
    { className: 'pm__video-embed' },
    _react2.default.createElement(
      'div',
      { className: 'wistia_responsive_padding', style: { padding: "56.25% 0 0 0", position: "relative" } },
      _react2.default.createElement(
        'div',
        { className: 'wistia_responsive_wrapper', style: { height: "100%", left: 0, position: "absolute", top: 0, width: "100%" } },
        _react2.default.createElement(
          'div',
          { className: 'wistia_embed wistia_async_g254byqewk videoFoam=true', style: { height: "100%", position: "relative", width: "100%" } },
          _react2.default.createElement(
            'div',
            { className: 'wistia_swatch', style: { height: "100%", left: 0, opacity: 0, overflow: "hidden", position: "absolute", top: 0, transition: "opacity 200ms", width: "100%" } },
            _react2.default.createElement('img', {
              src: 'https://fast.wistia.com/embed/medias/g254byqewk/swatch',
              style: { filter: "blur(5px)", height: "100%", objectFit: "contain", width: "100%" },
              alt: '',
              onLoad: function onLoad() {
                console.log(this);
              }
            })
          )
        )
      )
    )
  );
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".pm__video-embed{margin:0 auto;margin-top:-18%;width:63%}@media screen and (max-width:800px){.pm__video-embed{width:100%}}", ""]);

// exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ImageQuote = __webpack_require__(29);

var _ImageQuote2 = _interopRequireDefault(_ImageQuote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var alt = _ref.alt,
      attribution = _ref.attribution,
      children = _ref.children,
      src = _ref.src;
  return _react2.default.createElement(
    "div",
    { className: "pm__image-quote" },
    _react2.default.createElement("img", { src: src, alt: alt }),
    _react2.default.createElement(
      "div",
      { className: "pm__image-quote__container pm--max-contained" },
      _react2.default.createElement(
        "div",
        { className: "pm__image-quote__quote" },
        children,
        _react2.default.createElement(
          "div",
          { className: "pm__image-quote__attribution" },
          attribution
        )
      )
    )
  );
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".pm__image-quote{background:#353535;max-height:45vh;position:relative}.pm__image-quote img{max-height:45vh}.pm__image-quote__container{display:block;height:100%;position:absolute;top:0;width:100%;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.pm__image-quote__quote{-ms-flex-align:left;align-items:left;color:#fff;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%;font-size:3vh;line-height:1.35em;right:0;position:absolute;width:60%;top:0}.pm__image-quote__attribution{font-size:1.85vh;margin-top:1vh}@media screen and (max-width:480px){.pm__image-quote__quote{font-size:2vh}}@media screen and (max-width:800px){.pm__image-quote__quote{background:hsla(0,0%,100%,.5);color:var(--pm__black);padding:5%;width:100%}}", ""]);

// exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Stats = __webpack_require__(31);

var _Stats2 = _interopRequireDefault(_Stats);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    "div",
    { className: "pm-stats" },
    _react2.default.createElement(
      "div",
      { className: "pm-stat" },
      _react2.default.createElement("div", { className: "pm-stat__icon" }),
      "The United Nations considers solitary that exceeds 15 days to be a form of torture"
    ),
    _react2.default.createElement(
      "div",
      { className: "pm-stat" },
      _react2.default.createElement("div", { className: "pm-stat__icon" }),
      "The passed bill restricts the use of solitary by requiring periodic hearings to reevaluate the sentence"
    ),
    _react2.default.createElement(
      "div",
      { className: "pm-stat" },
      _react2.default.createElement("div", { className: "pm-stat__icon" }),
      "This, along with seven other key provisions, was a huge win for incarcerated people. But it's not over."
    )
  );
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".pm-stat__icon{background:gray;border-radius:100%;height:3em;margin:0 auto 1em;width:3em}.pm-stat{text-align:center;font-size:2.15vh;line-height:1.65em;width:28%}.pm-stats{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin:0 auto;max-width:var(--desktop-width)}@media screen and (max-width:800px){.pm-stat{margin:0 auto;width:80%}.pm-stats{display:block}}", ""]);

// exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _logo_pm_gray = __webpack_require__(33);

var _logo_pm_gray2 = _interopRequireDefault(_logo_pm_gray);

var _discontent_icon = __webpack_require__(34);

var _discontent_icon2 = _interopRequireDefault(_discontent_icon);

__webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    'div',
    { className: 'pm__footer' },
    _react2.default.createElement(
      'div',
      { className: 'pm__organization' },
      _react2.default.createElement('img', { className: 'progressive-mass__logo', src: _logo_pm_gray2.default, alt: 'Progressive Massachusetts Logo' }),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'a',
          { href: '#' },
          'Progressive Massachusetts'
        ),
        ' is a statewide, diverse, grassroots, organization that organizes for progressive change in Massachusetts. We help elect and support progressive candidates for public office who are committed to making a difference on these issues, and we hold elected officials accountable to progressive positions and values. We welcome all progressives regardless of political organizing. Through issue and electoral organizing, as well as organization building and education, we are working to advance progressive values.'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'pm__organization' },
      _react2.default.createElement('img', { className: 'discontent__logo', src: _discontent_icon2.default, alt: 'Project Discontent Logo' }),
      _react2.default.createElement(
        'p',
        null,
        'This video, website, and blog post were created by volunteers at ',
        _react2.default.createElement(
          'a',
          { href: 'http://www.projectdiscontent.com' },
          'Project Discontent'
        ),
        '. Project Discontent is a volunteer collaborative that helps extend the reach of footer fighting for justice and equality, using video, design, writing, and web development.',
        _react2.default.createElement('br', null),
        'Follow us on ',
        _react2.default.createElement(
          'a',
          { href: '#' },
          'Twitter'
        ),
        ' and ',
        _react2.default.createElement(
          'a',
          { href: '#' },
          'Instagram'
        ),
        '.'
      )
    )
  );
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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rjnR4aJ0osNF6USHi9KJDhelEx0uSic6XJROdLgonehwUTrR4aJ0osNF6USHi9KJDhelEx0uSic6XJROdLgonehwUTrR4aJ0osNF6USHi9KJDhelEx0uSic6XJROdLgonehwUTrR4aJ0osNF6USHi9KJDhelEx0uSic6XJROdLgonehwUTrR4aJ0osNF6USHi9KJDhelEx0uSic6XJROdLgonehwUTrR4aJ0osNF6USHi9KJDhelEx0uSic6XJROdLgonehwUTrR4aJ0osNF6USHi9KJDhelEx0uSic6XJROdLgonehwUTrR4aJ0osNF6USHi9KJDhelEx0uSic6XJROdLgonehwUTrR4aJ0osNF6USHi9KJDhelEx0uSic6XJROdLgonehwUTrR4aJ0osNF6USHi9KJDhelEx0uSic6XJROdLgonehwUTrR4aJ0osNF6USHi9KJDhelEx0uSic6XJROdLgonehwUTrR4aJ0osNF6USHi9KJDhelEx0uSic6XJROdLgonehwUTrR4aJ0osNF6USHi9KJDhelEx0uSic6XJROdLgonehwUTrR4aJ0osNF6USHi9KJDhelEx0uSic6XJROdLgonejo1gXP7AfsS3GHaAPWAkuABvtsILA3kMvcvxlYAbxt96XpBYwC9gSqgZXAPEtbyKTNA4OtLAOAFuAtYD6wIZVuKLBH5t6ClXMZUG9/54F9gP5lnhXuWQCstr/72rOHoXaot2cvzbxXP2A/YIg9YzUw1+qgANQAo+1956F6283yWZwpQ38rY6OVZW+gtkxZAZqB14BNFa7vMLpClIcBNwE9SQRXANYDM4HLgVnAscA1qLLTwmwGXrc8bkYVDHAw8DVgArCL3bPF8roG+BMSHqghTgOmoEbqbmXYAMywMjxnaT8GTLX80uVoRCK61vLubuk+SGlnyQFNwJeBu4ADge8C70eiCmkWAD8C7rA8DgGmAUem6qGAxPJ94F7UsX6JhPhp4HC752573uZUOT4FXGz3TQN+BryH8h12FfBJ4F/sZLpClN2RZaoH/oAsTi0wEfgMiWC6o569BPgjEmMOiegk4DJkqe5BFuda1HhPAvdZvocDH0KizAG32e8pdn8zarwXgN7AB5AI90ANvADogazPK6gx21CjvQc4AdgLWaSQx67AA8DTFI8GrUjE1cBX7Tl3WZmagTrg80jYz9q7XQScDPze0haAj1jZpiLB5FAn7A9U2fu3AMcAI4BX7fm9gOOR5X0cWcBdgD7A7cCiTHkb0Eiz0+kKUYIq8k3U28NwNgFVzvtQQ7dZuvnAJcBGS9cL+BVwKjAOCeU0u+/vSHALUmmnAl8HzgUetc/OROKYhgS7xdL/HlmSFhILFnjB0jfZ34Mt/QQk/hdSae+1fMuxG3AQsmC3oE6Blf0Vy38jEvcBwDp7379bupnA8/Z5o70HJC7Ey0iYdcBYElGOQpZ3YSqvgr37TVY3UdBVoizH26iSe6JypYeU9L9b7QdUof3QUN8K3EoiSJA1uBmYDLwLNXI/1ECzkaXekkq/APgSslxNlJIuR7M9s1AmbR8kvnwm/Ror02LgUOBsNCK8BCxH1j48ox+ylgcC59vfsy3d1al0fTPPbkAjxUkkHb0JOBr5pTcjqzjA0ucs74HI0gYakUtVzj/eoXSVKAtoqDsUTXB6In9nGPAEarTRlm5P4BySht8f+DCalDyALN9uqLEXlnnW26ghhwGD0DBXg9yCNZamGvl3A0ks9AKK/anRwH8hIeaQ1RmHfNZ/ZJ55Fhqegw+aR8I7z973p8hFGG/PXYFGhJlIRLMt3U/s3U4GTrT3mGvPu53iDpjmb8AbwFHAcHvX8agO7yPxrUF1fznyp0N5q4DpwHco3zl3KF0pytGoYguoEnoiB/5y5G8Gp34U8G27rwYJ6Bnge6gR97B02YlImpBX+CGTthfwTdSIIOv1czRMgoQ6xsoM8jOr0JD3XSSi9Cx2A/LH0qJcQzIB+hsS7bFoiH2P5T8RWbjPWZ5/BeYgQR1m6cYiX/Y45IOWs2QLkXBPRR2/yu6bgzp9mgLqAKsz5V1bIe8dTlf6lCuQKDejxlqKfJ3XUumChbnE0n0YWaEVaJYcZu3LkQXdH3go86zBwO7IT1tq+WxGFnigfd4A/BBZ0XHIMqfrJo8a+Sor6+fQzPR1kll6mhuB6ykeDlvRkJhHol+JfMrfoeF+DHAFcATyB2cj8S+1/H6DJiaHAVdaOY8FHivz/Cbk105GE54eaGnrD1ZXaRpRx3osU94W5HLsdLp6ovMDkolOJVYBD6Ph+TXU808APouWNNYiizUBzUofQRYB1NinIwE+ipz+3mg970DL40ok0odRfexBeau7HAm+GQ2HhwAfBx5EjZ2mieKlmDQHAxegjjDN8loL/BN4EYmyB7LaX0HuxzSrh3rUOWYD70YWvhJP2vuOQ4LchNyd7HJVAQmzUnl3Ol050WlvuE2nyafSvYGc/BuQfzYTWar/QUPfePv3X5AFPAKtGy5Dfly9/VyHLOPX0ZD8HKqLg9Cw2IAaND18pcv7Mhrer0ACe4ZiC3Qyss7piU4eCW8OmnCNQf7iA0gQo9FyT73ltxEJeCSy6I8hsY9BnXIZci9CmbJ1uQx1tPPQCPJPilcIwj01aMViYqa8BeQ+/JOdTFeIsgn1+rWU9tpy6dZRLI570dreJLQUNAuJ9Ry0eH4cEkoOiWsmEuT0VB43I4t3BlqbnGRl2YAa+nfAnZa2EQklvcuDpRmPlqJOtWdsQJb/EPtJ081+7rWyXoTWVSfa9bAp8AtkDZuQoL5G4muGepmHRomn0QRujeWdnsC0oUnNR9GIcTfJxC5cX4Pq9/hMWXN2/XW6QJS5G26bPghZlsNJJgzBH2lo595tZRe0AL4ZzSRbKqQbgNYrN6CZaWvq2mA0JG9BQ3pY1qm1e/ZEjbTc7k03RiBn+YyyZzUh/+0N1FCBIWhIX4WWUtIdZDgaGjfac0ag5ZVyE4Qc8iMX2/V+aJtvCPLl6i3/ZRR31gGWbjDJTstCircZ9yPZZkx3nhpkJavtnnQ9VNt9tRXKC3KxVlS41hlMAP5MsqxVAC7oCku5jvKTgyyrqexvrqB8ZTUgyzmrA/kXkGizjn+WZfZTjrfsJzCvA88NrKVjW3jt1QOoQ77czrWXKlxrpmP1tNPxKCEnOlyUTnS4KJ3ocFE60eGidKLDRelEh4vSiQ4XpRMd27t43httlfVEi8FPURx/dyDaMWlDi7hvpq7lUCjWCLS78yRJdHk6zVC0BzwMdaKVltdCkp2PHNrFOQjtkIAWxV9EOzTZHYs+aF+8Fm2lVVpg7mtl3NfecTVaqJ5HshM1Bu1PzyWJ8gYFS4SzNU+ghewjUbDFUxTvrvS38jRaPWxGuzx7W/6D0I7WW2j/eqndtxuKGkpH9wRyKJhjHgpi6V7hHbF0vam8u5NDGwjh+MU7lWu72F5RDkXR0iPR9tl/kuwu1KLolkmoss9BwRKBXdEhqQlol+d0FACQ5j+AS1EAQxOqkB72rItRdE4BncO5GHWALUi8NWjr75sU73uDQr5uQluej6C967WZNO+28k+0dwlnc5ahg1o/QztIZ9jPZZY+MMTqpg8K0FiJgnYHA6cg8QUOsPKssLRL0L7+haiOG1FbVaOO9jW7/yBUp6F8aars3a4kOVgWtpGhWHyPoC3HESRBzqTSVaEzQmegyKgL7f22WLm6o5iBC+mEvfLtFWWIDSygyjuSRJR7ocDSNiSQrKtwMOrli1FDnYQiZoIF2hW95CFIAHehyvo4qpzz0QGoNhQEPBo1wHTUeJ9BcY/no8CFsFVXhYIwalEPH2tl+VuqbEOAH6NAhSfQMYtV9owvoPjDjSjaKIglW5ehbrqTRBjVVKiLfOpaAQnkIrTv/V3U0H3Q2aJJ6JTi83ZfsODXoc6dDtR9E3XM76HO3NPqbm8Uy/mM1cdiq+8+9vfpSPC3WR13QyPBCCtXf2QEQrnOQrGuZ1q5tisMrjP2vvPopXogq3cL6kFHoQK/jKxO9p4T0RB3BYrCHo8CHxZZmn6oEtajiJ2Z9vlsNPyttWsjkIhWo6OuITxrHoq2WUFyDBc0zE9EQ+2f0MGyOksbrM2JVp6XUSO+Yp/n7LMvWtr0WaLssFcuAqojkdwF1El3Q/V6B4nbswBF+7xOEqAShunfUHmP/kb73Q9Z4pEoNvT3ZdLWoMDgMaij/jJ1bQIKyVuE6u4N+3y+lWsRxYEz20RniDKHIlxWokijPVGljUfW5VXkl6XZHQ3NS1CE0hDUy95HIsq1ls++qKffioauxagyQ6PXI19mLBrq70DCWQz8llIhHIOG+etRhMoXULjb1ahR8/Ye1WhYm526t4Aq/0E0dKeHuuGoI4ajF8MpPRHZEYL/thJZ5ivsmbOROG/JpA+RQnsh6x+scgGJNR3xlMv8VHp+sORZi77UyjYaxaP+OVOuTjk+0VlRQk3IlE9ADnszEsmzyIJlX+4oNAm6A4WePYQCTT+IemAjmghcjir6CHTAKgh1BvBrJL5lSLTTkNBPsHsXoZ5+E8kRi57ITdiChPUassAfQ0K8G9XJIEu/mFKL10ISHpZu2MloaCV1rRfqNFtDHlmeS5H7cgry1Vfb5w+ieNBgPcM5pttIDrVh/56KOnNnMR8di/46etdTUuV6CFnrNyvd3FE6S5Q5khnlsUiUg9ERhFEUN1418ulqUC+eiCKr1yBLuQ/JcPkoitQei3zLg5Afej7yX09Dw/S9aNg+Angv8hEPQZV3GPItlyCreyQSSn979noSsd6HRBjOpoQz1R1hFvJdg5XaBQ2V2XpKH16rRBuawMxEnSX9Tkej48JfSuWzCfm+m0nquo3Kw/m20mrlmpEqV2iTcVauMymdNG4VnSXK0Lv/hRq9LyrYE0iUaUYiq5dHp/E+iyoyDD0TkCirkU+6GX0Lxl+QeMagofdQZHEXIl9pPbKyd5JY1+tRI45FopyIJmQFNHkqWB3kSL5RYj6Jr3Qgmqikl7n6o84zi+Lv6nkATbhC1PZ+JH41qEFb7L2yZ2vCWfcmS9Pd6nA5clVuJ/mGi2vs92iSFYHFaEa+lNJv5ehMaux9ypXrWuQGHUDpicmtojMXzzciy7YXGoafQYLJ+i7HWJoZwDfQbO5CNHtsJZkAHYME9lPkg4YvlZpFUvlVyBrdg3yvAZZuExL2SkvTDVXmB1BDXmfP/Jb9fhzNSMdZGR9BlvtEe5fQeXshC3UrGhp7UPqlCeUmODnUaZZYOY5HQgStD55sv+ejznw6strfsmeGoxov2fVulK5NttlPK8Vf2PBO56A6Sg6NOH8tU64XrVyhTbaLzprohBefiQo5CAk0HCkN13uiNcUqNAykZ3YjkE94JLKGS0iOvA6xvJvt2gQ0E30G9d7ByBoOR0NoAQ0phyO/81k0zIxFw/2PKbZyzciinoR6f/BZz0MCPgUNhfsja7ARWe6G1LuVa/z0pGIT8vuOQksoI5HfOxqJfwWaLDQgv2xPe/4oe4cqq4v90IGwcLITSxtOZabLswGtjWa/tKAjQs1OhgpWrpFWrn1QJwnl2he1+WtsJ9sryibUuMtQoeeiChuNGhaSsyfr0ZLPQOR/Pp7JaynqhZ9A/tP1qPHOI/EpQYJ4GA2/s1DFnYW+AuW9JF8osB5Z0KvR5Ohk1JvvQYJP8zhajA5f+zcXTTSWWnlORMNuAzqbfj3JgvwqNNxnJzTNVjd9SM4Q3Y6G5tPR6sQJSEgz0IGxsHnwkL3PGaizHE9y0Ou3qFPVk3ylX3BX0oRVkRtTn4Xz9Qup/BV/BdRBQpuleQjV9ZdQPR+XKddVaMa/XWzvwbHuaPuvBb1sK7JaPVDDtyAR7or8kDZk9Zrsetbn2dXSryc5g9MLiWUgSUUvofR0YR8rS/h+yNVWpo0kh8T6IBFlD5JV2b3d7Z7w3nl77jDU8GuRtUg31iDk02bP0lTbfVVW3rBWGvIcjkaO9WgRP/uNFDk0WRpm+bcid2QZyeJ0LarPSla61d4n/eyhqH1WUFqH4b7dkTuxkuIlpXLlakFCTD+no+yQg2NNJOuKgeyBrlX2E5jfTn5rKBXMJjTkvtOhrA0U7z2neadDYq2UfsEoqBOtpP2vxKt0PRyZ3ZY8Ifk6lfZmsg1U/j6hcrRRfNCt0nPbm7V3pFzbhUcJOdHhonSiw0XpRIeL0okOF6UTHS5KJzpclE505NHiZ7kvkt+WWEDH2Rr6kuwqhuipLXm045FdUB2N9oodZ0dRjaK2epLsJDYAb+aRlXyGZMsvhON/E4mzs6JMHCdQg/43kFMp1tdSYE4wnfejTfb9SMzocShm7k6Kj7M6zrZSQLEMR6ODZiHUMHA/sDCI8lUUqnUJyenEHIrWGUMX/S8Bzr8leZLA6vR/H/MqcOOUyXUtQZRt6L9aG40iwdOBmuFoqON0BtmjIDkUKDNtyuS6l6B4SageRYJfS3EEiPuUTmeSDh4uoBMC56KjLEBpkO8KNMF5FFnMsSjGMRyod5ztpY0kun46irZ/dcrkuv+zoOXiKRvQUdOH0bmVPUj+/2zH2V6aUSzpQmDplMl1nX24zXEcx3Ecx3H4XwyoopIaMZE9AAAAAElFTkSuQmCC"

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkAAAAJBCAIAAAAhpJ3EAAAACXBIWXMAAG66AABuugHW3rEXAAAXKElEQVR4nO3dvXfb2JnAYRAAScnWH6D0Vi9VOTnH7Mf9zPT2bjvu4xRbrdw75e7afZx65Z7u5d7qwz6WKZL42EIzk8TrkS2ZBPACz9PkTI4T4oxl/vziXlyM/vs//isBgGhGf0h+3/Y1AMCtpW1fAADchYABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEJKAARCSgAEQkoABEFLe9gUAfXaUpQej0WGaHqajG37Zu6JMkuS8KJu6LvpAwICtOcrSB1l2lKYPsvQoS++PborWv5j+/J+Lqr4oy/OyfFeU78tqR9dJP4z+kPy+7WsAAjvJs+M8O8my4zzb7v/zZV3PN+W8KOabYrv/z/SDgAG3dpSlx3k2y/OtR+uzLuv6bF38Zb1ZVGYy/kHAgK81G+fX0bp5QWt33qyLl6u1jHFNwICbHKbpbJyd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ScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAhJwAAIScAACEnAAAgp/7f/+Pe2rwEAbu3/ABVC0mLXK3ZtAAAAAElFTkSuQmCC"

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".pm__footer{-ms-flex-align:start;align-items:flex-start;display:-ms-flexbox;display:flex;margin:0 auto;max-width:var(--desktop-width)}.pm__footer img{-ms-flex-item-align:start;align-self:flex-start;margin-right:3vh}.pm__organization{display:-ms-flexbox;display:flex;font-size:2.15vh;line-height:1.45em;-ms-flex:1 1;flex:1 1}.pm__organization:first-child{margin-right:3vh}.discontent__logo{border-radius:.75vh;height:8vh}.progressive-mass__logo{width:12vh}@media screen and (max-width:800px){.pm__footer{display:block}.pm__footer img{display:block;margin:2vh auto}.pm__footer .pm__organization{display:block;margin:0 auto 8vh!important;text-align:center}}", ""]);

// exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Spacer = __webpack_require__(37);

var _Spacer2 = _interopRequireDefault(_Spacer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var height = _ref.height;
  return _react2.default.createElement("div", { className: "pm__spacer",
    style: { height: height }
  });
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".pm__spacer{display:block}", ""]);

// exports


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/cell.a87a7e4b.png";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/david_bg.8e83821f.png";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

__webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logo = function Logo(props) {
  return _react2.default.createElement(
    _reactStatic.Link,
    { exact: true, to: '/', style: { fontSize: "2vh", textAlign: "left", lineHeight: "1.35em" } },
    'PROGRESSIVE',
    _react2.default.createElement('br', null),
    'MASSACHUSETTS'
  );
};

var CTA = function CTA(props) {
  return _react2.default.createElement(
    'button',
    { className: 'pm-button pm-navbar__cta' },
    'Join the movement'
  );
};

exports.default = function (props) {
  return _react2.default.createElement(
    'nav',
    { className: 'pm-navbar' },
    _react2.default.createElement(
      'div',
      { className: 'pm--max-contained pm--space-between pm--centered' },
      _react2.default.createElement(Logo, null),
      _react2.default.createElement(CTA, null)
    )
  );
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".pm-navbar{-ms-flex-align:center;align-items:center;background:none!important;display:-ms-flexbox;display:flex;height:5em;-ms-flex-pack:justify;justify-content:space-between;position:relative}.pm-navbar__cta{background:none!important;border:1px solid #fff;color:#fff!important;font-size:1.65vh;padding:1vh 1.45vh}", ""]);

// exports


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("reset-css");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ":root{--desktop-width:1180px;--tablet-width:800px;--mobile-width:480px;--pm__black:#353535}*{-webkit-box-sizing:border-box;box-sizing:border-box}body{font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;font-weight:300;font-size:16px;margin:0;padding:0}a{text-decoration:none;color:#353535;font-weight:700;position:relative}a.emphasize:after{content:\" \";border-bottom:3px solid var(--pm__black);left:0;position:absolute;top:calc(100% + 4px);width:100%}img{max-width:100%}nav{width:100%;background:#108db8}nav a{color:#fff;padding:1rem;display:inline-block;z-index:1}.pm-button{border-radius:5px}.content{margin-top:-5em}.pm--space-between{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.pm--centered{text-align:center;-ms-flex-align:center;align-items:center;margin:0 auto}.pm--max-contained{margin:0 auto;max-width:var(--desktop-width);width:100%}.pm__donation-form{-ms-flex-align:center;align-items:center;border:5px solid #e0e0e0;border-radius:1.25vh;background:#f3f3f3;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;height:36vh;width:63%}", ""]);

// exports


/***/ })
/******/ ]);
});
//# sourceMappingURL=static.6bb6526f.js.map