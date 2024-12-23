// Arrow functions, also known as fat arrow functions, are a concise and shorter way to define functions in JavaScript. They were introduced in ECMAScript 6 (ES6) and provide a more compact syntax compared to traditional function expressions

// function greet(username) {
//     return `Hello ${username}`
// }

// console.log(greet("Benja"));

// ----- Arrow Function -----
// greet = (username) => {
//     return `Hello ${username}`
// }

// console.log(greet('Benja'));

// ----------------------------
greet = (username) => `Hello ${username}`;
console.log(greet("Benja"));
// ----------------------------

const double = (number) => number * 2;
console.log(double(5));
