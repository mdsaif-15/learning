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
let setPasswd = prompt("Create a password");;

let regex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/;
let newSetPasswd = setPasswd.trim();
if (regex.test(newSetPasswd)) {
    console.log("Valid Password");
} else {
    console.log("Invalid Password");
}
let userPasswd = prompt("Enter password to Enter ");
let newpasswd = userPasswd.trim();

if (regex.test(newpasswd)) {
    console.log("Valid Password");
} else {
    console.log("Invalid Password");
}
// console.log(newpasswd);
if (newSetPasswd === newpasswd) {
    console.log("correct password");
} else {
    console.log("Invalid password")
}

// Question 11

// let setPasswd = prompt("Create a password");
// let newSetPasswd = setPasswd.trim();
// let count = 0;
// while(true){
//     let userPasswd = prompt("Enter password to Enter ");
//     let newpasswd = userPasswd.trim();
//     count ++;
//     if(count==3){
//         console.log("Account locked");
//         break
//     }else if()
// }