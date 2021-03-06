/* eslint-disable react/prop-types */
import React from "react";
import { PropTypes } from "prop-types";
import Redirect from "./Redirect";
import {
    BrowserRouter as BrowserRouterDom,
    MemoryRouter as MemoryRouterDom,
    StaticRouter as StaticRouterDom,
    HashRouter as HashRouterDom,
    Router as RouterDom,
    Route,
    useHistory,
    useLocation,
    useParams,
    useRouteMatch
} from "react-router-dom";

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
    const RouterWrapper = ({
        children,
        ensureTrailingSlash,
        defaultRoute,
        ...ownProps
    }) => {
        return (
            <ReactRouter {...ownProps}>
                {defaultRoute && (
                    <Route
                        exact
                        strict
                        path="/"
                        render={() => <Redirect to={defaultRoute} />}
                    />
                )}
                {ensureTrailingSlash && (
                    <Route
                        exact
                        strict
                        path="/:url*"
                        render={({ location }) => {
                            let redirectTo = `${location.pathname}/`;
                            const paramSplit = location.pathname.split('?');
                            if (paramSplit.length > 1 && !paramSplit[0].endsWith('/')) {
                                redirectTo = paramSplit.join('/?');
                            }
                            return <Redirect to={redirectTo} />;
                        }}
                    />
                )}

                {children}
            </ReactRouter>
        );
    };
    RouterWrapper.propTypes = {
        ensureTrailingSlash: PropTypes.bool,
        defaultRoute: PropTypes.string
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
const BrowserRouter = withR3Options(BrowserRouterDom);
/**
 * @class MemoryRouter
 * @extends ReactRouter:MemoryRouter
 * @description Wrapper for React Router's MemoryRouter component that provides
 * defaultRoute and ensureTrailingSlash options
 */
const MemoryRouter = withR3Options(MemoryRouterDom);
/**
 * @class StaticRouter
 * @extends ReactRouter:StaticRouter
 * @description Wrapper for React Router's StaticRouter component that provides
 * defaultRoute and ensureTrailingSlash options
 */
const StaticRouter = withR3Options(StaticRouterDom);
/**
 * @class HashRouter
 * @extends ReactRouter:HashRouter
 * @description Wrapper for React Router's HashRouter component that provides
 * defaultRoute and ensureTrailingSlash options
 */
const HashRouter = withR3Options(HashRouterDom);
/**
 * @class Router
 * @extends ReactRouter:Router
 * @description Wrapper for React Router's base Router component that provides
 * defaultRoute and ensureTrailingSlash options
 */
const Router = withR3Options(RouterDom);
export {
    BrowserRouter,
    MemoryRouter,
    StaticRouter,
    HashRouter,
    Router,
    withR3Options,
    useHistory,
    useLocation,
    useParams,
    useRouteMatch
};
