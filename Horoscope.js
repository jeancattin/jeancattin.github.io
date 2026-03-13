// ══════════════════════════════════════════════════════════════
//  GÉNÉRATEUR IA — Dr. Martin Millon
//  - Horoscope du jour
//  - Compatibilité amoureuse quantique
//  - Consultation privée (chat multi-tours)
// ══════════════════════════════════════════════════════════════
 

const WORKER_URL = "https://dry-rain-d16c.github-6ugr9.workers.dev/";

const SYSTEM_PROMPT = `Tu es Dr. Martin Millon, astrophysicien docteur de l'EPFL, spécialiste en quasars et lentilles gravitationnelles, reconverti en astrologue new age.
Tu rédiges des horoscopes parodiques : perchés, grandioses, absurdes, mais écrits avec le plus grand sérieux.

Ton style mélange :
- Terminologie d'astrophysique réelle mais utilisée à contresens ou détournée (quasars, constante de Hubble, fond diffus cosmologique, lentilles gravitationnelles, pulsars, trous noirs, etc.)
- Concepts new age et pseudoscientifiques dits avec autorité (chakras, taux vibratoire, champ morphogénétique, mémoire de l'eau, résonance de Schumann, bovis, astrologie, homéopathie, etc.)
- Références concrètes et absurdes à la vie académique et à la vie quotidienne, quotidienne (les collègues, la vie amoureuse, les perspectives professionnelles, une 7B+ en grimpe, la raclette, les reviews de papier scientifique, etc.)
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

// ── Styles CSS partagés ───────────────────────────────────────
function injecterStyles() {
  if (document.getElementById("martin-style")) return;
  const style = document.createElement("style");
  style.id = "martin-style";
  style.textContent = `
    @keyframes spinStar  { to { transform: rotate(360deg); } }
    @keyframes fadeInUp  { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
    .martin-para { animation: fadeInUp 0.45s ease forwards; opacity:0; margin-bottom:14px; }
    .martin-para:nth-child(1) { animation-delay:0.00s; }
    .martin-para:nth-child(2) { animation-delay:0.15s; }
    .martin-para:nth-child(3) { animation-delay:0.30s; }
    .martin-para:nth-child(4) { animation-delay:0.45s; }
 
    .chat-bubble { border-radius:10px; padding:12px 16px; margin-bottom:14px;
                   max-width:88%; animation: fadeInUp 0.4s ease forwards; opacity:0; }
    .chat-user    { background:rgba(255,255,255,0.08); color:#ccc;
                    margin-left:auto; text-align:right; }
    .chat-martin  { background:rgba(255,215,0,0.08); color:#5EFF00;
                    border-left:3px solid gold; }
    .chat-label   { font-size:11px; opacity:0.6; margin-bottom:4px; }
  `;
  document.head.appendChild(style);
}
 
// ── Loader animé ──────────────────────────────────────────────
function loader(texte = "Dr. Millon consulte les astres…") {
  return `<div style="text-align:center;padding:24px;color:#aaa;font-style:italic;">
    ${texte}
    <div style="margin-top:12px;font-size:28px;display:inline-block;
                animation:spinStar 1.5s linear infinite;">✦</div>
  </div>`;
}
 
// ── Appel API via le Worker ───────────────────────────────────
async function appelClaude({ system, messages, maxTokens = 500 }) {
  const response = await fetch(WORKER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: maxTokens,
      system,
      messages
    })
  });
  const data = await response.json();
  if (data.error) throw new Error(data.error.message || JSON.stringify(data.error));
  return data.content?.[0]?.text ?? "(pas de réponse des astres)";
}
 
// ── Mise en forme texte → paragraphes HTML ────────────────────
function formaterTexte(texte, cssClass = "martin-para", couleur = null) {
  return texte
    .split(/\n\n+/)
    .filter(p => p.trim())
    .map(p => {
      const style = couleur ? ` style="color:${couleur}"` : "";
      return `<p class="${cssClass}"${style}>${p.trim()}</p>`;
    })
    .join("");
}
 
// ══════════════════════════════════════════════════════════════
//  NAVIGATION — remplace les anciennes fonctions showXxx()
// ══════════════════════════════════════════════════════════════
 
const SECTIONS = ["home","horoscope","compat","consult","bib","article"];
 
function showSection(id) {
  injecterStyles();
  SECTIONS.forEach(s => {
    document.getElementById(s).style.display = (s === id) ? "block" : "none";
    const btn = document.getElementById(s + "button");
    if (btn) btn.classList.toggle("active", s === id);
  });
  // Scroll en haut à chaque changement de section
  window.scrollTo({ top: 0, behavior: "smooth" });
}
 
// Alias pour la sidebar (rétrocompatibilité)
function showHome()      { showSection("home"); }
function showHoroscope() { showSection("horoscope"); }
function showBib()       { showSection("bib"); }
function showArticle()   { showSection("article"); }
 
// ══════════════════════════════════════════════════════════════
//  1. HOROSCOPE DU JOUR
// ══════════════════════════════════════════════════════════════
 
const MOIS = ["Janvier","Février","Mars","Avril","Mai","Juin",
              "Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
 
async function generateHoroscope(signe) {
  injecterStyles();
  const display = document.getElementById("quoteHoroscope");
  display.innerHTML = loader();
 
  try {
    const texte = await appelClaude({
      system: PERSONNALITE + `\n\nTu rédiges des horoscopes parodiques en 3-4 paragraphes.
Commence par une observation cosmique pseudo-scientifique.
Inclus une prédiction positive ET une mise en garde absurde.
Termine par un conseil pratique complètement délirant.`,
      messages: [{
        role: "user",
        content: `Génère l'horoscope du ${signe} pour le mois de ${MOIS[new Date().getMonth()]}.`
      }]
    });
    display.innerHTML = formaterTexte(texte, "martin-para", "#5EFF00");
  } catch (err) {
    display.innerHTML = `<p style="color:#ff6b6b;font-style:italic;">
      Une perturbation du champ morphogénétique empêche la connexion aux astres.<br>
      <small>(${err.message})</small></p>`;
  }
}
 
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
 
