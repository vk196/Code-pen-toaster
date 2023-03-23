"use strict";

const redLight = document.querySelector(".red");
const greenLight = document.querySelector(".green");
const bread = document.querySelector(".bread");
const breadSmoke = document.getElementById("smoke");
const toastHandle = document.querySelector(".handle__wrapper");

console.log(breadSmoke);
//GreenLight func
greenLight.addEventListener("click", () => {
  toastHandle.classList.add("active");
  breadSmoke.classList.add("active");
  bread.classList.add("active");
});

//RedLight func
redLight.addEventListener("click", () => {
  toastHandle.classList.remove("active");
  breadSmoke.classList.remove("active");
  bread.classList.remove("active");
});
