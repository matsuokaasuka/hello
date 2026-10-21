"use strict";
//-----showClock-----//
function set2fig(num) {
  let ret;
  if (num < 10) {
    ret = "0" + num;
  } else {
    ret = num;
  }
  return ret;
}
function showClock() {
  let nowTime = new Date();
  let nowHour = set2fig(nowTime.getHours());
  let nowMin = set2fig(nowTime.getMinutes());
  let nowSec = set2fig(nowTime.getSeconds());
  let msg = nowHour + ":" + nowMin + ":" + nowSec;
  document.getElementById("timer").textContent = msg;
}
setInterval("showClock()", 1000);

//-----changeFill-----//
const changeFill = () => {
  const changeFillTargets = document.querySelectorAll(".changeFillTarget");
  const colorArr = ["#FF83FA", "#55FFA3", "#FFFBA7", "#A7FFEA", "#B18CFF", "#FB8D8D", "#FFDCA7"];
  for (let i = 0; i < changeFillTargets.length; i++) {
    let randomNum = Math.floor(Math.random() * colorArr.length);
    changeFillTargets[i].style.fill = colorArr[randomNum];
  }
};
window.addEventListener("load", changeFill);

