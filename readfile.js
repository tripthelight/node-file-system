// fs.readfile(path, {encoding, flag})
// fs.readfileSync(path, {encoding, flag}) - sync

const fs = require('fs');

const dirfile = 'dir.txt';
const flagsfile = 'flags.txt';

// let data = fs.readFileSync(flagsfile, {encoding: 'utf8'});
// console.log(data);

// let data2 = fs.readFileSync(flagsfile);
// console.log(data2.toString());
/*
fs.readFile(flagsfile, (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(data.toString());
  }
});
*/
fs.readFile(flagsfile, 'utf8', (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(data);
  }
})