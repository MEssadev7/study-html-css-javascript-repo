//TASK : 1

const paragraph = document.querySelector("#paragraph");
const highlight = document.querySelector("#highlight"); //button

highlight.addEventListener("click", function () {
  paragraph.classList.add("highlight");
});

// TASK : 2

const para = document.querySelector("#para");
const highlight1 = document.querySelector("#highlight1"); //button
const removebtn = document.querySelector("#removebtn"); //button

highlight1.addEventListener("click", function () {
  para.classList.add("highlight1");
});

removebtn.addEventListener("click", function () {
  para.classList.remove("highlight1");
});

// task : 3
const para1 = document.querySelector("#para1");
const togglebtn = document.querySelector("#togglebtn");
const highlight2 = document.querySelector("#highlight2");

togglebtn.addEventListener("click", function () {
  para1.classList.toggle("highlight2");
});

// task : 4
const para2 = document.querySelector("#para2");
const checkbtn = document.querySelector("#checkbtn");

checkbtn.addEventListener("click", function () {
  if (para2.classList.contains("highlight2")) {
    alert("class exist");
  } else {
    alert("class not exist");
  }
});

// task: 5
const buyBtn = document.querySelector("#buybtn");

buyBtn.addEventListener("click", function () {
  buyBtn.classList.toggle("active-btn");
});

// task : 6
// Task : 6

const body = document.querySelector("body");
const darkbtn = document.querySelector("#darkbtn");

darkbtn.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
});
