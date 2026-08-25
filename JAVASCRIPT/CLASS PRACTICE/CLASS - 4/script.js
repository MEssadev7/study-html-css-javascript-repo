/*
       <undefined or null ma farq talash kare>


 data type
->There are type of data type
>primitive : its hold single value 
>non-primitive : its hold group of value

->number
->string
->boolean   //true |false 
->undefined
->null
->symble
->BigInt // Represents very large integers



*/
// premative data type

let a = 10;
console.log(typeof a);

let name = "test";
console.log(typeof name);

let islogin = true;
console.log(typeof islogin);

let b;
console.log(typeof b);

let c = null;
console.log(c);
console.log(typeof null);

let abc = Symbol("def");
console.log(abc);

// logical operator

let email = "test@gmail.com";
let pasword = "MEssadev7";
let free = "60day";
// (AND)
// table AND
// true true = true
// false true = false
// true false = false

console.log(
  email === "test@gmail..com" && pasword === "MEssadev7" && free == "60day",
);
// (OR)
// OR table
// true true = true
// false false = false
// true false = true
// false true = true

// or practice
console.log(
  email === "test@4gmail.com" || pasword === "MEssadev67" || free == "600day",
);
