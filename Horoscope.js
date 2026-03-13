// ══════════════════════════════════════════════════════════════
//  GÉNÉRATEUR IA — Dr. Martin Millon
//  - Horoscope du jour
//  - Compatibilité amoureuse quantique
//  - Consultation privée (chat multi-tours)
// ══════════════════════════════════════════════════════════════

const WORKER_URL = "https://dry-rain-d16c.github-6ugr9.workers.dev/";

// ── Personnalité de base (partagée par tous les modes) ────────
const PERSONNALITE = `Tu es Dr. Martin Millon, astrophysicien docteur de l'EPFL reconverti en astrologue new age.
Tu parles avec le plus grand sérieux, brandissant ton doctorat à tout moment.
Ton style mélange :
- Astrophysique réelle mais utilisée à contresens (quasars, constante de Hubble, fond diffus cosmologique, lentilles gravitationnelles, pulsars, trous noirs, rayonnement de Hawking...)
- Pseudosciences dites avec autorité (chakras, taux vibratoire, champ morphogénétique, mémoire de l'eau, résonance de Schumann, unités Bovis, synastrie quantique...)
- Références absurdes à la vie quotidienne (le bitcoin, la grimpe, les beaux-parents, les collègues chiants, la raclette, les reviews de papiers scientifiques, l'EPFL...)
- Formules grandiloquentes qui s'effondrent dans le ridicule
- Un sérieux total face à l'absurdité totale : c'est ce qui rend le texte drôle
En français, sans markdown ni astérisques.`;

// ── Styles CSS partagés ───────────────────────────────────────
function injecterStyles() {
  if (document.getElementById("martin-style")) return;
  const style = document.createElement("style");
  style.id = "martin-style";
  style.textContent = `
    @keyframes spinStar  { to { transform: rotate(360deg); } }
    @keyframes fadeInUp  { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
    .martin-para { animation: fadeInUp 0.45s ease forwards; opacity:0; margin-bottom:16px;
                   font-family:'Crimson Text',serif; font-size:17px; line-height:1.8; }
    .martin-para:nth-child(1) { animation-delay:0.00s; }
    .martin-para:nth-child(2) { animation-delay:0.18s; }
    .martin-para:nth-child(3) { animation-delay:0.36s; }
    .martin-para:nth-child(4) { animation-delay:0.54s; }
  `;
  document.head.appendChild(style);
}

// ── Loader animé ──────────────────────────────────────────────
function loader(texte) {
  texte = texte || "Dr. Millon rédige sa sagesse…";
  return `<div style="text-align:center;padding:28px;color:#A09880;font-style:italic;font-family:'Crimson Text',serif;">
    ${texte}
    <div style="margin-top:14px;font-size:28px;color:#F0C040;display:inline-block;
                animation:spinStar 1.5s linear infinite;">✦</div>
  </div>`;
}

// ── Appel API via le Worker ───────────────────────────────────
async function appelClaude(system, messages, maxTokens) {
  maxTokens = maxTokens || 500;
  const response = await fetch(WORKER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: maxTokens,
      system: system,
      messages: messages
    })
  });
  const data = await response.json();
  if (data.error) throw new Error(data.error.message || JSON.stringify(data.error));
  return data.content && data.content[0] && data.content[0].text
    ? data.content[0].text
    : "(pas de réponse des astres)";
}

// ── Mise en forme texte → paragraphes HTML ────────────────────
function formaterTexte(texte, cssClass, couleur) {
  cssClass = cssClass || "martin-para";
  return texte
    .split(/\n\n+/)
    .filter(function(p) { return p.trim(); })
    .map(function(p) {
      var style = couleur ? ' style="color:' + couleur + '"' : '';
      return '<p class="' + cssClass + '"' + style + '>' + p.trim() + '</p>';
    })
    .join("");
}

// ── Message d'erreur ──────────────────────────────────────────
function erreurCosmos(msg) {
  return '<p style="color:#ff6b6b;font-style:italic;font-family:\'Crimson Text\',serif;">'
    + 'Une perturbation du champ morphogénétique empêche la vision des astres.<br>'
    + '<small>(' + msg + ')</small></p>';
}

// ══════════════════════════════════════════════════════════════
//  NAVIGATION
// ══════════════════════════════════════════════════════════════

var SECTIONS = ["home","horoscope","compat","consult","bib","article"];

