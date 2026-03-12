// ══════════════════════════════════════════════════════════════
//  GÉNÉRATEUR D'HOROSCOPES PARODIQUES — propulsé par l'IA
//  Les appels API passent par un proxy Cloudflare Worker
//  pour ne pas exposer la clé Anthropic
// ══════════════════════════════════════════════════════════════

const WORKER_URL = "https://dry-rain-d16c.github-6ugr9.workers.dev/";

const SYSTEM_PROMPT = `Tu es Dr. Martin Millon, astrophysicien docteur de l'EPFL, spécialiste en quasars et lentilles gravitationnelles, reconverti en astrologue new age.
Tu rédiges des horoscopes parodiques : perchés, grandioses, absurdes, mais écrits avec le plus grand sérieux.

Ton style mélange :
- Terminologie d'astrophysique réelle mais utilisée à contresens ou détournée (quasars, constante de Hubble, fond diffus cosmologique, lentilles gravitationnelles, pulsars, trous noirs, etc.)
- Concepts new age et pseudoscientifiques dits avec autorité (chakras, taux vibratoire, champ morphogénétique, mémoire de l'eau, résonance de Schumann, bovis, astrologie, homéopathie, etc.)
- Références concrètes et absurdes à la vie académique quotidienne (les beaux-parents, le bitcoin, une 7B+ en grimpe, les collègues chiants, la raclette, les reviews de papier scientifique, etc.)
- Formules solennelles qui s'effondrent dans le ridicule
- Ton doctorat te donne une légitimité que tu brandis sans complexe

Règles :
- 3 à 4 paragraphes maximum
- Commence par une observation cosmique pseudo-scientifique
- Inclus une prédiction positive ET une mise en garde absurde
- Termine par un conseil pratique
- Le sérieux total face à l'absurdité est ce qui rend le texte drôle
- Varie les structures et les références à chaque horoscope
- En français, texte brut sans markdown ni astérisques`;

async function generateHoroscope(signe) {
  const display = document.getElementById("quoteHoroscope");

  // Injection du style d'animation (une seule fois)
  if (!document.getElementById("horoscope-style")) {
    const style = document.createElement("style");
    style.id = "horoscope-style";
    style.textContent = `
      @keyframes spinStar { to { transform: rotate(360deg); } }
      @keyframes fadeInUp { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
      .horoscope-para { animation: fadeInUp 0.5s ease forwards; opacity: 0; }
      .horoscope-para:nth-child(1) { animation-delay: 0.0s; }
      .horoscope-para:nth-child(2) { animation-delay: 0.2s; }
      .horoscope-para:nth-child(3) { animation-delay: 0.4s; }
      .horoscope-para:nth-child(4) { animation-delay: 0.6s; }
    `;
    document.head.appendChild(style);
  }

  // Loader pendant la génération
  display.innerHTML = `
    <div style="text-align:center; padding:24px; color:#aaa; font-style:italic;">
      Dr. Millon consulte les astres&hellip;
      <div style="margin-top:12px; font-size:28px; display:inline-block;
                  animation: spinStar 1.5s linear infinite;">✦</div>
    </div>`;

  const mois = ["Janvier","Février","Mars","Avril","Mai","Juin",
                 "Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
  const moisActuel = mois[new Date().getMonth()];

  try {
    const response = await fetch(WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 500,
        system: SYSTEM_PROMPT,
        messages: [{
          role: "user",
          content: `Génère l'horoscope du ${signe} pour le mois de ${moisActuel}.`
        }]
      })
    });

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message || JSON.stringify(data.error));
    }

    const text = data.content?.[0]?.text
      ?? "Les astres sont en maintenance. Réessaie après la pleine lune.";

    // Mise en forme : chaque paragraphe animé
    const html = text
      .split(/\n\n+/)
      .filter(p => p.trim())
      .map(p => `<p class="horoscope-para" style="margin-bottom:14px;">${p.trim()}</p>`)
      .join("");

    display.innerHTML = html;

  } catch (err) {
    display.innerHTML = `
      <p style="color:#ff6b6b; font-style:italic;">
        Une perturbation du champ morphogénétique empêche la connexion aux astres.<br>
        <small>(${err.message})</small>
      </p>`;
  }
}

// Fonctions appelées par les boutons du HTML
function belier()     { generateHoroscope("Bélier"); }
function taureau()    { generateHoroscope("Taureau"); }
function gemeau()     { generateHoroscope("Gémeaux"); }
function cancer()     { generateHoroscope("Cancer"); }
function lion()       { generateHoroscope("Lion"); }
function vierge()     { generateHoroscope("Vierge"); }
function balance()    { generateHoroscope("Balance"); }
function scorpion()   { generateHoroscope("Scorpion"); }
function sagittaire() { generateHoroscope("Sagittaire"); }
function capricorne() { generateHoroscope("Capricorne"); }
function verseau()    { generateHoroscope("Verseau"); }
function poisson()    { generateHoroscope("Poissons"); }