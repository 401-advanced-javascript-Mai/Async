
const fs = require('fs');
const util = require('util');


  const readFile = util.promisify(fs.readFile);
const readFrom = (file) => {
  return readFile(file)
    .then(contents => contents.toString().trim())
    .catch(error => error);
};


module.exports = { readFrom }