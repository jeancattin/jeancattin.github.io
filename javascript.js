var quotes = [
  "L'alignement de Neptune et Vénus avec le champ magnétique terrestre signifie une période propice pour détoxifier votre foie. \n(Martin Millon)",
  "Cet espace silencieux entre vos pensées est votre fenêtre sur l'esprit cosmique. (Deepak Chopra)",
  "Votre corps forme un tout indissociable avec l'univers. Quand il est en parfaite santé et intact, vous vous sentez en expansion. (Deepak Chopra)",
  "Ta gueule, c'est quantique! (Martin Millon)"
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * 3)
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}

window.onload = newQuote; // Runs the function on page load
