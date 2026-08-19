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

