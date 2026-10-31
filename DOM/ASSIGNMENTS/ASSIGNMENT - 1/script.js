// change the text using javascript

const heading = document.getElementById("heading");
heading.textContent = "Welcome to javascript";
heading.style.color = "rgb(69, 12, 44)";
console.log(heading);

//change paragraph on click

let para = document.getElementById("para");
let changebtn = document.getElementById("changebtn");
changebtn.addEventListener("click", function () {
  para.innerText = "change paragraph successfully";
});

// button click background color change
let lightBlueMD = document.getElementById("lightBlueMD");
lightBlueMD.addEventListener("click", function () {
  document.body.style.backgroundColor = "lightblue";
});

// click button show alert
let clickbtn = document.getElementById("clickbtn");
clickbtn.addEventListener("click", function () {
  alert("DOM is working");
});

//
const inputField = document.getElementById("inputField");
const updateBtn = document.getElementById("updateBtn");
const paragraph = document.getElementById("paragraph");

updateBtn.addEventListener("click", function () {
  paragraph.innerText = inputField.value;
});
