# Deep Notes — React `useState`, Arrays, `map()`, Conditional Rendering & Immutable Updates

## 1. Overview

This project combines important React fundamentals:

- `useState`
- Array state
- Arrays of objects
- `map()`
- Conditional logic
- Conditional rendering
- Event handling
- Immutable state updates
- Derived data
- Functional state updates
- Re-rendering

The central pattern is:

```js
const [products, setProducts] = useState(initialProducts);

setProducts((previousProducts) =>
  previousProducts.map((product) => {
    // return updated product or unchanged product
  })
);
```

The important idea is: **do not directly mutate existing React state. Create the new state and pass it to the setter.**

---

# 2. `useState`

`useState` creates state inside a React component.

```js
const [count, setCount] = useState(0);
```

- `count` = current state
- `setCount` = state setter
- `0` = initial state

When the setter is used, React can render the component again using the new state.

State can contain strings, numbers, booleans, arrays, objects, or arrays of objects.

Example:

```js
const [products, setProducts] = useState([
  { name: "Keyboard", price: 800 },
  { name: "Mouse", price: 400 }
]);
```

---

# 3. Understanding Array-of-Object State

Our state has two levels:

```text
Array
  ↓
Objects
  ↓
Properties
```

For example:

```js
products[0].name
products[0].price
```

give:

```text
Keyboard
800
```

This structure is common in real applications such as shopping carts, dashboards, student systems, and admin panels.

---

# 4. `map()`

`map()` processes every element and returns a **new array**.

```js
const numbers = [1, 2, 3];

const doubled = numbers.map((number) => {
  return number * 2;
});
```

Result:

```js
[2, 4, 6]
```

The original array is not transformed into the result.

Think:

```text
Old Array
   ↓
  map()
   ↓
New Array
```

---

# 5. Why `map()` Is Important in React

`map()` has two especially important uses.

### Rendering

```jsx
{products.map((product) => (
  <p>{product.name}</p>
))}
```

It converts array data into JSX.

### Updating

```js
const updatedProducts = products.map((product) => {
  // return updated product
});
```

It creates a new transformed array.

---

# 6. Mutation vs Immutable Update

### Mutation

Mutation means changing existing data directly:

```js
products[0].price -= 100;
```

or:

```js
product.price = product.price - 100;
```

For React state, avoid directly modifying existing state.

### Immutable update

Instead, create a new object/array:

```js
const updatedProduct = {
  ...product,
  price: product.price - 100
};
```

Then update the state:

```js
setProducts(updatedProducts);
```

Mental model:

```text
Bad:
Old State → Modify Old State

Good:
Old State → Create New State → setState(New State)
```

---

# 7. Object Spread Operator

Suppose:

```js
const product = {
  name: "Keyboard",
  price: 800
};
```

This:

```js
{
  ...product,
  price: 700
}
```

creates:

```js
{
  name: "Keyboard",
  price: 700
}
```

`...product` copies the existing properties, while the later `price` replaces the old price.

This is extremely useful when updating one property of an object in React state.

---

# 8. Conditional State Update

The project rule is:

```text
price >= ₹500 → subtract ₹100
price < ₹500  → no change
```

Logic:

```text
              Product
                 ↓
          price >= 500?
           ↙         ↘
         YES          NO
          ↓            ↓
       - ₹100       unchanged
```

Example:

```js
if (product.price >= 500) {
  return {
    ...product,
    price: product.price - 100
  };
}

return product;
```

---

# 9. Conditional Rendering

React can display different UI depending on data.

Example:

```jsx
{product.price >= 500
  ? "Eligible"
  : "Not Eligible"}
```

This is a ternary expression:

```text
condition ? trueValue : falseValue
```

For price:

```text
₹800 → Eligible
₹500 → Eligible
₹499 → Not Eligible
```

---

# 10. Event Handling

A button can trigger a function:

```jsx
<button onClick={applyDiscount}>
  Apply ₹100 Discount
</button>
```

Flow:

```text
User clicks
    ↓
onClick
    ↓
applyDiscount()
    ↓
Update state
    ↓
React re-renders
```

Avoid:

```jsx
onClick={applyDiscount()}
```

because that calls the function during rendering rather than passing the function as the event handler.

---

# 11. Derived Data

Do not create separate state for something that can be calculated from existing state.

Avoid unnecessary state such as:

```js
const [eligible, setEligible] = useState(false);
```

when eligibility can simply be calculated:

```js
product.price >= 500
```

This is **derived data**.

Principle:

> Store the source data; calculate values that can be derived from it.

This prevents multiple pieces of state from becoming inconsistent.

---

# 12. Functional State Updates

When the next state depends on previous state, a functional update is a strong pattern:

```js
setProducts((previousProducts) => {
  return previousProducts.map((product) => {
    // ...
  });
});
```

This explicitly says:

> Calculate the new state from the previous state.

For counters:

```js
setCount((previousCount) => previousCount + 1);
```

This is useful when several updates may be queued.

