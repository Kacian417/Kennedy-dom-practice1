/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const element = document.querySelectorAll(".demo1");
  element.innerHTML = "This is a test.";
  console.log(element);
  element[0].classList.remove("alert-warning");
  console.log(element[0].classList);

  //for (let i = 0; i < element.length; i++) {
  // console.log(element[i].childNodes[0].data);
  // }
};
