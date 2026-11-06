// task : 1

const image = document.querySelector("#photo");
console.log(image.getAttribute("src"));

//task : 2

const secondPhoto = document.querySelector("#Secphoto");
const changebtn = document.querySelector("#changebtn");

changebtn.addEventListener("click", function () {
  secondPhoto.setAttribute("src", "../../../IMAGES/DOG.PNG.png");
});

// task : 3
const username = document.querySelector("#input");
username.setAttribute("placeholder", "Enter your name :");

// task : 4
const usename = document.querySelector("#username");
const enablebtn = document.querySelector("#enablebtn");

enablebtn.addEventListener("click", function () {
  usename.removeAttribute("disabled");
});

// task : 5
const para = document.querySelector("#mypara");
console.log(para.hasAttribute("class"));

// task : 6
const Link = document.querySelector("#myLink");
const button = document.querySelector("#webChange");

button.addEventListener("click", function () {
  if (Link.hasAttribute("href")) {
    Link.setAttribute(
      "href",
      "https://www.linkedin.com/in/muhammad-essa-7b4618418/",
    );
    console.log(Link.getAttribute("href"));
  }
});
