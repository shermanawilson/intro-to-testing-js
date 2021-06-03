// helloWorld function
const helloWorld = function() {
//function helloWorld() {
    return "Hello, World!";
    //console.log("Hello, World!");
}

function sayHello(input) {
    if (typeof input !== "string") {
  //  if (input === undefined || input === true || input === false) {
        return "Hello, World!";
    }
   /* if (name === "Jane") {
        return "Hello, Jane!";
    } else if (name === "Alex") {
        return "Hello, Alex!";
    } else if (name === "Pat") {
        return "Hello, Pat!";
    } else if (name === true) {
        return "Hello, World!";
    }
    return "Hello, World!"; */
    return "Hello, " + input + "!";
}

function isFive(value) {
    return "";
    }
   // return Boolean(value);

