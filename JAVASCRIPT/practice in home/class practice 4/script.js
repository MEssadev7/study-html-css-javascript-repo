// pemative data type
//shortcut to uderstand (ss(string, symbol) . nn(number , null) . bb(boolen, bigint) . u(undefined))

// -> number
// -> string
// -> boollen
// -> undefined
// ->symbol
// -> null

// number
let a = 45;
console.log(typeof a);

// string
let b = "str";
console.log(typeof b);

// boollen

let c = true;
console.log(typeof c);

// undefined

let d;
console.log(typeof d);

// Symbol

let name = Symbol("user");

console.log(name); // Symbol(user)
console.log(typeof name); // symbol

// logical operator
// AND
let email = "test@gmail.com";
let password = "asdf123";
let age = 18;
console.log(email === "test@gmail.com" && password === "asdf123" && age == 18);
// answer = true  (only one thing change it goes false ( in AND))

//  OR

console.log(
  email === "test@g2mail.com" || password === "asddf123" || age == 158,
);
// answer  = false (all sentense chane the output is false (in false))

// comparession operator

// 1. > : grater then
// 2. < : less then
// 3. >= : grater then or equal
// 4. =< : less then or equal
// 5. != : not equal (don't check datatype)
// 6. !== : not equal (check datatype)

console.log(10 > 5); // true (1)
console.log(10 < 5); // false (2)

console.log(20 >= 20); //true (3) if i write 21 its wronge
console.log(10 <= 20); //true (4) in this case small should write first in this condition

console.log(10 != 20); // (5) true i write 10 not equal to 20 (its simple )
//then
console.log(20 != 10); // (5) its true condition is clear

console.log(30 !== 30); // (6) false (strait not equal)
//then i write
console.log(40 !== 36); // (6) true because asked your self this question that 40 not equal to 36 (same answer no )
