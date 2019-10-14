import { parseBool } from '../src/utils';

describe("parseBool", () => {
    describe("when first agrument is undefined", () => {
        let result;
        beforeEach(() => {
            result = parseBool(undefined);
        });

        it("should return a boolean false", () => {
            expect(typeof result).toBe("boolean");
            expect(result).toBe(false);
        });
    });

    describe("when first agrument is null", () => {
        let result;
        beforeEach(() => {
            result = parseBool(null);
        });

        it("should return a boolean false", () => {
            expect(typeof result).toBe("boolean");
            expect(result).toBe(false);
        });
    });

    describe("when first agrument is empty string", () => {
        let result;
        beforeEach(() => {
            result = parseBool('');
        });

        it("should return a boolean false", () => {
            expect(typeof result).toBe("boolean");
            expect(result).toBe(false);
        });
    });

    describe("when first agrument is a whitespace string", () => {
        let result;
        beforeEach(() => {
            result = parseBool(' ');
        });

        it("should return a boolean false", () => {
            expect(typeof result).toBe("boolean");
            expect(result).toBe(false);
        });
    });

    describe("when first agrument is NaN", () => {
        let result;
        beforeEach(() => {
            result = parseBool(NaN);
        });

        it("should return a boolean false", () => {
            expect(typeof result).toBe("boolean");
            expect(result).toBe(false);
        });
    });

    describe("when first agrument is a zero integer", () => {
        let result;
        beforeEach(() => {
            result = parseBool(0);
        });

        it("should return a boolean false", () => {
            expect(typeof result).toBe("boolean");
            expect(result).toBe(false);
        });
    });

    describe("when first agrument is a zero string", () => {
        let result;
        beforeEach(() => {
            result = parseBool('0');
        });

        it("should return a boolean false", () => {
            expect(typeof result).toBe("boolean");
            expect(result).toBe(false);
        });
    });

    describe("when first agrument is random string", () => {
        let result;
        beforeEach(() => {
            result = parseBool('dgsdfhdfah');
        });

        it("should return a boolean false", () => {
            expect(typeof result).toBe("boolean");
            expect(result).toBe(false);
        });
    });
    describe("when first agrument is all caps FALSE", () => {
        let result;
        beforeEach(() => {
            result = parseBool('FALSE');
        });

        it("should return a boolean false", () => {
            expect(typeof result).toBe("boolean");
            expect(result).toBe(false);
        });
    });
    describe("when first agrument is mixed-case fAlSe", () => {
        let result;
        beforeEach(() => {
            result = parseBool('fAlSe');
        });

        it("should return a boolean false", () => {
            expect(typeof result).toBe("boolean");
            expect(result).toBe(false);
        });
    });

    describe("when first agrument is all lowercase false", () => {
        let result;
        beforeEach(() => {
            result = parseBool('false');
        });

        it("should return a boolean false", () => {
            expect(typeof result).toBe("boolean");
            expect(result).toBe(false);
        });
    });
    describe("when first agrument is all lowercase false with extra spaces", () => {
        let result;
        beforeEach(() => {
            result = parseBool(' false   ');
        });

        it("should return a boolean false", () => {
            expect(typeof result).toBe("boolean");
            expect(result).toBe(false);
        });
    });
    describe("when first agrument is a non-zero float > 1.0", () => {
        let result;
        beforeEach(() => {
            result = parseBool(1.01);
        });

        it("should return a boolean false", () => {
            expect(typeof result).toBe("boolean");
            expect(result).toBe(false);
        });
    });

    describe("when first agrument is a non-zero float < 1.0", () => {
        let result;
        beforeEach(() => {
            result = parseBool(0.9);
        });

        it("should return a boolean false", () => {
            expect(typeof result).toBe("boolean");
            expect(result).toBe(false);
        });
    });
    describe("when first agrument is a the string '1'", () => {
        let result;
        beforeEach(() => {
            result = parseBool('1');
        });

        it("should return a boolean true", () => {
            expect(typeof result).toBe("boolean");
            expect(result).toBe(true);
        });
    });

    describe("when first agrument is a non-zero non-one integer string", () => {
        let result;
        beforeEach(() => {
            result = parseBool('1');
        });

        it("should return a boolean true", () => {
            expect(typeof result).toBe("boolean");
            expect(result).toBe(true);
        });
    });

    describe("when first agrument is a floating-point 1.0 string", () => {
        let result;
        beforeEach(() => {
            result = parseBool('1.0');
        });

        it("should return a boolean true", () => {
            expect(typeof result).toBe("boolean");
            expect(result).toBe(true);
        });
    });
    describe("when first agrument is a non-zero float > 1.0", () => {
        let result;
        beforeEach(() => {
            result = parseBool(1.0);
        });

        it("should return a boolean true", () => {
            expect(typeof result).toBe("boolean");
            expect(result).toBe(true);
        });
    });

    describe("when first agrument is all caps TRUE", () => {
        let result;
        beforeEach(() => {
            result = parseBool('TRUE');
        });

        it("should return a boolean true", () => {
            expect(typeof result).toBe("boolean");
            expect(result).toBe(true);
        });
    });

    describe("when first agrument is mixed-case TrUe", () => {
        let result;
        beforeEach(() => {
            result = parseBool('TrUe');
        });

        it("should return a boolean true", () => {
            expect(typeof result).toBe("boolean");
            expect(result).toBe(true);
        });
    });

    describe("when first agrument is all lowercase true", () => {
        let result;
        beforeEach(() => {
            result = parseBool('true');
        });

        it("should return a boolean true", () => {
            expect(typeof result).toBe("boolean");
            expect(result).toBe(true);
        });
    });
    describe("when first agrument is all lowercase true with extra spaces", () => {
        let result;
        beforeEach(() => {
            result = parseBool('   true  ');
        });

        it("should return a boolean true", () => {
            expect(typeof result).toBe("boolean");
            expect(result).toBe(true);
        });
    });
});
