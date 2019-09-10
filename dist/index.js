(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"), require("react-router-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "react", "react-router-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("prop-types"), require("react"), require("react-router-dom")) : factory(root["prop-types"], root["react"], root["react-router-dom"]);
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
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(0);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(2);

// CONCATENATED MODULE: ./src/utils.js
/**
 * @function arrayParser
 * @param {Object} val the value to parse
 * @param {String} key the name of the value to parse
 * @param {Object} params all of the parameters that have been parsed so far.
 * @returns {Boolean} returns the currently parsed value.
 * @description In the event that the search string has multiple values with the same key
 * it will convert that into an array of those values for the given key.
 *
 * While there is no defined standard in [RFC 3986 Section 3.4]{@link https://tools.ietf.org/html/rfc3986#section-3.4},
 * most web frameworks accept and serialize them in the following manner as outlined
 * in [MSDN]{@link https://docs.microsoft.com/en-us/previous-versions/iis/6.0-sdk/ms524784(v=vs.90)}
 *
 * @example @lang js
 * window.location.search = '?values=foo&values=bar&values=hello&values=world';
 * const params = toParams(window.location.search, {});
 * console.log(params) // {values: ["foo","bar","hello", "world"]}
 *
 * @example @lang js
 * window.location.search = '?values=1&values=2&values=3&values=5&values=7';
 * const params = toParams(window.location.search, {
 *     values: parseInt
 * });
 * console.log(params) // {values: [1, 2, 3, 5, 7]}
 *
 * @example @lang js
 * window.location.search = '?answer=42';
 * const params = toParams(window.location.search, {
 *     answer: parseInt
 * });
 * console.log(params) // {answer: 42}
 */
var arrayParser = function arrayParser(val, key, params) {
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
/**
 * @function parseBool
 * @param {String|Integer} val the value to parse as a boolean
 * @returns {Boolean} returns true if the val is "true" or the integer 1 ignoring case, otherwise, false.
 * @description convenience method for boolean attributes.
 */


var parseBool = function parseBool(val) {
  if (val !== 1 && val.toLowerCase() !== "true") {
    return false;
  }

  return true;
};
/**
 * @function toParams
 * @param {String} str
 * @param {Object} options custom parser functions based on the key name
 * @description Converts URL parameters to a Object collection of key/value pairs
 * Decodes encoded url characters to back to normal strings.
 * @example <caption>convert query string to object:</caption>
 * import {toParams} from '@mcklabs/react-router-resolve';
 * let paramsObject = toParams('?foo=bar&hello=world&hello=array&unsafe=I%20am%20an%20unsafe%20string');
 *
 * console.log(paramsObject) // { foo: 'bar', hello: ['world', 'array'], unsafe: 'I am an unsafe string'}
 * @example <caption>pass an optional parser object</caption>
 * import {toParams} from '@mcklabs/react-router-resolve';
 * let paramsObject = toParams('?intvals=1&intvals=2&intvals=3', {
 *     intvals: parseInt
 * });
 *
 * console.log(paramsObject) // { intvals: [ 1, 2, 3 ] }
 * @example <caption>without psassing an optional parser object</caption>
 * import {toParams} from '@mcklabs/react-router-resolve';
 * let paramsObject = toParams('?intvals=1&intvals=2&intvals=3');
 *
 * console.log(paramsObject) // { intvals: [ "1", "2", "3" ] }
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

    var parser = options[paramKey] || function () {
      return paramVal;
    };

    params[paramKey] = arrayParser(parser(paramVal, paramKey, params), paramKey, params);
  });
  return params;
};
/**
 * @name makeCancelable
 * @param {Promise} promiseToWrap The promise to make cancellable
 * @returns {Promise} a new promise decorated with the method tryCancel which will
 * cancel the original promise if it is not done resolving or rejecting
 */


var makeCancelable = function makeCancelable(promiseToWrap) {
  var cancelReject;
  var done = false;
  var cancelablePromise = new Promise(function (resolve, reject) {
    cancelReject = reject;
    Promise.resolve(promiseToWrap).then(function (reason) {
      done = true;
      resolve(reason);
    })["catch"](function (reason) {
      done = true;
      reject(reason);
    });
  });

  cancelablePromise.tryCancel = function () {
    if (!done) cancelReject({
      canceled: true
    });
  };

  return cancelablePromise;
};


// CONCATENATED MODULE: ./src/withSearch.jsx



/**
 * @function withSearch
 * @param {Component} WrappedComponent
 * @param {Object} searchOptions @see searchOptions
 * @description
 * Higher-order component to provide the search parameters as an object,
 * The result of @see toParams are made available as props.match.search.
 */

var withSearch_withSearch = function withSearch(WrappedComponent, searchOptions) {
  return Object(external_react_router_dom_["withRouter"])(function (props) {
    var search = toParams(props.location.search, searchOptions);
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






/**
 * @class Route
 * @extends {ReactRouter:Route}
 * @description Provides a cleaner data resolution scheme for routed applications.
 * See [ReactRouter:Route]{@link https://reacttraining.com/react-router/web/api/Route}
 * for standard options documentation
 *
 * @example @lang jsx <caption>Define your route as you would using react-router</caption>
 * <Route
 *     path="/demo/:id"
 *     // parsers for query parameters to convert something like "1" into the integer 1. These are made available on
 *     // props.match.search
 *     searchOptions={{
 *         num: parseInt,
 *         edit: parseBool
 *     }}
 *     // onEnter triggers when the route is activated by a url match.
 *     onEnter={(store) => {
 *         // in this example, we are triggering a redux action, but you can do anything you want.
 *         // "store" comes from the provided context
 *         store.dispatch({ type: "SOME_ACTION" });
 *     }}
 *     // resolve is where you define the properties you want to wait on before rendering the component.
 *     resolve={{
 *         itemList: (state, ownProps) => {
 *             return new Promise((resolve) => {
 *               setTimeout(() => {
 *                   resolve(JSON.stringify(['item one.', 'item two.', 'item three.']));
 *               }, 4000);
 *             });
 *         },
 *         thing: (state, ownProps) => {
 *             //state could be a redux state or anything you have defined in context as "store"
 *             // that follows a redux-style API
 *             return state.stuff;
 *         }
 *     }}
 *     // interstitial is for rendering something while waitng.
 *     interstitial={({ match }) => {
 *         return (<div>
 *                     <h3>Loading...</h3>
 *                     <div>{JSON.stringify(match, null, 2)}</div>
 *                 </div>);
 *     }}
 *     // render and component properties work identically to the React Router Route:render props
 *     // However, the props provided are decorated the the properties resolved by the "resolve" prop above
 *     render={({ thing, itemList, match }) => {
 *         return (<div>
 *                     <list-component data-items={itemList}/>
 *                     <search-params data-search={JSON.stringify(match.search)} />
 *                     <div>{JSON.stringify(thing, null, 2)}</div>
 *                 </div>);
 *     }} />
 */

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
          onEnter = _this$props.onEnter,
          onReject = _this$props.onReject,
          ownProps = _objectWithoutProperties(_this$props, ["resolve", "interstitial", "component", "render", "searchOptions", "onEnter", "onReject"]);

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
        /**
         * @memberof Route
         * @description internal method that sets up the subscription to the store if available
         * and then waits for model reoslution before rendering the component
         * Also triggers the "onEnter" function property.
         */


        _createClass(Resolver, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            this.setup();
          }
        }, {
          key: "componentDidUpdate",
          value: function componentDidUpdate() {
            this.setup();
          }
        }, {
          key: "setup",
          value: function setup() {
            var _this2 = this;

            var location = this.props.location;
            var nextUrl = "".concat(location.pathname).concat(location.search);

            if (this.oldHref === nextUrl) {
              return;
            }

            this.oldHref = nextUrl;

            if (resolve) {
              if (store && typeof store.subscribe === 'function') {
                store.subscribe(function () {
                  _this2.waitForResolve();
                });
              } else {
                this.waitForResolve();
              }
            } else {
              this.setState({
                resolved: {}
              });
            }

            onEnter(store, this.props);
          }
          /**
           * @memberof Route
           * @description internal method that gets the existing state from the context store.
           * Then, it iterates through the keys of the "resolve" property and, if necessary,
           * converts them to a function that returns the value set for that key. Then, it resolves
           * the result of those functions as promises. Once all the promises have resolved,
           * it sets the internal state to the result of the newState via setState(), which
           * triggers the internal render function.
           */

        }, {
          key: "waitForResolve",
          value: function waitForResolve() {
            var _this3 = this;

            if (this.promiseWaiting) {
              this.promiseWaiting.tryCancel();
              this.promiseWaiting = null;
            }

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
            this.promiseWaiting = makeCancelable(Promise.all(resolving.map(function (p, i) {
              // catch all the promise rejections and execute the onReject handler
              // take the result of the handler for use in rendering the component.
              return p["catch"](function (reason) {
                return onReject(reason, resolveKeys[i], _this3.props);
              });
            })));
            this.promiseWaiting.then(function (values) {
              var newState = _objectSpread({}, initialState, {}, values.reduce(function (acc, val, i) {
                acc[resolveKeys[i]] = val;
                return acc;
              }, {}));

              if (store && typeof store.setState === 'function') {
                store.setState(newState);
              }

              _this3.setState({
                resolved: newState
              });
            })["catch"](function (_ref) {
              var canceled = _ref.canceled,
                  reason = _objectWithoutProperties(_ref, ["canceled"]);

              if (!canceled) {
                return Promise.reject(reason);
              }
            });
          }
          /**
           * @memberof Route
           * @description internal method that renders wither the component from the
           * render or component props, with render taking precedence. It then passes all the
           * combined props and the resolved state as properties to the component
           * and provides any children elements defined in the route declaration
           * to the component to render as props.children.
           */

        }, {
          key: "render",
          value: function render() {
            var ComponentToRender = this.state.resolved ? _render || component : interstitial;
            return external_react_default.a.createElement(ComponentToRender, _objectSpread({}, this.props, {}, this.state.resolved), this.props.children);
          }
        }]);

        return Resolver;
      }(external_react_default.a.Component);

      var ResolveWithSearch = withSearch_withSearch(Object(external_react_router_dom_["withRouter"])(Resolver), searchOptions);
      return external_react_default.a.createElement(external_react_router_dom_["Route"], _extends({}, ownProps, {
        component: ResolveWithSearch
      }));
    }
  }]);

  return ResolveRoute;
}(external_react_default.a.Component);

