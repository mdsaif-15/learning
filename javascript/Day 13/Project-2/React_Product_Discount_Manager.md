# React `useState` Practice Project
## 🛒 Shopping Cart Discount Manager

---

## 1. Project Overview

This project is a new React practice project based on the same concepts used in the original **Student Grace Marks** task.

Instead of managing student marks, this project manages **product prices**.

The application uses React's `useState` to store an array of products. A button allows the user to apply a **₹100 discount** to products whose price is **₹500 or above**.

The main purpose of the project is to practice:

- `useState`
- Array state
- `map()`
- Conditional rendering
- Event handling
- Immutable state updates
- Derived state
- Conditional state updates

> **Important:** The project uses the same core React concepts as the original task, but the problem domain is completely different.

---

# 2. Topics Included

| # | Topic | How It Is Used |
|---|---|---|
| 1 | `useState` | Stores the products array |
| 2 | Array State | Maintains multiple products and their prices |
| 3 | `map()` | Creates the updated products array |
| 4 | Conditional Logic | Checks whether a product is eligible for discount |
| 5 | Conditional Rendering | Displays discount status |
| 6 | Event Handling | Handles the button click |
| 7 | State Updating | Uses `setProducts()` |
| 8 | Immutable Updates | Creates a new array instead of modifying the old one |
| 9 | Derived State | Discount status is calculated from the current price |
| 10 | Conditional State Updates | Only eligible products are changed |
| 11 | Array Iteration | Every product is checked |
| 12 | Dynamic UI Rendering | Product information is generated from the array |

---

# 3. Initial Product Data

The application should start with the following products:

```js
[
  { name: "Keyboard", price: 800 },
  { name: "Mouse", price: 400 },
  { name: "Headphones", price: 1200 },
  { name: "USB Cable", price: 250 },
  { name: "Webcam", price: 700 }
]
```

The state can be initialized as:

```js
const [products, setProducts] = useState([
  { name: "Keyboard", price: 800 },
  { name: "Mouse", price: 400 },
  { name: "Headphones", price: 1200 },
  { name: "USB Cable", price: 250 },
  { name: "Webcam", price: 700 }
]);
```

---

# 4. Discount Rule

The main rule of the project is:

> A product receives a ₹100 discount if its current price is ₹500 or above.

In simple form:

```text
price >= 500
      ↓
   Eligible
      ↓
   - ₹100
```

If the price is below ₹500:

```text
price < 500
      ↓
Not Eligible
      ↓
No change
```

---

# 5. Initial UI

Initially, the application should display something similar to:

```text
🛒 Shopping Cart

Product       Price       Status
-----------------------------------
Keyboard      ₹800        Eligible
Mouse         ₹400        Not Eligible
Headphones    ₹1200       Eligible
USB Cable     ₹250        Not Eligible
Webcam        ₹700        Eligible

[ Apply ₹100 Discount ]
```

The exact styling is up to you.

---

# 6. Button Behavior

The application must contain a button:

```text
Apply ₹100 Discount
```

Whenever the button is clicked:

1. Go through every product.
2. Check its current price.
3. If the price is ₹500 or above, subtract ₹100.
4. If the price is below ₹500, leave it unchanged.
5. Create a new array using `map()`.
6. Update the React state using `setProducts()`.

---

# 7. Example: First Click

### Before

```text
Keyboard      ₹800
Mouse         ₹400
Headphones    ₹1200
USB Cable     ₹250
Webcam        ₹700
```

### After clicking the button once

```text
Keyboard      ₹700
Mouse         ₹400
Headphones    ₹1100
USB Cable     ₹250
Webcam        ₹600
```

Only products with a price of ₹500 or above were changed.

---

# 8. Example: Second Click

### Before

```text
Keyboard      ₹700
Mouse         ₹400
Headphones    ₹1100
USB Cable     ₹250
Webcam        ₹600
```

### After clicking the button

```text
Keyboard      ₹600
Mouse         ₹400
Headphones    ₹1000
USB Cable     ₹250
Webcam        ₹500
```

The products below ₹500 remain unchanged.

---

# 9. Example: Third Click

### Before

```text
Keyboard      ₹600
Mouse         ₹400
Headphones    ₹1000
USB Cable     ₹250
Webcam        ₹500
```

### After clicking the button

```text
Keyboard      ₹500
Mouse         ₹400
Headphones    ₹900
USB Cable     ₹250
Webcam        ₹400
```

Notice that the Webcam receives the discount when its price is exactly ₹500 because the condition is:

```js
price >= 500
```

---

# 10. Important Logic

The central logic can be represented as:

```text
                Products Array
                      ↓
                    map()
                      ↓
             Check each product
                      ↓
              Is price >= ₹500?
                 ↙          ↘
               YES          NO
                ↓            ↓
            Price - 100    Same price
                 ↘          ↙
                  New Array
                      ↓
                setProducts()
                      ↓
                 UI Updates
```

---

# 11. Why `map()` Is Required

`map()` is used because we need to process every product and create a **new array**.

For example:

```js
const updatedProducts = products.map((product) => {
    // Check product
    // Return updated product or original product
});
```

The important idea is:

```text
Old Array
   ↓
 map()
   ↓
New Array
```

