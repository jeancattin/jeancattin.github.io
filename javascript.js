var quotes = [
  "La thèse donne un sacré bonus!",
  "Lorsque les planètes sont nettes, il faut un plus gros téléscope.",
  "Un message spatial procure tant de bonheur!",
  "Quant un pulsar dégage l'orbite, mieux vaut s'éloigner!",
  "En concentrant son troisième oeil, on peut provoquer l'annulation d'une nova.",
  "L'effet des forces est avant tout une question de pression.",
  "Lorsque vous êtes tenté par un bel amas, n'hésitez pas à braquer votre téléscope!",
  "La quote de bien des comètes forment des courbes harmonieuses.",
  "La théorie des super cubes m'a toujours semblé évidente.",
  "On a pas besoin d'une grosse auto pour observer l'écliptique."
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * 3)
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}

window.onload = newQuote; // Runs the function on page load
