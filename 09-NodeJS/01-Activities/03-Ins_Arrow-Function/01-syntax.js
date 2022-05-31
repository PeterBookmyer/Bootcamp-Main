// All of the `createGreeting` functions are equivalent
// function expresion (vs declaration)

var createGreeting = function (message, name) {
  return message + ", " + name + "!";
};
console.log(createGreeting("hello", "Peter"));


// // We can safely swap out function expressions with arrow functions most of the time
var createGreeting = (message, name) => {
  return message + ", " + name + "!";
};

// // If the arrow function body contains only one expression, we can omit the curly braces and auto return it
// evaluate --------return
var createGreeting = (message, name) => message + ", " + name + "!";

// // If an arrow function only has one parameter, we can omit the parens () around the single parameter
var greet = (greeting) => console.log(greeting);

// // We call arrow functions the same way as we call regular functions
var greeting = createGreeting("Hello", "Angie");

// // Logs "Hello, Angie!";
greet(greeting);