function showSection(id) {
  injecterStyles();
  SECTIONS.forEach(function(s) {
    document.getElementById(s).style.display = (s === id) ? "block" : "none";
    var btn = document.getElementById(s + "button");
    if (btn) btn.classList.toggle("active", s === id);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Alias rétrocompatibilité
function showHome()      { showSection("home"); }
function showHoroscope() { showSection("horoscope"); }
function showBib()       { showSection("bib"); }
function showArticle()   { showSection("article"); }

// ══════════════════════════════════════════════════════════════
//  1. HOROSCOPE DU JOUR
// ══════════════════════════════════════════════════════════════

var MOIS = ["Janvier","Février","Mars","Avril","Mai","Juin",
            "Juillet","Août","Septembre","Octobre","Novembre","Décembre"];

async function generateHoroscope(signe) {
  injecterStyles();
  var display = document.getElementById("quoteHoroscope");
  display.innerHTML = loader();

  var systemHoroscope = PERSONNALITE + "\n\nTu rédiges des horoscopes parodiques en 2-3 paragraphes.\n"
    + "Commence par une observation cosmique pseudo-scientifique.\n"
    + "Inclus une prédiction positive ET une mise en garde absurde.\n"
    + "Termine par un conseil pratique complètement délirant.";

  try {
    var texte = await appelClaude(
      systemHoroscope,
      [{ role: "user", content: "Génère l'horoscope du " + signe + " pour le mois de " + MOIS[new Date().getMonth()] + "." }]
    );
    display.innerHTML = formaterTexte(texte, "martin-para", "#5EFF00");
  } catch(err) {
    display.innerHTML = erreurCosmos(err.message);
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
  var s1 = document.getElementById("signe1").value;
  var s2 = document.getElementById("signe2").value;
  var display = document.getElementById("resultatCompat");

  if (!s1 || !s2) {
    display.innerHTML = '<p style="color:#ff6b6b;font-family:\'Crimson Text\',serif;">Veuillez choisir deux signes pour que le cosmos puisse se prononcer.</p>';
    return;
  }

  display.innerHTML = loader("Dr. Millon calcule l'intrication vibratoire…");

  var systemCompat = PERSONNALITE + "\n\nTu analyses de manière parodique la compatibilité amoureuse entre deux signes astrologiques.\n"
    + "Structure ta réponse en 3 parties courtes et concises bien distinctes (séparées par une ligne vide) :\n"
    + "1. L'analyse cosmique de la combinaison (pseudo-scientifique et absurde)\n"
    + "2. Les points de friction vibratoire (les problèmes, formulés dramatiquement)\n"
    + "3. Le verdict final avec un score de compatibilité sur 10 et un conseil de survie\n"
    + "Sois généreux en métaphores astrophysiques techniques et en références incongrues.";

  try {
    var texte = await appelClaude(
      systemCompat,
      [{ role: "user", content: "Analyse la compatibilité amoureuse entre un " + s1 + " et un " + s2 + "." }],
      600
    );
    display.innerHTML = formaterTexte(texte, "martin-para", "#FFB6C1");
  } catch(err) {
    display.innerHTML = erreurCosmos(err.message);
  }
}

// ══════════════════════════════════════════════════════════════
//  3. CONSULTATION PRIVÉE (chat multi-tours)
// ══════════════════════════════════════════════════════════════

var historiqueConsultation = [];

function ajouterBulleChat(role, texte) {
  var container = document.getElementById("chatHistory");
  var div = document.createElement("div");
  div.className = "chat-bubble " + (role === "user" ? "chat-user" : "chat-martin");

  if (role === "user") {
    div.innerHTML = '<div class="chat-label">Vous</div>' + texte;
  } else {
    var html = texte.split(/\n\n+/).filter(function(p) { return p.trim(); })
      .map(function(p) { return '<p style="margin:0 0 8px;">' + p.trim() + '</p>'; }).join("");
    div.innerHTML = '<div class="chat-label">Dr. Martin Millon, PhD</div>' + html;
  }

  container.appendChild(div);
  setTimeout(function() { div.scrollIntoView({ behavior: "smooth", block: "end" }); }, 50);
}

function ajouterLoaderChat() {
  var container = document.getElementById("chatHistory");
  var div = document.createElement("div");
  div.id = "chat-loader";
  div.className = "chat-bubble chat-martin";
  div.innerHTML = '<div class="chat-label">Dr. Martin Millon, PhD</div>'
    + '<span style="font-style:italic;color:#A09880;">rédige sa sagesse…'
    + '<span style="display:inline-block;animation:spinStar 1.5s linear infinite;color:#F0C040;margin-left:6px;">✦</span>'
    + '</span>';
  container.appendChild(div);
  div.scrollIntoView({ behavior: "smooth", block: "end" });
  return div;
}

async function envoyerQuestion() {
  injecterStyles();
  var input = document.getElementById("userQuestion");
  var question = input.value.trim();
  if (!question) return;

  ajouterBulleChat("user", question);
  input.value = "";
  historiqueConsultation.push({ role: "user", content: question });

  var loaderDiv = ajouterLoaderChat();

  var systemConsult = PERSONNALITE + "\n\nTu es en séance de consultation privée parodique.\n"
    + "Tu réponds aux questions personnelles de ton client en restant totalement en personnage.\n"
    + "Tu relies toujours la situation personnelle du client à des phénomènes cosmologiques réels ou pseudo-scientifiques.\n"
    + "Tu peux te souvenir du contexte de la conversation pour des réponses cohérentes.\n"
    + "Réponds en 1-2 phrases maximum, comme une conversation normale. Entretiens la conversation et pose des questions absurdes si la situation le requiert. Conclus par un conseil pratique absurde si cela est pertinent.";

  try {
    var texte = await appelClaude(systemConsult, historiqueConsultation, 450);
    loaderDiv.remove();
    ajouterBulleChat("assistant", texte);
    historiqueConsultation.push({ role: "assistant", content: texte });
  } catch(err) {
    loaderDiv.remove();
    ajouterBulleChat("assistant", "Dr. Martin est absent. Il braque son téléscope vers les astres, revenez plus tard. (" + err.message + ")");
  }
}

function reinitialiserConsultation() {
  historiqueConsultation = [];
  document.getElementById("chatHistory").innerHTML = "";
  document.getElementById("userQuestion").value = "";
}

// Envoi avec Entrée (Shift+Entrée pour saut de ligne)
document.addEventListener("DOMContentLoaded", function() {
  injecterStyles();
  var textarea = document.getElementById("userQuestion");
  if (textarea) {
    textarea.addEventListener("keydown", function(e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        envoyerQuestion();
      }
    });
  }
});