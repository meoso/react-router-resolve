## Classes

<dl>
<dt><a href="#Redirect">Redirect</a> ⇐ <code>ReactRouter:Redirect</code></dt>
<dd></dd>
<dt><a href="#Link">Link</a> ⇐ <code>ReactRouter:Link</code></dt>
<dd></dd>
<dt><a href="#Route">Route</a> ⇐ <code>ReactRouter:Route</code></dt>
<dd></dd>
<dt><a href="#BrowserRouter">BrowserRouter</a> ⇐ <code>ReactRouter:BrowserRouter</code></dt>
<dd></dd>
<dt><a href="#MemoryRouter">MemoryRouter</a> ⇐ <code>ReactRouter:MemoryRouter</code></dt>
<dd></dd>
<dt><a href="#StaticRouter">StaticRouter</a> ⇐ <code>ReactRouter:StaticRouter</code></dt>
<dd></dd>
<dt><a href="#HashRouter">HashRouter</a> ⇐ <code>ReactRouter:HashRouter</code></dt>
<dd></dd>
<dt><a href="#Router">Router</a> ⇐ <code>ReactRouter:Router</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#withR3Options">withR3Options(WrappedRouter)</a></dt>
<dd><p>Higher order component intended to wrap React Router&#39;s *Router components to extend the functionality</p>
</dd>
<dt><a href="#withSearch">withSearch(WrappedComponent, searchOptions)</a></dt>
<dd><p>Higher-order component to provide the search parameters as an object,
The result of @see toParams are made available as props.match.search.</p>
</dd>
<dt><a href="#arrayParser">arrayParser(val, key, params)</a> ⇒ <code>Boolean</code></dt>
<dd><p>In the event that the search string has multiple values with the same key
it will convert that into an array of those values for the given key.</p>
<p>While there is no defined standard in <a href="https://tools.ietf.org/html/rfc3986#section-3.4">RFC 3986 Section 3.4</a>,
most web frameworks accept and serialize them in the following manner as outlined
in <a href="https://docs.microsoft.com/en-us/previous-versions/iis/6.0-sdk/ms524784(v=vs.90)">MSDN</a></p>
</dd>
<dt><a href="#parseBool">parseBool(val)</a> ⇒ <code>Boolean</code></dt>
<dd><p>convenience method for boolean attributes.</p>
</dd>
<dt><a href="#toParams">toParams(str, options)</a></dt>
<dd><p>Converts URL parameters to a Object collection of key/value pairs
Decodes encoded url characters to back to normal strings.</p>
</dd>
</dl>

<a name="Redirect"></a>

## Redirect ⇐ <code>ReactRouter:Redirect</code>
**Kind**: global class  
**Extends**: <code>ReactRouter:Redirect</code>  
<a name="new_Redirect_new"></a>