// ══════════════════════════════════════════════════════════════
//  2. COMPATIBILITÉ AMOUREUSE QUANTIQUE
// ══════════════════════════════════════════════════════════════
 
async function analyserCompatibilite() {
  injecterStyles();
  const s1 = document.getElementById("signe1").value;
  const s2 = document.getElementById("signe2").value;
  const display = document.getElementById("resultatCompat");
 
  if (!s1 || !s2) {
    display.innerHTML = `<p style="color:#ff6b6b;">Veuillez choisir deux signes pour que le cosmos puisse se prononcer.</p>`;
    return;
  }
  if (s1 === s2) {
    display.innerHTML = `<p style="color:#FFD700;font-style:italic;">
      Un ${s1} avec un autre ${s1} ? Le narcissisme cosmique est une vibration 
      que même la théorie des supercubes peine à modéliser. Mais soit.</p>`;
    // On laisse quand même Claude analyser
  }
 
  display.innerHTML = loader("Dr. Millon calcule l'intrication vibratoire…");
 
  try {
    const texte = await appelClaude({
      system: PERSONNALITE + `\n\nTu analyses la compatibilité amoureuse entre deux signes astrologiques.
Structure ta réponse en 3 parties bien distinctes (séparées par une ligne vide) :
1. L'analyse cosmique de la combinaison (pseudo-scientifique et absurde)
2. Les points de friction vibratoire (les problèmes, formulés dramatiquement)
3. Le verdict final avec un score de compatibilité cosmique sur 10 et un conseil de survie
Sois généreux en métaphores astrophysiques et en références incongrues.`,
      messages: [{
        role: "user",
        content: `Analyse la compatibilité amoureuse entre un ${s1} et un ${s2}.`
      }],
      maxTokens: 600
    });
    display.innerHTML = formaterTexte(texte, "martin-para", "#FFB6C1");
  } catch (err) {
    display.innerHTML = `<p style="color:#ff6b6b;font-style:italic;">
      L'analyse a été perturbée par une éruption solaire de mauvais augure.<br>
      <small>(${err.message})</small></p>`;
  }
}
 
