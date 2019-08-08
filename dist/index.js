(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-router-dom"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-router-dom", "prop-types"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-router-dom"), require("prop-types")) : factory(root["react"], root["react-router-dom"], root["prop-types"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(2);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/utils.js
var defaultParser = function defaultParser(val, key, params) {
  var current = params[key];

  if (current) {
    if (!Array.isArray(current)) {
      current = [current];
    }

    current.push(val);
  } else {
    current = val;
  }

  return current;
};

var parseBool = function parseBool(val) {
  if (val !== 1 && val.toLowerCase() !== "true") {
    return false;
  }

  return true;
};
/**
 * Converts URL parameters to a Object collection of key/value pairs
 * Decodes encoded url characters to back to normal strings.
 * @param {String} str
 *
 * @example <caption>convert query string to object:</caption>
 * import {toParams} from '@helio/utils';
 * let paramsObject = toParams('#?foo=bar&hello=world&hello=array&unsafe=I%20am%20an%20unsafe%20string');
 *
 * paramsObject == {
 *  foo: 'bar',
 *  hello: ['world', 'array'],
 *  unsafe: 'I am an unsafe string'
 *
 * };
 */


var toParams = function toParams(str) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var parts = str.split('?');
  var queryString = parts[1] || '';
  var params = {};
  queryString.split('&').forEach(function (val) {
    var innerParts = val.split('=');
    if (innerParts.length !== 2) return;
    var paramKey = decodeURIComponent(innerParts[0]);
    var paramVal = decodeURIComponent(innerParts[1]);
    var parser = options[paramKey] || defaultParser;
    params[paramKey] = parser(paramVal, paramKey, params);
  });
  return params;
};
/**
 * Returns the value of an object via the path as a string
 * @param {String} path
 * @param {Object} obj Object to find the property in
 * @param {String} fb Fallback string when not found
 *
 * @example
 * let result = getFromObj('hello.foo', {
 *  hello: {
 *    foo: 'bar'
 *  }
 * });
 * result == 'bar';
 */


var getFromObj = function getFromObj(path, obj) {
  var fb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "${".concat(path, "}");
  return path.split('.').reduce(function (res, key) {
    return res[key] != null ? res[key] : fb;
  }, obj);
};
/**
 * Processes a string formatted like an ES6 template against an object
 * @param {String} template the string template
 * @param {Object} map Key/Value pairs to process the string against
 * @param {String} fallback they string fallback when the value is missing.
 *
 * @example
 * let result = template('I am a string literal formatted ${message.label}.', {
 *  message: {
 *    label: 'to look like an ES6 template'
 *  }
 * });
 *
 * result == 'I am a string literal formatted to look like an ES6 template.';
 */


var template = function template(tmpl, map, fallback) {
  var root = Object.assign({
    "this": map
  }, map); // if (tmpl.match(/\$\{\s*this\s*\./gm)) {
  //   // cant enable this until we drop IE support. for now we can only do substitutions.
  //   // return renderLiteral(tmpl, map);
  // }

  return tmpl && tmpl.replace(/\$\{.+?}/g, function (match) {
    var path = match.substr(2, match.length - 3).trim();
    return getFromObj(path, root, fallback);
  });
};


// CONCATENATED MODULE: ./src/withSearch.jsx



var withSearch_withSearch = function withSearch(WrappedComponent, paramOptions) {
  return Object(external_react_router_dom_["withRouter"])(function (props) {
    var search = toParams(window.location.search, paramOptions);
    props.match.search = search;
    return external_react_default.a.createElement(WrappedComponent, props);
  });
};
// CONCATENATED MODULE: ./src/ResolverRoute.jsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var ResolverRoute_ResolveRoute =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ResolveRoute, _React$Component);

  function ResolveRoute() {
    _classCallCheck(this, ResolveRoute);

    return _possibleConstructorReturn(this, _getPrototypeOf(ResolveRoute).apply(this, arguments));
  }

  _createClass(ResolveRoute, [{
    key: "render",
    value: function render() {
      var store = this.context.store || this.props.store;

      var _this$props = this.props,
          resolve = _this$props.resolve,
          interstitial = _this$props.interstitial,
          component = _this$props.component,
          _render = _this$props.render,
          searchOptions = _this$props.searchOptions,
          ownProps = _objectWithoutProperties(_this$props, ["resolve", "interstitial", "component", "render", "searchOptions"]);

      var Resolver =
      /*#__PURE__*/
      function (_React$Component2) {
        _inherits(Resolver, _React$Component2);

        function Resolver(self) {
          var _this;

          _classCallCheck(this, Resolver);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(Resolver).call(this, self));
          self = _assertThisInitialized(_this);
          _this.state = {
            resolved: undefined
          };
          return _this;
        }

        _createClass(Resolver, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            var _this2 = this;

            if (resolve) {
              if (typeof store.subscribe === 'function') {
                store.subscribe(function () {
                  _this2.waitForResolve();
                });
              } else {
                this.waitForResolve();
              }
            }

            this.props.onEnter(store, this.props);
          }
        }, {
          key: "waitForResolve",
          value: function waitForResolve() {
            var _this3 = this;

            var initialState = store && store.getState ? store.getState() : {};
            var resolving = [];
            var resolveKeys = Object.keys(resolve);
            resolveKeys.forEach(function (key) {
              var _resolveFn = resolve[key];

              if (typeof _resolveFn !== 'function') {
                _resolveFn = function resolveFn() {
                  return _resolveFn;
                };
              }

              var prom = Promise.resolve(_resolveFn(initialState, _this3.props));
              resolving.push(prom);
            });
            Promise.all(resolving).then(function (values) {
              var newState = _objectSpread({}, initialState, {}, values.reduce(function (acc, val, i) {
                acc[resolveKeys[i]] = val;
                return acc;
              }, {}));

              if (typeof store.setState === 'function') {
                store.setState(newState);
              }

              _this3.setState({
                resolved: newState
              });
            });
          }
        }, {
          key: "render",
          value: function render() {
            var ComponentToRender = this.state.resolved ? _render || component : interstitial;
            return external_react_default.a.createElement(ComponentToRender, _objectSpread({}, this.props, {}, this.state.resolved), this.props.children);
          }
        }]);

        return Resolver;
      }(external_react_default.a.Component);

      ResolveRoute.defaultProps = {
        onEnter: function onEnter(store, props) {}
      };
      var ResolveWithSearch = withSearch_withSearch(Resolver, searchOptions);
      return external_react_default.a.createElement(external_react_router_dom_["Route"], _extends({}, ownProps, {
        render: function render(props) {
          return external_react_default.a.createElement(ResolveWithSearch, _objectSpread({}, ownProps, {}, props));
        }
      }));
    }
  }]);

  return ResolveRoute;
}(external_react_default.a.Component);

