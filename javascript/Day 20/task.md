# Day 20 — JavaScript Concept Practice: 20 Challenges

**Purpose:** Reinforce every important JavaScript concept covered across Days 1–19 — from core fundamentals to advanced async patterns — before moving deeper into the full-stack roadmap.

Every question below is built on something you have already studied. No OOP, no classes, no design patterns — pure JavaScript.

## Practice Rules

For every question:

1. **Read first.** Understand inputs, outputs, and edge cases before writing any code.
2. **Plan before coding.** Write your approach as comments first.
3. **Solve independently.** No copy-pasting from examples or docs.
4. **Test thoroughly.** Normal cases + edge cases + invalid inputs.
5. **Revisit.** After finishing, delete your solution and rewrite it from scratch an hour later.

---

# 🟡 Intermediate

---

## Q1. Implement Your Own `forEach`, `map`, and `filter`

**Concept:** Higher-order functions, callbacks (Day 3)

Add three methods to `Array.prototype`:

```javascript
Array.prototype.myForEach(callback)
Array.prototype.myMap(callback)
Array.prototype.myFilter(callback)
```

**Example:**

```javascript
const nums = [1, 2, 3, 4, 5];

nums.myForEach(n => console.log(n));
// 1 2 3 4 5

console.log(nums.myMap(n => n * 2));
// [2, 4, 6, 8, 10]

console.log(nums.myFilter(n => n % 2 === 0));
// [2, 4]
```

**Requirements:**
- Each callback receives `(element, index, array)` — just like the native versions.
- `myMap` and `myFilter` must return a **new** array — do not mutate the original.
- `myForEach` must return `undefined`.
- Handle empty arrays without throwing.
- Do **not** call the native `forEach`, `map`, or `filter` internally.

---

## Q2. GroupBy Using `reduce`

**Concept:** `reduce`, higher-order functions, objects (Days 1–3)

Write a function `groupBy(array, key)` that groups an array of objects by a given property.

**Input:**

```javascript
const products = [
  { name: "iPhone",  category: "Mobile",  price: 70000 },
  { name: "Samsung", category: "Mobile",  price: 55000 },
  { name: "MacBook", category: "Laptop",  price: 120000 },
  { name: "Dell",    category: "Laptop",  price: 80000 },
  { name: "AirPods", category: "Audio",   price: 15000 },
];

groupBy(products, "category");
```

**Expected output:**

```javascript
{
  Mobile: [{ name: "iPhone", ... }, { name: "Samsung", ... }],
  Laptop: [{ name: "MacBook", ... }, { name: "Dell", ... }],
  Audio:  [{ name: "AirPods", ... }]
}
```

**Requirements:**
- Implement using `reduce` — do not use a plain `for` loop.
- Handle items where the grouping key is missing (group them under `"unknown"`).
- Do not mutate the original array.

---

## Q3. Flatten an Array to Any Depth

**Concept:** Recursion, spread operator, arrays (Days 1–3)

Write `deepFlatten(arr)` that flattens a nested array of any depth.

**Input:**

```javascript
const arr = [1, [2, [3, [4, [5]]]], [6, 7]];
deepFlatten(arr); // [1, 2, 3, 4, 5, 6, 7]
```

**Also implement** `flattenByDepth(arr, depth)` that flattens only up to `depth` levels:

```javascript
flattenByDepth([1, [2, [3, [4]]]], 1); // [1, 2, [3, [4]]]
flattenByDepth([1, [2, [3, [4]]]], 2); // [1, 2, 3, [4]]
```

**Requirements:**
- `deepFlatten` must handle unlimited depth — do not use `Array.flat(Infinity)`.
- `flattenByDepth` must stop at the given depth exactly.
- Do not mutate the original array.
- Handle empty arrays and mixed types (numbers, strings, booleans) without throwing.

---

## Q4. Implement a Currying Function

**Concept:** Closures, function factories, lexical scope (Day 2–3)

