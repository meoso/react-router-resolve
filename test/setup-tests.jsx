
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils'; // ES6
import TestRenderer from 'react-test-renderer'; // ES6
import ShallowRenderer from 'react-test-renderer/shallow';
import { StaticRouter } from '../src/Router';

let testRenderContainer;

const setupRender = () => {
    // eslint-disable-next-line no-unused-expressions
    testRenderContainer && document.body.removeChild(testRenderContainer);
    testRenderContainer = null;
    testRenderContainer = document.createElement('div');
    document.body.appendChild(testRenderContainer);
};

global.renderRoute = (Component, props) => {
    setupRender();
    // Test first render and componentDidMount
    ReactTestUtils.act(() => {
        ReactDOM.render(<StaticRouter>
            <div id="test-container">
                <Component {...props} />
            </div>
        </StaticRouter>, testRenderContainer);
    });

    return document.getElementById('test-container');
};

global.testRender = (Component, props) => {
    const testRenderer = TestRenderer.create(React.createElement(Component, props));
    const componentInstance = testRenderer.root;
    return componentInstance;
};

global.shallowRender = (Component, props) => {
    setupRender();
    const renderer = new ShallowRenderer();
    renderer.render(React.createElement(Component, props), testRenderContainer);
    const instance = renderer.getMountedInstance();
    // eslint-disable-next-line no-unused-expressions
    instance.componentDidMount && instance.componentDidMount();
    return renderer.getRenderOutput();
};
