// start class practice 13
let result = "essa";
console.log(result[3]);

// string sequence of characters
// There are three ways to creare a string in javascript : ``, "",'';

// slice negative indexing ko support karta ha
// llikin substring negative indexing ko support nahi karta ha
// trim use are to remove white spaces from start and end of string

let trimmedString = result.trim();
console.log(trimmedString);

// use of include () what is the use of include () method in javascript
// include () method is use to check the string is present or not in the string
let str = "hello world";
console.log(str.includes("world")); // output is true
console.log(str.includes("hello")); // output is true
console.log(str.includes("hi")); // output is false

// how to use startsWith () method in javascript
// startsWith () method is use to check the string is start with the given string or not
console.log(str.startsWith("hello")); // output is true
console.log(str.startsWith("world")); // output is false

// use of endsWith () method in javascript
// endsWith () method is use to check the string is end with the given string or not
console.log(str.endsWith("world")); // output is true
console.log(str.endsWith("hello")); // output is false

// use indexOf () method in javascript
// indexOf () method is use to find the index of the given string in the string
console.log(str.indexOf("world")); // output is 6
console.log(str.indexOf("hello")); // output is 0
console.log(str.indexOf("hi")); // output is -1

// use of lastIndexOf () method in javascript
// lastIndexOf () method is use to find the last index of the given string in the string
console.log(str.lastIndexOf("world")); // output is 6
console.log(str.lastIndexOf("hello")); // output is 0
// if word is not present in the string then it will return -1
console.log(str.lastIndexOf("hi")); // output is -1

// replace () method is use to replace the given string with another string
let newStr = str.replace("world", "javascript");
console.log(newStr); // output is hello javascript

// use of replaseAll () method in javascript
// replaceAll () method is use to replace all the given string with another string
let newStr1 = str.replaceAll("l", "L");
console.log(newStr1); // output is heLLo worLd

// use of split () method in javascript
// split () method is use to split the string into an array of strings
let newStr2 = str.split(" ");
console.log(newStr2); // output is [ 'hello', 'world' ]

/**
 * .
 * ..
 * ...
 * ..
 * .
 */

console.log("fname");
console.log("iname");
console.log("full_name");

// string length
console.log(fname.length);
console.log(fname[0]);
