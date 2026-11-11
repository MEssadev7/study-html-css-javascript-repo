// Task : 1
const click = document.getElementById("click");

// i use arrow function
click.addEventListener("click", () => {
  alert("Click Successfullay");
});

// Task : 2
const para = document.getElementById("para");
const click1 = document.getElementById("click1");

click1.addEventListener("click", () => {
  para.textContent = "Now i want to Become a fullstack developer ";
});

// Task : 3
const click2 = document.getElementById("click2");

click2.addEventListener("click", () => {
  document.body.style.backgroundColor = "rgb(34, 242, 228)";
});

// Task : 4
const userinput = document.getElementById("userinput");
const output = document.getElementById("output");

userinput.addEventListener("input", () => {
  output.textContent = userinput.value;
});

// Task : 5
const box = document.getElementById("box");

box.addEventListener("mouseenter", () => {
  box.style.backgroundColor = "rgb(70, 92, 55)";
});

box.addEventListener("mouseleave", () => {
  box.style.backgroundColor = "lightblue";
});

// Task:6
const doubleClickBtn = document.getElementById("doubleClickBtn");

doubleClickBtn.addEventListener("dblclick", () => {
  alert("Doubble click detected !...");
});
