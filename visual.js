// ══════════════════════════════════════════════════════════════
//  EFFETS VISUELS — étoiles CSS + curseur ✦
//  Pas de canvas = compatible Brave et tous les navigateurs
// ══════════════════════════════════════════════════════════════

(function () {

  // ── Inject styles ─────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    #starfield-css {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      pointer-events: none;
      z-index: 100;
      overflow: hidden;
    }
    .star {
      position: absolute;
      border-radius: 50%;
      animation: twinkle var(--dur) ease-in-out infinite var(--delay);
    }
    @keyframes twinkle {
      0%, 100% { opacity: var(--min-op); transform: scale(1); }
      50%       { opacity: var(--max-op); transform: scale(1.4); }
    }
    #cursor-star {
      position: fixed;
      top: 0; left: 0;
      pointer-events: none;
      z-index: 99999;
      font-size: 14px;
      color: #F0C040;
      text-shadow: 0 0 8px #F0C040;
      transform: translate(10px, 10px);
      opacity: 0.85;
      transition: font-size 0.1s;
    }
  `;
  document.head.appendChild(style);

  // ── Curseur étoile ────────────────────────────────────────
  const cursorEl = document.createElement('div');
  cursorEl.id = 'cursor-star';
  cursorEl.textContent = '✦';
  document.body.appendChild(cursorEl);

  document.addEventListener('mousemove', (e) => {
    cursorEl.style.left = e.clientX + 'px';
    cursorEl.style.top  = e.clientY + 'px';
  });
  document.addEventListener('mousedown', () => {
    cursorEl.style.fontSize = '20px';
    cursorEl.style.color = '#fff';
  });
  document.addEventListener('mouseup', () => {
    cursorEl.style.fontSize = '14px';
    cursorEl.style.color = '#F0C040';
  });
  document.addEventListener('mouseleave', () => { cursorEl.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { cursorEl.style.opacity = '0.85'; });

  // ── Champ d'étoiles CSS ───────────────────────────────────
  const container = document.createElement('div');
  container.id = 'starfield-css';
  document.body.insertBefore(container, document.body.firstChild);

  const N = 350;

  for (let i = 0; i < N; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    const size   = Math.random() * 4 + 1;                  // 1–5px
    const x      = Math.random() * 100;
    const y      = Math.random() * 100;
    const dur    = (Math.random() * 3 + 1.5).toFixed(2);   // 1.5–4.5s
    const delay  = (Math.random() * -5).toFixed(2);
    const minOp  = (Math.random() * 0.05).toFixed(2);
    const maxOp  = (Math.random() * 0.4 + 0.6).toFixed(2); // 0.6–1.0
    const gold   = Math.random() < 0.2;                     // 20% dorées
    const color  = gold ? '#F0C040' : '#D8D4FF';

    star.style.cssText = `
      width: ${size}px; height: ${size}px;
      left: ${x}%; top: ${y}%;
      background: ${color};
      box-shadow: 0 0 ${size * 3}px ${color};
      --dur: ${dur}s;
      --delay: ${delay}s;
      --min-op: ${minOp};
      --max-op: ${maxOp};
    `;
    container.appendChild(star);
  }

  // Contenu au-dessus des étoiles
  const sidebar = document.querySelector('.sidebar');
  const wrapper = document.querySelector('.page-wrapper');
  if (sidebar) sidebar.style.zIndex = '200';
  if (wrapper) wrapper.style.zIndex = '150';

})();