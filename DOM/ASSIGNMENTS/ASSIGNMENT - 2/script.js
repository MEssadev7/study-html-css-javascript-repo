// task 1: Select an element by its ID and modify its text content

let heading = document.getElementById("heading");
heading.textContent = "DOM element selected by ID";
console.log(heading);

// task 2:Select an element by its tag name and modify its text content

let paragraph = document.getElementsByTagName("p")[0];
paragraph.textContent = "DOM element selected by tag name";
console.log(paragraph);

// task 3: select an element by class name

let buttons = document.getElementsByClassName("clickbtn");
buttons[0].textContent = "first button is selected";

// task 4: select an element by query selector
let newHeading = document.querySelector("h2");
newHeading.style.color = "blue";

// task 5 : select an element by query selector all
let ListItem = document.querySelectorAll("li");
// ListItem[0].style.color = "green"; // only first li is selected and modified
for (let i = 0; i < ListItem.length; i++) {
  ListItem[i].style.color = "green";
}

// task 6: creat a paragraph chane color , fontsize , bg color
let para1 = document.getElementsByClassName("para1")[0];
para1.style.color = "rgb(84, 18, 55)";
para1.style.fontSize = "20px";
para1.style.backgroundColor = "rgb(85, 148, 158)";