Write a `curry(fn)` function that transforms a function so that it can be called with one argument at a time.

**Example:**

```javascript
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3));   // 6
console.log(curriedAdd(1, 2)(3));   // 6
console.log(curriedAdd(1)(2, 3));   // 6
console.log(curriedAdd(1, 2, 3));   // 6
```

**Requirements:**
- Once enough arguments have been collected (equal to `fn.length`), call and return the result.
- Support passing multiple arguments at once — not forced to call one-by-one.
- Each partial call must return a new function (not mutate previous state).
- Must work for any function with a fixed number of parameters.

---

## Q5. Deep Search Inside a Nested Object

**Concept:** Recursion, objects, arrays (Days 1–3)

Write `deepSearch(data, target)` that searches for a **value** anywhere inside a deeply nested object or array structure.

**Input:**

```javascript
const data = {
  user: {
    profile: {
      name: "Dibyo",
      skills: ["JavaScript", "React", "Node.js"]
    }
  },
  projects: [
    { name: "Clicksy", tech: ["React", "MongoDB"] },
    { name: "NexGear", tech: ["Node.js", "Redis"]  }
  ]
};

deepSearch(data, "Redis");   // true
deepSearch(data, "Python");  // false
```

**Requirements:**
- Search recursively through nested objects and arrays.
- Return `true` as soon as the value is found — do not keep searching.
- Return `false` only if the value is nowhere in the structure.
- Handle circular references without infinite recursion.
- Treat the search as strict equality (`===`).

---

## Q6. Implement a Multiplier Function Factory

**Concept:** Closures, function factories, returning functions (Day 2)

Write a function `multiplier(n)` that returns a **new function** which multiplies any number by `n`.

Also write `adder(n)` that returns a function which adds `n` to any number.

**Example:**

```javascript
const double  = multiplier(2);
const triple  = multiplier(3);
const tenX    = multiplier(10);

console.log(double(5));   // 10
console.log(triple(5));   // 15
console.log(tenX(5));     // 50

const add5  = adder(5);
const add10 = adder(10);

console.log(add5(3));     // 8
console.log(add10(3));    // 13
```

Then use `multiplier` and `adder` together:

```javascript
const prices = [100, 200, 300, 400];

// Apply 18% GST
const withGST = prices.map(multiplier(1.18));
console.log(withGST); // [118, 236, 354, 472]

// Add shipping cost of ₹50
const withShipping = withGST.map(adder(50));
console.log(withShipping); // [168, 286, 404, 522]
```

**Requirements:**
- `multiplier` and `adder` must each be a single function that returns another function.
- The returned function must only accept one argument.
- The inner variable (`n`) must remain private — accessible only via closure.

---

---

# 🟠 Intermediate → Advanced

---

## Q7. Implement Function Composition and Pipe

**Concept:** Higher-order functions, spread/rest, functional programming (Days 2–3)

Create two utility functions:

```javascript
function compose(...fns) { /* executes right-to-left */ }
function pipe(...fns)    { /* executes left-to-right  */ }
```

**Example:**

```javascript
const add5     = x => x + 5;
const double   = x => x * 2;
const subtract3 = x => x - 3;

// compose: subtract3(double(add5(10)))  → 10+5=15 → 15*2=30 → 30-3=27
const transform = compose(subtract3, double, add5);
console.log(transform(10)); // 27

// pipe: same logic, left-to-right
const transform2 = pipe(add5, double, subtract3);
console.log(transform2(10)); // 27
```

**Requirements:**
- `compose` executes functions **right to left**.
- `pipe` executes functions **left to right**.
- Handle zero functions — return an identity function `x => x`.
- Handle a single function — return a wrapper that calls it.
- Support multiple arguments only for the **first** function called.

---

## Q8. Build a Custom Template Engine

**Concept:** String methods, regex, objects, nested property access (Days 1–3)

Create `renderTemplate(template, data)` that replaces `{{key}}` placeholders with values from a data object using dot notation.

**Input:**

