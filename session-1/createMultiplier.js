function createMultiplier(factor) {
  return (num) => num * factor;
}
// Or:
const createMultiplier = factor => num => num * factor;