function createMultiplier(factor) {
  return (num) => num * factor;
}
// Or:
// FACTORY creates new functions
const createMultiplier = factor => num => num * factor;

// These are DIFFERENT functions with DIFFERENT closures
const double = createMultiplier(2);  // Inner function with factor=2
const triple = createMultiplier(3);  // Different function with factor=3

// Each is a standalone function
double(5);  // 10 (remembers factor=2)
triple(5);  // 15 (remembers factor=3)

// What's happening step by step:
// 1. createMultiplier(2) executes
// 2. Returns: (num) => num * 2
// 3. We store that returned function as 'double'