console.log("Hello Adlan");
console.log("Am fine");
console.log("Hello Vanessa");
console.log("Hello Mutyaba");
console.log("Hello Innocent");
console.log("Am fine");

console.log("Am fine");
// This is a single line Comment
//Console.log("hello james");
/*
This 
is 
a multiline 
comment
*/
console.log(2 * 100);
console.clear();
//Variables in js|| (reserved keywords)( variable name ) (type of value)
// Declare a varible and assigning a value to avariable {let  number;}
let number = 50000000;
console.log(number);
let fname = "Atugonza Benjamin";
console.log(fname);
//Declare a varible mango
let mango;
// asign avalue to the variable
mango = "Kampala University";
console.log(mango);

let country = "variable";
console.log(country);
const facebook = " james posts";
// erro arises facebook = " twitter";
console.log(facebook);

// 1. Create variable name (name) & store your name.
// 2. Create variable name (whatDoYouWannaBecomeInYourLife) & store "programmer"
// 3. Create variable name (gender) & store your gender.
// 4. Create variable name (twitterHandle) & store your twitter handle.
// 5. Finally log all variables to the console.
//If Statement  using greater sign

/* if (expression)
{
Block of code or statement to be executed if the condition is true

}

*/
console.clear();
let age = 17;
if (age >= 18) {
  // Our Condition
  console.log("Your are an Adult ");
} else {
  console.log("You are Minor");
}
console.clear();
// checking a number wether its positive or negative
let num = -5;
if (num > 0) {
  console.log("the number positive");
} else {
  console.log("the number is not positive");
}
console.clear();
// testing if the number is odd or even
let numTest = 20;
if (numTest % 2 == 0) {
  console.log("the number is even");
} else {
  console.log("the number is odd");
}
// 1. Create variable name (password) store nothing.
// 2. If password is equal to 8 print "Welcome"
// 3. If password is less then or equal to 8 print "Password is too short"
// 4. If password is greater then or equal to 8 print "Too Long Password" & "Password should be 8 characters"
// 5. If all fails print "Please provide a password."
console.clear();
let password = 9;
if (password === 8) {
  console.log("Welcome");
} else if (password <= 8) {
  console.log("Password is too Short");
} else if (password >= 8) {
  console.log("To long Password and should be 8 character");
} else {
  console.log("Please Provide password");
}
console.clear();
//Number Guessing
var secretNumber = 5;
var guess = 5; // the player's guess, changes this to see the difference

if (guess === secretNumber) {
  console.log("Congulaturaions! You guessed the  corect number");
} else if (guess < secretNumber) {
  console.log("Try a higher a number");
} else {
  console.log("Try a lower number");
}
//Leap Year
console.clear();
var year = 2028;

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is  not a leap year");
}

console.clear();

// Switch Statement in Js
// its used to execute a block of code amaomg based on the value of expression
/*
switch(expression){
  case value 1:
    // code executed if the expression ==== value
    break;
  case value 2:
     // code executed if the expression ==== value
     break;
  case value 2:
      // code executed if the expression ==== value
     break;
     default:
      // executes when ther is no matched
}
*/

// Example
let fruit = "innocent";
switch (fruit) {
  case "apple":
    console.log("Apple is Selected");
    break;
  case "banana":
    console.log("Banana is Selected");
    break;
  case "pawpaw":
    console.log("pawpaw is Selected");
    break;
  case "innocent":
    console.log("innocent is Selected");
    break;
  default:
    console.log("No fruit Selected");
}
console.clear();
// Days of the weeks
let day = "December";
switch (day) {
  case "monday":
    console.log("Monday is the 1 day of the week");
    break;
  case "Tuesday":
    console.log("Tuesdasy is the 1day of the week");
    break;
  case "Wensday":
    console.log("wensday is the 3 day of the week");
    break;
  case "Thursday":
    console.log("Thursday is the 4 day of the week");
    break;
  case "Friday":
    console.log("Friday is the 5 day of the week");
    break;
  case "Saturday":
    console.log("Saturday is the 6 day of the week");
    break;
  case "Sunday":
    console.log("Sunday is the 7 day of the week");
    break;
  default:
    console.log("no day selected");
}

//Month of the year by Adlan
//Grades by innocent a-excellent b-good
//For-Loop, while-loop do-while infinite-loo
console.clear();
/* for-loop
for (initialization; condition; increament/decrement)
{
// code to be executed
}

*/
for (let i = 5; i <= 100; i++) {
  console.log(i);
}
/* let i = 3 // creating avariable i  we set i to avalue of 3
condintion says check if i <= 7
i++ will add 1 on i
*/
console.clear();
// counting down from 10 to 1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.clear();
//summing numbers 1 to 10

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("sum:", sum);

// Print your name & numbers from 0 through 1000
console.clear();
for (let i = 5; i <= 10; i++) {
  console.log(i);
}
console.clear();
/* Nested for loop
for(let i = 0; i < outerLimit; i++)
{
  for(let j = 0; i < innerLimit; j++)
{
//code to be executed
}
}*/
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(i * j);
  }
  console.log("--");
}
console.clear();

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function displayMatrix(mat) {
  for (let i = 0; i < mat.length; i++) {
    let row = "";
    for (let j = 0; j < mat[i].length; j++) {
      row += mat[i][j] = +"";
    }
    console.log(row.trim());
  }
}
displayMatrix(matrix);
/// REvert to this
console.clear();
/* while (condition) {
 code to be executed
}*/

let i = 10;
while (i < 100) {
  console.log(i);
  i++;
}
console.clear();
// calculate a sum of numbers fro 1 to 10
let num1 = 1;
let sum1 = 0;
while (num1 <= 10) {
  sum1 += num1;
  num1++;
}
console.log("Sum is:", sum1);
/* factorial of 5!
guess the number Game
print Even Numbers
Count Down Timer


*/
console.clear();
let martha = 9;
let factorial = 1;

while (martha > 0) {
  factorial *= martha;
  martha--;
}
console.log("Factorial of 5 is:", factorial);

console.clear();
/*let secNum = 21;
let aguess;
let attempts = 0;

while (aguess !== secNum) {
  aguess = parseInt(prompt("Guess the number  between 10 and 30:"));
  attempts++;
}
console.log("Congs", attempts, "attempts.");
*/
console.clear();

//ARRAYS
// using Array Literals
let fruits = ["apple", "pawpaw", "orange"];
console.log(fruits);
// Accessing Elements
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[1]);
let animals = ["dog", "lion", "monkey", "cat"];
console.log(animals);
let cars = ["BMW", " volvo", "subaru", "jeep", "Benz"];
console.log(cars);
console.log(cars[2]);
console.log(cars[4]);
// using Array Constructor
let numbers = new Array(1, 2, 3, 4, 5, 6, 7);
console.log(numbers);
console.log(numbers[4]);
// Empty Array
let emptyArray = [];
console.log(emptyArray);
// Modifying Elements
let fruitz = ["apple", "pawpaw", "orange"];
console.log(fruitz);
fruitz[2] = "banana";
console.log(fruitz);
//Adding and lement in array
fruitz.push("Mango", "Tomato");
console.log(fruitz);
