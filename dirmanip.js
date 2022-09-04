// fs.readdir(path[, options], callback)
// fs.readdirSync(path[, opstions])

const fs = require('fs');

let directory = 'TextFiles';
let dirBuf = Buffer.from(directory);

// let files = fs.readdirSync(directory, {encoding: 'buffer'});
// console.log(files);

fs.readdir(dirBuf, (err, files) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(files);
  }
});