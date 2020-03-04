import React from 'react';
import {
    Redirect as RedirectDom
} from 'react-router-dom';
import { withSearch } from './withSearch';

/**
 * @class Redirect
 * @extends {ReactRouter:Redirect}
 * @description creates a Redirect for the browser to route to a different path while
 * retaining the existing query string parameters on the url.
 * [React Router Redirect]{@link https://reacttraining.com/react-router/web/api/Redirect}
 */
const Redirect = withSearch(({ to, ...props }) => {
    if (typeof to === 'string') {
        to = {
            pathname: to,
            state: props.history.location.state
        };
    }
    const paramSplit = to.pathname.split('?');
    if (!paramSplit[0].endsWith('/')) {
        to.pathname = paramSplit.join('/?');
    }
    return (<RedirectDom {...props} to={to}/>);
});

export default Redirect;