---

# 13. Complete Update Pattern

The key project pattern is:

```js
function applyDiscount() {
  setProducts((previousProducts) =>
    previousProducts.map((product) => {
      if (product.price >= 500) {
        return {
          ...product,
          price: product.price - 100
        };
      }

      return product;
    })
  );
}
```

Break it down:

```text
setProducts()
    ↓
previousProducts
    ↓
map()
    ↓
check each product
    ↓
price >= 500?
   ↙       ↘
 YES       NO
  ↓         ↓
new obj   same product
   ↘       ↙
    new array
```

---

# 14. Why `return product`?

Every iteration of `map()` must produce the corresponding result.

For an ineligible product:

```js
return product;
```

means:

> Put this product into the new array without changing it.

For an eligible product:

```js
return {
  ...product,
  price: product.price - 100
};
```

means:

> Put a new version of this product into the new array.

---

# 15. Rendering the Product List

Typical JSX:

```jsx
{products.map((product) => (
  <div key={product.name}>
    <h3>{product.name}</h3>
    <p>₹{product.price}</p>

    <p>
      {product.price >= 500
        ? "Eligible"
        : "Not Eligible"}
    </p>
  </div>
))}
```

For production applications, prefer a stable unique ID when available:

```jsx
key={product.id}
```

---

# 16. `map()` vs `forEach()`

| `map()` | `forEach()` |
|---|---|
| Returns a new array | Does not return a transformed array |
| Good for transformation | Good for side-effect iteration |
| Common for React list rendering | Not used for JSX list transformation |
| Appropriate for this task | Not appropriate for the required update |

For this project:

```js
map()
```

is the correct tool because we need a new products array.

---

# 17. `map()` vs `filter()`

Remember:

```text
map()    → transform every element
filter() → select elements
```

Example:

```js
numbers.map(n => n * 2);
```

changes each value.

```js
numbers.filter(n => n >= 500);
```

selects values satisfying the condition.

The discount project needs to keep **all products**, while changing some, so `map()` fits the problem.

---

# 18. `map()` vs `reduce()`

`reduce()` combines an array into one result.

Example:

```js
const total = products.reduce(
  (sum, product) => sum + product.price,
  0
);
```

Use:

```text
map()    → create/update an array
filter() → select items
reduce() → calculate one combined result
```

---

# 19. React Re-rendering

When:

```js
setProducts(updatedProducts);
```

runs, React receives the new state.

Conceptually:

```text
Old State
   ↓
setProducts()
   ↓
New State
   ↓
Component renders again
   ↓
JSX reads new state
   ↓
Updated UI
```

You normally do not manually change the displayed HTML.

React derives the UI from state.

---

# 20. Complete Project Example

Initial data:

```js
[
  { name: "Keyboard", price: 800 },
  { name: "Mouse", price: 400 },
  { name: "Headphones", price: 1200 },
  { name: "USB Cable", price: 250 },
  { name: "Webcam", price: 700 }
]
```

After one click:

```text
Keyboard      ₹700
Mouse         ₹400
Headphones    ₹1100
USB Cable     ₹250
Webcam        ₹600
```

After another click:

```text
Keyboard      ₹600
Mouse         ₹400
Headphones    ₹1000
USB Cable     ₹250
Webcam        ₹500
```

After another click:

```text
Keyboard      ₹500
Mouse         ₹400
Headphones    ₹900
USB Cable     ₹250
Webcam        ₹400
```

At that point, Keyboard and Webcam will no longer qualify because their next prices would be below ₹500.

---

# 21. Important Edge Cases

### Exactly ₹500

Because the condition is:

```js
price >= 500
```

₹500 **is eligible**.

### ₹499

```text
499 >= 500 → false
```

No discount.

### Repeated clicks

A product stops changing once its price becomes less than ₹500.

### Empty array

If:

```js
products = []
```

then:

```js
products.map(...)
```

simply produces another empty array.

### One product

The same logic works for one product.

---

# 22. Common Beginner Mistakes

### Mistake 1 — Direct mutation

```js
product.price -= 100;
```

Avoid modifying the existing state object.

### Mistake 2 — Forgetting the setter

This alone does not update React state:

```js
const updatedProducts = products.map(...);
```

You must use:

```js
setProducts(updatedProducts);
```

### Mistake 3 — Forgetting `return`

Incorrect:

```js
products.map((product) => {
  if (product.price >= 500) {
    {
      ...product,
      price: product.price - 100
    }
  }
});
```

Correct:

```js
products.map((product) => {
  if (product.price >= 500) {
    return {
      ...product,
      price: product.price - 100
    };
  }

  return product;
});
```

### Mistake 4 — Using unnecessary state

Do not store eligibility separately when it is derived from price.

### Mistake 5 — Calling the handler immediately

Avoid:

```jsx
onClick={applyDiscount()}
```

Use:

```jsx
onClick={applyDiscount}
```

---

# 23. State Data Flow

The complete React data flow is:

