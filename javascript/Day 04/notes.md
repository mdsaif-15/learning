# Day 4: DOM Manipulation, Elements & Event Handling

## Table of Contents
1. [Understanding the DOM (Document Object Model)](#1-understanding-the-dom-document-object-model)
   - [What is the DOM Tree?](#what-is-the-dom-tree)
   - [Nodes vs. Elements](#nodes-vs-elements)
2. [Selecting DOM Elements](#2-selecting-dom-elements)
   - [Traditional Selectors (`getElementById`, `getElementsByClassName`, `getElementsByTagName`)](#traditional-selectors)
   - [Modern Selectors (`querySelector`, `querySelectorAll`)](#modern-selectors)
   - [Attribute Selectors](#attribute-selectors)
3. [HTMLCollection vs. NodeList (Live vs. Static)](#3-htmlcollection-vs-nodelist-live-vs-static)
   - [Deep Dive into Live vs. Static Snapshots](#deep-dive-into-live-vs-static-snapshots)
   - [Comparison Matrix](#comparison-matrix)
4. [Reading & Modifying DOM Content](#4-reading--modifying-dom-content)
   - [innerHTML vs. textContent vs. innerText](#innerhtml-vs-textcontent-vs-innertext)
   - [Form Values (`input.value`)](#form-values-inputvalue)
   - [Styling via JavaScript (`element.style`)](#styling-via-javascript-elementstyle)
   - [Class Manipulation (`classList.add`, `remove`, `toggle`)](#class-manipulation-classlist)
5. [Creating, Appending & Removing Elements](#5-creating-appending--removing-elements)
   - [`document.createElement()`](#documentcreateelement)
   - [`append()` vs. `appendChild()`](#append-vs-appendchild)
   - [Removing Elements: `removeChild()` vs. `element.remove()`](#removing-elements-removechild-vs-elementremove)
   - [Dynamic Element Generation in Loops](#dynamic-element-generation-in-loops)
6. [Event Handling & Event Listeners](#6-event-handling--event-listeners)
   - [The `addEventListener` Method](#the-addeventlistener-method)
   - [Common Mouse & Input Events (`click`, `dblclick`, `mouseover`)](#common-mouse--input-events)
   - [State Toggling with Events](#state-toggling-with-events)
7. [Event Propagation & Event Delegation](#7-event-propagation--event-delegation)
   - [Bubbling and Capturing](#bubbling-and-capturing)
   - [Event Delegation (`e.target` vs. `e.currentTarget`)](#event-delegation-etarget-vs-ecurrenttarget)
   - [Why Delegation is Crucial for Dynamic Lists](#why-delegation-is-crucial-for-dynamic-lists)
8. [Day 4 Practice Exercises: In-Depth Solutions](#8-day-4-practice-exercises-in-depth-solutions)

---

## 1. Understanding the DOM (Document Object Model)

The **DOM** is a tree-like, object-oriented representation of an HTML document created by the browser. It allows JavaScript to inspect, manipulate, add, or delete HTML elements, attributes, and styles dynamically.

```
                         ┌──────────┐
                         │ document │
                         └────┬─────┘
                              │
                         ┌────▼─────┐
                         │  <html>  │
                         └────┬─────┘
                    ┌─────────┴─────────┐
                    │                   │
               ┌────▼─────┐        ┌────▼─────┐
               │  <head>  │        │  <body>  │
               └──────────┘        └────┬─────┘
                                   ┌────┴────┐
                                   │         │
                              ┌────▼───┐ ┌───▼────┐
                              │  <h1>  │ │  <ul>  │
                              └────────┘ └───┬────┘
                                        ┌────┴────┐
                                        │         │
                                     ┌──▼─┐     ┌─▼──┐
                                     │<li>│     │<li>│
                                     └────┘     └────┘
```

### Nodes vs. Elements
- **Node**: Any single point in the DOM tree (Elements, Text nodes, Comments, Document).
- **Element**: A specific type of node representing an HTML tag (e.g., `<div>`, `<p>`, `<li>`).

---

## 2. Selecting DOM Elements

### Traditional Selectors

1. **`document.getElementById("id")`**:
   - Selects a single element matching the unique `id`.
   - Returns: A single `Element` object, or `null` if not found.
   ```javascript
   const header = document.getElementById("h1");
   console.log(header.tagName); // "H1"
   ```

2. **`document.getElementsByClassName("className")`**:
   - Selects all elements possessing that class name.
   - Returns: A **Live HTMLCollection**.
   ```javascript
   const items = document.getElementsByClassName("Data");
   console.log(items.length);
   ```

3. **`document.getElementsByTagName("tagName")`**:
   - Selects all elements of a given HTML tag (e.g., `'h1'`, `'p'`).
   - Returns: A **Live HTMLCollection**.

---

### Modern Selectors

Modern DOM selection relies on CSS selectors:

1. **`document.querySelector("cssSelector")`**:
   - Returns the **first** element that matches the specified CSS selector.
   - Returns: `Element` or `null`.
   ```javascript
   const firstCard = document.querySelector(".cart");
   const mainHeading = document.querySelector("#h1");
   const firstParagraph = document.querySelector("div.cart > p");
   ```

2. **`document.querySelectorAll("cssSelector")`**:
   - Returns **all** matching elements.
   - Returns: A **Static NodeList**.
   - Supports built-in `.forEach()` iterating directly over elements.
   ```javascript
   const allParagraphs = document.querySelectorAll("p");
   allParagraphs.forEach((p) => {
       p.style.color = "blue";
   });
   ```

---

### Attribute Selectors
You can query elements by any HTML attribute using CSS bracket notation:

```javascript
// Select input with type="text"
const textInput = document.querySelector('input[type="text"]');
console.log(textInput.value);

// Select button with a specific data attribute
const deleteBtn = document.querySelector('button[data-action="delete"]');
```

---

## 3. HTMLCollection vs. NodeList (Live vs. Static)

This is one of the most critical conceptual differences in DOM scripting.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        HTMLCollection vs NodeList                      │
├──────────────────────────┬─────────────────────────────────────────────┤
│   Live HTMLCollection    │              Static NodeList                │
├──────────────────────────┼─────────────────────────────────────────────┤
│ Returned by:             │ Returned by:                                │
│ getElementsByClassName() │ querySelectorAll()                          │
│ getElementsByTagName()   │                                             │
├──────────────────────────┼─────────────────────────────────────────────┤
│ Automatically updates    │ Static snapshot taken at query time.        │
│ whenever the DOM tree    │ Does NOT update when elements are added or  │
│ changes in real-time.    │ removed from the DOM.                       │
├──────────────────────────┼─────────────────────────────────────────────┤
│ Contains Elements only.  │ Can contain any Node type (text, comments). │
├──────────────────────────┼─────────────────────────────────────────────┤
│ No built-in .forEach().  │ Has built-in .forEach() method.             │
│ (Must convert to Array)  │                                             │
└──────────────────────────┴─────────────────────────────────────────────┘
```

### Deep Dive: Why "Live" Matters
```javascript
// Live HTMLCollection demonstration:
const liveItems = document.getElementsByClassName("item");
console.log(liveItems.length); // e.g. 3

// Add a new element to DOM:
const newItem = document.createElement("li");
newItem.className = "item";
document.body.appendChild(newItem);

// Automatically updates without re-querying!
console.log(liveItems.length); // 4

// Static NodeList demonstration:
const staticItems = document.querySelectorAll(".item");
console.log(staticItems.length); // 4

document.body.appendChild(document.createElement("li"));
// Remains unchanged!
console.log(staticItems.length); // Still 4
```

---

## 4. Reading & Modifying DOM Content

### `innerHTML` vs. `textContent` vs. `innerText`

| Property | Parses HTML? | Shows Hidden Text? | Performance | Security Risk |
| :--- | :--- | :--- | :--- | :--- |
| **`innerHTML`** | **Yes** | Yes | Slower (causes re-parsing) | **High (XSS attacks)** |
| **`textContent`** | **No** (Raw text) | **Yes** (including `<script>`/styles) | **Fastest** | **Safe** |
| **`innerText`** | **No** (Rendered text) | **No** (respects CSS `display:none`) | Slower (triggers reflow) | **Safe** |

```javascript
const box = document.querySelector(".box");

// Overwrites all internal markup:
box.innerHTML = "<strong>Updated content!</strong>";

// Safe replacement of plain text:
box.textContent = "Plain updated text!";
```

---

### Form Values (`input.value`)
For form controls (`<input>`, `<textarea>`, `<select>`), reading or writing the entered value uses the `.value` property, **not** `innerHTML` or `textContent`:

```javascript
const searchInput = document.querySelector('input[name="search"]');
console.log("Current user typed:", searchInput.value);

// Update programmatically:
searchInput.value = "Fresh Apples";
```

---

### Styling via JavaScript (`element.style`)
Styles applied via `.style` are injected as **inline styles** directly onto the HTML element (`style="..."`):

- CSS properties with dashes become **camelCase** in JavaScript:
  - `background-color` $\rightarrow$ `backgroundColor`
  - `font-size` $\rightarrow$ `fontSize`
  - `z-index` $\rightarrow$ `zIndex`

```javascript
const btn = document.querySelector(".btn");
btn.style.color = "white";
btn.style.backgroundColor = "black";
btn.style.padding = "10px 16px";
btn.style.borderRadius = "6px";
```

---

### Class Manipulation (`classList`)
Instead of setting inline styles, modern web development relies on managing CSS classes with `element.classList`:

```javascript
const alertBox = document.querySelector(".alert");

alertBox.classList.add("active", "visible"); // Add one or more classes
alertBox.classList.remove("hidden");         // Remove a class
alertBox.classList.toggle("dark-mode");      // Adds if missing, removes if present
const hasClass = alertBox.classList.contains("active"); // Returns boolean true/false
```

---

## 5. Creating, Appending & Removing Elements

### `document.createElement()`
Creates a new element in memory, waiting to be inserted into the DOM:

```javascript
const newHeading = document.createElement("h2");
newHeading.textContent = "Welcome to the Fruit Shop!";
newHeading.classList.add("subheading");
```

---

### `append()` vs. `appendChild()`

| Feature | `appendChild()` (Legacy) | `append()` (Modern) |
| :--- | :--- | :--- |
| **Arguments** | Only 1 Node object | Multiple Nodes AND plain strings |
| **Return Value** | Returns the appended Node | Returns `undefined` |
| **Accepts Text?** | No (throws error) | Yes (creates text nodes automatically) |

```javascript
const container = document.querySelector(".cart");

// Modern append accepts strings and elements together:
container.append(newHeading, "Enjoy fresh fruits daily!");
```

---

### Removing Elements: `removeChild()` vs. `element.remove()`

#### 1. Traditional `parentNode.removeChild(childNode)`:
Requires a direct reference to both the parent element and the child element:
```javascript
const parent = document.querySelector(".wrapper");
const child = parent.querySelector(".span");

// Must pass an actual DOM node reference, NOT a CSS string!
parent.removeChild(child);
```

#### 2. Modern `element.remove()`:
Can be invoked directly on the element you wish to destroy:
```javascript
const child = document.querySelector(".wrapper .span");
child.remove(); // Clean and direct!
```

---

### Dynamic Element Generation in Loops
When generating repetitive elements (e.g. lists, grids, cards):

```javascript
function generateBoxes(containerId, count) {
    const container = document.getElementById(containerId);
    
    // DocumentFragment batches DOM updates to minimize browser reflows
    const fragment = document.createDocumentFragment();

    for (let i = 1; i <= count; i++) {
        const div = document.createElement("div");
        div.id = `box-${i}`;
        div.className = "box-item";
        div.textContent = `Box #${i}`;
        fragment.appendChild(div);
    }

    container.appendChild(fragment); // Single paint/reflow!
}
```

---

## 6. Event Handling & Event Listeners

### The `addEventListener` Method
Attaches an event handler function to an element without overwriting existing event handlers:

```javascript
element.addEventListener(eventType, handlerFunction, options);
```

```javascript
const orderBtn = document.querySelector(".btn");

orderBtn.addEventListener("click", function(event) {
    console.log("Order button clicked!");
    this.style.backgroundColor = "#16a34a"; // Green
    this.textContent = "Order Placed!";
});
```

---

### Common Mouse & Input Events

```
  Event Name     Triggered When
 ─────────────────────────────────────────────────────────────
  click          User clicks with mouse or taps on touchscreen
  dblclick       User rapidly double-clicks an element
  mouseover      Mouse cursor enters the element or its children
  mouseout       Mouse cursor leaves the element
  input          Value of an <input> or <textarea> changes live
  submit         Form submission is triggered
```

#### Hover Effect on Multiple Cards:
```javascript
const cards = document.querySelectorAll(".cart");

cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
        card.style.backgroundColor = "#fdf2f8"; // Light pink
    });

    card.addEventListener("mouseout", () => {
        card.style.backgroundColor = ""; // Reset to default
    });
});
```

---

### State Toggling with Events
Toggling states back and forth on user interaction:

```javascript
const heading = document.querySelector("#h1");

heading.addEventListener("dblclick", function() {
    this.textContent = (this.textContent === "Hello!!") ? "Goodbye" : "Hello!!";
});
```

---

## 7. Event Propagation & Event Delegation

### Bubbling and Capturing
When an event occurs on an element (e.g., clicking a `<li>`), the event doesn't just execute on that element:

```
  1. Capturing Phase: Window ──> Document ──> <body> ──> <ul> ──> <li>
  2. Target Phase:    Event executes on <li>
  3. Bubbling Phase:  <li> ──> <ul> ──> <body> ──> Document ──> Window
```

By default, event listeners run during the **Bubbling Phase** (propagating upwards to parent ancestors).

---

### Event Delegation (`e.target` vs. `e.currentTarget`)

**Event Delegation** is a design pattern where instead of attaching an event listener to every individual child item, you attach a **single** listener to their common parent.

- **`e.target`**: The exact inner element that was clicked (e.g., `<li>Apple</li>`).
- **`e.currentTarget`**: The element currently handling the event (the `<ul>` with the listener).

```javascript
const list = document.querySelector("ul.Data");

// Single listener handles ALL current and future <li> elements!
list.addEventListener("click", function(event) {
    // Check if the clicked target is an LI element
    if (event.target.tagName === "LI") {
        console.log("Clicked item:", event.target.textContent);
    }
});
```

### Why Delegation is Crucial:
1. **Performance**: 1 listener on `<ul>` instead of 1,000 listeners on 1,000 `<li>` tags saves substantial memory.
2. **Dynamic Elements**: Newly added items dynamically appended later automatically respond to clicks without needing new listeners.

---

## 8. Day 4 Practice Exercises: In-Depth Solutions

Refined and bug-free solutions for the exercises in [`Day 4/script.js`](file:///Users/saif-/Library/CloudStorage/GoogleDrive-mohdsaifansari191@gmail.com/My%20Drive/learning/javascript/Day%204/script.js):

### Q1. Select Element by Two Methods & Log TagName
```javascript
// Method 1: getElementById
const el1 = document.getElementById("h1");
console.log("Method 1 TagName:", el1.tagName); // "H1"

// Method 2: querySelector
const el2 = document.querySelector("#h1");
console.log("Method 2 TagName:", el2.tagName); // "H1"
```

---

### Q2. `getElementsByClassName` & Count
```javascript
const items = document.getElementsByClassName("Data");
console.log("Elements found:", items.length);
```

---

### Q3. `querySelectorAll` for all `<p>` and Change Color
```javascript
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((p) => {
    p.style.color = "blue";
});
```

---

### Q4. Create `<h2>` with "Welcome!" and Append to Body
```javascript
const h2 = document.createElement("h2");
h2.textContent = "Welcome!";
document.body.appendChild(h2);
```

---

### Q5. Select First `.box` and Update `innerHTML`
```javascript
const box = document.querySelector(".box");
if (box) {
    box.innerHTML = "Updated!";
}
```

---

### Q6. Button Click Listener
```javascript
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
    console.log("Button clicked");
    btn.style.color = "white";
    btn.style.backgroundColor = "black";
});
```

---

### Q7. Create `<li>` and Append to `<ul>`
```javascript
const ul = document.querySelector("ul.Data");
const newLi = document.createElement("li");
newLi.textContent = "New Item";
ul.appendChild(newLi);
```

---

### Q8. Difference: HTMLCollection vs. NodeList
- `getElementsByClassName`: Returns a **live HTMLCollection** that dynamically updates when DOM nodes are added/removed. Contains only element nodes; lacks native `.forEach()`.
- `querySelectorAll`: Returns a **static NodeList** representing a snapshot of the DOM at the exact moment of invocation. Does not track future DOM mutations; provides a built-in `.forEach()`.

---

### Q9. Hover Effect on All `.cart` Elements
```javascript
const carts = document.querySelectorAll(".cart");
carts.forEach((card) => {
    card.addEventListener("mouseover", function () {
        card.style.backgroundColor = "pink";
    });
    card.addEventListener("mouseout", function () {
        card.style.backgroundColor = "";
    });
});
```

---

### Q10. Create `<p>`, Add Class via `classList`, and Append
```javascript
const p = document.createElement("p");
p.classList.add("highlight-text");
p.textContent = "Dynamically injected paragraph!";

const container = document.querySelector(".cart");
container.appendChild(p);
```

---

### Q11. Remove Child with `removeChild`
```javascript
const wrapper = document.querySelector(".wrapper");
const childSpan = wrapper.querySelector(".span");

// removeChild requires an actual DOM Node object:
if (wrapper && childSpan) {
    wrapper.removeChild(childSpan);
}
```

---

### Q12. Double-Click Toggle on `<h1>`
```javascript
const h1 = document.querySelector("#h1");
h1.addEventListener("dblclick", function () {
    h1.textContent = (h1.textContent === "Hello!!") ? "Goodbye" : "Hello!!";
});
```

---

### Q13. Query by Attribute & Log Value
```javascript
const textInput = document.querySelector('input[type="text"]');
if (textInput) {
    console.log("Input value:", textInput.value);
}
```

---

### Q14. Function Creating 5 `<div>` Elements with Unique IDs
```javascript
function createFiveBoxes(containerSelector) {
    const parent = document.querySelector(containerSelector);
    for (let i = 1; i <= 5; i++) {
        const div = document.createElement("div");
        div.id = `box-${i}`;
        div.className = "generated-box";
        div.textContent = `Box ${i}`;
        parent.appendChild(div);
    }
}
createFiveBoxes(".wrapper");
```

---

### Q15. Event Delegation on Parent `<ul>`
```javascript
const list = document.querySelector("ul.Data");

list.addEventListener("click", function (e) {
    // Only respond if an <li> was clicked:
    if (e.target.tagName === "LI") {
        console.log("Clicked fruit:", e.target.textContent);
    }
});
```

---

## Key Takeaways
1. **Selection**: Prefer `querySelector` / `querySelectorAll` for modern, flexible CSS querying.
2. **Collection Types**: Be mindful that `querySelectorAll` creates static snapshots, while `getElementsBy*` tracks live DOM changes.
3. **Safe Content**: Use `textContent` for safety and speed; use `innerHTML` only when inserting actual HTML tags.
4. **Node Removal**: `parentNode.removeChild(node)` requires an Element node parameter, not a CSS selector string.
5. **Event Delegation**: Leverage event bubbling with `e.target` on parent elements to handle multiple children cleanly and dynamically.
