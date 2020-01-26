'use strict'


let fs = require('fs') ;
let util = require('util') ;
let reader = require('./lib/reader.js')

// let file = `${__dirname}/data/file.txt`;
console.log
let file = `${__dirname}/files/data/person.json`;
// console.log ('file' ,file)
// gives array of 2 index the second is the file path sso it need index 1 
// let newThing =process.argv ;
let newThing1 =process.argv[1] ;
// let newThing2 = process.argv[2]
// console.log('newThing' ,newThing)
// console.log('newThing1' ,newThing1)
// console.log('newThing2' ,newThing2)


// let filePath = `${__driname}/data/person.json` ;

// first read file to get data

let readFile = util.promisify(fs.readFile)
let writeFs = util.promisify(fs.writeFile)


let readFileEditAndwrite =(file) =>{
    // console.log(readFile(file))   /// the result is {<pending>}
    return readFile(file)
    .then(data => {
        let addData = JSON.parse( data.toString()) ;
        // console.log(addData)
        // addData.name = "mai".toString ;
        // addData.married.toString ="yup" ;
        // addData.children.toString = 6 ;

        addData.firstName = "mai";
        // console.log( addData.name = "mai") // it's mai
        addData.married ="yup" ;
        // console.log(addData.married ="yup" ) //// it's yup
        addData.kids = 6 ;

        let myInformation = JSON.stringify(addData);
        console.log("new" , myInformation)
        
        writeFs(file,myInformation);
        // console.log('data', data)
        // console.log('dato.tostring', data.toString())
        // console.log('json parse', JSON.parse(data))
        
        // console.log (JSON.parse( data.toString()))
        // console.log('addData', addData) ;
        return addData
    })
    // .then(fs.writeFile(file, ))
//   .then(data => console.log(data ,'data'))
  .catch(err => { throw err; });

 }
 readFileEditAndwrite(file)


// fs.writeFile(file , data )
//     .then(data=>{
//         console.log ("data" , data)
//     })


// const writeFsafterRead  = (file,data ) =>{
//     returnrReadFileEditAndwrite(file)
//     .then(data =>
//         console.log( "data",data)
//         )

module.exports ={ readFileEditAndwrite};


// writeFsafterRead(file readFileEditAndwrite(file))