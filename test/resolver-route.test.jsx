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

        it("renders the result of the render prop", () => {
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

        it("renders the result of the render prop", () => {
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

        it("renders the result of the render prop and passes the resolved values from the resolve factory functions", () => {
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

        it("renders the result of the render prop and passes the resolved values from the resolve factory functions", () => {
            expect(renderedElement.innerHTML).toBe("<div>fake content LIT, BRO<span>SWOL</span></div>");
        });
    });

    describe('when a component is mounted multiple times before resolving due to quickly changing routes', () => {
        let renderedElement, resolvedCount, renderCount;
        beforeEach((done) => {
            resolvedCount = 0;
            renderCount = 0;
            renderedElement = renderRoute(ResolveRoute, {
                resolve: {
                    myNamingIs: () => "LIT, BRO",
                    myCodeIs: (state, { match }) => new Promise((resolve, reject) => {
                        setTimeout(() => {
                            if (++resolvedCount > 1) {
                                resolve(match.params.id);
                                done();
                            }
                        }, 250);
                    })
                },
                path: "/:id",
                render: ({ myNamingIs, myCodeIs }) => {
                    renderCount++;
                    return <div>fake content {myNamingIs}<span>{myCodeIs}</span></div>;
                }
            });
            renderedElement.history.push('/foo?hello=world');
            renderedElement.history.push('/foo?x=y');
            renderedElement.history.push('/bar');
        });

        it("renders the result of the render prop 1 time, attempts resolution twice due to the original cancelled promise", () => {
            expect(resolvedCount).toBe(2);
            expect(renderCount).toBe(1);
            expect(renderedElement.innerHTML).toBe("<div>fake content LIT, BRO<span>bar</span></div>");
        });
    });


    describe('when the resolveOnSearch property is set to true and the search changes', () => {
        let renderedElement, resolvedCount, renderCount;
        beforeEach(() => {
            resolvedCount = 0;
            renderCount = 0;
            renderedElement = renderRoute(ResolveRoute, {
                resolveOnSearch: true,
                resolve: {
                    myNamingIs: () => "LIT, BRO",
                    myCodeIs: (state, { match }) => {
                        resolvedCount++;
                        return "factory";
                    }
                },
                path: "/foo",
                render: ({ myNamingIs, myCodeIs }) => {
                    renderCount++;
                    return <div>fake content {myNamingIs}<span>{myCodeIs}</span></div>;
                }
            });
            renderedElement.history.push('/foo?hello=world');
            renderedElement.history.push('/foo?hello=world');
            renderedElement.history.push('/foo?x=y');
        });

        it("re-resolve the resolve factories twice and render once", () => {
            expect(resolvedCount).toBe(2);
            expect(renderCount).toBe(1);
            expect(renderedElement.innerHTML).toBe("<div>fake content LIT, BRO<span>factory</span></div>");
        });
    });

    describe('when a promise resolution in resolve is rejected.', () => {
        let resolveFactories, litError, swolError;
        beforeEach(() => {
            litError = new Error("LIT, BRO");
            swolError = new Error("SWOL");
            resolveFactories = {
                myNamingIs: () => Promise.reject(litError),
                myCodeIs: () => Promise.reject(swolError)
            };
        });

        describe('when the onReject handler is provided as a property to the route', () => {
            let renderedElement, onRejectSpy;
            beforeEach(() => {
                onRejectSpy = jest.fn().mockImplementation((error, factoryName) => {
                    return `${factoryName} had an error.`;
                });
                renderedElement = renderRoute(ResolveRoute, {
                    resolve: resolveFactories,
                    onReject: onRejectSpy,
                    path: "/",
                    render: ({ myNamingIs, myCodeIs }) => <div>fake content {myNamingIs}<span>{myCodeIs}</span></div>
                });
            });

            it("should call onReject for each rejected promise", () => {
                expect(onRejectSpy.mock.calls.length).toBe(2);
            });

            it("should call onReject with the correct arguments for each rejected promise", () => {
                expect(onRejectSpy.mock.calls[0][0]).toBe(litError);
                expect(onRejectSpy.mock.calls[1][0]).toBe(swolError);
                expect(onRejectSpy.mock.calls[0][1]).toBe("myNamingIs");
                expect(onRejectSpy.mock.calls[1][1]).toBe("myCodeIs");
            });
            it("renders the result of the render prop with the rejected properties redfined as the return value from onReject", () => {
                expect(renderedElement.innerHTML).toBe("<div>fake content myNamingIs had an error.<span>myCodeIs had an error.</span></div>");
            });
        });
        describe('when there is no onReject handler provided', () => {
            let renderedElement;
            beforeEach(() => {
                renderedElement = renderRoute(ResolveRoute, {
                    resolve: resolveFactories,
                    path: "/",
                    render: ({ myNamingIs, myCodeIs }) => <div>fake content {myNamingIs}<span>{myCodeIs}</span></div>
                });
            });

            it("renders the result of the render prop with the rejected properties not defined", () => {
                expect(renderedElement.innerHTML).toBe("<div>fake content <span></span></div>");
            });
        });
    });
});
