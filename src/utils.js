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
 * @returns {Boolean} returns true if the val is "true" or the integer 1 ignoring case, otherwise, false.
 * @description convenience method for boolean attributes.
 */
const parseBool = (val) => {
    if (val !== 1 && val.toLowerCase() !== "true") {
        return false;
    }
    return true;
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
 * @name makeCancelable
 * @param {Promise} promiseToWrap The promise to make cancellable
 * @returns {Promise} a new promise decorated with the method tryCancel which will
 * cancel the original promise if it is not done resolving or rejecting
 */
const makeCancelable = promiseToWrap => {
    let cancelReject;
    let done = false;
    const cancelablePromise = new Promise((resolve, reject) => {
        cancelReject = reject;
        Promise.resolve(promiseToWrap)
            .then((reason) => {
                done = true;
                resolve(reason);
            })
            .catch((reason) => {
                done = true;
                reject(reason);
            });
    });
    cancelablePromise.tryCancel = () => {
        if (!done) cancelReject({ canceled: true });
    };
    return cancelablePromise;
};

export {
    toParams,
    arrayParser,
    parseBool,
    makeCancelable
};
