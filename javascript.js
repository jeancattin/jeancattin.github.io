var quotes = [
  "La thèse donne un sacré bonus!",
  "Lorsque les planètes sont nettes, il faut augmenter la focale.",
  "Un message spatial procure tant de bonheur!",
  "Quant un pulsar dégage l'orbite, mieux vaut s'éloigner!",
  "En concentrant son troisième oeil, on peut provoquer l'annulation d'une nova.",
  "L'effet des forces est avant tout une question de pression.",
  "Lorsque vous êtes tenté par un bel amas, n'hésitez pas à braquer votre téléscope!",
  "Durant ma carrière, j'ai obtenu la quote de bien des comètes.",
  "La théorie des super cubes m'a toujours semblé évidente.",
  "On a pas besoin d'une grosse auto pour observer l'écliptique."
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length)
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}

window.onload = newQuote; // Runs the function on page load


function showHome(){
  document.getElementById("home").style.display = "block";
  document.getElementById("homebutton").classList.add('active');
  
  document.getElementById("bib").style.display = "none";
  document.getElementById("bibbutton").classList.remove('active');
  
  document.getElementById("article").style.display = "none";
  document.getElementById("articlebutton").classList.remove('active');
}

function showBib(){
  document.getElementById("home").style.display = "none";
  document.getElementById("homebutton").classList.remove('active');
  
  document.getElementById("bib").style.display = "block";
  document.getElementById("bibbutton").classList.add('active');
  
  document.getElementById("article").style.display = "none";
  document.getElementById("articlebutton").classList.remove('active');
}

function showArticle(){
  document.getElementById("home").style.display = "none";
  document.getElementById("homebutton").classList.remove('active');
  
  document.getElementById("bib").style.display = "none";
  document.getElementById("bibbutton").classList.remove('active');
  
  document.getElementById("article").style.display = "block";
  document.getElementById("articlebutton").classList.add('active');
}

