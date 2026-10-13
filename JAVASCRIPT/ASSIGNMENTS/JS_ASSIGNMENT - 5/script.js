// step : 1

console.log(`connect index.html file with script.js file`);

// step : 2 [ Employee Login system ]

let employee = Number(prompt(`Enter your number :`));
let result = 0;
if (employee >= 0 && employee <= 10) {
  result = `login`;
} else {
  result = `incorrect password`;
}
console.log(result);

// step : 3 [online order aproval system]

let ispayment = true; // true (order aprove ) , false (ordr rejected)
if (ispayment) {
  console.log(`Order aprove`);
} else {
  console.log(`Oreder Rejected `);
}

// step : 4 [Student Result system]
let marks = Number(prompt(`Enter your marks :`));
if (marks >= 50 && marks <= 100) {
  console.log(`Pass`);
} else {
  console.log(`Fail`);
}

// step : 5 [Ofice attendence system]

let isOnTime = true; // true (on time) , false (late)
if (isOnTime) {
  console.log(`They arrived on time`);
} else {
  console.log(`Late OR absent`);
}

// step : 6 [Discount Eligibility system]
let isPremiumUser = true; // true ( discount Applied)  , false (not discount Avaliable)
if (isPremiumUser) {
  console.log(`Discount Applied`);
} else {
  console.log(`Not Discount Avalible`);
}

// step : 7 [Multiple condition (if else   ,   if else   ,  else)]
let result1 = Number(prompt(`Enter your marks : `));
if (result1 >= 90) {
  console.log(`Excellent`);
} else if (result1 >= 70) {
  console.log(`Good`);
} else if (result1 >= 50) {
  console.log(`Average`);
} else {
  console.log(`Poor`);
}
