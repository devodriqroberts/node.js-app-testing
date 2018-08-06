const expect = require('expect');

const utils = require('./utils');

describe('utils', () => {

    describe('add', () => {
        it('should add two numbers', () => {
            let result = utils.add(20, 20);
        });

        it('should add two numbers asyc', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        });
    });

    describe('#square', () => {

        it('should square a number', () => {
            let result = utils.square(5);

            expect(result).toBe(25).toBeA('number');

            // if (result != 25) {
            //     throw new Error(`Result is not correct. Expected 25 but got ${result}`)
            // };
        });
        it('should square two numbers asyc', (done) => {
            utils.asyncSquare(7, 7, (res) => {
                expect(res).toBe(49).toBeA('number');
                done();
            });

        })
    });


});



//     expect(result).toBe(40).toBeA('number');
// if (result != 40) {
//     throw new Error(`Value not correct. Expected 40 but got ${result}`);
// };
//});

// it('should square a number', () => {
//     let result = utils.square(5);

//     expect(result).toBe(25).toBeA('number');

//     if (result != 25) {
//         throw new Error(`Result is not correct. Expected 25 but got ${result}`)
//     };
// });





// it('should expect some values', () => {
//     //expect(12).toNotBe(14);

//     // expect({
//     //     name: "devo"
//     // }).toNotEqual({
//     //     name: "Devo"
//     // });

//     //expect([2, 3, 4]).toInclude(2);

//     expect({
//         age: 24,
//         name: "Devo",
//         location: "Georgia"
//     }).toInclude({
//         age: 24
//     })
// });

// it('should spit user name and store first and last names as properties', () => {
//     let fullname = "John Doe";
//     let user = {
//         location: "Georgia",
//         age: 24,
//     };
//     let res = utils.setName(user, fullname);

//     expect(res).toInclude({
//         firstName: "John",
//         lastName: "Doe"
//     }).toBeA('object');
// });