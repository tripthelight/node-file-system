// fs.createWriteStream(path[, options])
/*
  const default = {
    flags: 'w',
    defaultEncoding: 'utf8',
    fd: null,
    mode: 0o666,
    autoClose: true,
    start
  };
*/

const fs = require('fs');
const data = `options may also include a start`;

let rstream = fs.createReadStream('./TextFiles/filepath.txt', {highWaterMark: 30});
let wstream = fs.createWriteStream('./TextFiles/write.txt');

rstream.pipe(wstream);

/*
rstream.on('data', (data) => {
  wstream.write(data.toString().toUpperCase() + '30 bytes written\n', (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log('bytes written!');
    }
  })
});
*/

/*
wstream.write(data, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log('data written');
  }
});
*/