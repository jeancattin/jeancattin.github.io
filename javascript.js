var quotes = [
  "L'alignement de Neptune et Vénus avec le champ magnétique terrestre signifie une période propice pour détoxifier votre foie.",
  "Cet espace silencieux entre vos pensées est votre fenêtre sur l'esprit cosmique. (Deepak Chopra)",
  "Votre corps forme un tout indissociable avec l'univers. Quand il est en parfaite santé et intact, vous vous sentez en expansion. (Deepak Chopra)",
  "Ta gueule, c'est quantique! ",
  "Si, en regardant le ciel, vous voyez quatre étoiles formant un carré, c'est qu'il est l'heure de se taire.",
  "Le téléscope n'est qu'un outil servant à projeter la conscience au travers du temps et de l'espace."
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * 3)
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}

window.onload = newQuote; // Runs the function on page load
