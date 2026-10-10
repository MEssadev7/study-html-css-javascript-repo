// Maths calculaton using min and max functtion
// Math.round()
// 4.5 -> 5
// 4.4 -> 4
console.log(Math.round(4.5));
console.log(Math.round(4.4));

// Math.floor() round down the number
// 2.1 ->2
// 4.9 -> 4
console.log(Math.floor(2.1));
console.log(Math.floor(4.9));

// Math.ceil() round up the number
// 3.5 -> 4
// 6.9 -> 7
console.log(Math.ceil(3.5));
console.log(Math.ceil(6.9));

// Math.trunc() remove the decimal part of the number
// 4.5 -> 4
// 2.1 -> 2
// 2.9 -> 2
console.log(Math.trunc(4.5));
console.log(Math.trunc(2.1));
console.log(Math.trunc(2.9));

// Math.abs() convert negative number to positive number
// -4 -> 4
// -2.45 -> 2.5
console.log(Math.abs(-4));
console.log(Math.abs(-2.45));

// Math.sqrt() return the square root of the number
// 4 -> 2
// 12 -> 3
console.log(Math.sqrt(4));
console.log(Math.sqrt(12));

// Math.pow() return the power of the number
// 2^3 -> 8
// 3^4 -> 81
console.log(Math.pow(2, 3)); //when power is 0 then it will return 1
console.log(Math.pow(3, 4));

// Math.min() return the minimum number from the given numbers
// 2, 3, 4, 5 -> 2
// 1, 2, 3, 4 -> 1
console.log(Math.min(2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4));

// Math.max() return the maximum number from the given numbers
// 2, 3, 4, 5 -> 5
// 1, 2, 3, 4 -> 4
console.log(Math.max(2, 3, 4, 5));
console.log(Math.max(1, 2, 3, 4));

// Math.random() return the random number between 0 and 1
console.log(Math.random());
console.log(Math.random());

// math.random() return the random number between 0 and 10
console.log(Math.random() * 10) + 1;
console.log(Math.random() * 10) + 1;

// Function to get a random number between min and max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let result = getRandomNumber(45, 31);
console.log(result);

// Math.PI return the value of pi
console.log(Math.PI);

// calaulate area of circle using Math.PI
function areaOfCircle(radius) {
  return Math.PI * Math.pow(radius, 2);
}
console.log(areaOfCircle(5));

// Javascript Date object is used to work with date and time
let date = new Date();
console.log(date);

// Get the current date and time
console.log(date.toString()); // utc time (universal time coordinated)

// Get the current year and month and date and day and hours and minute and sconds and milliseconds
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

// Get the current date in the format of dd/mm/yyyy
console.log(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} `);

// create a specific date in the format of yyyy-mm-dd
let Date1 = new Date("2026-10-10");
console.log(Date1); //this is standard format of date in javascript

// how i get specific year from this format (yyyy-mm-dd)
console.log(Date1.getFullYear()); //(iso for international standard organization)

// write (iso) format of date in javascript
let Date2 = new Date("2026-10-10T10:30:00");
console.log(Date2);

// compare two dates in javascript
let date3 = new Date("2026-10-10");
let date4 = new Date("2026-10-11");
console.log(date3 > date4);
