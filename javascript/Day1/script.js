// console.log("hello")


// Q1. Trim Username
// Create a variable:
// let username = "     Dibyo     ";
// Remove the extra spaces from the beginning and end and print the cleaned username.
// Expected Output:
// Dibyo

// Ansawer:-

// let username = "       Dibyo         ";

// console.log(username.trim());

// Q2. Uppercase + Trim
// Given:
// let name = "     javascript     ";
// Using method chaining, remove the spaces and convert the string to uppercase.
// JAVASCRIPT

// Ansawer:-

// let name = "     javascript     ";
// console.log(name.toUpperCase().trim());

// Q3. Slice a String
// Given:
// let message = "Hello JavaScript";
// Print only:
// JavaScript
// Use slice().

// Ansawer:-

// let message = "Hello JavaScript";

// console.log(message.slice(6));

// Slice from the End
// Given:
// let word = "Programming";
// Use slice() with a negative index to print: ming

// Answer :-

// let word = "programing";
// console.log(word.slice(-4));

// Q5. Replace a Word
// Given:
// let sentence = "I love Java";
// Replace "Java" with "JavaScript".
// Expected Output:
// I love JavaScript

// Answer :-

// let sentence = "I Love Java";
// let newSentence = sentence.replace("Java", "JavaScript");
// console.log(newSentence);

// Q6. Replace All Occurrences
// Given:
// let sentence = "Java is powerful. Java is popular. Java is everywhere.";
// Replace every occurrence of "Java" with "JavaScript".

//Answer :-

// let Sentence = "Java is powerful. Java is popular. Java is everywhere.";
// console.log(Sentence.replaceAll("Java", "JavaScript"));

// Q7. Repeat a String
// Create:
// let star = "*";
// Print the star 10 times using repeat().
// Expected Output:
// **********

// Answer:-
// let star = "*";
// console.log(star.repeat(10));

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

// Q15. Student Object
// Create an object called student containing:
// name
// age
// course
// marks
// isPassed
// Print all the values.

// const Student = {
//     name: "saif",
//     age: 21,
//     course: "BCA",
//     marks: 7.75,
//     isPassed: "Pass",
// }

// console.log(Student);
// console.log(typeof (Student));

// Q16. Update Object Properties

// Given:

// const Student = {
//     name: "John",
//     age: 20,
//     marks: 75
// };
// Change:
// age → 21
// marks → 85
// Then print the updated object.

// Answer:-

// const Student = {
//     name: "John",
//     age: 20,
//     marks: 75
// };

// Student.age = 21;
// Student.marks = 85;

// console.log(Student);

// Q17. Add a New Property

// Given:

// const student = {
//     name: "John",
//     age: 20
// };
// Add:

// course: "Computer Science"
// Print the object.

// Ansaer:-

// const student = {
//     name: "John",
//     age: 20
// };

// student.course = "computer Science";

// console.log(student);



// Q18. Delete a Property

// Given:

// const student = {
//     name: "John",
//     age: 20,
//     grade: "A",
//     city: "Kolkata"
// };
// Delete the city property.

// Answer :-

// const student = {
//     name: "John",
//     age: 20,
//     grade: "A",
//     city: "Kolkata"
// };

// delete student.city;

// console.log(student);

// Q19. Student Database

// Create a nested object:

// const classInfo = {
//     student1: {
//         name: "Rahul",
//         age: 20,
//         grade: "A"
//     },
//     student2: {
//         name: "Priya",
//         age: 21,
//         grade: "A+"
//     },
//     student3: {
//         name: "Amit",
//         age: 19,
//         grade: "B"
//     }
// };
// Print:

// Priya 21 A+

// Answer :-

// const classInfo = {
//     student1: {
//         name: "Rahul",
//         age: 20,
//         grade: "A"
//     },
//     student2: {
//         name: "Priya",
//         age: 21,
//         grade: "A+"
//     },
//     student3: {
//         name: "Amit",
//         age: 19,
//         grade: "B"
//     }
// };

