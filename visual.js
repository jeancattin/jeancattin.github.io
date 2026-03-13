// ══════════════════════════════════════════════════════════════
//  EFFETS VISUELS — étoiles scintillantes + curseur ✦
//  Tous les styles sont appliqués directement en JS
//  pour éviter tout conflit avec le CSS existant
// ══════════════════════════════════════════════════════════════

(function () {

  // ── Curseur étoile ─────────────────────────────────────────
  const cursorEl = document.createElement('div');
  cursorEl.id = 'cursor-star';
  cursorEl.textContent = '✦';

  // Styles appliqués directement — pas de dépendance CSS
  Object.assign(cursorEl.style, {
    position:      'fixed',
    top:           '0',
    left:          '0',
    pointerEvents: 'none',
    zIndex:        '99999',
    fontSize:      '14px',
    color:         '#F0C040',
    textShadow:    '0 0 8px #F0C040',
    transform:     'translate(10px, 10px)',
    opacity:       '0.85',
    transition:    'font-size 0.1s',
  });
  document.body.appendChild(cursorEl);

  document.addEventListener('mousemove', (e) => {
    cursorEl.style.left = e.clientX + 'px';
    cursorEl.style.top  = e.clientY + 'px';
  });

  document.addEventListener('mousedown', () => {
    cursorEl.style.fontSize = '20px';
    cursorEl.style.color = '#ffffff';
  });
  document.addEventListener('mouseup', () => {
    cursorEl.style.fontSize = '14px';
    cursorEl.style.color = '#F0C040';
  });

  document.addEventListener('mouseleave', () => { cursorEl.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { cursorEl.style.opacity = '0.85'; });


  // ── Champ d'étoiles (canvas) ───────────────────────────────
  const canvas = document.createElement('canvas');
  canvas.id = 'starfield';

  // Par-dessus le background.png, sous le contenu (z-index 1)
  Object.assign(canvas.style, {
    position:      'fixed',
    top:           '0',
    left:          '0',
    width:         '100%',
    height:        '100%',
    zIndex:        '100',
    pointerEvents: 'none',
    opacity:       '0.6',
  });
  document.body.insertBefore(canvas, document.body.firstChild);

  // S'assurer que le contenu passe par-dessus le canvas (z-index 100)
  document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const wrapper = document.querySelector('.page-wrapper');
    if (sidebar) sidebar.style.zIndex = '200';
    if (wrapper) wrapper.style.zIndex = '150';
  });

  const ctx = canvas.getContext('2d');
  let stars = [];
  const N_STARS = 180;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function initStars() {
    stars = Array.from({ length: N_STARS }, () => ({
      x:         Math.random() * canvas.width,
      y:         Math.random() * canvas.height,
      r:         Math.random() * 1.4 + 0.3,
      phase:     Math.random() * Math.PI * 2,
      speed:     Math.random() * 0.015 + 0.005,
      baseAlpha: Math.random() * 0.5 + 0.3,
      gold:      Math.random() < 0.15,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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

  window.addEventListener('resize', () => { resize(); initStars(); });

  resize();
  initStars();
  draw();

})();