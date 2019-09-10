import React from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import { withSearch } from './withSearch';
import { makeCancelable } from './utils';

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
class ResolveRoute extends React.Component {
    render() {
        const store = this.context.store || this.props.store;
        const { resolve, interstitial, component, render, searchOptions, onEnter, onReject, ...ownProps } = this.props;
        class Resolver extends React.Component {
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

            setup() {
                const { location } = this.props;
                const nextUrl = `${location.pathname}${location.search}`;
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
                    this.setState({ resolved: {} });
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
                if (this.promiseWaiting) {
                    this.promiseWaiting.tryCancel();
                    this.promiseWaiting = null;
                }
                const initialState = (store && store.getState) ? store.getState() : {};
                const resolving = [];
                const resolveKeys = Object.keys(resolve);
                resolveKeys.forEach((key) => {
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
                    return p.catch((reason) => onReject(reason, resolveKeys[i], this.props));
                })));
                this.promiseWaiting.then((values) => {
                    const newState = { ...initialState, ...values.reduce((acc, val, i) => {
                        acc[resolveKeys[i]] = val;
                        return acc;
                    }, {}) };
                    if (store && typeof store.setState === 'function') {
                        store.setState(newState);
                    }
                    this.setState({ resolved: newState });
                }).catch(({ canceled, ...reason }) => {
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
                const ComponentToRender = this.state.resolved ? (render || component) : interstitial;
                return (
                    <ComponentToRender {...{ ...this.props, ...this.state.resolved }}>
                        {this.props.children}
                    </ComponentToRender>
                );
            }
        }

        const ResolveWithSearch = withSearch(withRouter(Resolver), searchOptions);

        return (<Route {...ownProps} component={ResolveWithSearch}/>);
    }
}


ResolveRoute.defaultProps = {
    interstitial: () => '',
    onEnter: () => {},
    onReject: () => {}
};

ResolveRoute.contextTypes = {
    store: PropTypes.object
};

ResolveRoute.propTypes = {
    location: PropTypes.object,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    /**
     * @memberof Route
     * @description Override the store from the default context provider.
     * the store must adhere to the same redux-style API with "getState" and subscribe functions
     */
    store: PropTypes.shape({
        getState: PropTypes.func.isRequired,
        subscribe: PropTypes.func.isRequired
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
    onEnter: PropTypes.func,
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
    onReject: PropTypes.func,
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
    resolve: PropTypes.object,
    /**
     * @name component
     * @memberof Route
     * @description [React Router Route:component]{@link https://reacttraining.com/react-router/web/api/Route/component}
     */
    component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    /**
     * @name render
     * @memberof Route
     * @description [React Router Route:render]{@link https://reacttraining.com/react-router/web/api/Route/render}
     */
    render: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    /**
     * @name interstitial
     * @memberof Route
     * @description component to render while waiting for properties defined in "resolve" to finish resolving.
     * @example @lang js
     * interstitial={({ match }) => {
     *     return (<h3>Loading...</h3>);
     * }}
     */
    interstitial: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
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
    searchOptions: PropTypes.object
};

export default ResolveRoute;
