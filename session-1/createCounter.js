const createCounter = (initialValue = 0) => {
  let value = initialValue;  // PRIVATE variable
  
  return {  // Public API
    increment: () => ++value,
    decrement: () => --value,
    getValue: () => value
  };
};

const counter = createCounter(5); // function objects
counter.getValue(); // Works
counter.value; // UNDEFINED - truly private!