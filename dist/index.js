(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react-router-dom"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "react-router-dom", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("prop-types"), require("react-router-dom"), require("react")) : factory(root["prop-types"], root["react-router-dom"], root["react"]);
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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Route", function() { return /* reexport */ ResolverRoute; });
__webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return /* reexport */ BrowserRouter; });
__webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return /* reexport */ MemoryRouter; });
__webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return /* reexport */ StaticRouter; });
__webpack_require__.d(__webpack_exports__, "HashRouter", function() { return /* reexport */ HashRouter; });
__webpack_require__.d(__webpack_exports__, "Router", function() { return /* reexport */ Router; });
__webpack_require__.d(__webpack_exports__, "Redirect", function() { return /* reexport */ src_Redirect; });
__webpack_require__.d(__webpack_exports__, "Link", function() { return /* reexport */ src_Link; });
__webpack_require__.d(__webpack_exports__, "toParams", function() { return /* reexport */ toParams; });
__webpack_require__.d(__webpack_exports__, "arrayParser", function() { return /* reexport */ arrayParser; });
__webpack_require__.d(__webpack_exports__, "parseBool", function() { return /* reexport */ parseBool; });
__webpack_require__.d(__webpack_exports__, "withSearch", function() { return /* reexport */ withSearch; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(2);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(0);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(1);

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
const arrayParser = (val, key, params) => {
  let current = params[key];

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
 * @returns {Boolean} returns true if the val is "true" ignoring case and whitepsace,
 * an integer or string 1, a float or string that is exactly 1.0, otherwise, false.
 * @description convenience method for boolean attributes.
 */


const parseBool = val => {
  if (typeof val === 'boolean') return val;
  if (!val) return false;
  const toParse = val.toString().toLowerCase().trim();

  if (parseFloat(toParse) === 1 || toParse === "true") {
    return true;
  }

  return false;
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


const toParams = (str, options = {}) => {
  const parts = str.split('?');
  const queryString = parts[1] || '';
  const params = {};
  queryString.split('&').forEach(val => {
    const innerParts = val.split('=');
    if (innerParts.length !== 2) return;
    const paramKey = decodeURIComponent(innerParts[0]);
    const paramVal = decodeURIComponent(innerParts[1]);

    const parser = options[paramKey] || (() => paramVal);

    params[paramKey] = arrayParser(parser(paramVal, paramKey, params), paramKey, params);
  });
  return params;
};
/**
 * @function makeCancelable
 * @param {Promise} promiseToWrap The promise to make cancellable
 * @returns {Promise} a new promise decorated with the method tryCancel which will
 * cancel the original promise if it is not done resolving or rejecting
 */


const makeCancelable = promiseToWrap => {
  let cancelReject;
  let done = false;
  const cancelablePromise = new Promise((resolve, reject) => {
    cancelReject = reject;
    Promise.resolve(promiseToWrap).then(reason => {
      done = true;
      resolve(reason);
    }).catch(reason => {
      done = true;
      reject(reason);
    });
  });

  cancelablePromise.tryCancel = () => {
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

const withSearch = (WrappedComponent, searchOptions) => {
  return Object(external_react_router_dom_["withRouter"])(props => {
    const search = toParams(props.location.search, searchOptions);
    props.match.search = search;
    return external_react_default.a.createElement(WrappedComponent, props);
  });
};
// CONCATENATED MODULE: ./src/ResolverRoute.jsx
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






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
 *     // re-resolve the route when search parameters change. default is false.
 *     resolveOnSearch={true}
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

class ResolverRoute_ResolveRoute extends external_react_default.a.Component {
  render() {
    const store = this.context.store || this.props.store;

    const _this$props = this.props,
          {
      resolve,
      interstitial,
      component,
      render,
      searchOptions,
      resolveOnSearch,
      onEnter,
      onReject
    } = _this$props,
          ownProps = _objectWithoutProperties(_this$props, ["resolve", "interstitial", "component", "render", "searchOptions", "resolveOnSearch", "onEnter", "onReject"]);

    class Resolver extends external_react_default.a.Component {
      constructor(self) {
        super(self);
        self = this;
        this.state = {
          resolved: undefined
        };
      }
      /**
       * @memberof Route
       * @description internal method that sets up the subscription to the store if available
       * and then waits for model reoslution before rendering the component
       * Also triggers the "onEnter" function property.
       */


      componentDidMount() {
        this.setup();
      }

      componentDidUpdate() {
        this.setup();
      }

      componentWillUnmount() {
        this.cancelIfWaiting();
      }

      cancelIfWaiting() {
        if (this.promiseWaiting) {
          this.promiseWaiting.tryCancel();
          this.promiseWaiting = null;
        }
      }

      setup() {
        const {
          location
        } = this.props;
        const nextUrl = `${location.pathname}${resolveOnSearch ? location.search : ''}`;

        if (this.oldHref === nextUrl) {
          return;
        }

        this.oldHref = nextUrl;

        if (resolve) {
          if (store && typeof store.subscribe === 'function') {
            store.subscribe(() => {
              this.waitForResolve();
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


      waitForResolve() {
        this.cancelIfWaiting();
        const initialState = store && store.getState ? store.getState() : {};
        const resolving = [];
        const resolveKeys = Object.keys(resolve);
        resolveKeys.forEach(key => {
          let resolveFn = resolve[key];

          if (typeof resolveFn !== 'function') {
            resolveFn = () => resolveFn;
          }

          const prom = Promise.resolve(resolveFn(initialState, this.props));
          resolving.push(prom);
        });
        this.promiseWaiting = makeCancelable(Promise.all(resolving.map((p, i) => {
          // catch all the promise rejections and execute the onReject handler
          // take the result of the handler for use in rendering the component.
          return p.catch(reason => onReject(reason, resolveKeys[i], this.props));
        })));
        this.promiseWaiting.then(values => {
          const newState = _objectSpread({}, initialState, {}, values.reduce((acc, val, i) => {
            acc[resolveKeys[i]] = val;
            return acc;
          }, {}));

          if (store && typeof store.setState === 'function') {
            store.setState(newState);
          }

          this.setState({
            resolved: newState
          });
        }).catch((_ref) => {
          let {
            canceled
          } = _ref,
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


      render() {
        const ComponentToRender = this.state.resolved ? render || component : interstitial;
        return external_react_default.a.createElement(ComponentToRender, _objectSpread({}, this.props, {}, this.state.resolved), this.props.children);
      }

    }

    const ResolveWithSearch = withSearch(Object(external_react_router_dom_["withRouter"])(Resolver), searchOptions);
    return external_react_default.a.createElement(external_react_router_dom_["Route"], _extends({}, ownProps, {
      component: ResolveWithSearch
    }));
  }

}

ResolverRoute_ResolveRoute.defaultProps = {
  interstitial: () => '',
  onEnter: () => {},
  onReject: () => {},
  resolveOnSearch: false
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
  searchOptions: external_prop_types_default.a.object,

  /**
   * @name resolveOnSearch
   * @memberof Route
   * @description Tells the route to re-resolve and re-render the component when the
   * URL search parameters change. Default is false
   *
   * @example @lang jsx
   * <BrowserRouter resolveOnSearch={true} >
   *     <App/>
   * </BrowserRouter>,
   */
  resolveOnSearch: external_prop_types_default.a.bool
};
/* harmony default export */ var ResolverRoute = (ResolverRoute_ResolveRoute);
// CONCATENATED MODULE: ./src/Redirect.jsx
function Redirect_extends() { Redirect_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Redirect_extends.apply(this, arguments); }

function Redirect_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Redirect_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Redirect_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/**
 * @class Redirect
 * @extends {ReactRouter:Redirect}
 * @description creates a Redirect for the browser to route to a different path while
 * retaining the existing query string parameters on the url.
 * [React Router Redirect]{@link https://reacttraining.com/react-router/web/api/Redirect}
 */

const Redirect = withSearch((_ref) => {
  let {
    to
  } = _ref,
      props = Redirect_objectWithoutProperties(_ref, ["to"]);

  if (typeof to === 'string') {
    to = {
      pathname: to,
      state: props.history.location.state
    };
  }

  return external_react_default.a.createElement(external_react_router_dom_["Redirect"], Redirect_extends({}, props, {
    to: to
  }));
});
/* harmony default export */ var src_Redirect = (Redirect);
// CONCATENATED MODULE: ./src/Router.jsx
function Router_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Router_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Router_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/prop-types */




/**
 * @function withR3Options
 * @param {Router} WrappedRouter @see Router @see BrowserRouter @see MemoryRouter @see StaticRouter @see HashRouter
 * @description Higher order component intended to wrap React Router's *Router components to extend the functionality
 */

const withR3Options = WrappedRouter => {
  const ReactRouter = WrappedRouter;
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

  const RouterWrapper = (_ref) => {
    let {
      children,
      ensureTrailingSlash,
      defaultRoute
    } = _ref,
        ownProps = Router_objectWithoutProperties(_ref, ["children", "ensureTrailingSlash", "defaultRoute"]);

    return external_react_default.a.createElement(ReactRouter, ownProps, defaultRoute && external_react_default.a.createElement(external_react_router_dom_["Route"], {
      exact: true,
      strict: true,
      path: "/",
      render: () => external_react_default.a.createElement(src_Redirect, {
        to: defaultRoute
      })
    }), ensureTrailingSlash && external_react_default.a.createElement(external_react_router_dom_["Route"], {
      exact: true,
      strict: true,
      path: "/:url*",
      render: ({
        location
      }) => {
        let redirectTo = `${location.pathname}/`;
        const paramSplit = location.pathname.split('?');

        if (paramSplit.length > 1 && !paramSplit[0].endsWith('/')) {
          redirectTo = paramSplit.join('/?');
        }

        return external_react_default.a.createElement(src_Redirect, {
          to: redirectTo
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


const BrowserRouter = withR3Options(external_react_router_dom_["BrowserRouter"]);
/**
 * @class MemoryRouter
 * @extends ReactRouter:MemoryRouter
 * @description Wrapper for React Router's MemoryRouter component that provides
 * defaultRoute and ensureTrailingSlash options
 */

const MemoryRouter = withR3Options(external_react_router_dom_["MemoryRouter"]);
/**
 * @class StaticRouter
 * @extends ReactRouter:StaticRouter
 * @description Wrapper for React Router's StaticRouter component that provides
 * defaultRoute and ensureTrailingSlash options
 */

const StaticRouter = withR3Options(external_react_router_dom_["StaticRouter"]);
/**
 * @class HashRouter
 * @extends ReactRouter:HashRouter
 * @description Wrapper for React Router's HashRouter component that provides
 * defaultRoute and ensureTrailingSlash options
 */

const HashRouter = withR3Options(external_react_router_dom_["HashRouter"]);
/**
 * @class Router
 * @extends ReactRouter:Router
 * @description Wrapper for React Router's base Router component that provides
 * defaultRoute and ensureTrailingSlash options
 */

const Router = withR3Options(external_react_router_dom_["Router"]);

// CONCATENATED MODULE: ./src/Link.jsx



/**
 *
 * @class Link
 * @extends {ReactRouter:Link}
 * @description creates routable links using the React Router Link component that preserves
 * the existing query parameters or creates external anchors when given a FQDN url.
 * [React Router Link]{@link https://reacttraining.com/react-router/web/api/Link}
 * TODO: implement this feature
 */

const Link = withSearch(props => {
  return external_react_default.a.createElement(external_react_router_dom_["Link"], props);
});
/* harmony default export */ var src_Link = (Link);
// CONCATENATED MODULE: ./index.js








/***/ })
/******/ ]);
});