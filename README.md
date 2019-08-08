## Classes

<dl>
<dt><a href="#Link">Link</a> ⇐ <code>ReactRouterRedirect</code></dt>
<dd></dd>
<dt><a href="#Link">Link</a> ⇐ <code>ReactRouterLink</code></dt>
<dd></dd>
<dt><a href="#Route">Route</a> ⇐ <code>ReactRouterRoute</code></dt>
<dd></dd>
<dt><a href="#Router">Router</a> ⇐ <code>ReactRouter:Router</code></dt>
<dd></dd>
</dl>

<a name="Link"></a>

## Link ⇐ <code>ReactRouterRedirect</code>
**Kind**: global class  
**Extends**: <code>ReactRouterRedirect</code>  

* [Link](#Link) ⇐ <code>ReactRouterRedirect</code>
    * [new Link()](#new_Link_new)
    * [new Link()](#new_Link_new)

<a name="new_Link_new"></a>

### new Link()
creates a Redirect for the browser to route to a different path while
retaining the existing query string parameters on the url.
[React Router Redirect](https://reacttraining.com/react-router/web/api/Redirect)

<a name="new_Link_new"></a>

### new Link()
creates routable links using the React Router Link component that preserves
the existing query parameters or creates external anchors when given a FQDN url.
[React Router Link](https://reacttraining.com/react-router/web/api/Link)
TODO: implement

<a name="Link"></a>

## Link ⇐ <code>ReactRouterLink</code>
**Kind**: global class  
**Extends**: <code>ReactRouterLink</code>  

* [Link](#Link) ⇐ <code>ReactRouterLink</code>
    * [new Link()](#new_Link_new)
    * [new Link()](#new_Link_new)

<a name="new_Link_new"></a>

### new Link()
creates a Redirect for the browser to route to a different path while
retaining the existing query string parameters on the url.
[React Router Redirect](https://reacttraining.com/react-router/web/api/Redirect)

<a name="new_Link_new"></a>

### new Link()
creates routable links using the React Router Link component that preserves
the existing query parameters or creates external anchors when given a FQDN url.
[React Router Link](https://reacttraining.com/react-router/web/api/Link)
TODO: implement

<a name="Route"></a>

## Route ⇐ <code>ReactRouterRoute</code>
**Kind**: global class  
**Extends**: <code>ReactRouterRoute</code>  

* [Route](#Route) ⇐ <code>ReactRouterRoute</code>
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
[React Router Route](https://reacttraining.com/react-router/web/api/Route)

**Example**  
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
**Example**  
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
**Example**  
```js
// given this property configuration.
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
Wrapper for React Router's Router component that provides
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
