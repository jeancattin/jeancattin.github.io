// ══════════════════════════════════════════════════════════════
//  EFFETS VISUELS — étoiles scintillantes + curseur ✦
// ══════════════════════════════════════════════════════════════

(function () {

  // ── Étoile qui suit la souris (traînée dorée) ────────────
  const cursorEl = document.createElement('div');
  cursorEl.id = 'cursor-star';
  cursorEl.textContent = '✦';
  document.body.appendChild(cursorEl);

  document.addEventListener('mousemove', (e) => {
    cursorEl.style.left = e.clientX + 'px';
    cursorEl.style.top  = e.clientY + 'px';
  });

  document.addEventListener('mousedown', () => {
    cursorEl.style.opacity = '1';
    cursorEl.style.fontSize = '18px';
  });
  document.addEventListener('mouseup', () => {
    cursorEl.style.opacity = '0.8';
    cursorEl.style.fontSize = '14px';
  });

  document.addEventListener('mouseleave', () => { cursorEl.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { cursorEl.style.opacity = '0.8'; });


  // ── Champ d'étoiles (canvas) ──────────────────────────────
  const canvas = document.createElement('canvas');
  canvas.id = 'starfield';
  document.body.insertBefore(canvas, document.body.firstChild);

  const ctx = canvas.getContext('2d');
  let stars = [];
  const N_STARS = 180;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function initStars() {
    stars = Array.from({ length: N_STARS }, () => ({
      x:       Math.random() * canvas.width,
      y:       Math.random() * canvas.height,
      r:       Math.random() * 1.4 + 0.3,
      // Scintillement : phase aléatoire + vitesse aléatoire
      phase:   Math.random() * Math.PI * 2,
      speed:   Math.random() * 0.015 + 0.005,
      baseAlpha: Math.random() * 0.5 + 0.2,
      // Quelques étoiles en or
      gold: Math.random() < 0.15,
    }));
  }

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frame++;

    for (const s of stars) {
      s.phase += s.speed;
      const alpha = s.baseAlpha * (0.5 + 0.5 * Math.sin(s.phase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.gold
        ? `rgba(240,192,64,${alpha})`
        : `rgba(220,215,255,${alpha})`;
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => {
    resize();
    initStars();
  });

  resize();
  initStars();
  draw();

})();