  const ss = document.querySelector('.ss');
  ifvisible.setIdleDuration(60);
  ifvisible.idle(function(){
    ss.style.opacity = 1;
    ss.style.zIndex = 999;
  });
  ifvisible.wakeup(function(){
    ss.style.opacity = 0;
    ss.style.zIndex = -1;
    ss.style.transition = 0.5 + 's';
  });