ResolverRoute_ResolveRoute.defaultProps = {
  interstitial: function interstitial() {
    return '';
  },
  onEnter: function onEnter() {},
  onReject: function onReject() {}
};
ResolverRoute_ResolveRoute.contextTypes = {
  store: external_prop_types_default.a.object
};
ResolverRoute_ResolveRoute.propTypes = {
  location: external_prop_types_default.a.object,
  children: external_prop_types_default.a.oneOfType([external_prop_types_default.a.node, external_prop_types_default.a.func]),

  /**
   * @memberof Route
   * @description Override the store from the default context provider.
   * the store must adhere to the same redux-style API with "getState" and subscribe functions
   */
  store: external_prop_types_default.a.shape({
    getState: external_prop_types_default.a.func.isRequired,
    subscribe: external_prop_types_default.a.func.isRequired
  }),

  /**
   * @name onEnter
   * @memberof Route
   * @description executed when the route is activated upon a url match.
   * It is simply a notification channel for you to decide what to do
   * such as conditionally dispatching an action through redux or triggering other events.
   * @example @lang js <caption>define the onEnter callback fn</caption>
   * onEnter={(store) => {
   *     if (!store.getState().someData) {
   *         store.dispatch({ type: "SOME_ACTION" });
   *     }
   * }}
   */
  onEnter: external_prop_types_default.a.func,

  /**
   * @name onReject
   * @memberof Route
   * @description executed when a promise in the resolve factory functions is rejected
   * anything returned by onReject will be the value that is passed as the property for that value.
   * for multiple rejections, such as when you have more than one factory method that gets rejected,
   * the onReject call will be executed for each rejected promise.
   * @param {Error} reason the promise rejection reason
   * @param {String} factoryName the string name of the factory method that got rejected.
   * @param {Object} ownProps the current route's properties.
   * @example @lang js <caption>define the onReject callback fn</caption>
   * onReject={(reason, factoryName, ownProps) => {
   *     if (factoryName === 'myFactory') {
   *         return {some: "defaultObject"}
   *     } else {
   *         return "someDefaultValue";
   *     }
   * }}
   */
  onReject: external_prop_types_default.a.func,

  /**
   * @name resolve
   * @memberof Route
   * @param {Object} state The result of internal context.store.getState();
   * @param {Object} ownProps the combined props for the Route
   * @description Object of key:{Object|Function} pairs that will be executed before the component is rendered.
   * if the callback returns a promise, the interstitial component will be rnedered until the promise resolves.
   * This allows you to make API calls that are async without worrying about your component not having
   * the data it needs when rendering for the first time.
   *
   * It also allows for a better "data-down -> actions up" approach to UI component orchestration.
   * By resolving the data based on route parameters before ever accessing the component, you can just pass
   * properties down to child components and avoid internal component state. Any user interactions, such as
   * a button click, which modifies the UI State, should be represented by a route. That means you can make
   * the buttons being clicked anchor tag hrefs to different UI states.
   * @example @lang js
   *  resolve={{
   *     itemList: (state, ownProps) => {
   *         return new Promise((resolve) => {
   *           setTimeout(() => {
   *               resolve(JSON.stringify(['item one.', 'item two.', 'item three.']));
   *           }, 4000);
   *         });
   *     },
   *     thing: (state, ownProps) => {
   *         //state could be a redux state or anything you have defined in context as "store"
   *         // that follows a redux-style API
   *         return state.stuff;
   *     }
   * }}
   */
  resolve: external_prop_types_default.a.object,

  /**
   * @name component
   * @memberof Route
   * @description [React Router Route:component]{@link https://reacttraining.com/react-router/web/api/Route/component}
   */
  component: external_prop_types_default.a.oneOfType([external_prop_types_default.a.node, external_prop_types_default.a.func]),

  /**
   * @name render
   * @memberof Route
   * @description [React Router Route:render]{@link https://reacttraining.com/react-router/web/api/Route/render}
   */
  render: external_prop_types_default.a.oneOfType([external_prop_types_default.a.node, external_prop_types_default.a.func]),

  /**
   * @name interstitial
   * @memberof Route
   * @description component to render while waiting for properties defined in "resolve" to finish resolving.
   * @example @lang js
   * interstitial={({ match }) => {
   *     return (<h3>Loading...</h3>);
   * }}
   */
  interstitial: external_prop_types_default.a.oneOfType([external_prop_types_default.a.node, external_prop_types_default.a.func]),

  /**
   * @name searchOptions
   * @memberof Route
   * @description Object of key:{Function} pairs where the key represents a url query parameter
   * name and the function parses that property and returns the value
   * Parsers for query parameters to convert something like "1" into the integer 1
   * These are made available on props.match.search
   * @example @lang js <caption>given this property configuration.</caption>
   * searchOptions={{
   *     num: parseInt,
   *     edit: parseBool
   * }}
   * window.location.search = "?edit=true&num=45";
   * render={({ match }) => {
   *     console.log(match.search.edit) // true
   *     console.log(typeof match.search.edit) // 'boolean' insteadof 'string'
   *     console.log(match.search.num) // 45
   *     console.log(typeof match.search.num) // 'number' instead of 'string'
   *     const stringified = JSON.stringify(match.search);
   *     console.log(stringified) // '{"num": 2, "edit": false}';
   *     return (<div>
   *                 <search-params data-search={stringified} />
   *             </div>);
   * }} />
   */
  searchOptions: external_prop_types_default.a.object
};
/* harmony default export */ var ResolverRoute = (ResolverRoute_ResolveRoute);
// CONCATENATED MODULE: ./src/Link.jsx
function Link_extends() { Link_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Link_extends.apply(this, arguments); }

