// 1:- heading.innerText = "welcome to DoM";
// console.log(heading.innerText);

// 2 :- const heading = "welcome";

// document.getElementById("heading").innerHTML = "welcome to";

// get element by class name  (iss se hum class ma inner text or content change kar sakte ha )
// const messages = document.getElementsByClassName("messages");
// console.log(messages.length);
// messages[1].innerText = "second paragraph with extra content";

// const paras = document.getElementsByTageName("p");
const paras = document.getElementsByTagName("p");
for (let i = 0; i < paras.length; i++) {
  //   paras[i].style.border = "12px";
  paras[i].style.backgroundColor = "red";
}

// query selector is used to sellect all css element (for all papragraph)

// 4:- class task ha karna ha in document
