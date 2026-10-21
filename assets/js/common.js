"use strict";
(function () {
  const winW = window.innerWidth;
  const header = document.getElementById("header");
  const navToggle = document.querySelector(".nav-toggle");
  if (winW <= 768) {
    navToggle.addEventListener("click", () => {
      if (header.classList.contains("is-open")) {
        header.classList.remove("is-open");
        navToggle.textContent = "▤";
      } else {
        header.classList.add("is-open");
        navToggle.textContent = "▥";
      }
    });
  }
})();

(function () {
  let headerH = document.querySelector("#header").clientHeight;
  const main = document.querySelector("#main");
  main.style.paddingTop = headerH + "px";
})();