function Link_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Link_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Link_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/**
 * @class Redirect
 * @extends {ReactRouter:Redirect}
 * @description creates a Redirect for the browser to route to a different path while
 * retaining the existing query string parameters on the url.
 * [React Router Redirect]{@link https://reacttraining.com/react-router/web/api/Redirect}
 */

var Redirect = withSearch_withSearch(function (_ref) {
  var to = _ref.to,
      props = Link_objectWithoutProperties(_ref, ["to"]);

  return external_react_default.a.createElement(external_react_router_dom_["Redirect"], Link_extends({}, props, {
    to: "".concat(to).concat(props.location.search)
  }));
});
/**
 *
 * @class Link
 * @extends {ReactRouter:Link}
 * @description creates routable links using the React Router Link component that preserves
 * the existing query parameters or creates external anchors when given a FQDN url.
 * [React Router Link]{@link https://reacttraining.com/react-router/web/api/Link}
 * TODO: implement this feature
 */

var Link = withSearch_withSearch(function (props) {
  return external_react_default.a.createElement(external_react_router_dom_["Link"], props);
});

// CONCATENATED MODULE: ./src/Router.jsx
function Router_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Router_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Router_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/prop-types */




/**
 * @function withR3Options
 * @param {Router} WrappedRouter @see Router @see BrowserRouter @see MemoryRouter @see StaticRouter @see HashRouter
 * @description Higher order component intended to wrap React Router's *Router components to extend the functionality
 */