We should not directly modify the original state array.

---

# 12. Immutable State Update

React state should not be directly modified.

### ❌ Avoid this

```js
products[0].price -= 100;
```

This directly modifies an existing object inside the state.

### ❌ Also avoid directly changing the array

```js
products.push(newProduct);
```

Instead, create a new array.

For this project, `map()` is the required approach.

Conceptually:

```js
const updatedProducts = products.map(...);

setProducts(updatedProducts);
```

---

# 13. Conditional Rendering

The UI should display whether a product is eligible for the discount.

For example:

```text
Keyboard      ₹800    Eligible
Mouse         ₹400    Not Eligible
```

The status can be derived from the current price.

Conceptually:

```js
product.price >= 500
    ? "Eligible"
    : "Not Eligible"
```

You can also use a ternary operator directly while rendering.

---

# 14. Derived State

A separate state variable should **not** be created for discount eligibility.

### ❌ Do not create:

```js
const [isEligible, setIsEligible] = useState(...);
```

The eligibility can be calculated from the product's current price.

For example:

```js
product.price >= 500
```

This is called **derived state/data** because the status can be determined from existing state.

---

# 15. Event Handling

The button should trigger the discount operation.

Conceptually:

```jsx
<button onClick={applyDiscount}>
    Apply ₹100 Discount
</button>
```

The function handles the event and updates the state.

Flow:

```text
User clicks button
       ↓
Event handler runs
       ↓
map() processes products
       ↓
New array is created
       ↓
setProducts()
       ↓
React re-renders UI
```

---

# 16. Project Requirements

Create a React component named:

```text
ProductDiscount.jsx
```

The component must:

- Use `useState`.
- Store products in an array.
- Store product name and price.
- Display every product.
- Display the current price.
- Display discount eligibility.
- Include an **Apply ₹100 Discount** button.
- Use `map()` to update the products.
- Use `setProducts()` to update state.
- Apply the discount only when `price >= 500`.
- Leave products below ₹500 unchanged.
- Avoid directly modifying the state array.
- Avoid using another state variable to track eligibility.
- Use conditional rendering for the status.

---

# 17. Recommended Component Structure

You can structure your component like this:

```text
ProductDiscount
│
├── State
│   └── products
│
├── applyDiscount()
│   ├── map()
│   ├── condition
│   └── setProducts()
│
└── JSX
    ├── Heading
    ├── Product List
    │   ├── Product Name
    │   ├── Price
    │   └── Status
    │
    └── Discount Button
```

---

# 18. Skills You Are Practicing

This project is useful because several important React fundamentals are combined into one small application.

### `useState`

You learn how React stores and changes data.

### Arrays in State

You learn how to manage multiple pieces of related data.

### `map()`

You learn how to transform an array without directly modifying it.

### Conditional Logic

You practice conditions such as:

```js
price >= 500
```

### Conditional Rendering

You practice displaying different UI based on data.

### Event Handling

You learn how buttons trigger functions.

### State Updates

You learn how `setProducts()` causes React to update the UI.

### Immutability

You practice creating new arrays/objects rather than directly modifying existing state.

### Derived Data

You learn that not everything needs to be stored in state.

---

# 19. Original Project vs New Project

The original task manages **student marks** and gives grace marks to students who have not passed. Its core requirements include storing marks with `useState`, displaying pass/fail status, using `map()`, and updating state with `setMarks()`. 

The new project changes the subject from students to products while preserving the same React learning objectives.

| Original | New |
|---|---|
| Student | Product |
| Marks | Price |
| Pass/Fail | Discount Eligible/Not Eligible |
| Passing mark = 25 | Discount threshold = ₹500 |
| Give 5 grace marks | Give ₹100 discount |
| `marks` state | `products` state |
| `setMarks()` | `setProducts()` |
| `map()` | `map()` |
| Pass/Fail derived from marks | Eligibility derived from price |

---

# 20. Challenge Rules

Try to solve the project yourself.

### Do not immediately copy a complete solution.

You should write:

```text
1. State
2. JSX
3. map()
4. Condition
5. Event handler
6. setProducts()
```

yourself.

The objective is not just to make the project work. The objective is to understand **why** the state changes and **how** React re-renders the UI.

---

# 21. File Name

```text
ProductDiscount.jsx
```

---

# 22. Final Expected Flow

```text
App starts
   ↓
Products stored in useState
   ↓
Products displayed using map()
   ↓
User sees prices and eligibility
   ↓
User clicks "Apply ₹100 Discount"
   ↓
map() checks every product
   ↓
price >= ₹500 ?
   ├── YES → subtract ₹100
   └── NO  → keep same price
   ↓
New products array
   ↓
setProducts()
   ↓
React re-renders
   ↓
Updated prices displayed
```

---

## 🎯 Main Goal

By completing this project, you should be comfortable with the following React pattern:

```js
const [data, setData] = useState(initialData);

const updatedData = data.map((item) => {
    // condition
    // return updated item
});

setData(updatedData);
```

This pattern is extremely useful when working with arrays and objects in React.

---

## 🚀 Your Task

Create:

```text
ProductDiscount.jsx
```

and implement the project without copying a complete solution.

Once you finish, submit your code for review.
