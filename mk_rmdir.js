// fs.mkdir(path[, mode], callback)
// fs.mkdirSync(path[, mode])

const fs = require('fs');

const dirnames = {
  sync: 'createdDir',
  async: 'asyncCreatedDir'
};

function printBoom() {
  console.log('Boom');
}

// fs.mkdirSync(dirnames.sync, 0o776);
// fs.writeFileSync(`${dirnames.sync}/file.js`, `(${printBoom.toString()}())`);

fs.mkdir(dirnames.async, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`${dirnames.async} created!!`);
    fs.writeFileSync(`${dirnames.async}/file.js`, `(${printBoom.toString()}())`);
  }
});
