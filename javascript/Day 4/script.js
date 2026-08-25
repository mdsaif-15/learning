// Q1. Select the element with id="header" using two different methods, 
// and log its tagName to the console.

// Answer :- console.log(document.getElementsByTagName("h1"));

// Q2. Use getElementsByClassName to select all elements with 
// the class item, then log how many elements were found.

// let h = document.getElementsByClassName("Data");

// // console.log(h.length)
// console.log(h.length);

// Q3. Use querySelectorAll to select every <p> 
// tag on the page and change their text color to blue.

// const h = document.querySelectorAll("p");

// h.forEach((p) => {
//     p.style.color = "red";
// });


//Q4. Create a new <h2> element with the text "Welcome!" and append it to the <body>.

// const h = document.querySelector("h2");

// h.append("!!Welcome!!")

// Q5. Select the first element with the class .box and change its innerHTML to "Updated!".

// const h = document.querySelector(".box");
// h.innerHTML = "Updated!";

// Q6. Add a click event listener to a button with id="btn" 
// that logs "Button clicked" to the console.

// const click = document.querySelector(".btn");

// click.addEventListener("click", function () {
//     console.log("clicked")
//     click.style.color = "white"
//     click.style.backgroundColor = "black"
// });

// Q7. Create a <li> element, set its text to "New Item", 
// and append it to a <ul> with id="list".

