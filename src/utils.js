const defaultParser = (val, key, params) => {
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
const parseBool = (val) => {
    if (val !== 1 && val.toLowerCase() !== "true") {
        return false;
    }
    return true;
};
/**
 * Converts URL parameters to a Object collection of key/value pairs
 * Decodes encoded url characters to back to normal strings.
 * @param {String} str
 *
 * @example <caption>convert query string to object:</caption>
 * import {toParams} from '@helio/utils';
 * let paramsObject = toParams('#?foo=bar&hello=world&hello=array&unsafe=I%20am%20an%20unsafe%20string');
 *
 * paramsObject == {
 *  foo: 'bar',
 *  hello: ['world', 'array'],
 *  unsafe: 'I am an unsafe string'
 *
 * };
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
        const parser = options[paramKey] || defaultParser;
        params[paramKey] = parser(paramVal, paramKey, params);
    });
    return params;
};


/**
 * Returns the value of an object via the path as a string
 * @param {String} path
 * @param {Object} obj Object to find the property in
 * @param {String} fb Fallback string when not found
 *
 * @example
 * let result = getFromObj('hello.foo', {
 *  hello: {
 *    foo: 'bar'
 *  }
 * });
 * result == 'bar';
 */
const getFromObj = (path, obj, fb = `$\{${path}}`) => {
    return path.split('.').reduce((res, key) => res[key] != null ? res[key] : fb, obj);
};

/**
 * Processes a string formatted like an ES6 template against an object
 * @param {String} template the string template
 * @param {Object} map Key/Value pairs to process the string against
 * @param {String} fallback they string fallback when the value is missing.
 *
 * @example
 * let result = template('I am a string literal formatted ${message.label}.', {
 *  message: {
 *    label: 'to look like an ES6 template'
 *  }
 * });
 *
 * result == 'I am a string literal formatted to look like an ES6 template.';
 */
const template = (tmpl, map, fallback) => {
    const root = Object.assign({ this: map }, map);
    // if (tmpl.match(/\$\{\s*this\s*\./gm)) {
    //   // cant enable this until we drop IE support. for now we can only do substitutions.
    //   // return renderLiteral(tmpl, map);
    // }
    return tmpl && tmpl.replace(/\$\{.+?}/g, (match) => {
        const path = match.substr(2, match.length - 3).trim();
        return getFromObj(path, root, fallback);
    });
};

export {
    getFromObj,
    template,
    toParams,
    parseBool
};
