import React from 'react';
import {
    Link as LinkDom
} from 'react-router-dom';
import { withSearch } from './withSearch';

/**
 *
 * @class Link
 * @extends {ReactRouter:Link}
 * @description creates routable links using the React Router Link component that preserves
 * the existing query parameters or creates external anchors when given a FQDN url.
 * [React Router Link]{@link https://reacttraining.com/react-router/web/api/Link}
 * TODO: implement this feature
 */
const Link = withSearch((props) => {
    return (<LinkDom {...props} />);
});

export default Link;

