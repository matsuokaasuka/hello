"use strict";
window.addEventListener('click', (e)=>{
  const elm = document.createElement('div');
  elm.classList.add('stmp');
  const body = document.getElementById('fingerprint');
  let x = e.clientX;
  let y = e.clientY;
  elm.style.position= 'absolute';
  elm.style.left = x + 'px';
  elm.style.top = y + 'px';
  elm.style.width = 120 + 'px';
  elm.style.height = 120 + 'px';
  body.appendChild(elm);
});