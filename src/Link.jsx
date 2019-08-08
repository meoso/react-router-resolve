import React from 'react';

import {
    Redirect as RedirectDom,
    Link as LinkDom
} from 'react-router-dom';
import { withSearch } from './withSearch';

/**
 * @class Link
 * @extends {ReactRouterRedirect}
 * @description creates a Redirect for the browser to route to a different path while
 * retaining the existing query string parameters on the url.
 * [React Router Redirect]{@link https://reacttraining.com/react-router/web/api/Redirect}
 */
const Redirect = withSearch(({ to, ...props }) => {
    return (<RedirectDom {...props} to={`${to}${props.location.search}`}/>);
});

/**
 *
 * @class Link
 * @extends {ReactRouterLink}
 * @description creates routable links using the React Router Link component that preserves
 * the existing query parameters or creates external anchors when given a FQDN url.
 * [React Router Link]{@link https://reacttraining.com/react-router/web/api/Link}
 * TODO: implement
 */
const Link = withSearch((props) => {
    return (<LinkDom {...props} />);
});

export {
    Redirect,
    Link
};

