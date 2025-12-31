function runSequentially(tasks) {
  return tasks.reduce((promiseChain, currentTask) => {
    return promiseChain.then(accumulatedResults => {
      return currentTask().then(currentResult => {
        return accumulatedResults.concat(currentResult);
      });
    });
  }, Promise.resolve([]));
}

const tasks = [
  () => Promise.resolve('first'),
  () => Promise.resolve('second'),
  () => Promise.resolve('third')
];

runSequentially(tasks)
  .then(results => console.log(results)); // ['first', 'second', 'third']