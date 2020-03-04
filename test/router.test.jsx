/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import { Router } from '../src/Router';

describe("Router", () => {
    describe("when the defaultRoute property provided is set and browser navigates to /", () => {
        let renderedElement;
        beforeEach(() => {
            renderedElement = renderRouter(Router, {
                ensureTrailingSlash: true,
                defaultRoute: '/defaultRoute'
            });
            renderedElement.history.push('/');
        });

        test("redirects to /defaultRoute/ by default", () => {
            expect(renderedElement.history.location.pathname).toBe('/defaultRoute/');
        });
    });
    describe("when the ensureTrailingSlash property provided is true", () => {
        let renderedElement;
        let fakeState = { someStateProp: 'someStateVal' };
        beforeEach(() => {
            renderedElement = renderRouter(Router, {
                ensureTrailingSlash: true
            });
            renderedElement.history.push('/immaroute?some=params&another=param', fakeState);
        });

        test("redirects to /immaroute/ with the trailing slash", () => {
            expect(renderedElement.history.location.pathname).toBe('/immaroute/');
            expect(renderedElement.history.location.state).toBe(fakeState);
        });
    });
    describe("when the ensureTrailingSlash property is not provided", () => {
        let renderedElement;
        beforeEach(() => {
            renderedElement = renderRouter(Router, {});
            renderedElement.history.push('/differentRoute?some=params&another=param');
        });

        test("redirects to /differentRoute without a trailing slash and maintains state", () => {
            expect(renderedElement.history.location.pathname).toBe('/differentRoute');
        });
    });
});
