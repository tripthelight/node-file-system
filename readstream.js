// fs.createReadStream(path[, options])
/*
  flags <string>
  encoding <string>
  fd <integer>
  mode <integer>
  autoClose <boolean>
  start <integer>
  end <integer>

  const defaults = {
    flags: 'r',
    encoding: null,
    fd: null,
    mode: 0o666,
    autoClose: true
  };
*/

const fs = require('fs');

// let readstream = fs.createReadStream(
//   './TextFiles/filepath.txt',
//   {
//     highWaterMark: 30,
//     start: 90,
//     end: 149
//   });
let readstream = fs.createReadStream(
  './TextFiles/filepath.txt',
  {
    highWaterMark: 30,
    encoding: 'utf8'
  });

readstream.on('string', (data) => {
  console.log(data.split(' '));
});

readstream.on('data', (data) => {
  // console.log(`data: ${data.toString()}`);
  if (data.indexOf('buffer') === -1) {
    console.log(data.toUpperCase());
    readstream.emit('string', data);
  } else {
    console.log(`length: ${data.length}`);
  }
});
