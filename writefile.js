// fs.writeFile(file, data[, options], callback)
// fs.writeFileSync(file, data[, options])

// options = {
  //   encoding,
  //   flag,
  //   mode
  // }

  const fs = require('fs');
  let path = 'filepath.txt';

  let data = 'This is written from a string\n';
  let buf = Buffer.from('This is written from a buffer\n', 'utf8');

  // fs.writeFileSync(path, buf, {flag: 'a'});

  fs.writeFile(path, buf, {flag: 'a'}, (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log('data written successfully!');
    }
  });