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

// function sayHello() {
//     console.log("hello");
// }

// function repeatTask(task, n) {
//     for (let i = 1; i <= n; i++) {
//         task(n);
//     }
// }
// repeatTask(sayHello, 5)

// repeatTask(sayHello, 5);

// Q11. Calculator Using Higher-Order Function

// Create:

// function calculate(a, b, operation) {

// }
// The operation function should determine what calculation is performed.

// Example:

// calculate(10, 5, add);
// calculate(10, 5, subtract);
// calculate(10, 5, multiply);
// Create the three operation functions yourself.

// function calculate(a, b, operation) {
//     return operation(a, b);

// }
// function add(a, b) {
//     return a + b;

// }
// function subtract(a, b) {
//     return a - b;

// }
// function multiply(a, b) {
//     return a * b;

// }
// console.log(calculate(5, 4, multiply));



// Q12. Even / Odd Function Factory

// Create a function:

// function checkNumber(type) {

// }
// It should return a function.

// Example:

// let checkEven = checkNumber("even");

// checkEven(10);  // true
// checkEven(7);   // false
// Similarly:

// let checkOdd = checkNumber("odd");

// Answer :-

// function checkNumber(type) {
//     if (type % 2 == 0) {
//         return true;
//     }
//     else
//         return false;

// }

// let checkOdd = checkNumber(4);
// console.log(checkOdd);


// Q13. Greater Than Function Factory

// Create:

// function greaterThan(n) {

// }
// It should return a function that checks whether another number is greater than n.

// Example:

// let greaterThan10 = greaterThan(10);

// console.log(greaterThan10(15)); // true
// console.log(greaterThan10(5));  // false

// function greaterThan(n) {
//     if (n > 10) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(15));
// console.log(greaterThan10(5));

// Q14. Custom Filter Function

// Create your own version of filter():

// function myFilter(arr, condition) {

// }
// Example:

// let numbers = [1, 2, 3, 4, 5, 6];

// let result = myFilter(numbers, function(num) {
//     return num % 2 === 0;
// });

// console.log(result);
// Expected:

// [2, 4, 6]
// Do not use the built-in .filter() method.

// function myFilter(arr, condition) {

// }
// let numbers = [1, 2, 3, 4, 5, 6];

// let result = myFilter(numbers, function (num){
//     return num % 2 === 0
// })
// console.log(result);

// Q15. Student Object

// Create a student object containing:

// name
// marks1
// marks2
// marks3
// getTotal()
// getAverage()
// Example:

// student.getTotal();
// student.getAverage();

// Answer :-

// let student = {
//     name: "saif",
//     Marks1: 90,
//     Marks2: 80,
//     Marks3: 95,
//     getTotal: function (Marks1, Marks2, Marks3) {
//         return Marks1 + Marks2 + Marks3;
//     },
//     getAverage: function (getTotal) {
//         return getTotal() / 3;
//     }

// }
// console.log(student.getTotal());
// console.log(student.getAverage());




// Q21. Scope + Higher-Order Function

// Predict the output:

// let x = 10;

// function outer() {
//     let x = 20;

//     function test() {
//         console.log(x);
//     }

//     return test;
// }

// let func = outer();

// func();
// Important: Explain why func() prints 20 even though outer() has already finished executing.

// Answer :- 20.

// Q18. Basic this

// Predict the output:

// const person = {
//     name: "Dibyo",

//     introduce() {
//         console.log(this.name);
//     }
// };

// person.introduce();
// Task: Explain what this refers to.

// Answer :- this refers to person.

// Q19. Multiple Properties with this

// Create:

// const employee = {
//     name: "John",
//     salary: 50000,
//     bonus: 10000,

//     getTotalSalary() {
//         // use this
//     }
// };

// Answer :-

// const employee = {
//     name: "John",
//     salary: 50000,
//     bonus: 10000,

//     getTotalSalary() {
//         // use this
//         return this.salary + this.bonus
//     }
// };

// console.log(this.getTotalSalary);

// Q20. this and Object Methods

// Predict the output:

// const user = {
//     name: "Dibyo",

//     greet() {
//         console.log("Hello " + this.name);
//     }
// };

// user.greet();
// Then answer:
// Output :- Hello Dibyo

// Why is this.name better than directly writing user.name inside the method?
// Answer:- this can ascess drictly to method.

// Q23. Object + Higher-Order Function

// Create an object:

// const calculator = {
//     calculate(a, b, operation) {
//         // your code
//     }
// };
// It should support:

// calculator.calculate(10, 5, add);
// calculator.calculate(10, 5, subtract);
// calculator.calculate(10, 5, multiply);

// Answer :-

// const calculator = {
//     calculate(a, b, operation) {
//         return operation(a, b);
//     }
// };

// function add(a, b) {
//     return a + b;
// }
// function subtract(a, b) {
//     return a - b;
// }
// function multiply(a, b) {
//     return a * b;
// }

// console.log(calculator.calculate(10, 5, add));
// console.log(calculator.calculate(10, 5, subtract));
// console.log(calculator.calculate(10, 5, multiply));

// Q24. Student Result System 🔥

// Create:

// const student = {
//     name: "Dibyo",
//     marks: [80, 90, 70],

//     calculate(operation) {
//         // your code
//     }
// };
// Create separate functions:

// getTotal
// getAverage
// getHighest
// Pass them into:

// student.calculate(...)
// Use this.marks inside the object method.

const student = {
    name: "Dibyo",
    marks: [80, 90, 70],

    getTotal: function (a, b, c) {
        return a + b + c;
    },
    getAverage: function (a, b, c) {
        return (a + b + c) / 3;
    },
    getHighest: function (a, b, c) {
        if (a > b && a > c) {
            return a;
        }
        else if (b > c) {
            return b;
        }
        else {
            return c;
        }
    },

    calculate(operation, ...arg) {
        return operation(...arg);
    }
};

let highestMarks = student.calculate
    (
        student.getHighest,
        student.marks[0],
        student.marks[1],
        student.marks[2]
    );

//console.log(highestMarks);

let avgMarks = student.calculate
    (
        student.getAverage,
        student.marks[0],
        student.marks[1],
        student.marks[2],
    )

//console.log(avgMarks);

let totalMarks = student.calculate(
    student.getTotal,
    student.marks[0],
    student.marks[0],
    student.marks[0]
)
// console.log(totalMarks);