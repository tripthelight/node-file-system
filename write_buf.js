// fs.write(fd, buffer[, offset[, length[, position]]], callback)
// fs.writeSync(fd, buffer[, offset[, length[, position]]])

const fs = require('fs');
const bufdata = 'bufdata.txt';
const data = 'OFFSETthis is what I am writing to the file\n';

const buf = Buffer.from(data, 'utf8');
const offset = 11;

fs.open(bufdata, 'w', (err, fd) => {
  if (err) {
    console.log(`code: ${err.code}\nmessage: ${err.message}`);
  } else {
    // console.log(`file (${fd}) successfuly opened!`);

    // let bytes = fs.writeSync(fd, buf, offset, buf.byteLength - offset, 0);
    // console.log(`${bytes} bytes written`);

    fs.write(fd, buf, offset, buf.byteLength - offset, 0, (err, bytes) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log(`${bytes} bytes written`);
      }
    });

    fs.close(fd, (err) => {
      console.log('file closed!');
    });
  }
});