```javascript
const template = "Hello {{user.name}}, your order #{{order.id}} worth ₹{{order.total}} is confirmed.";

const data = {
  user:  { name: "Dibyo" },
  order: { id: 1025, total: 4999 }
};

renderTemplate(template, data);
// "Hello Dibyo, your order #1025 worth ₹4999 is confirmed."
```

**Requirements:**
- Support dot-notation paths of any depth (e.g., `{{a.b.c}}`).
- If a path does not exist, replace the placeholder with `""` (empty string).
- Support multiple placeholders of the same path repeated in a single template.
- Do not replace unrelated text or leave partial `{{` / `}}` artifacts.
- Do not use `eval`.

---

## Q9. Parse a URL Query String

**Concept:** String methods, `split`, objects, URL structure (Days 1–3)

Create `parseQueryString(url)` that extracts query parameters from a URL.

**Input:**

```javascript
const url = "https://example.com/shop?category=mobile&price=50000&sort=asc&tag=new&tag=sale";

parseQueryString(url);
```

**Expected output:**

```javascript
{
  category: "mobile",
  price:    "50000",
  sort:     "asc",
  tag:      ["new", "sale"]   // duplicate keys → collected into an array
}
```

**Requirements:**
- Extract only the query string portion (everything after `?`).
- Decode URL-encoded characters (`%20` → space, `+` → space).
- When a key appears more than once, collect all values into an array.
- When a value is missing (`?flag=`), store it as an empty string `""`.
- When there is no query string, return an empty object `{}`.
- Do **not** use `URLSearchParams`.

---

## Q10. Implement `reduce` from Scratch

**Concept:** Higher-order functions, callbacks, accumulators (Day 3)

Add `myReduce` to `Array.prototype`:

```javascript
Array.prototype.myReduce(callback, initialValue)
```

**Example:**

```javascript
const nums = [1, 2, 3, 4, 5];

console.log(nums.myReduce((acc, n) => acc + n, 0));        // 15
console.log(nums.myReduce((acc, n) => acc * n, 1));        // 120
console.log(nums.myReduce((acc, n) => Math.max(acc, n)));  // 5 (no initial value)
```

**Use `myReduce` to solve:**

```javascript
// 1. Sum of all numbers
// 2. Count how many numbers are even
// 3. Find the maximum value without Math.max
// 4. Build a frequency map: { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 }
// 5. Flatten one level: [[1,2],[3,4],[5]] → [1,2,3,4,5]
```

**Requirements:**
- Callback receives `(accumulator, currentValue, index, array)`.
- If `initialValue` is **not** provided, use the first element as the initial accumulator and start iterating from index 1 — match native behaviour exactly.
- Throw a `TypeError` on an empty array with no initial value.
- Do not call native `reduce` internally.

---

## Q11. Object Deep Clone

**Concept:** Recursion, objects, arrays, spread operator (Days 1–3)

Implement `deepClone(obj)` without using `structuredClone()` or `JSON.stringify/parse`.

**Input:**

```javascript
const original = {
  name: "Dibyo",
  skills: ["JavaScript", "React"],
  address: { city: "Kolkata", pincode: 700001 },
  joined: new Date("2024-01-01"),
};

const cloned = deepClone(original);
cloned.skills.push("Node.js");
cloned.address.city = "Delhi";
```

**After the above, `original` must remain unchanged.**

**Requirements:**
- Handle nested objects and nested arrays — both must be independently cloned.
- Handle `Date` objects — the clone must be a new `Date`, not a reference.
- Handle circular references — do not throw or loop infinitely.
- Do **not** use `structuredClone()` or `JSON.stringify/parse`.

---

## Q12. Object Diff

**Concept:** Recursion, objects, comparison (Days 1–3)

Write `objectDiff(obj1, obj2)` that returns a structured report of every difference between two plain objects.

**Input:**

