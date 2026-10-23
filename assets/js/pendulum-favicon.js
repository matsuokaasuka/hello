(() => {
  'use strict';
  const icon = document.getElementById('pendulum-favicon');
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 32;
  const ctx = canvas.getContext('2d');
  if (!icon || !ctx) return;
  const still = icon.href;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0;
  let started = null;
  let lastDraw = -Infinity;

  function stop() {
    cancelAnimationFrame(frame);
    frame = 0;
    icon.href = still;
  }

  function draw(angle) {
    ctx.clearRect(0, 0, 32, 32);
    const x = 16 + Math.sin(angle) * 13;
    const y = 3 + Math.cos(angle) * 13;
    ctx.fillStyle = '#ff1ad9';
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, Math.PI * 2);
    ctx.fill();
    icon.href = canvas.toDataURL('image/png');
  }

  function animate(now) {
    if (started === null) started = now;
    const seconds = (now - started) / 1000;
    if (seconds >= 6) {
      stop();
      return;
    }
    // Damped pendulum; cap favicon updates at 20 fps.
    if (now - lastDraw >= 50) {
      draw(0.65 * Math.exp(-0.85 * seconds) * Math.cos(9 * seconds));
      lastDraw = now;
    }
    frame = requestAnimationFrame(animate);
  }

  document.addEventListener('visibilitychange', () => {
    stop();
    if (document.hidden || reducedMotion.matches) return;
    started = null;
    lastDraw = -Infinity;
    frame = requestAnimationFrame(animate);
  });
  reducedMotion.addEventListener('change', stop);
  window.addEventListener('pagehide', stop);
})();
