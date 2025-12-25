function squareAndFilter(numbers) {
  return numbers
    .map(num => num * num)
    .filter(num => num >= 20);
}