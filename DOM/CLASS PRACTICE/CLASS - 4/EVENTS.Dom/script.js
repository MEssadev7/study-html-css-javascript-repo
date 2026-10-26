// click function
let clickBtn = document.querySelector("#clickBtn");
let message = document.querySelector("#message");

// change color background

// clickBtn.addEventListener(event,callback function);
clickBtn.addEventListener("click", function () {
  message.textContent = "buttton clicked";
});

// event apply hoga to hum likage "addEventListener"
let darkMD = document.getElementById("darkMD");
let lightMD = document.getElementById("lightMD");

darkMD.addEventListener("click", function () {
  document.body.style.backgroundColor = "#F2CB00";
});
lightMD.addEventListener("click", function () {
  document.body.style.backgroundColor = "#F568B7";
});

// likana or bahir outomatic likana  (input)
let search = document.getElementById("search");
let output = document.getElementById("output");

let showinputResult = document.getElementById("showinputResult");
let outputResult = "";

search.addEventListener("input", function () {
  outputResult = search.value;
});

showinputResult.addEventListener("click", function () {
  output.textContent = outputResult;
});

// drop down
let curse = document.getElementById("curse");
let selectedCurse = document.getElementById("selectedCurse");

curse.addEventListener("change", function () {
  selectedCurse.textContent = `selected curse : ${curse.value}`;
});

// registration
let registrationForm = document.getElementById("registrationForm");
let name = document.getElementById("name");
let result = document.getElementById("result");

registrationForm.addEventListener("submit", function (e) {
  e.preventDefault();
  result.textContent = name.value;
});

// for gender

let gender = document.querySelectorAll("input[name='gender']");

for (let i = 0; i < gender.length; i++) {
  gender[i].addEventListener("input", function () {
    console.log(gender[i].value);
  });
}