```text
                STATE
                  ↓
              products
                  ↓
             Render UI
                  ↓
             User Click
                  ↓
            Event Handler
                  ↓
                map()
                  ↓
            Apply Condition
                  ↓
             New Array
                  ↓
            setProducts()
                  ↓
             Re-render
                  ↓
              New UI
```

This is one of the most important mental models for React.

---

# 24. Complexity

If there are `n` products:

```js
products.map(...)
```

visits every product once.

Time complexity:

```text
O(n)
```

A new array is created, so additional array space is:

```text
O(n)
```

For normal UI lists, this is appropriate.

---

# 25. Real-World Applications

The same pattern is used in:

### Todo apps

```text
Mark task complete
Edit task
Delete task
```

### Shopping carts

```text
Change quantity
Apply discount
Update product
```

### Student systems

```text
Update marks
Change attendance
Update result
```

### Admin dashboards

```text
Change user status
Edit records
Update permissions
```

### Social media

```text
Like post
Update comments
Edit content
```

The data changes, but the React state-management pattern remains similar.

---

# 26. Recommended Learning Order

Practice this project in stages:

### Stage 1

Create the `products` state.

### Stage 2

Render products using `map()`.

### Stage 3

Display price.

### Stage 4

Display:

```js
price >= 500
```

as Eligible/Not Eligible.

### Stage 5

Add the button.

### Stage 6

Write the discount function.

### Stage 7

Use `map()` to update products.

### Stage 8

Use `setProducts()`.

### Stage 9

Test repeated clicks and edge cases.

---

# 27. Interview Questions

1. What is `useState`?
2. Why shouldn't React state be mutated directly?
3. Why is `map()` useful for updating an array?
4. What is the difference between `map()` and `forEach()`?
5. What is derived data?
6. Why should unnecessary state be avoided?
7. What does the spread operator do?
8. What does `setProducts()` do?
9. What happens after a state update?
10. Why is `price >= 500` different from `price > 500`?
11. Why does `map()` return a new array?
12. What is a functional state update?
13. Why is a `key` needed when rendering lists?
14. What is the time complexity of `map()`?
15. How would you update one object inside an array in React state?

---

# 28. Interview-Level Answer

If asked:

**"How do you update an array of objects in React state?"**

A strong answer is:

> I avoid mutating the existing state. I use `map()` to create a new array. For objects that need modification, I create a new object using the spread operator and change only the required property. For unchanged objects, I return the existing object. Finally, I pass the new array to the state setter.

Example:

```js
setProducts((previousProducts) =>
  previousProducts.map((product) =>
    product.price >= 500
      ? {
          ...product,
          price: product.price - 100
        }
      : product
  )
);
```

---

# 29. Practice Challenges

After the main project works, try:

### Challenge 1
Change the discount from ₹100 to ₹50.

### Challenge 2
Only products priced at ₹1000 or above are eligible.

### Challenge 3
Give Eligible and Not Eligible different CSS classes.

### Challenge 4
Add a new product using array spread.

```js
[
  ...previousProducts,
  newProduct
]
```

### Challenge 5
Remove a product using `filter()`.

### Challenge 6
Add product quantity with `+` and `-` buttons.

### Challenge 7
Calculate the total price using `reduce()`.

---

# 30. Final Concept Map

```text
                    React State
                        │
                    useState
                        │
                 Array of Objects
                        │
              ┌─────────┴─────────┐
              │                   │
           Rendering           Updating
              │                   │
            map()               map()
              │                   │
             JSX              Condition
                                  │
                         ┌────────┴────────┐
                         │                 │
                       true              false
                         │                 │
                  New Object          Same Product
                         │                 │
                         └────────┬────────┘
                                  │
                             New Array
                                  │
                           setProducts()
                                  │
                              Re-render
                                  │
                              New UI
```

---

# 31. Key Takeaways

Remember these seven rules:

### 1. State

```js
const [products, setProducts] = useState([]);
```

### 2. Don't directly mutate state

Avoid:

```js
products[0].price = 500;
```

### 3. Use `map()` for transformations

```js
products.map(...)
```

### 4. Create a new object when changing an object

```js
{
  ...product,
  price: newPrice
}
```

### 5. Use the setter

```js
setProducts(updatedProducts);
```

### 6. Derive values when possible

```js
product.price >= 500
```

### 7. Understand the data flow

```text
Click
 ↓
Function
 ↓
map()
 ↓
New state
 ↓
setProducts()
 ↓
Re-render
 ↓
Updated UI
```

---

# 32. Final Goal

Do not memorize the project code.

Understand this pattern:

```text
Read state
   ↓
Transform state immutably
   ↓
Set new state
   ↓
React re-renders
```

Once this becomes comfortable, you will be able to build much larger React applications involving:

- Todo lists
- Shopping carts
- Product dashboards
- Student management
- Admin panels
- Inventory systems
- User management
- Data tables

The Shopping Cart Discount Manager is therefore a small project that teaches a very reusable React state-management pattern.
