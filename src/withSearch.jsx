import React from 'react';
import { toParams } from './utils';
import { withRouter } from 'react-router-dom';

/**
 * @function withSearch
 * @param {Component} WrappedComponent
 * @param {Object} searchOptions @see searchOptions
 * @description
 * Higher-order component to provide the search parameters as an object,
 * The result of @see toParams are made available as props.match.search.
 */
export const withSearch = (WrappedComponent, searchOptions) => {
    return withRouter((props) => {
        const search = toParams(window.location.search, searchOptions);
        props.match.search = search;
        return <WrappedComponent {...props} />;
    });
};