```javascript
const before = { name: "Dibyo", age: 22, address: { city: "Kolkata", pin: 700001 } };
const after  = { name: "Dibyo", age: 23, address: { city: "Delhi",   pin: 700001 }, email: "d@d.com" };

objectDiff(before, after);
```

**Expected output:**

```javascript
{
  age:     { oldValue: 22,        newValue: 23 },
  address: { city: { oldValue: "Kolkata", newValue: "Delhi" } },
  email:   { oldValue: undefined, newValue: "d@d.com" }
}
```

**Requirements:**
- Recurse into nested objects and report changes at the deepest level.
- Include **added** keys (present in `obj2` but not `obj1`) with `oldValue: undefined`.
- Include **deleted** keys (present in `obj1` but not `obj2`) with `newValue: undefined`.
- Skip keys where the value has not changed.
- Do not mutate either input object.

---

---

# 🔴 Advanced

---

## Q13. Implement a Memoization Function

**Concept:** Closures, caching, higher-order functions (Days 2–3)

Implement:

```javascript
function memoize(fn) {
  // Your implementation
}
```

**Usage:**

```javascript
const heavyCalc = (a, b) => {
  console.log("Computing...");
  return a * b;
};

const memo = memoize(heavyCalc);

console.log(memo(10, 20)); // Computing...  200
console.log(memo(10, 20)); // 200           ← no "Computing..." this time
console.log(memo(5, 10));  // Computing...  50
console.log(memo(5, 10));  // 50            ← cached
```

**Requirements:**
- Cache results keyed by the combination of all arguments.
- Avoid naive cache keys — `memoize(f)(1, 23)` and `memoize(f)(12, 3)` must be treated as **different** calls.
- Do not recompute when the same arguments are seen again.
- Preserve the `this` context of the original function.
- The cache must be **per-instance** — each call to `memoize(fn)` creates its own independent cache.

---

## Q14. Implement a Custom Debounce Function

**Concept:** Closures, `setTimeout`, `clearTimeout`, timers (Days 3 & 6)

Implement:

```javascript
function debounce(callback, delay) {
  // Your implementation
}
```

**Usage:**

```javascript
const search = debounce((query) => {
  console.log("Searching:", query);
}, 500);

search("R");
search("Re");
search("Rea");
search("React");

// Only "Searching: React" is logged — 500 ms after the last call.
```

**Requirements:**
- Reset the timer each time the debounced function is called.
- Only invoke `callback` after `delay` ms of silence (no new calls).
- Preserve all arguments passed to the debounced function.
- Preserve the `this` context of the caller.
- Add a `.cancel()` method on the returned function that clears any pending timer.

---

## Q15. Implement a Custom Throttle Function

**Concept:** Closures, `setTimeout`, timers, leading/trailing execution (Days 3 & 6)

Implement:

```javascript
function throttle(callback, delay) {
  // Your implementation
}
```

**Usage:**

```javascript
const handleScroll = throttle(() => {
  console.log("Scroll event at", Date.now());
}, 1000);

// Even if called 100 times in 3 seconds,
// it fires at most once every 1000 ms.
```

**Requirements:**
- Execute `callback` at most once per `delay` ms interval.
- **Leading edge:** fire immediately on the first call.
- **Trailing edge:** if calls arrive during the cooldown period, fire once more after the cooldown ends.
- Preserve callback arguments and the `this` context.
- Add a `.cancel()` method that cancels any pending trailing call.

---

## Q16. Implement Custom `Promise.all()`

**Concept:** Promises, async, event loop (Day 5)

```javascript
function myPromiseAll(promises) {
  // Your implementation
}
```

**Usage:**

```javascript
myPromiseAll([
  Promise.resolve(10),
  Promise.resolve(20),
  Promise.resolve(30),
]).then(console.log);
// [10, 20, 30]

myPromiseAll([
  Promise.resolve("ok"),
  Promise.reject(new Error("failed")),
  Promise.resolve("also ok"),
]).catch(err => console.log(err.message));
// "failed"
```

