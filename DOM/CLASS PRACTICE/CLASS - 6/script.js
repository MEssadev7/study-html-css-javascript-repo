const username = document.getElementById(`username`);
const showbtn = document.getElementById(`btn`);
const result = document.getElementById(`result`);

showbtn.addEventListener(`click`, function (event) {
  event.preventDefault();
  let name = username.value.trim();
  if (name === "") {
    alert(`please fill username field`);
    return;
  }

  if (name.length < 3 || name.length > 10) {
    alert(`username must be between 3 and 10 characters`);
    return;
  }

  result.textContent = username.value;
});
