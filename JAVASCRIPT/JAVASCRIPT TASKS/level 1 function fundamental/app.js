// // // Question : 1  Welcome user
// // function welcomeMsg(user_input) {
// //   return `welcome ${user_input}`;
// // }
// // let result = welcomeMsg("Essa");
// // console.log(result);

// // Question:2 Add two number
// function addNum(a, b) {
//   return a + b;
// }
// let result = addNum(200, 200);
// console.log(result);

// // Question : 3 Calculate product tottal
// function tottalprice(price, quantity) {
//   return price * quantity;
// }
// let tottal = tottalprice(300, 8);
// console.log(tottal);

// // Question : 4 Default user name
// function user_name(name = "Guest") {
//   return `welcome ${name}`;
// }
// let user_result = user_name("ali");
// console.log(user_result);

// // Question : 5 check adult
// function check_age(age) {
//   if (age >= 18) {
//     return ` your are dult`;
//   } else {
//     return ` your are minor`;
//   }
// }
// let input_num = check_age(Number(prompt("Enter your age : ")));
// console.log(input_num);

// // Question : 6 Pass or fail
// function result(marks) {
//   if (marks >= 50) {
//     return `you are  Pss`;
//   } else {
//     return `you are fail`;
//   }
// }
// let input_marks = result(Number(prompt("Enter your Marks : ")));
// console.log(input_marks);

// // Question: 7 Even or odd
// function checkNumber(Marks) {
//   if (Marks % 2 === 0) {
//     return ` even number`;
//   } else if (Marks % 2 !== 0) {
//     return `odd number`;
//   } else {
//     return ` retional number`;
//   }
// }
// let input_R = checkNumber(Number(prompt("Enter number")));
// console.log(input_R);

// // Question : 8 login status
// function checklogin(islogined) {
//   if (islogined >= 10) {
//     return `welcome Back`;
//   } else {
//     return `please login first `;
//   }
// }
// let output = checklogin(
//   Number(prompt("Enter your num then i gues you are login:")),
// );
// console.log(output);

// // Question : 9 discount calculator
// function calculateDiscount(price) {
//   if (price >= 10000) {
//     return price * (20 / 100);
//   } else if (price >= 5000 && price <= 9999) {
//     return price * (10 / 100);
//   } else {
//     return `No discount`;
//   }
// }
// let output = calculateDiscount(Number(prompt("Enter your ammount")));
// console.log(output);

// Question : 10 Grade calculator
// function calculateGrade(marks) {
//   if (marks >= 95) {
//     return `A+ `;
//   } else if (marks >= 90) {
//     return `A`;
//   } else if (marks >= 80) {
//     return `B`;
//   } else if (marks >= 70) {
//     return `C`;
//   } else if (marks >= 60) {
//     return `D`;
//   } else {
//     return `F`;
//   }
// }
// let result = calculateGrade(Number(prompt("Enter your marks")));
// console.log(result);

// Question :11 Temperatur checker
// function checkTemperature(temperature) {
//   if (temperature >= 35) {
//     return "it's hot";
//   } else if (temperature >= 25 && temperature >= 34) {
//     return "wether is normal ";
//   } else {
//     return "wether is cold";
//   }
// }
// let result = checkTemperature(
//   Number(
//     prompt("Enter temperature i will guess you it is hot or cold or normal"),
//   ),
// );
// console.log(result);

// Question : 12

// const product = [
//   { name: "apple", quantity: 5 },
//   { name: "banana", quantity: 0 },
//   { name: "mango", quantity: 10 },
// ];
// function checkstock(name, quantity) {
//   if (name > 0) {
//     console.log(`${name} is in stock`);
//   } else {
//     console.log(`${name} not in stock`);
//   }
// }
// checkstock("apple", 2);

// Question : 13 shipping calculator

// function calculateShiping(orderammount) {
//   if (orderammount >= 5000) {
//     return 0;
//   } else if (orderammount < 5000) {
//     return 250;
//   }
// }
// let result = calculateShiping(Number(prompt("Enter fees ")));
// console.log(result);

// Question : 14 student result system

// function calculateAverage(mark1, mark2, mark3) {
//   let tottal = mark1 + mark2 + mark3;
//   return tottal / 3;
// }

// function checkresult(average) {
//   if (average > 50) {
//     return "pass";
//   } else {
//     return "fail";
//   }
// }

// function generateresulrt(name, average) {
//   let result = checkresult(average);
//   return `Student: ${name} , Average: ${average},  Result : ${result}`;
// }

// let average = calculateAverage(78, 98, 67);
// console.log(generateresulrt("ESSA", average));

// // Question : 15

function generate_bill(Product_price, Quantity, Discount) {
  let subtotal = Product_price * Quantity;
  let discount = subtotal * (Discount / 100);
  let final_tottal = subtotal - discount;
  return `Subtotal:${subtotal} \n Discount : ${discount}\n Final Ammount : ${final_tottal}`;
}
let billOutput = generate_bill(1000, 3, 10);
console.log(billOutput);
