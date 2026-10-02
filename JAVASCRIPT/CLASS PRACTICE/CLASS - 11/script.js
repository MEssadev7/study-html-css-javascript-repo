function introduce(name, age, city) {
  console.log("my name is " + name);
  console.log("my age is  " + age);
  console.log("i am from " + city);
}
introduce("M_essa", 20, "peshawar");

// add function
function MultiNum(a, b, c) {
  return a * b * c;
}
function Add(a, b, c) {
  return a + b + c;
}
let totalresult = MultiNum(300, 2, 2) + Add(200, 200, 200);
console.log(totalresult);

// grid use in function
function findresult(percent) {
  if (percent >= 50 && percent <= 100) {
    console.log("pass");
  } else if (percent < 50 && percent > 0) {
    console.log("fail");
  } else {
    console.log("invalid input");
  }
}
let studentpercent = Number(prompt("Enter your percentage"));
console.log(findresult(studentpercent));

// object
const userdetail = {
  email: " admin@gamil.com",
  password: admin12132,
  role: "admin",
};
function checkAdminRole(email, password, role) {
  if (role == "admin") {
    console.log("you are admin");
  } else {
    console.log("Something is wrong !");
  }
}
let userRole = prompt("Enter your role ");
checkAdminRole("test@gmail.com", "admin12132", "admin");
