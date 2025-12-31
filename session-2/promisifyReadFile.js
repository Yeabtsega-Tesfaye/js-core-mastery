// Simulated callback-based function
const fakeReadFile = (filename, callback) => {
  setTimeout(() => {
    if (filename === 'valid.txt') {
      callback(null, `Content of ${filename}`);
    } else {
      callback(new Error('File not found'), null);
    }
  }, 100);
};

// Callback version (what we have)
fakeReadFile('file.txt', (error, data) => {
  if (error) {
    // Handle error
  } else {
    // Handle data
  }
});

// Promise version (what we want)
promisifyReadFile('file.txt')
  .then(data => console.log(data))
  .catch(error => console.error(error));

  new Promise((resolve, reject) => {
  // Inside here, we call the callback function
  // We convert callback → resolve/reject
});

function promisifyReadFile(filename) {
  return new Promise((resolve, reject) => {
    fakeReadFile(filename, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

promisifyReadFile('valid.txt')
  .then(data => console.log(data))
  .catch(err => console.error(err.message));

// Should log: "Content of valid.txt"
