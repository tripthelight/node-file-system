// fs.open(path, flag, [mode], callback)
// fs.openSync(path, flag, [mode]) -> synchronous

const dirfile = 'dir.txt';
const flagsfile = 'flags.txt';

const fs = require('fs');

fs.open(flagsfile, 'r+', (err, fd) => {
  if (err) {
    console.log(`code: ${err.code}\nmessage: ${err.message}`);
  } else {
    // read
    // write
    console.log(`file (${fd}) successfully opened!`);

    fs.close(fd, (err) => {
      console.log('file closed!');
    });
  }
});

/*
let stats = fs.statSync(dirfile);
console.log(stats);
console.log(stats.isDirectory());
console.log(stats.isFile());
console.log(`size: ${stats.size} bytes`);
*/
/*
fs.stat(flagsfile, (err, stats) => {
  if (err) {
    throw err;
  } else {
    console.dir(stats, {colors: true});
  }
});
*/