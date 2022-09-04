// fs.write(fd, string[, position[, encoding]], callback)
// fs.writeSync(fd, string[, position[, encoding]])

const fs = require('fs');
const str = 'This is the string I want to write! \n';
const filename = 'myPath.txt';

fs.open(filename, 'a', (err, fd) => {
  if (err) {
    console.log(err.message);
  } else {
    // let bytes = fs.writeSync(fd, str);
    // console.log(`${bytes} bytes written`);

    fs.write(fd, str, (err, bytes) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log(`${bytes} bytes written`);
      }
    });

    // console.log(`file (${fd}) opened successfully!`);
  }
});
