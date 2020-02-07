/* eslint-disable no-unused-vars */
'use strict';


let fs = require('fs') ;
let util = require('util') ;
// let reader = require('./lib/reader.js') ;
// let write = require('./lib/write.js');


let file = `${__dirname}/files/data/person.json`;


let readFile = util.promisify(fs.readFile);
// let writeFile = util.promisify(fs.writeFile);


////// herre we read data and then edit it  
let readFileEditAndwrite =(file) =>{
  return readFile(file)
    .then(data => {
      console.log(data);

      // here the return data will be the original befor edit 
      let addData = JSON.parse(data.toString()) ;
      // console.log(addData)

      addData.firstName = 'mai';
      addData.married ='yup' ;
      addData.kids = 6 ;
      
      let myInformation = JSON.stringify(addData);
      console.log('new' , myInformation);
      
      fs.writeFile(file , myInformation , cb =>{

        console.log( addData);
      
        return addData;
      }) ;
    })

    .catch(err => { throw err; });

};
readFileEditAndwrite(file);


module.exports ={ readFileEditAndwrite , readFile};


// 'use strict';


// let fs = require('fs') ;
// let util = require('util') ;
// let reader = require('./lib/reader.js') ;
// let write = require('./lib/write.js');

// // let file = `${__dirname}/data/file.txt`;
// console.log;

// // {__dirname}  the absoulte path
// let file = `${__dirname}/files/data/person.json`;
// // console.log ('file' ,file)

// // let newThing =process.argv ;
// let newThing1 =process.argv[1] ;
// // gives array of 2 index the second is the file path so it need index 1 
// // it must change the file or add to other index whivh index 2
// // let newThing2 = process.argv[2]
// // console.log('newThing' ,newThing)
// // console.log('newThing1' ,newThing1)
// // console.log('newThing2' ,newThing2)


// // let filePath = `${__driname}/data/person.json` ;

// // first read file to get data

// let readFile = util.promisify(fs.readFile);
// let writeFile = util.promisify(fs.writeFile);


// let readFileEditAndwrite =(file) =>{
//   // console.log(readFile(file))   /// the result is {<pending>}
//   return readFile(file)
//     .then(data => {
//       let addData = JSON.parse( data.toString()) ;
//       // console.log(addData)
//       // addData.name = "mai".toString ;
//       // addData.married.toString ="yup" ;
//       // addData.children.toString = 6 ;

//       addData.firstName = 'mai';
//       // console.log( addData.name = "mai") // it's mai
//       addData.married ='yup' ;
//       // console.log(addData.married ="yup" ) //// it's yup
//       addData.kids = 6 ;

//       let myInformation = JSON.stringify(addData);
//       console.log('new' , myInformation);
        
//       writeFile(file,myInformation);
//       // console.log('data', data)
//       // console.log('dato.tostring', data.toString())
//       // console.log('json parse', JSON.parse(data))
        
//       // console.log (JSON.parse( data.toString()))
//       // console.log('addData', addData) ;
//       return addData;
//     })
//     // .then(fs.writeFile(file, ))
//   //   .then(data => console.log(data ,'data'))
//     .catch(err => { throw err; });

// };
// readFileEditAndwrite(file);


// module.exports ={ readFileEditAndwrite};



// // fs.writeFile(file , data )
// //     .then(data=>{
// //         console.log ("data" , data)
// //     })


// // const writeFsafterRead  = (file,data ) =>{
// //     returnrReadFileEditAndwrite(file)
// //     .then(data =>
// //         console.log( "data",data)
// //         )
// // writeFsafterRead(file readFileEditAndwrite(file))