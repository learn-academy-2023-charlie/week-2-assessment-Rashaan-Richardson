// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// Pseudo code:

// a) Create a test with expect statements for each of the variables provided.
// describe("exampleFunction", () => {
//     it("takes in an array of numbers and returns an array with all the numbers multiplied by 3", () => {
//         const numbersArray1 = [6, 7, 8, 9, 10]
//         // Expected output: [18, 21, 24, 27, 30]
//         const numbersArray2 = [24, 27, 30, 33, 36]
//         // Expected output: [72, 81, 90, 99, 108]   
//         expect(exampleFunction(numbersArray1)).toEqual([18, 21, 24, 27, 30])
//         expect(exampleFunction(numbersArray2)).toEqual([72, 81, 90, 99, 108])
//     })
// })

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.
const exampleFunction = (arr) => {
    return arr.map(num => num * 3)
}


// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// Pseudo code:
// input: object
// output : string containing a conditional
// process: Will use a ternary operator to iterate through our object

// a) Create a test with expect statements for each of the variables provided.
// describe("even3", () => {
//     it("Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.", () => {
//         const object1 = { number: 15 }
//         expect(even3(object1)).toEqual([0])
//     })
// })

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

const even3 = (object) => {
    return object.number % 3 ===0 ? `${object.number} is divisible by three` : `${object.number} is not divisible by three`
}
console.log(even3(object1));
console.log(even3(object2));
console.log(even3(object3));

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Pseudo code: 
// input: array that contains strings
// output : string with the first letter capitilized
// process: Will use indexing and toUpperCase() to change the string

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// describe("titleCase", () => {
//     it("Create a function that takes in an array of words and returns an array with all the words capitalized.", () => {
//         const randomNouns4 = ["streetlamp"]
//         expect(titleCase(randomNouns4)).toEqual('Streetlamp')
//     })
// })

// b) Create the function that makes the test pass.
const titleCase = (Array) => {
    return Array.map( value => value.replace(value[0],value[0].toUpperCase()))
}

console.log(titleCase(randomNouns1));
console.log(titleCase(randomNouns2));

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Pseudo code:

// input: strings
// output : the index of the first vowel in the string
// process: Will use regex and .search. Since that returns the index of the match

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// describe("vowelLog", () => {
//     it("CCreate a function that takes in a string and logs the index of the first vowel", () => {
        // const vowelTester1 = "learn"
    //     expect(vowelTester1(object1)).toEqual(object1[1])
//     })
// })
// b) Create the function that makes the test pass.

const vowelLog = (object) => {
    return object.search(/[aeiou]/g) 
}

console.log(vowelLog(vowelTester1));
console.log(vowelLog(vowelTester2));
console.log(vowelLog(vowelTester3));