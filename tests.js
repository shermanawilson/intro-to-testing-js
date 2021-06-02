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
    it('should return the string "Hello, Shy!" when executed', function() {
        expect(sayHello("Shy")).toBe("Hello, Shy!");
    });
    it('should return the string "Hello, DeShawn!" when executed', function() {
        expect(sayHello("DeShawn")).toBe("Hello, DeShawn!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
   //it('should return the string "Hello, World!" when executed', function() {
   //     expect(sayHello()).toBe("Hello, World!");
    //});
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello("World")).toBe("Hello, World!");
    });
});
/*
describe("isFive", function() {
    it("", function() {
        expect(isFive().toBe(""));
    });
});  */