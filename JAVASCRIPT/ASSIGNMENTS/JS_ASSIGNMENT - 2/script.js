// make five data type
let studentname = "Muhammad Essa";
let age = 20;
let isStudent = true;
let address;
let phoneNumber = null;

// typeof operator
console.log(typeof studentname);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof address);
console.log(typeof phoneNumber);

// type conversation
// for number
let value1 = "25";

let convertedNumber = Number(value1);

console.log(convertedNumber);
console.log(typeof convertedNumber);

// for string
let value2 = 100;

let convertedString = String(value2);

console.log(convertedString);
console.log(typeof convertedString);

// for boolean
let value3 = 0;

let convertedBoolean = Boolean(value3);

console.log(convertedBoolean);
console.log(typeof convertedBoolean);

// practice portion
// A.
// convert (abc into number)
let result = Number("abc");

console.log(result);
console.log(typeof result);

// B.
// 0 convert into boolean
let result2 = Boolean(0);

console.log(result2);
console.log(typeof result2);

// C.
// 1 convert into boolean
let result3 = Boolean(1);
console.log(result3);
console.log(typeof result3);
