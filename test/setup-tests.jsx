
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils'; // ES6
import TestRenderer from 'react-test-renderer'; // ES6
import ShallowRenderer from 'react-test-renderer/shallow';
import { Router } from '../src/Router';
import { createBrowserHistory } from "history";

let testRenderContainer, renderedComponent;

const setupRender = () => {
    // eslint-disable-next-line no-unused-expressions
    testRenderContainer && document.body.removeChild(testRenderContainer);
    testRenderContainer = null;
    testRenderContainer = document.createElement('div');
    document.body.appendChild(testRenderContainer);
};

global.renderRouter = (Component, props) => {
    setupRender();
    // Test first render and componentDidMount
    const customHistory = createBrowserHistory();

    ReactTestUtils.act(() => {
        renderedComponent = ReactDOM.render(<Component
            history={customHistory}
            {...props} />, testRenderContainer);
    });
    return {
        component: renderedComponent,
        history: customHistory
    };
};

global.renderRoute = (Component, props) => {
    setupRender();
    // Test first render and componentDidMount
    const customHistory = createBrowserHistory();
    ReactTestUtils.act(() => {
        ReactDOM.render(<Router history={customHistory}>
            <div id="test-container">
                <Component {...props} />
            </div>
        </Router>, testRenderContainer);
    });
    const element = document.getElementById('test-container');
    element.history = customHistory;
    return element;
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