ResolverRoute_ResolveRoute.defaultProps = {
  interstitial: function interstitial() {
    return '';
  }
};
ResolverRoute_ResolveRoute.contextTypes = {
  store: external_prop_types_default.a.object
};
ResolverRoute_ResolveRoute.propTypes = {
  interstitial: external_prop_types_default.a.oneOfType([external_prop_types_default.a.node, external_prop_types_default.a.func]),
  searchOptions: external_prop_types_default.a.object
};
/* harmony default export */ var ResolverRoute = (ResolverRoute_ResolveRoute);
// CONCATENATED MODULE: ./src/Link.jsx
function Link_extends() { Link_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Link_extends.apply(this, arguments); }

function Link_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Link_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Link_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Redirect = withSearch_withSearch(function (_ref) {
  var to = _ref.to,
      props = Link_objectWithoutProperties(_ref, ["to"]);

  return external_react_default.a.createElement(external_react_router_dom_["Redirect"], Link_extends({}, props, {
    to: "".concat(to).concat(props.location.search)
  }));
});
var Link = withSearch_withSearch(function (props) {
  return external_react_default.a.createElement(external_react_router_dom_["Link"], props);
});

// CONCATENATED MODULE: ./src/Router.jsx
function Router_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Router_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Router_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Router_R3Router = function R3Router(WrappedRouter) {
  var ReactRouter = WrappedRouter;
  return function (_ref) {
    var children = _ref.children,
        ensureTrailingSlash = _ref.ensureTrailingSlash,
        defaultRoute = _ref.defaultRoute,
        ownProps = Router_objectWithoutProperties(_ref, ["children", "ensureTrailingSlash", "defaultRoute"]);

    return external_react_default.a.createElement(ReactRouter, ownProps, defaultRoute && external_react_default.a.createElement(external_react_router_dom_["Route"], {
      exact: true,
      strict: true,
      path: "/",
      render: function render() {
        return external_react_default.a.createElement(Redirect, {
          to: defaultRoute
        });
      }
    }), children);
  };
};

var BrowserRouter = Router_R3Router(external_react_router_dom_["BrowserRouter"]);
var MemoryRouter = Router_R3Router(external_react_router_dom_["MemoryRouter"]);
var StaticRouter = Router_R3Router(external_react_router_dom_["StaticRouter"]);
var HashRouter = Router_R3Router(external_react_router_dom_["HashRouter"]);
var Router = Router_R3Router(external_react_router_dom_["Router"]);

// CONCATENATED MODULE: ./index.js
/* concated harmony reexport Route */__webpack_require__.d(__webpack_exports__, "Route", function() { return ResolverRoute; });
/* concated harmony reexport BrowserRouter */__webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return BrowserRouter; });
/* concated harmony reexport MemoryRouter */__webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return MemoryRouter; });
/* concated harmony reexport StaticRouter */__webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return StaticRouter; });
/* concated harmony reexport HashRouter */__webpack_require__.d(__webpack_exports__, "HashRouter", function() { return HashRouter; });
/* concated harmony reexport Router */__webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* concated harmony reexport Redirect */__webpack_require__.d(__webpack_exports__, "Redirect", function() { return Redirect; });
/* concated harmony reexport Link */__webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* concated harmony reexport getFromObj */__webpack_require__.d(__webpack_exports__, "getFromObj", function() { return getFromObj; });
/* concated harmony reexport template */__webpack_require__.d(__webpack_exports__, "template", function() { return template; });
/* concated harmony reexport toParams */__webpack_require__.d(__webpack_exports__, "toParams", function() { return toParams; });
/* concated harmony reexport parseBool */__webpack_require__.d(__webpack_exports__, "parseBool", function() { return parseBool; });






/***/ })
/******/ ]);
});