### new Redirect()
creates a Redirect for the browser to route to a different path while
retaining the existing query string parameters on the url.
[React Router Redirect](https://reacttraining.com/react-router/web/api/Redirect)

<a name="Link"></a>

## Link ⇐ <code>ReactRouter:Link</code>
**Kind**: global class  
**Extends**: <code>ReactRouter:Link</code>  
<a name="new_Link_new"></a>

### new Link()
creates routable links using the React Router Link component that preserves
the existing query parameters or creates external anchors when given a FQDN url.
[React Router Link](https://reacttraining.com/react-router/web/api/Link)
TODO: implement this feature

<a name="Route"></a>

## Route ⇐ <code>ReactRouter:Route</code>
**Kind**: global class  
**Extends**: <code>ReactRouter:Route</code>  

* [Route](#Route) ⇐ <code>ReactRouter:Route</code>
    * [new Route()](#new_Route_new)
    * [.store](#Route.store)
    * [.onEnter](#Route.onEnter)
    * [.resolve](#Route.resolve)
    * [.component](#Route.component)
    * [.render](#Route.render)
    * [.interstitial](#Route.interstitial)
    * [.searchOptions](#Route.searchOptions)
    * [.Resolver#componentDidMount()](#Route.Resolver+componentDidMount)
    * [.Resolver#waitForResolve()](#Route.Resolver+waitForResolve)
    * [.Resolver#render()](#Route.Resolver+render)

<a name="new_Route_new"></a>

### new Route()
Provides a cleaner data resolution scheme for routed applications.
See [ReactRouter:Route](https://reacttraining.com/react-router/web/api/Route)
for standard options documentation

**Example** *(Define your route as you would using react-router)*  
```jsx
<Route
    path="/demo/:id"
    // parsers for query parameters to convert something like "1" into the integer 1. These are made available on
    // props.match.search
    searchOptions={{
        num: parseInt,
        edit: parseBool
    }}
    // onEnter triggers when the route is activated by a url match.
    onEnter={(store) => {
        // in this example, we are triggering a redux action, but you can do anything you want.
        // "store" comes from the provided context
        store.dispatch({ type: "SOME_ACTION" });
    }}
    // resolve is where you define the properties you want to wait on before rendering the component.
    resolve={{
        itemList: (state, ownProps) => {
            return new Promise((resolve) => {
              setTimeout(() => {
                  resolve(JSON.stringify(['item one.', 'item two.', 'item three.']));
              }, 4000);
            });
        },
        thing: (state, ownProps) => {
            //state could be a redux state or anything you have defined in context as "store"
            // that follows a redux-style API
            return state.stuff;
        }
    }}
    // interstitial is for rendering something while waitng.
    interstitial={({ match }) => {
        return (<div>
                    <h3>Loading...</h3>
                    <div>{JSON.stringify(match, null, 2)}</div>
                </div>);
    }}
    // render and component properties work identically to the React Router Route:render props
    // However, the props provided are decorated the the properties resolved by the "resolve" prop above
    render={({ thing, itemList, match }) => {
        return (<div>
                    <list-component data-items={itemList}/>
                    <search-params data-search={JSON.stringify(match.search)} />
                    <div>{JSON.stringify(thing, null, 2)}</div>
                </div>);
    }} />
```
<a name="Route.store"></a>

### Route.store
Override the store from the default context provider.
the store must adhere to the same redux-style API with "getState" and subscribe functions

**Kind**: static property of [<code>Route</code>](#Route)  
<a name="Route.onEnter"></a>

### Route.onEnter
executed when the route is activated upon a url match.
It is simply a notification channel for you to decide what to do
such as conditionally dispatching an action through redux or triggering other events.

**Kind**: static property of [<code>Route</code>](#Route)  
**Example** *(define the onEnter callback fn)*  
```js
onEnter={(store) => {
    if (!store.getState().someData) {
        store.dispatch({ type: "SOME_ACTION" });
    }
}}
```
<a name="Route.resolve"></a>

### Route.resolve
Object of key:{Object|Function} pairs that will be executed before the component is rendered.
if the callback returns a promise, the interstitial component will be rnedered until the promise resolves.
This allows you to make API calls that are async without worrying about your component not having
the data it needs when rendering for the first time.

It also allows for a better "data-down -> actions up" approach to UI component orchestration.
By resolving the data based on route parameters before ever accessing the component, you can just pass
properties down to child components and avoid internal component state. Any user interactions, such as
a button click, which modifies the UI State, should be represented by a route. That means you can make
the buttons being clicked anchor tag hrefs to different UI states.

**Kind**: static property of [<code>Route</code>](#Route)  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> | The result of internal context.store.getState(); |
| ownProps | <code>Object</code> | the combined props for the Route |

**Example**  
```js
 resolve={{
    itemList: (state, ownProps) => {
        return new Promise((resolve) => {
          setTimeout(() => {
              resolve(JSON.stringify(['item one.', 'item two.', 'item three.']));
          }, 4000);
        });
    },
    thing: (state, ownProps) => {
        //state could be a redux state or anything you have defined in context as "store"
        // that follows a redux-style API
        return state.stuff;
    }
}}
```
<a name="Route.component"></a>

### Route.component
[React Router Route:component](https://reacttraining.com/react-router/web/api/Route/component)

**Kind**: static property of [<code>Route</code>](#Route)  
<a name="Route.render"></a>

### Route.render
[React Router Route:render](https://reacttraining.com/react-router/web/api/Route/render)

**Kind**: static property of [<code>Route</code>](#Route)  
<a name="Route.interstitial"></a>

### Route.interstitial
component to render while waiting for properties defined in "resolve" to finish resolving.

**Kind**: static property of [<code>Route</code>](#Route)  
**Example**  
```js
interstitial={({ match }) => {
    return (<h3>Loading...</h3>);
}}
```
<a name="Route.searchOptions"></a>

### Route.searchOptions
Object of key:{Function} pairs where the key represents a url query parameter
name and the function parses that property and returns the value
Parsers for query parameters to convert something like "1" into the integer 1
These are made available on props.match.search

**Kind**: static property of [<code>Route</code>](#Route)  
**Example** *(given this property configuration.)*  
```js
searchOptions={{
    num: parseInt,
    edit: parseBool
}}
window.location.search = "?edit=true&num=45";
render={({ match }) => {
    console.log(match.search.edit) // true
    console.log(typeof match.search.edit) // 'boolean' insteadof 'string'
    console.log(match.search.num) // 45
    console.log(typeof match.search.num) // 'number' instead of 'string'
    const stringified = JSON.stringify(match.search);
    console.log(stringified) // '{"num": 2, "edit": false}';
    return (<div>
                <search-params data-search={stringified} />
            </div>);
}} />
```
<a name="Route.Resolver+componentDidMount"></a>

### Route.Resolver#componentDidMount()
internal method that sets up the subscription to the store if available
and then waits for model reoslution before rendering the component
Also triggers the "onEnter" function property.

**Kind**: static method of [<code>Route</code>](#Route)  
<a name="Route.Resolver+waitForResolve"></a>

### Route.Resolver#waitForResolve()
internal method that gets the existing state from the context store.
Then, it iterates through the keys of the "resolve" property and, if necessary,
converts them to a function that returns the value set for that key. Then, it resolves
the result of those functions as promises. Once all the promises have resolved,
it sets the internal state to the result of the newState via setState(), which
triggers the internal render function.

**Kind**: static method of [<code>Route</code>](#Route)  
<a name="Route.Resolver+render"></a>

### Route.Resolver#render()
internal method that renders wither the component from the
render or component props, with render taking precedence. It then passes all the
combined props and the resolved state as properties to the component
and provides any children elements defined in the route declaration
to the component to render as props.children.

**Kind**: static method of [<code>Route</code>](#Route)  
<a name="BrowserRouter"></a>

## BrowserRouter ⇐ <code>ReactRouter:BrowserRouter</code>
**Kind**: global class  
**Extends**: <code>ReactRouter:BrowserRouter</code>  
<a name="new_BrowserRouter_new"></a>

### new BrowserRouter()
Wrapper for React Router's BrowserRouter component that provides
defaultRoute and ensureTrailingSlash options

<a name="MemoryRouter"></a>

## MemoryRouter ⇐ <code>ReactRouter:MemoryRouter</code>
**Kind**: global class  
**Extends**: <code>ReactRouter:MemoryRouter</code>  
<a name="new_MemoryRouter_new"></a>

### new MemoryRouter()
Wrapper for React Router's MemoryRouter component that provides
defaultRoute and ensureTrailingSlash options

<a name="StaticRouter"></a>

## StaticRouter ⇐ <code>ReactRouter:StaticRouter</code>
**Kind**: global class  
**Extends**: <code>ReactRouter:StaticRouter</code>  
<a name="new_StaticRouter_new"></a>

### new StaticRouter()
Wrapper for React Router's StaticRouter component that provides
defaultRoute and ensureTrailingSlash options

<a name="HashRouter"></a>

## HashRouter ⇐ <code>ReactRouter:HashRouter</code>
**Kind**: global class  
**Extends**: <code>ReactRouter:HashRouter</code>  
<a name="new_HashRouter_new"></a>

### new HashRouter()
Wrapper for React Router's HashRouter component that provides
defaultRoute and ensureTrailingSlash options

<a name="Router"></a>

## Router ⇐ <code>ReactRouter:Router</code>
**Kind**: global class  
**Extends**: <code>ReactRouter:Router</code>  

* [Router](#Router) ⇐ <code>ReactRouter:Router</code>
    * [new Router()](#new_Router_new)
    * [.ensureTrailingSlash](#Router.ensureTrailingSlash)
    * [.defaultRoute](#Router.defaultRoute)

<a name="new_Router_new"></a>

### new Router()
Wrapper for React Router's base Router component that provides
defaultRoute and ensureTrailingSlash options

<a name="Router.ensureTrailingSlash"></a>

### Router.ensureTrailingSlash
ensures a trailing slash is applied to the url. at runtime,
browser url will be converted to always end in "/". default is false.

TODO: Implement

**Kind**: static property of [<code>Router</code>](#Router)  
**Example**  
```jsx
<BrowserRouter ensureTrailingSlash={true} >
    <App/>
</BrowserRouter>,
```
<a name="Router.defaultRoute"></a>

### Router.defaultRoute
when the basename route is hit (default "/"), the browser will
automatically redirect to the defaultRoute specified. Default is undefined.

**Kind**: static property of [<code>Router</code>](#Router)  
**Example**  
```jsx
<BrowserRouter defaultRoute="/demo/world" >
    <App/>
</BrowserRouter>,
```
<a name="withR3Options"></a>

## withR3Options(WrappedRouter)
Higher order component intended to wrap React Router's *Router components to extend the functionality

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| WrappedRouter | [<code>Router</code>](#Router) | @see Router @see BrowserRouter @see MemoryRouter @see StaticRouter @see HashRouter |

<a name="withSearch"></a>

## withSearch(WrappedComponent, searchOptions)
Higher-order component to provide the search parameters as an object,
The result of @see toParams are made available as props.match.search.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| WrappedComponent | <code>Component</code> |  |
| searchOptions | <code>Object</code> | @see searchOptions |

<a name="arrayParser"></a>

## arrayParser(val, key, params) ⇒ <code>Boolean</code>
In the event that the search string has multiple values with the same key
it will convert that into an array of those values for the given key.

While there is no defined standard in [RFC 3986 Section 3.4](https://tools.ietf.org/html/rfc3986#section-3.4),
most web frameworks accept and serialize them in the following manner as outlined
in [MSDN](https://docs.microsoft.com/en-us/previous-versions/iis/6.0-sdk/ms524784(v=vs.90))

**Kind**: global function  
**Returns**: <code>Boolean</code> - returns the currently parsed value.  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>Object</code> | the value to parse |
| key | <code>String</code> | the name of the value to parse |
| params | <code>Object</code> | all of the parameters that have been parsed so far. |

**Example**  
```js
window.location.search = '?values=foo&values=bar&values=hello&values=world';
const params = toParams(window.location.search, {});
console.log(params) // {values: ["foo","bar","hello", "world"]}
```
**Example**  
```js
window.location.search = '?values=1&values=2&values=3&values=5&values=7';
const params = toParams(window.location.search, {
    values: parseInt
});
console.log(params) // {values: [1, 2, 3, 5, 7]}
```
**Example**  
```js
window.location.search = '?answer=42';
const params = toParams(window.location.search, {
    answer: parseInt
});
console.log(params) // {answer: 42}
```
<a name="parseBool"></a>

## parseBool(val) ⇒ <code>Boolean</code>
convenience method for boolean attributes.

**Kind**: global function  
**Returns**: <code>Boolean</code> - returns true if the val is "true" or the integer 1 ignoring case, otherwise, false.  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>String</code> \| <code>Integer</code> | the value to parse as a boolean |

<a name="toParams"></a>

## toParams(str, options)
Converts URL parameters to a Object collection of key/value pairs
Decodes encoded url characters to back to normal strings.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> |  |
| options | <code>Object</code> | custom parser functions based on the key name |

**Example** *(convert query string to object:)*  
```js
import {toParams} from '@mcklabs/react-router-resolve';
let paramsObject = toParams('?foo=bar&hello=world&hello=array&unsafe=I%20am%20an%20unsafe%20string');

console.log(paramsObject) // { foo: 'bar', hello: ['world', 'array'], unsafe: 'I am an unsafe string'}
```
**Example** *(pass an optional parser object)*  
```js
import {toParams} from '@mcklabs/react-router-resolve';
let paramsObject = toParams('?intvals=1&intvals=2&intvals=3', {
    intvals: parseInt
});

console.log(paramsObject) // { intvals: [ 1, 2, 3 ] }
```
**Example** *(without psassing an optional parser object)*  
```js
import {toParams} from '@mcklabs/react-router-resolve';
let paramsObject = toParams('?intvals=1&intvals=2&intvals=3');

console.log(paramsObject) // { intvals: [ "1", "2", "3" ] }
```