// console.log(classInfo.student2.name + " " + classInfo.student2.age + " " + classInfo.student2.grade);

// Q20. Access Nested Data

// Using the same object, print only:

// Student 1's name
// Student 2's grade
// Student 3's age

// console.log("Student 1's name" + "  " + classInfo.student1.name);
// console.log("Student 2's grade" + "  " + classInfo.student2.grade);
// console.log("Student 3's age" + "  " + classInfo.student3.age);

// Q21. Update Nested Object

// Change Student 1's grade from:

// A
// to:

// A+
// Then print the updated Student 1 object.

// Ansawer :-

// classInfo.student1.grade = "A+"
// console.log(classInfo.student1.grade);

// Q22. Add Property to Nested Object

// Add a city property to Student 2:

// city: "Kolkata"
// Then print Student 2's complete information.

// classInfo.student2.city = "kokata";
// console.log(classInfo.student2);

// Q23. Absolute Value

// Use Math.abs() 

// to convert:
// -25

// into:
// 25

// Answer :-
// console.log(Math.abs(-25));

// Q24. Maximum and Minimum

// Given:
// let a = 10;
// let b = 25;
// let c = 15;
// let d = 40;

// let a = 10;
// let b = 25;
// let c = 15;
// let d = 40;

// console.log(Math.max(a,b,c,d));
// console.log(Math.min(a,b,c,d));


// Q25. Square Root

// Find the square root of:

// 144
// using Math.sqrt().

// Answer :-

// console.log(Math.sqrt(144));

// Q26. Power

// Calculate:
// 2⁵
// using Math.pow().

// Ansawer :- 
// console.log(Math.pow(2,5));

// Q27. Rounding

// For each number, determine the output:

// console.log(Math.round(4.4));  -- 4
// console.log(Math.round(4.6));  -- 5

// console.log(Math.ceil(4.1));  --- 5
// console.log(Math.ceil(4.9));  --- 5

// console.log(Math.floor(4.1)); --- 4
// console.log(Math.floor(4.9)); --- 4

// Q28. Random Number 1–10

// Generate a random integer between:

// 1 and 10
// using:

// Math.random()


// let number = Math.random() * 10;
// console.log(Math.ceil(number));

// Q29. Random Number 1–100

// Generate a random integer between:

// 1 and 100

// let number = Math.random() * 100
// console.log(Math.ceil(number));

// Q30. Random Number 50–100

// Generate a random integer between:

// 50 and 100

// console.log(Math.floor(Math.random() * 51) + 50);

// Q31. Random Dice Roll

// Simulate rolling a six-sided dice.

// Every time the program runs, it should generate:

// 1, 2, 3, 4, 5, or 6


//console.log(Math.floor(Math.random() * 7) -6 );

// Q32. Username Generator

// Given:

// let name = "     Dibyo Banerjee     ";
// Create a username by:

// Removing extra spaces
// Converting the name to lowercase
// Replacing the space with _
// Expected Output:

// dibyo_banerjee

// Answer :-

// let name = "     Dibyo Banerjee     ";

// let nameWithoutSpace = name.trim()

//console.log(nameWithoutSpace)
// let splitName = nameWithoutSpace.split(" ");

// console.log(splitName);

// let joinName = splitName.join("_");

// console.log(joinName);

// Q33. Sentence Cleaner
// Given:
// let sentence = "     I love Java. Java is powerful. Java is popular.     ";
// Perform the following:
// Remove spaces from both ends
// Replace all "Java" with "JavaScript"
// Print the final sentence
// Expected Output:
// I love JavaScript. JavaScript is powerful. JavaScript is popular.

// Answer :- 

// let sentence = "     I love Java. Java is powerful. Java is popular.     ";

// sentenceWithoutSpace = sentence.trim();

// console.log(sentenceWithoutSpace);

// let replacedSentence = sentenceWithoutSpace.replaceAll("java", "JavaScript");

// console.log(replacedSentence);

// Q34.Random OTP Generator

// Generate a random 4-digit OTP.

// Example:

