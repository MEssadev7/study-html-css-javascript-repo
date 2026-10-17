// // class 17

// const { useCallback } = require("react");

// // 1 :- what is the math timer:
// // setTimeout()    -- important
// // setInterval()   -- important
// // clearTimeout()  -- important
// // clearInterval() -- important

// // 2 :- Practice of : 1
// // setTimeout(callback , delay)
// setTimeout(function () {
//   console.log("hello world");
// }, 5000);
// setTimeout(function () {
//   console.log("hi i am essa");
// }, 0);

// 3:- DOM  (tuch , button)  ----- tora sa touch kia dom

// let clearTimeoutbtn = document.getElementById("btn");
// let clearTimeoutpara = document.getElementById("para");

// const xyz = setTimeout(function () {
//   console.log("rn after seven second");
// }, 7000);

// clearTimeoutbtn.addEventListener("click", function () {
//   para.innerHTML = "by by  javascript";
//   clearTimeout(xyz);
// });

// set interval ()
// clear interval ()

// syntax
// setInterval(callback , delay)

// let clearIntervalbtn = document.getElementById("btn")
// const clearIntervalFn = setInterval(function(){
//     console.log("Hello world");
// },1000)

// clearIntervalbtn.addEventListener("click",function(){
//     clearInterval(clearIntervalFn);
// })

let para = document.getElementById("para");

setInterval(function () {
  let date = new Date().toLocaleDateString();
  //   let time = new Time().toLocaleTimeString();
  para.innerHTML = date;
}, 1000);

//  -- DOM definition
//  -- in html we replace element by DOM.
//  -- backend se jo data ata ha wo be ham javascript or dom ka zarie replase karsakte ha
//  -- what is document ?
// d:-
// o:-
// m:-

// Dom:-
