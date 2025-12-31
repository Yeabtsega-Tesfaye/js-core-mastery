# JavaScript Core Concepts - Session 1

📝 Exercises & Learning Outcomes

Exercise 1: squareAndFilter

Mistake Made: Wrong filter direction (kept < 20 instead of removing)
Lesson:Always double-check requirement logic before implementing.

Key Concepts:

· Array method chaining (.map() → .filter())
· Pure functions (no side effects)
· Return directly vs. intermediate variables

Correct Solution:

```javascript
function squareAndFilter(numbers) {
  return numbers
    .map(num => num * num)
    .filter(num => num >= 20);
}
```

---

Exercise 2: transformUsers

Multiple Iterations Required: 4 attempts to reach correct solution

Mistakes & Corrections:

1. Filter vs Map Order: Tried to filter strings instead of objects
2. String Concatenation Bug: + active ? ... has wrong precedence
3. Data Validation Missing: No handling for undefined/null properties
4. Optional Chaining Misuse: Used incorrectly in template literals

Key Concepts Learned:

· Method Order Matters: Filter → Transform, not Transform → Filter
· Operator Precedence: Ternary needs parentheses in concatenation
· Defensive Programming:
  · Optional chaining (?.)
  · Nullish coalescing (??)
  · Type checking (typeof, Number(), Boolean())
· Edge Cases: Empty arrays, missing properties, wrong types

Final Robust Solution:

```javascript
function transformUsers(users) {
  return users
    .filter(user => {
      const age = Number(user?.age);
      return !isNaN(age) && age >= 18;
    })
    .map(user => {
      const name = typeof user?.name === 'string' ? user.name : 'Unknown';
      const age = Number(user.age);
      const active = Boolean(user?.active);
      
      return `${name.toUpperCase()} is ${age} years old and is ${active ? 'active' : 'inactive'}`;
    });
}
```

---

Exercise 3: createMultiplier (Closure Basics)

Mistake Made: Missing return in arrow function body

Key Concepts:

· Closures: Inner function remembers outer function's variables
· Implicit Returns: Arrow functions without { } auto-return
· Function Factories: Functions that create other functions

Correct Solution:

```javascript
function createMultiplier(factor) {
  return (num) => num * factor;
}
// Or:
const createMultiplier = factor => num => num * factor;
```

---

Exercise 4: createCounter (Advanced Closure)

Multiple Issues:

1. Invalid private keyword usage
2. Wrong object method syntax
3. Parameter shadowing instead of closure
4. Missing default parameter

Key Concepts:

· Encapsulation: Private variables via closure scope
· Object Method Syntax: methodName() { } vs methodName: function() { }
· Default Parameters: (initialValue = 0)
· Mutable State: Shared variable between methods

Correct Solution:

```javascript
const createCounter = (initialValue = 0) => {
  let value = initialValue;
  
  return {
    increment: () => ++value,
    decrement: () => --value,
    getValue: () => value
  };
};
```

---

🎯 Core Principles Internalized

1. Requirement Analysis

· Always clarify "filter out" vs "keep"
· Test with example inputs before finalizing

1. Data Flow Thinking

· Transformations have order: Filter → Map when data reduction needed
· Type transformations should happen early (string → number)

1. Defensive Programming

· Assume data might be malformed
· Use optional chaining for nested access
· Validate types before operations
· Provide sensible defaults

1. Closure Patterns

· Variables in outer function scope persist for inner functions
· Return objects/methods to expose controlled interface
· Hide implementation details (true encapsulation)

1. Code Quality

· Single responsibility per function
· Descriptive variable names (value not number)
· Consistent formatting
· Handle edge cases explicitly

---

📈 Progress Tracking Guidelines

🔄 Practice Routine for Mastery

Before Coding:

1. Restate requirements in own words
2. Write example inputs/outputs
3. Plan transformation steps

During Coding:

1. Write simple version first
2. Add validation/edge cases
3. Refactor for clarity

After Coding:

1. Test with edge cases (empty, null, wrong types)
2. Check for syntax/logic errors
3. Review for clean code principles

---

Next Session Focus: Async JavaScript (Callbacks, Promises, Async/Await) and this context.

"The code you write today is the foundation you build on tomorrow. Document your journey."

## **Today's Session 2:**

### **1. Promise Fundamentals**

- **`Promise.resolve(value)`** creates an already-resolved promise
- **Promise constructor**: `new Promise((resolve, reject) => { ... })`
- Callback → Promise conversion pattern

### **2. Sequential Execution Pattern**

- Using `.reduce()` to chain promises sequentially
- Start with `Promise.resolve([])` as initial accumulator
- Each iteration returns a new promise chain
- Results accumulate in array

### **3. Error Handling**

- Rejections propagate automatically through promise chains
- One rejected promise stops entire sequential chain
- `.catch()` catches any error in the chain

### **4. Key Code Patterns Learned:**

// Callback to Promise wrapper
function promisify(callbackFn) {
  return new Promise((resolve, reject) => {
    callbackFn((error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
  });
}

// Sequential promise execution
function runSequentially(tasks) {
  return tasks.reduce((chain, task) => {
    return chain.then(results =>
      task().then(result => [...results, result])
    );
  }, Promise.resolve([]));
}

### **5. Common Mistakes to Avoid:**

- Calling functions immediately: `setTimeout(resolve(), ms)` ❌
- Validating async results inside timeout instead of before ❌
- Checking result instead of error in callback conversion ❌
- Forgetting that `.then()` returns a new promise

---

## **Progress Assessment:**

You've moved from:

- Basic array methods → Async patterns  
- Simple closures → Promise chains
- Straight-line code → Complex control flow

**Most importantly:** You're asking "why" not just "how" (the "wtf bro" moments are where real learning happens).

---

## **Next Session Preview:**

1. **Async/Await** (syntactic sugar for promises)
2. **Parallel execution** (`Promise.all()` vs `Promise.allSettled()`)
3. **Error handling patterns** in async code
4. **Real-world scenarios** (API calls, file operations)

---
