// Question 1: Print numbers from 1 to 20
let a = 1;
for (let a = 1; a <= 20; a++) {
  console.log(a);
}
// ====================     ^

// Question 2: Print even numbers from 1 to 50
let b = 1;
for (let b = 1; b <= 50; b++) {
  if (b % 2 === 0) {
    console.log(b);
  }
}
// =====================    ^
// Question 3: countdownfrom 10 to 1

let c = 10;
for (let c = 10; c >= 1; c--) {
  console.log(c);
}
// ====================      ^

// // Question 4: print the multiplication table of from 1 to 10
// let d = 1;
// let num_multiplication = Number(
//   prompt("Enter a number to print its multiplication table:"),
// );
// for (let d = 1; d <= 10; d++) {
//   console.log(`${num_multiplication} x ${d} = ${num_multiplication * d}`);
// }

// =====================      ^

// Question 5: print the sum of number from 1 to 100
let sum = 0;
for (let e = 1; e <= 100; e++) {
  sum += e;
}
console.log(`The sum of the number from 1 to 100 is :${sum}`);

// what is the diffrence between parameter and argument in function         (interview question)

// ======================       ^

// Question 6: password attempt
// let password = "myPassword123";
// let attempts = 3;
// while (attempts > 0) {
//   let userInput = prompt("Enter your password:");
//   if (userInput === password) {
//     console.log("Access granted!");
//     break;
//   } else {
//     attempts--;
//     console.log(`Incorrect password. You have ${attempts} attempts left.`);
//   }
// }
// if (attempts === 0) {
//   console.log("Access denied!");
// }

// // positive number (keep asking user to enter a positive number until they enter a positive number)
// let positiveNumber;
// while (!positiveNumber || positiveNumber <= 0) {
//   positiveNumber = Number(prompt("Enter a positive number:"));
// }

// =======================         ^23
223;

// Question 7 :  if not positve number keep asking user to enter a positive number until they enter a positive number
let positiveNum;
while (true) {
  positiveNum = Number(prompt("Enter a positive number:"));
  if (positiveNum > 0) {
    console.log(`You entered a positive number: ${positiveNum}`);
    break;
  } else {
    console.log("That's not a positive number. Please try again.");
  }
}
