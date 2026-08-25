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

// const List1 = document.querySelector("#item1")

// List1.innerHTML = <ul id="list" > New Item </ul>

// Q8. Explain the difference between getElementsByClassName 
// and querySelectorAll in terms of what they return 
// (live HTMLCollection vs static NodeList).

// Answer :-

// Q9. Select all <div> elements with the class card and 
// loop through them, adding a mouseover event listener 
// to each that changes their background color.

// const cart = document.querySelectorAll(".cart")

// cart.forEach((cart) => {                                     // d
//     cart.addEventListener("mouseover", function () {
//         console.log("hover");
//         cart.style.backgroundColour = "pink";
//     });
// });


// Q10. Write code that creates a <p> element, adds a class to it using classList.add, 
// sets its text, and appends it inside a <div id="container">.

// Answer:-


// Q11. given a parent <div class="wrapper"> containing a <span> child, 
// remove the <span> using removeChild.

// const h = document.querySelector(".wrapper");

// h.removeChild(".span");


// Q12. Add a dblclick event listener to an <h1> that toggles 
// its text between "Hello" and "Goodbye" each time it's double-clicked.

// const h = document.querySelector("#h1");

// h.addEventListener("dblclick",function(){
//     h.innerHTML = "Goodbye";
// })

// Q13. Use querySelector to select an element by attribute
// (e.g. input[type="text"]) and log its current value.

// Answer:-

// Q14. Write a function that creates 5 <div> elements in a loop, 
// gives each a unique id (like box-1, box-2, ...), and appends 
// them all to a container element.

// Answer:-


// Q15.Add a click event listener to a parent <ul> 
// that detects which <li> was clicked (event delegation) 
// and logs its text content.

// Answer:-