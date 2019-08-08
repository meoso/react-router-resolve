import React from 'react';
import { toParams } from './utils';
import { withRouter } from 'react-router-dom';

export const withSearch = (WrappedComponent, paramOptions) => {
    return withRouter((props) => {
        const search = toParams(window.location.search, paramOptions);
        props.match.search = search;
        return <WrappedComponent {...props} />;
    });
};
