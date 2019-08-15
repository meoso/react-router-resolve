/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import ResolveRoute from '../src/ResolverRoute';

describe("ResolverRoute", () => {
    describe("when the store property is not provided", () => {
        let renderedElement;
        beforeEach(() => {
            renderedElement = renderRoute(ResolveRoute, {
                store: null,
                path: "/",
                render: () => <div>fake content without store</div>
            });
        });

        test("renders the result of the render prop", () => {
            expect(renderedElement.innerHTML).toBe("<div>fake content without store</div>");
        });
    });

    describe('when the resolve property is not provided', () => {
        let renderedElement;
        beforeEach(() => {
            renderedElement = renderRoute(ResolveRoute, {
                resolve: null,
                path: "/",
                render: () => <div>fake content without a resolve prop</div>
            });
        });

        test("renders the result of the render prop", () => {
            expect(renderedElement.innerHTML).toBe("<div>fake content without a resolve prop</div>");
        });
    });

    describe('when the resolve property is provided', () => {
        let renderedElement;
        beforeEach(() => {
            renderedElement = renderRoute(ResolveRoute, {
                resolve: {
                    myNamingIs: () => "LIT, BRO",
                    myCodeIs: () => Promise.resolve("SWOL")
                },
                path: "/",
                render: ({ myNamingIs, myCodeIs }) => <div>fake content {myNamingIs}<span>{myCodeIs}</span></div>
            });
        });

        test("renders the result of the render prop and passes the resolved values from the resolve factory functions", () => {
            expect(renderedElement.innerHTML).toBe("<div>fake content LIT, BRO<span>SWOL</span></div>");
        });
    });
    describe('when the resolve property is provided', () => {
        let renderedElement;
        beforeEach(() => {
            renderedElement = renderRoute(ResolveRoute, {
                resolve: {
                    myNamingIs: () => "LIT, BRO",
                    myCodeIs: () => Promise.resolve("SWOL")
                },
                path: "/",
                render: ({ myNamingIs, myCodeIs }) => <div>fake content {myNamingIs}<span>{myCodeIs}</span></div>
            });
        });

        test("renders the result of the render prop and passes the resolved values from the resolve factory functions", () => {
            expect(renderedElement.innerHTML).toBe("<div>fake content LIT, BRO<span>SWOL</span></div>");
        });
    });
});
