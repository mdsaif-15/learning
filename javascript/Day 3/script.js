// Q1. Write a regular function multiply(a, b) 
// that returns the product of two numbers. 
// Now rewrite it as an arrow function with 
// an explicit return, and again using implicit return.

// Answer :-

// function multiply(a, b) {
//     return a * b;
// }
// let a = prompt("enter the value for A");        //----- regular function.
// let b = prompt("enter the value for B");        

// console.log(multiply(a, b));

// const multiply = (a, b) => {
//     return a * b;                                   //---- Explicit return 
// }                                                   //---- arrow function.

// console.log(multiply(a, b));

// const multiply = (a, b) => a * b;                      //---- implicit return.

// Q2. Write an arrow function isEven(num) that returns 
// true if a number is even, false otherwise.


// Answer:-


// const isEven = (num) => {
//     if (num % 2 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(isEven(104));


// Q3. Convert this regular function into an arrow function:
// function greet(name) {
//   return "Hello, " + name + "!";
// }

// let greet = (name) => {
//     // greet = "Hello" + name + "!";
//     return "Hello " + name + "!";
// }

// console.log(greet("Saif"));

// Q4. Challenge: Write an arrow function square that 
// takes no parameters but returns a function that 
// squares any number passed to it 
// (i.e., square()(5) should return 25).

// Answer:- 

// const square = () => {
//     const sqr = (num) => {
//         return num * num;
//     }
//     return sqr;
// }

// let result = square()(5);

// console.log(result);

// Q5. Use setTimeout to print "Welcome!" to the console after 2 seconds.


// Answer :-

// const mess = () => { ("!!! Wellcome !!!"), 2000 };
// console.log(mess());

// const mess = setTimeout(() => console.log("!!! Wellcome !!!"), 2000);


// Q6. Predict the output order of the following code, then run it to check your answer:
// console.log("A");
// setTimeout(() => console.log("B"), 0);
// console.log("C");


//  Answer:- 

// A
// C
// B

// Q7. Use setInterval to print the numbers 1, 2, 3, 4, 5 
// (one per second), then automatically stop 
// using clearInterval after the 5th number.

// let i = 1;

// let number = setInterval(() => {
//     console.log(i);
//     i++;
//     if (i > 5) {
//         clearInterval(number);
//     }
// }, 1000);

// Q8. Challenge: Build a simple countdown 
// timer that prints "10", "9", "8" ... "1", "Liftoff!" 
// at 1-second intervals.

// let i = 10;
// let number = setInterval(() => {
//      console.log(i);
//     i--;
//     if (i < 0) {
//         clearInterval(number);
//         console.log("Lift off!")
//     }
// }, 1000);

// Q8. Create an object car with properties brand 
// and a method showBrand written as a regular function 
// that logs this.brand. Confirm it correctly logs the 
// brand name.