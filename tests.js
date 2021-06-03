// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


describe("sayHello", function() {
    it("should be a defined function", function() {
        expect(typeof sayHello).toBe("function");
    });
    it("should return a string and when called", function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
   //it('should return the string "Hello, World!" when executed', function() {
   //     expect(sayHello()).toBe("Hello, World!");
    //});
    it('should return the string "Hello, World!" when executed with no argument', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    /*it('should return "Hello, name!" when calling someones name', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
        expect(sayHello("Alex")).toBe("Hello, Alex!");
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    }); */
    it('should return "Hello, World!" when passed the argument of true', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed the argument of null', function () {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed the argument of false', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed the argument of ""', function () {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed the argument of "5"', function () {
        expect(sayHello("5")).toBe("Hello, World!");
    });
});

describe("isFive", function() {
    it("should be a defined function", function() {
        expect(typeof isFive).toBe("function");
    });
 /*   it("should return a boolean no matter what the input", function() {
        expect(typeof isFive()).toBe("boolean");
    }); */
    it("should return true when passed 5", function() {
        expect(isFive(5)).toBe("true");
    });
});

