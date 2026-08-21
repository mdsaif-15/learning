// const arr =
//     [
//         { name: "dibiyo", idNumber: 25 },
//         { name: "digonto", idNumber: 24 },
//         { name: "saif", idNumber: 23 }
//     ]

// console.log(arr);

// Q1. Global vs Function Scope

// Predict the output:

// let x = 10;

// function test() {
//     let x = 20;
//     console.log(x);
// }

// test();
// console.log(x);
// Task: Explain why both console.log() statements produce different values.

// Answer :-

// 20
// 10

// What will be printed?

// let name = "Dibyo";
// function greet() {
//     let name = "John";
//     console.log(name);
// }

// greet();
// console.log(name);
// Task: Explain what variable shadowing means.

// John
// Dibyo


// Block Scope
// Predict the output:

// let x = 100;

// {
//     let x = 200;
//     console.log(x);
// }

// console.log(x);
// Then answer:

// Why doesn't the x inside the block change the outer x?
//  Inside x = 200
// outside x = 100

// let and Block Scope
// Q4. What happens here?

// if (true) {
//     let a = 10;
//     const b = 20;
// }

// console.log(a);
// console.log(b);
// Task: Explain the error instead of simply stating the output.

// Answer :-

// TypeError

// Q5. Scope Challenge Predict the output:
// let a = 10;
// function outer() {
//     let a = 20;
//     if (true) {
//         let a = 30;
//         console.log(a);
//     }
//     console.log(a);
// }
// outer();
// console.log(a);

// Answer :- 
// 30
// 20
// 10

// Q6. Basic Lexical Scope

// Predict the output:

// let x = 10;

// function outer() {
//     let y = 20;

//     function inner() {
//         console.log(x);
//         console.log(y);
//     }

//     inner();
// }

// outer();
// Task: Explain how inner() is able to access x and y.



// Q7. Inner Function Access

// What will happen?

// function outer() {
//     let a = 10;

//     function inner() {
//         let b = 20;
//         console.log(a);
//         console.log(b);
//     }

//     inner();

//     console.log(a);
//     console.log(b);
// }

// outer();
// Task:

// Which variables are accessible?
// Which variable causes an error?
// Why?

// 1). because veriable B is defined inside the inner function. And the veriable A is defined 
// in the outer function so it is acting as the globle veriable fo inner function.

// 2).console.log(b). Out sibe of inner function 

// 3).because it is defined in the inner function.

// Q8. Lexical Scope Challenge

// Predict the output:

// let a = 1;

// function outer() {
//     let a = 2;

//     function inner() {
//         let a = 3;
//         console.log(a);
//     }

//     inner();
// }

// outer();
// console.log(a);

// Answer :-  1

// Q9. Can Outer Access Inner?

// What happens?

// function outer() {

//     function inner() {
//         let secret = 100;
//     }

//     inner();

//     console.log(secret);
// }

// outer();
// Explain why the outer function cannot access secret.

// Answer :- because it is defined in side inner function.

// Q10. Function as an Argument

// Create a function:

// function repeatTask(task, n) {

// }
// It should execute the task function n times.

// Example:

// let sayHello = function () {
//     console.log("Hello");
// };

// repeatTask(sayHello, 5);
// Expected:

// Hello
// Hello
// Hello
// Hello
// Hello