var Router_withR3Options = function withR3Options(WrappedRouter) {
  var ReactRouter = WrappedRouter;
  /**
   * @name ensureTrailingSlash
   * @memberof Router
   * @description ensures a trailing slash is applied to the url. at runtime,
   * browser url will be converted to always end in "/". default is false.
   *
   * @example @lang jsx
   * <BrowserRouter ensureTrailingSlash={true} >
   *     <App/>
   * </BrowserRouter>,
   */

  /**
   * @name defaultRoute
   * @memberof Router
   * @description when the basename route is hit (default "/"), the browser will
   * automatically redirect to the defaultRoute specified. Default is undefined.
   *
   * @example @lang jsx
   * <BrowserRouter defaultRoute="/demo/world" >
   *     <App/>
   * </BrowserRouter>,
   */

  var RouterWrapper = function RouterWrapper(_ref) {
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
    }), ensureTrailingSlash && external_react_default.a.createElement(external_react_router_dom_["Route"], {
      exact: true,
      strict: true,
      path: "/:url*",
      render: function render(props) {
        return external_react_default.a.createElement(Redirect, {
          to: "".concat(props.location.pathname, "/")
        });
      }
    }), children);
  };

  RouterWrapper.propTypes = {
    ensureTrailingSlash: external_prop_types_["PropTypes"].bool,
    defaultRoute: external_prop_types_["PropTypes"].string
  };
  RouterWrapper.defaultProps = {
    ensureTrailingSlash: false
  };
  return RouterWrapper;
};
/**
 * @class BrowserRouter
 * @extends ReactRouter:BrowserRouter
 * @description Wrapper for React Router's BrowserRouter component that provides
 * defaultRoute and ensureTrailingSlash options
 */