// 4827
// The OTP should be different on different executions.

// Hint: Think about Math.random(), Math.floor(), and the range 1000–9999.

// Answer :- 

// let otp = Math.floor(Math.random() * 10000);
// console.log(otp)

// Q35. Random Username Number

// Given:

// let username = "Dibyo";
// Generate a username such as:

// Dibyo472
// Dibyo819
// Dibyo125
// The last three digits should be random.

// let name = "dibyo"

// let number = String(Math.floor(Math.random() * 1000));

// let joinName = [name, number]

// console.log(joinName.join(""));

// Q36. Student Result Object

// Create:

// const student = {
//     name: "Dibyo",
//     marks: 82
// };
// Using Math methods:

// If marks ≥ 90 → "A+"
// If marks ≥ 80 → "A"
// If marks ≥ 70 → "B"
// Otherwise → "C"
// Add the calculated grade to the object.

// Answer :- 

// const student = {
//     name: "Dibyo",
//     marks: 82
// };

// if (student.marks >= 90) {
//     student.marks = "A+";
// }
// else if (student.marks >= 80) {
//     student.marks = "A";
// }
// else if (student.marks >= 70) {
//     student.marks = "B";
// }
// else {
//     student.marks = "C";
// }

// console.log(student);

// Q37. Array Manipulation Challenge

// Given:

// let fruits = [
//     "apple",
//     "banana",
//     "mango",
//     "orange",
//     "banana",
//     "grapes"
// ];
// Perform the following:

// Remove the first "banana"
// Add "pineapple" after "mango"
// Replace all "banana" values with "watermelon"
// Sort the array alphabetically


// let fruits = [
//     "apple",
//     "banana",
//     "mango",
//     "orange",
//     "banana",
//     "grapes"
// ];

// fruits.splice(1, 1);

// console.log(fruits);

// fruits.splice(2, 0, "watermelon");



// for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i] == "banana") {
//         fruits[i] = "watermelon";
//     }
// }
// console.log(fruits);

// Q38. Mini Student Database

// Create a nested object containing 3 students.

// Each student should have:

// name
// age
// marks
// grade
// city
// Then:

// Print Student 1's name
// Print Student 2's marks
// Change Student 3's grade
// Add a new property isPassed
// Print the complete object

// const studentInfo = {
//     student1: {
//         name: "Saif",
//         age: 21,
//         marks: 85,
//         grade: "A",
//         city: "KolKata"

//     },
//     student2: {
//         name: "diganto",
//         age: 19,
//         marks: 92,
//         grade: "A+",
//         city: "KolKata"
//     },
//     student3: {
//         name: "dibyo",
//         age: 22,
//         marks: 95,
//         grade: "A+",
//         city: "kolkata"
//     }
// }
// console.log(studentInfo.student1.name);
// console.log(studentInfo.student2.marks);
// console.log(studentInfo.student3.grade);

// studentInfo.student1.isPassed = "Pass";
// studentInfo.student2.isPassed = "Pass";
// studentInfo.student3.isPassed = "Pass";

// console.log(studentInfo);

// Q39. Random Number Guessing

// Generate a random number between 1–10.

// Create a variable:

// let guess = 7;
// Check whether the guess matches the generated number.

// Print:

// Correct Guess!
// or

// Wrong Guess!

// let userNumber = prompt("enter a number between 1 - 10");

// let randomNumber = Math.floor(Math.random() * 10);

// console.log(randomNumber);

// if (userNumber == randomNumber) {
//     document.write("Correct Guess!");
// }
// else {
//     document.write("Wrong Guess!");
// }

// Q40. Random Password Generator

// Generate a simple password using:

// uppercase letters
// lowercase letters
// numbers
// The password should contain 8 characters.

// You can use the string methods you've learned so far along with Math.random().

// Answer:-

// const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*";
// let result = "";

// for (let i = 0; i < 8; i++) {
//     const randomIndex = Math.floor(Math.random() * alphabet.length);
//     result += alphabet[randomIndex];
// }
// console.log(result);

