console.log("hello")


// Q1. Trim Username
// Create a variable:
// let username = "     Dibyo     ";
// Remove the extra spaces from the beginning and end and print the cleaned username.
// Expected Output:
// Dibyo

// Ansawer:-

let username = "       Dibyo         ";

console.log(username.trim());

// Q2. Uppercase + Trim
// Given:
// let name = "     javascript     ";
// Using method chaining, remove the spaces and convert the string to uppercase.
// JAVASCRIPT

// Ansawer:-

let name = "     javascript     ";
console.log(name.toUpperCase().trim());

// Q3. Slice a String
// Given:
// let message = "Hello JavaScript";
// Print only:
// JavaScript
// Use slice().

// Ansawer:-

let message = "Hello JavaScript";

console.log(message.slice(6));

// Slice from the End
// Given:
// let word = "Programming";
// Use slice() with a negative index to print: ming

// Answer :-

let word = "programing";
console.log(word.slice(-4));

// Q5. Replace a Word
// Given:
// let sentence = "I love Java";
// Replace "Java" with "JavaScript".
// Expected Output:
// I love JavaScript

// Answer :-

let sentence = "I Love Java";
let newSentence = sentence.replace("Java", "JavaScript");
console.log(newSentence);

// Q6. Replace All Occurrences
// Given:
// let sentence = "Java is powerful. Java is popular. Java is everywhere.";
// Replace every occurrence of "Java" with "JavaScript".

//Answer :-

let Sentence = "Java is powerful. Java is popular. Java is everywhere.";
console.log(Sentence.replaceAll("Java", "JavaScript"));

// Q7. Repeat a String
// Create:
// let star = "*";
// Print the star 10 times using repeat().
// Expected Output:
// **********

// Answer:-
let star = "*";
console.log(star.repeat(10));

// Q8. Remove Elements Using Splice
// Given:
// let fruits = ["apple", "banana", "mango", "orange", "grapes"];
// Remove "mango" using splice().
// Expected Array:
// ["apple", "banana", "orange", "grapes"]

// Answer :- 
//let fruits = ["apple", "banana", "mango", "orange", "grapes"];
//fruits.splice(2, 1);
//console.log(fruits);

// Q9. Add Elements Using Splice
// Given:
// let fruits = ["apple", "banana", "grapes"];
// Insert "mango" and "orange" between "banana" and "grapes".
// Expected Array:
// ["apple", "banana", "mango", "orange", "grapes"]

//Answer:-

// let fruits = ["apple", "banana", "grapes"];

// fruits.splice(2, 0, "mango", "orange");
// console.log(fruits);

// Q10. Replace an Array Element

// Given:

// let fruits = ["apple", "banana", "mango", "grapes"];
// Replace "mango" with "orange" using splice().

//  Answer :- 

// let fruits = ["apple", "banana", "mango", "grapes"];
// fruits.splice(2,1,"orange");
// console.log(fruits);

// Q11. Remove Multiple Elements

// Given:
// let numbers = [10, 20, 30, 40, 50, 60];
// Remove 30, 40, and 50 using a single splice() operation.
// Expected Array:
// [10, 20, 60]

// Answer :- 

// let numbers = [10, 20, 30, 40, 50, 60];
// numbers.splice(2, 3);
// console.log(numbers)

// Q12. Sort Numbers

// Given:

// let numbers = [50, 10, 40, 20, 30];
// Sort the numbers in ascending order.
// Expected Output:
// [10, 20, 30, 40, 50]

// let numbers = [50, 10, 40, 20, 30];
// console.log(numbers.sort());


// Q13. Sort in Descending Order

// Using the same array, sort it in descending order.

// Expected Output:

// [50, 40, 30, 20, 10]

// Answer:-

// let numbers = [50, 10, 40, 20, 30];
// console.log(numbers.sort((a,b) => b-a));

// Q14. Understand Default Sort
// Predict the output before running the code:
// let numbers = [10, 2, 30, 4, 5];
// console.log(numbers.sort());
// Then explain why the result is different from normal numerical sorting.
// Answer :-
// [2,4,5,10,30]

