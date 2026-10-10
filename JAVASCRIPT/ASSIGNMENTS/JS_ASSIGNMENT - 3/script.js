// Step # 2

// Sum of two digit

let a = 12;
let b = 12;
let sum = a + b;
console.log(`Sum of two dgit is = ${sum}`);

// subtraction of two digit

let c = 12;
let d = 2;
let minus = c - d;
console.log(`Subtract of two digit is = ${minus}`);

// MUltiplication

let e = 9;
let f = 7;
let multi = e * f;
console.log(`Multiplication of two digit is = ${multi}`);

// Division

let g = 20;
let h = 5;
let div = g / h;
console.log(`Division of two digit is  = ${div}`);

// MOdulus

let i = 10;
let j = 2;
let modu = i % j;
console.log(`Modulus of two digit is  = ${modu}`);

// Step # 3 Assignment operator

// =
let ab = 10;
ab = 5;
console.log(`check operatot is = ${ab}`);

// -=
let k = 10;
k -= 5;
console.log(`check operator is = ${k}`);

// +=
let l = 10;
l += 5;
console.log(`Check operator is = ${l}`);

// *=
let m = 10;
m *= 5;
console.log(`Check operator is = ${m}`);

// .. /=
let n = 10;
n /= 5;
console.log(`Check operator is = ${n}`);

// Step # 4 Comparisson operator
let ca = 10;
let da = 5;
console.log(ca == da);
console.log(ca === da);
console.log(ca != da);
console.log(ca > da);
console.log(ca < da);
console.log(ca >= da);
console.log(ca <= da);

// step # 5 expression using variable and operator

// example 1
let price = 15;
let quantity = 3;
let tottalprice = price * quantity;
console.log(`tottal price = ${tottalprice}`);
// example 2
let mark1 = 10;
let mark2 = 20;
let mark3 = 30;
let finalresult = mark1 + mark2 + mark3;
console.log(`Final result is = ${finalresult}`);
// step # 6 practce task
let number = 10;
let text = "10";

console.log(number == text); // (==)why true because javascript convert "10 " into string , and 10 into number so javascript considerd  string and number are equal
console.log(number === text); // (===) strickley equal check both value and data type (string , number ) the value look same but thier type are different so it is false
