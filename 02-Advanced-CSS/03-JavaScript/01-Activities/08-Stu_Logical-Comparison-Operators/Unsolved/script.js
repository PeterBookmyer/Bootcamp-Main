var a = "50";
var b = 50;
var c = 100;
var d = c % b;
// 0
var e = c / 2;
// 50


var expression1 = (b === e); 
// true
var expression2 = (e > d);
// true


// // Use comparison operators so all expressions below log to the console as true
// console.log(a === b);
// // false
// console.log(b !== e);
// // false
// console.log(c < b);
// // true
// console.log(d > 0);
// //false


// Use logical operators so all expressions below log to the console as true
console.log(expression1 && expression2);
console.log( expression1 || expression2);

console.log(a == b);
// true
console.log(b === e);
// true
console.log(c > b);
// true
console.log(d == 0);
//true
  
