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

/* if (condition)
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