**Requirements:**
- Resolve with an array of results **in the original input order**, not arrival order.
- Reject immediately when **any** promise rejects — do not wait for the rest.
- Handle plain (non-promise) values mixed in with promises.
- Resolve with `[]` for an empty input array.
- Do **not** call native `Promise.all()` internally.
- Use only the `Promise` constructor and `Promise.resolve()`.

---

## Q17. Implement Custom `Promise.allSettled()`

**Concept:** Promises, async, settled states (Day 5)

```javascript
function myPromiseAllSettled(promises) {
  // Your implementation
}
```

**Usage:**

```javascript
myPromiseAllSettled([
  Promise.resolve("success"),
  Promise.reject(new Error("boom")),
  Promise.resolve(42),
]).then(console.log);
/*
[
  { status: "fulfilled", value: "success" },
  { status: "rejected",  reason: Error("boom") },
  { status: "fulfilled", value: 42 }
]
*/
```

**Requirements:**
- **Never reject** — always resolve once every input promise has settled.
- For fulfilled promises: `{ status: "fulfilled", value: <result> }`.
- For rejected promises: `{ status: "rejected", reason: <error> }`.
- Preserve original input order.
- Handle plain values alongside promises.
- Do **not** call native `Promise.allSettled()` internally.

---

## Q18. Implement Custom `Promise.race()`

**Concept:** Promises, async, race condition (Day 5)

```javascript
function myPromiseRace(promises) {
  // Your implementation
}
```

**Input:**

```javascript
const slow = new Promise(resolve => setTimeout(() => resolve("slow"), 2000));
const fast = new Promise(resolve => setTimeout(() => resolve("fast"),  500));
const fail = new Promise((_, reject) => setTimeout(() => reject(new Error("fail")), 300));

myPromiseRace([slow, fast, fail])
  .catch(err => console.log(err.message));
// "fail"  ← rejects first (300 ms < 500 ms < 2000 ms)
```

**Requirements:**
- Settle (fulfil or reject) with whichever promise settles **first**.
- Support plain values — a plain value wins immediately.
- An empty array → the returned promise stays pending forever.
- Do **not** call native `Promise.race()` internally.

---

## Q19. Build a Promise-Based Retry Mechanism

**Concept:** `async/await`, error handling, `setTimeout` (Day 5)

```javascript
async function retry(operation, retries, delayMs) {
  // Your implementation
}
```

**Usage:**

```javascript
let count = 0;

async function unstableAPI() {
  count++;
  if (count < 4) throw new Error(`Attempt ${count} failed`);
  return "Success!";
}

retry(unstableAPI, 5, 1000).then(console.log);
// (fails 3 times, succeeds on the 4th attempt)
// "Success!"
```

**Requirements:**
- Call `operation()` once initially.
- On failure, wait `delayMs` milliseconds, then retry.
- `retries` = number of **additional** attempts after the first (so `retries: 5` means up to 6 total calls).
- Return the successful result as soon as `operation()` resolves.
- If all attempts fail, throw the error from the **last** attempt.
- Implement the delay using a `Promise` wrapping `setTimeout` — do not use external libraries.

---

## Q20. Build a Concurrent Task Scheduler

**Concept:** Promises, async/await, concurrency, closures (Day 5)

Create a function that runs async tasks in parallel but caps how many run simultaneously.

```javascript
async function runWithConcurrency(tasks, limit) {
  // Your implementation
}
```

**Input:**

```javascript
// Simulated async task
function makeTask(id, duration) {
  return () => new Promise(resolve => {
    console.log(`Task ${id} started`);
    setTimeout(() => {
      console.log(`Task ${id} done`);
      resolve(`Result ${id}`);
    }, duration);
  });
}

const tasks = [
  makeTask(1, 2000),
  makeTask(2, 1000),
  makeTask(3, 3000),
  makeTask(4,  500),
  makeTask(5, 1500),
];

runWithConcurrency(tasks, 2).then(console.log);
// Results in original order: ["Result 1", "Result 2", "Result 3", "Result 4", "Result 5"]
// But at most 2 tasks ever run simultaneously.
```

