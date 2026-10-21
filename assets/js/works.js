"use strict";
const worksItemArr = document.querySelectorAll(".work-item");
for (let i = 0; worksItemArr.length; i++) {
  const ttlArr = document.querySelectorAll(".work-item .ttl");
  const maskArr = document.querySelectorAll(".work-item .mask");
  worksItemArr[i].addEventListener("mouseover", () => {
    ttlArr[i].classList.add("is-show");
    maskArr[i].classList.add("is-show");
  });
  worksItemArr[i].addEventListener("mouseout", () => {
    ttlArr[i].classList.remove("is-show");
    maskArr[i].classList.remove("is-show");
  });
}
