// helloWorld function
const helloWorld = function() {
//function helloWorld() {
    return "Hello, World!";
    //console.log("Hello, World!");
}
// helloWorld Function
function sayHello(input) {
    if (typeof input === "string" && isNaN(input)) {
       //if (isNaN(input)) {
            return "Hello, " + input + "!";
       // }
        //  if (input === undefined || input === true || input === false) {
        //return "Hello, World!";
    }
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


// is five function
function isFive(value) {
    if (typeof value === "boolean")
    return "boolean";
}

   // return Boolean(value);