**Requirements:**
- At most `limit` tasks run at any given moment.
- As soon as one task finishes, the next one starts immediately.
- The final resolved array must be in the **original task order**, not completion order.
- Validate that `limit` is a positive integer — throw a `TypeError` if not.
- Handle task failures — if a task rejects, the entire `runWithConcurrency` call rejects.

---

# Recommended Practice Order

| Phase | Questions | Focus |
|-------|-----------|-------|
| 🟡 Intermediate | Q1 → Q6 | HOFs, closures, recursion, function factories |
| 🟠 Intermediate–Advanced | Q7 → Q12 | Composition, templates, parsing, deep cloning |
| 🔴 Advanced | Q13 → Q20 | Memoize, debounce, throttle, Promises, concurrency |

---

# Completion Checklist

Track each question as you finish it.

### 🟡 Intermediate
- [ ] Q1. Custom `forEach`, `map`, `filter`
- [ ] Q2. GroupBy using `reduce`
- [ ] Q3. Flatten array to any depth + `flattenByDepth`
- [ ] Q4. Currying function
- [ ] Q5. Deep object search
- [ ] Q6. Multiplier & Adder function factories

### 🟠 Intermediate → Advanced
- [ ] Q7. Function composition (`compose` + `pipe`)
- [ ] Q8. Custom template engine
- [ ] Q9. URL query string parser
- [ ] Q10. Custom `reduce` + 5 use cases
- [ ] Q11. Deep clone object
- [ ] Q12. Object diff

### 🔴 Advanced
- [ ] Q13. Memoization
- [ ] Q14. Debounce
- [ ] Q15. Throttle (with leading + trailing edge)
- [ ] Q16. Custom `Promise.all()`
- [ ] Q17. Custom `Promise.allSettled()`
- [ ] Q18. Custom `Promise.race()`
- [ ] Q19. Promise retry mechanism
- [ ] Q20. Concurrent task scheduler

---

# Concepts Map

| Q | Concept Practiced |
|---|-------------------|
| 1 | HOFs — callbacks, `forEach`/`map`/`filter` internals |
| 2 | `reduce` as a universal transformation tool |
| 3 | Recursion — flatten with and without depth limit |
| 4 | Currying — multi-argument → chained single-argument calls |
| 5 | Recursive search inside nested objects & arrays |
| 6 | Closures — private state, function factories |
| 7 | Functional composition — `reduce` + rest params |
| 8 | String + regex — template interpolation engine |
| 9 | String parsing — URL structure, URL decoding, duplicate keys |
| 10 | `reduce` internals — accumulator, initial value, edge cases |
| 11 | Deep recursion — cloning with Date support, circular refs |
| 12 | Recursive comparison — structural diff of two objects |
| 13 | Memoization — closure-based cache, argument key strategy |
| 14 | Debounce — `setTimeout` / `clearTimeout` pattern |
| 15 | Throttle — leading + trailing edge, timer management |
| 16 | Promise internals — `Promise.all` reimplemented |
| 17 | Promise internals — `Promise.allSettled` reimplemented |
| 18 | Promise internals — `Promise.race` reimplemented |
| 19 | `async/await` + error handling — retry with delay |
| 20 | Concurrency control — task queue with max parallelism |

---

# Expected Outcomes

After completing all 20 questions you should be able to:

- Write **custom higher-order array methods** without relying on built-ins — this is asked in almost every JS interview.
- Use **closures** to build private state, caches, and function factories.
- Write **recursive** solutions for deep data structures.
- Understand **how `reduce` works at the core** and use it for any kind of transformation.
- Build **debounce** and **throttle** — patterns you will use in every real frontend project.
- Understand **how Promises work internally** — this makes React's `useEffect` data fetching, Express async route handlers, and all API error handling far less mysterious.
- **Control concurrency** — a critical backend skill for Express and Node.js.