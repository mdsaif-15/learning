// Question 07 
// age = prompt("enter your age");
// Number(age);
// if (age == " ") {
//     console.log("enter a valid age");
// } else if (age >= 18 && age <= 150) {
//     console.log("Eligible")
// } else if (age >= 150) {
//     console.log("enter a valid age");
// } else if (age <= 0) {
//     console.log("enter a valid age");

// } else if (age > 0 && age <= 18) {
//     console.log("Not Eligible")
// } else {
//     console.log("enter a valid age");
// }


// Question 08

// for (let i = 1; i <= 10; i++) {
//     console.log(`5 X ${i} = ${i * 5}`)
// }

// Question 09
// let count = 0;
// for(let i = 1;i<15;i++){
//     if(i>8){
//         count++;
//     }
// }
// console.log(count)

// Question 10 


// let setPasswd = prompt("Create a password");

// let regex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/;
// let newSetPasswd = setPasswd.trim();
// if (regex.test(newSetPasswd)) {
//     console.log("Valid Password");
// } else {
//     console.log("Invalid Password");
// }
// let userPasswd = prompt("Enter password to Enter ");
// let newpasswd = userPasswd.trim();

// if (regex.test(newpasswd)) {
//     console.log("Valid Password");
// } else {
//     console.log("Invalid Password");
// }
// // console.log(newpasswd);
// if (newSetPasswd === newpasswd) {
//     console.log("correct password");
// } else {
//     console.log("Invalid password")
// }

// Question 11

// let setPasswd = prompt("Create a password");
// let newSetPasswd = setPasswd.trim();
// let regex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/;
// if (regex.test(newSetPasswd)) {
//     console.log("Valid Password");
// } else {
//     console.log("Invalid Password");
// }
// let count = 0;
// while (true) {
//     let userPasswd = prompt("Enter password to Enter ");
//     let newpasswd = userPasswd.trim();
//     count++;
//     if (count == 3) {
//         console.log("Account locked");
//         break
//     } else if (newSetPasswd === newpasswd) {
//         console.log("correct password");
//     } else {
//         console.log("invalid password");
//     }
// }

// Question 12
// let count = 0;
// while (1) {
//     input = prompt("Type A words Yes or Stop ");
//     newInput = input.trim().toUpperCase();
//     if (newInput === "YES") {
//         count++;
//     } else if (newInput === "STOP") {
//         break
//     } else {
//         console.log("Invalid Input");
//     }
// } console.log("The number of times you enter 'YES': " + count)

// Question 13 Print numbers divisible by 7 from 1 to 50 Use modulo % and loop.


// let i = 1;
// while (i < 50) {
//     if (i % 7 == 0) {
//         console.log(i);
//     }
//     i++;
// }

// Question 14 Sum of all odd numbers from 1 to 30 Add only odd numbers. Print final sum.

// let i = 1;
// let sum = 0;
// while (i < 30) {
//     if (i % 2 == 0) {
//         sum += i;
//     }
//     i++;
// }
// console.log("The total sum :" + sum);

// Question 15 Keep asking number until user enters an even number Use while loop. 
// Stop only if input is even.

// while (1) {
//     let input = prompt("Enter even number only ?");
//     let numInput = Number(input);
//     if (numInput % 2 == 0) {
//         console.log("You have Enter even");
//         break;
//     }
// }

// Quention 16 Print numbers between two user inputs 
// Input start and end using prompt() → print all between.

// m = Number(prompt("Enter lower limit"));
// n = Number(prompt("Enter Higher limit"));
// for (m; m <= n; m++) {
//     console.log(m);
// }

// Question 17 Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.


// let count = 0;
// for (let i = 1; i <= 20; i++) {
//     if(i%2!=0){
//         console.log(i);
//         count++;
//     }
//     if(count == 3){
//         break;
//     }
// }

// Quention 18 Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// let positivecount = 0, count = 0;
// while (1) {
//     let input = Number(prompt("Enter a number : "));
//     if (input > 0) {
//         positivecount++;
//     } count++;
//     if (count == 5) {
//         break;
//     }
// }
// console.log(positivecount)

// Question 19 ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

// let count = 0;
// let balance = 1000;
// alert("you can only withdrawal 3 times!");
// while (count <= 2) {
//     let wAmount = Number(prompt("Enter amount you withdrawal"));
//     balance -= wAmount;
//     count++;
//     if (balance < 0) {
//         console.log("Insufficant balance!!");
//         break
//     }
//     console.log("left Balance = " + balance);
// }