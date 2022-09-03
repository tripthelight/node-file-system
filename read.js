// fs.read(fd, buffer, offset, length, position, callback)
// fs.readSync(fd, buffer, offset, length, position) -> synchronous

const dirfile = 'dir.txt';
const flagsfile = 'flags.txt';

const fs = require('fs');

let fileSize = fs.statSync(dirfile).size;
let buf = new Buffer.alloc(fileSize);

fs.open(dirfile, 'r+', (err, fd) => {
  if (err) {
    console.log(`code: ${err.code}\nmessage: ${err.message}`);
  } else {
    // read
    // write
    console.log(`file (${fd}) successfully opened!`);

    /*
    let bytes = fs.readSync(fd, buf, 0, fileSize, 0);
    console.log(`bytes : ${bytes}`);
    console.log(`buf : ${buf.toString()}`);
    */

    fs.read(fd, buf, 0, fileSize, 0, (err, bytes) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log(`bytes : ${bytes}`);
        console.log(`buf : ${buf.toString()}`);
      }
    });

    fs.close(fd, (err) => {
      console.log('file closed!');
    });
  }
});