var BrowserRouter = Router_withR3Options(external_react_router_dom_["BrowserRouter"]);
/**
 * @class MemoryRouter
 * @extends ReactRouter:MemoryRouter
 * @description Wrapper for React Router's MemoryRouter component that provides
 * defaultRoute and ensureTrailingSlash options
 */

var MemoryRouter = Router_withR3Options(external_react_router_dom_["MemoryRouter"]);
/**
 * @class StaticRouter
 * @extends ReactRouter:StaticRouter
 * @description Wrapper for React Router's StaticRouter component that provides
 * defaultRoute and ensureTrailingSlash options
 */

var StaticRouter = Router_withR3Options(external_react_router_dom_["StaticRouter"]);
/**
 * @class HashRouter
 * @extends ReactRouter:HashRouter
 * @description Wrapper for React Router's HashRouter component that provides
 * defaultRoute and ensureTrailingSlash options
 */

var HashRouter = Router_withR3Options(external_react_router_dom_["HashRouter"]);
/**
 * @class Router
 * @extends ReactRouter:Router
 * @description Wrapper for React Router's base Router component that provides
 * defaultRoute and ensureTrailingSlash options
 */

var Router = Router_withR3Options(external_react_router_dom_["Router"]);

// CONCATENATED MODULE: ./index.js
/* concated harmony reexport Route */__webpack_require__.d(__webpack_exports__, "Route", function() { return ResolverRoute; });
/* concated harmony reexport BrowserRouter */__webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return BrowserRouter; });
/* concated harmony reexport MemoryRouter */__webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return MemoryRouter; });
/* concated harmony reexport StaticRouter */__webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return StaticRouter; });
/* concated harmony reexport HashRouter */__webpack_require__.d(__webpack_exports__, "HashRouter", function() { return HashRouter; });
/* concated harmony reexport Router */__webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* concated harmony reexport Redirect */__webpack_require__.d(__webpack_exports__, "Redirect", function() { return Redirect; });
/* concated harmony reexport Link */__webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* concated harmony reexport toParams */__webpack_require__.d(__webpack_exports__, "toParams", function() { return toParams; });
/* concated harmony reexport arrayParser */__webpack_require__.d(__webpack_exports__, "arrayParser", function() { return arrayParser; });
/* concated harmony reexport parseBool */__webpack_require__.d(__webpack_exports__, "parseBool", function() { return parseBool; });
/* concated harmony reexport withSearch */__webpack_require__.d(__webpack_exports__, "withSearch", function() { return withSearch_withSearch; });







/***/ })
/******/ ]);
});