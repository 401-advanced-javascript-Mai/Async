'use strict';
//// puts the empty object on the exports object named exports and then you can attach stuff directly to that 
module.exports = exports = {};

//  representation of what we want to do "mock"

exports.readFile = (file, callback) => {
  if( file.match(/bad/i) ) {
    // the first parameter one parameter which mean is wrong  
    callback('Invalid File (mockfile)');
  }
  else {
    callback(undefined, new Buffer('File Contents'));
  }
};