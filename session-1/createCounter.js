const createCounter = (initialValue = 0) => {
  let value = initialValue;
  
  return {
    increment: () => ++value,
    decrement: () => --value,
    getValue: () => value
  };
};