// ========================================
// 1. GETTING HTML ELEMENTS
// ========================================

// Username input field
const username = document.getElementById("username");

// Result show karne wala element
const result = document.getElementById("result");

// Submit / Show button
const showBtn = document.getElementById("btn");

// ========================================
// 2. LANGUAGE SELECTION
// ========================================

// Selected languages store karne ke liye empty array
let selectedLanguages = [];

// ========================================
// 3. BUTTON CLICK EVENT
// ========================================

showBtn.addEventListener("click", function (event) {
  // Form submit hone aur page reload hone se rokta hai
  event.preventDefault();

  // ========================================
  // 4. GENDER SELECTION
  // ========================================

  // Selected gender radio button select karta hai
  const gender = document.querySelector("input[name='gender']:checked");

  // ========================================
  // 5. COUNTRY SELECTION
  // ========================================

  // Country select element
  const country = document.getElementById("country");

  // Selected country ki value console mein show karega
  console.log(country.value);

  // ========================================
  // 6. LANGUAGE CHECKBOXES
  // ========================================

  // Sirf checked languages select karega
  const languages = document.querySelectorAll(
    "input[name='languages']:checked",
  );

  // Har selected language ko array mein add karega
  for (let lan of languages) {
    selectedLanguages.push(lan.value);
  }

  // Selected languages console mein show karega
  console.log(selectedLanguages);

  // ========================================
  // 7. USERNAME VALIDATION
  // ========================================

  // Username ki value lena aur extra spaces remove karna
  let name = username.value.trim();

  // Check: username empty to nahi?
  if (name === "") {
    alert("Please fill username field");
    return;
  }

  // Check: username ki length 4 se 12 characters ke darmiyan hai?
  if (name.length < 4 || name.length > 12) {
    alert("Username length should be between 4 and 12 characters");
    return;
  }

  // ========================================
  // 8. SHOW RESULT
  // ========================================

  // Username result element mein show karega
  result.textContent = name;
});

// ========================================
// 9. COUNTRY CHANGE EVENT
// ========================================

const country = document.getElementById("country");

// Jab user country change karega to selected value console mein show hogi

// country.addEventListener("change", function (event) {
//   console.log(event.target.value);
// });
