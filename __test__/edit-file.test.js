'use strict';

// hold all of information from the mock file 
jest.mock('fs');

const theEditOne = require('../edit-file.js');


describe(' fs module ', () => {
    describe('readFileEditAndwrite', () => {
        it('Read a File and return data as  type of "Object', () => {
            let file = `${__dirname}/files/data/person.json`;

            let data = theEditOne.readFileEditAndwrite(file);
            expect(typeof data).toBe('object')

        })
    })
    describe('readFileEditAndwrite', () => {

        // here i try to practice use async function and try -catch
        it('returns error when given a bad file', async () => {
            const file = `${__dirname}/files/data/bad.json`;
            try {
                let data = await editFile.readFile(file);
                expect(data).not.toBeDefined();
            }
            catch (error) { expect(error).toBeDefined(); }
        });
    });
    describe('readFileEditAndwrite', () => {
        it('check if the function work correctly and can edit the data and write newdata in the file ', () => {
            let file = `${__dirname}/files/data/person.json`;
            let data = theEditOne.readFileEditAndwrite(file)
            console.log('data', data);
            // return data 
            // .then(result =>{

            //         console.log(result);
            //         expect(result.kids).toEqual(6);
            //       });
        });
    })


    describe('test', () => {
        it('just sure it work to sure jest work ', () => {
            let name = "mai"
            expect(typeof name).toBe('string')

        })
    })

})

// 'use strict';

// jest.mock('fs');

// const reader = require('../../lib/reader.js');

// describe('File Reader Module', () => {
//   it('when given a bad file, returns an error', done => {
//     let files = ['bad.txt'];
//     // In jest, throwing errors obviously kills the app, so if you're
//     // going to throw one in a test, have the expect execute your code as a
//     // function so that you can trap it.
//     reader(files, (err, data) => {
//       expect(err).toBeDefined();
//       done();
//     });
//   });

//   it('reads 3 files', done => {
//     let files = ['file1.txt', 'file2.txt', 'file2.txt'];
//     reader(files, (err, data) => {
//       expect(err).toBeNull();
//       expect(data instanceof Array).toBeTruthy();
//       expect(data.length).toBe(3);
//       done();
//     });
//   });
// });