// ══════════════════════════════════════════════════════════════
//  3. CONSULTATION PRIVÉE (chat multi-tours)
// ══════════════════════════════════════════════════════════════
 
let historiqueConsultation = []; // [{role, content}]
 
function ajouterBulleChat(role, texte) {
  const container = document.getElementById("chatHistory");
  const div = document.createElement("div");
 
  if (role === "user") {
    div.className = "chat-bubble chat-user";
    div.innerHTML = `<div class="chat-label">Vous</div>${texte}`;
  } else {
    div.className = "chat-bubble chat-martin";
    div.innerHTML = `<div class="chat-label">Dr. Martin Millon, PhD</div>${
      texte.split(/\n\n+/).filter(p => p.trim())
           .map(p => `<p style="margin:0 0 8px;">${p.trim()}</p>`).join("")
    }`;
  }
 
  container.appendChild(div);
  // Force reflow pour l'animation
  void div.offsetWidth;
  div.style.opacity = "0";
  div.style.animation = "fadeInUp 0.4s ease forwards";
  setTimeout(() => div.scrollIntoView({ behavior: "smooth", block: "end" }), 50);
}
 
function ajouterLoaderChat() {
  const container = document.getElementById("chatHistory");
  const div = document.createElement("div");
  div.id = "chat-loader";
  div.className = "chat-bubble chat-martin";
  div.innerHTML = `<div class="chat-label">Dr. Martin Millon, PhD</div>
    <span style="font-style:italic;color:#aaa;">consulte les astres…
      <span style="display:inline-block;animation:spinStar 1.5s linear infinite;">✦</span>
    </span>`;
  container.appendChild(div);
  div.scrollIntoView({ behavior: "smooth", block: "end" });
  return div;
}
 
async function envoyerQuestion() {
  injecterStyles();
  const input = document.getElementById("userQuestion");
  const question = input.value.trim();
  if (!question) return;
 
  // Affiche la question de l'utilisateur
  ajouterBulleChat("user", question);
  input.value = "";
 
  // Ajoute au contexte
  historiqueConsultation.push({ role: "user", content: question });
 
  // Loader
  const loaderDiv = ajouterLoaderChat();
 
  try {
    const texte = await appelClaude({
      system: PERSONNALITE + `\n\nTu es en séance de consultation privée.
Tu réponds aux questions personnelles de ton client en restant totalement en personnage.
Tu relies toujours la situation personnelle du client à des phénomènes cosmiques ou pseudo-scientifiques.
Tu peux te souvenir du contexte de la conversation pour des réponses cohérentes.
Réponds en 2-3 paragraphes maximum. Conclus toujours par un conseil pratique absurde.`,
      messages: historiqueConsultation,
      maxTokens: 450
    });
 
    // Retire le loader, affiche la réponse
    loaderDiv.remove();
    ajouterBulleChat("assistant", texte);
 
    // Ajoute la réponse au contexte
    historiqueConsultation.push({ role: "assistant", content: texte });
 
  } catch (err) {
    loaderDiv.remove();
    ajouterBulleChat("assistant",
      `Une interférence électromagnétique perturbe la séance. (${err.message})`);
  }
}
 
function reinitialiserConsultation() {
  historiqueConsultation = [];
  document.getElementById("chatHistory").innerHTML = "";
  document.getElementById("userQuestion").value = "";
}
 
// Envoi avec Entrée (Shift+Entrée pour saut de ligne)
document.addEventListener("DOMContentLoaded", () => {
  injecterStyles();
  const textarea = document.getElementById("userQuestion");
  if (textarea) {
    textarea.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        envoyerQuestion();
      }
    });
  }
});