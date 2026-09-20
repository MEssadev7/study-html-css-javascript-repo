// even nuber print

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) console.log("essa" + i);
// }

// for odd nuber print
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 != 0) console.log("essa" + i);
// }

// find odd number in range of 15 & 45
// let evenNums = [];
// for (let i = 15; i <= 45; i++) {
//   if (i % 2 == 0) {
//     evenNums.push(i);
//     // console.log(i);
//   }
// }
// console.log(evenNums);

const students = ["essa", "ali", "ahmed", "sara", "mohamed"];
const input = prompt("Enter your student name :");
for (const student of students) {
  if (input === student) {
    console.log("yes avaliable : " + student);
  }
}
