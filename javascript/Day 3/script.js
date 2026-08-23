// Q1. Write a regular function multiply(a, b) 
// that returns the product of two numbers. 
// Now rewrite it as an arrow function with 
// an explicit return, and again using implicit return.

// Answer :-

// function multiply(a, b) {
//     return a * b;
// }
// let a = prompt("enter the value for A");            //----- regular function.
// let b = prompt("enter the value for B");        

// console.log(multiply(a, b));

// const multiply = (a, b) => {
//     return a * b;                                   //---- Explicit return 
// }                                                   //---- arrow function.

// console.log(multiply(a, b));

// const multiply = (a, b) => a * b;                   //---- implicit return.

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

// let car = {
//     brand: "Mahindra",
//     showBrand: function () {
//         console.log(this.brand);
//     },
//     showBrandArrow: () => {
//         console.log(this.brand);
//     }
// }
// car.showBrand();
// car.showBrandArrow();

// Q10. Now add a second method showBrandArrow written 
// as an arrow function that also tries to log this.brand. 
// Run both methods and explain in a comment why the output differs.

// Answer. this key word is trying to find brand in window object so it is returning undifine.

// Q11. Challenge: Given the object below, fix the bug so getScore correctly logs the score (hint: think about which function type to use):


// const player = {
//   score: 100,
//   getScore: () => {
//     console.log(this.score);
//   }
// };

// Answer :- 

// const player = {
//     score: 100,
//     getScore: function () {
//         console.log(this.score);
//     }
// };
// getScore();

//Given:
let numbers = [4, 8, 15, 16, 23, 42];

// Q12 Use forEach to print each number multiplied by 3.

// numbers.forEach((element) => {
//     console.log(element * 3);
// });

// Q13. Use map to create a new array squared containing the square of each number.

// const square = (numbers) => {
//     let sqrArray = [];
//     Map.sqrArray(numbers * 2);
//     return sqrArray;
// }
// console.log(square());

// Answer :- 

// let square = numbers.map((numbers) => {
//     return numbers * numbers;
// });
// console.log(square);

// Q14. Use filter to create a new array greaterThanTen
// containing only numbers greater than 10.

// Answer:- 

// let greaterThanTen = numbers.filter((numbers) => {
//     if (numbers > 10) {
//         return numbers;
//     }
// });
// console.log(greaterThanTen);

// Q15. Use every to check if all numbers are greater than 0.

// Answer:-
// let greaterThanZero = numbers.every((numbers)=>{
//     if(numbers>0){
//         return numbers;
//     }
// })
// if(greaterThanZero){
//     console.log("Every number is grater then zero.");
// }
// else{
//     console.log("Not every number is grater then zero.");
// }

// Q16. Use some to check if at least one number is divisible by 5.

// let divisibleByFive = numbers.some((numbers) => {
//     if (numbers % 5 == 0) {
//         return numbers;
//     }
// });
// console.log(divisibleByFive);

// Q17. Use reduce to find the sum of all numbers.

// let sum = numbers.reduce((numbers) => {
//     numbers += numbers;
//     return numbers;
// })
// console.log(sum);

// Q18. Challenge: Use reduce to find the maximum value
// in the array without using Math.max.

// Answer :-

// let max = numbers[-1];

// let newmax = numbers.reduce((numbers, max) => {
//     if (max > numbers) {
//         return numbers;
//     }
// })

// console.log(newmax);

// Q19. Challenge: Chain filter and map together to get
// the squares of only the even numbers in the array.


// Answer :-


// let evenNumberOnly = numbers.filter((numbers) => {
//     if (numbers % 2 == 0) {
//         return numbers;
//     }
// })
// console.log(evenNumberOnly);

// let square = evenNumberOnly.map((evenNumberOnly) => {
//     return evenNumberOnly * evenNumberOnly;
// })
// console.log(square)

// Q20. Write a function greetUser(name, greeting = "Hello") 
// that logs "Hello, <name>!" if no greeting is passed, 
// or a custom greeting otherwise.

// const greetUser = (name, greet = "hello") => {
//     if (name == undefined) {
//         console.log(greet + " " + "Boss")
//     }
//     else {
//         console.log(greet + " " + name)
//     }
// }
// greetUser();

// Q20. Write a function calculatePrice(price, tax = 0.05) 
// that returns the price including tax.