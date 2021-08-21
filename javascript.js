var quotes = [
  "Phrase 1",
  "Phrase 2",
  "Phrase 3"
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * 3)
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}

window.onload = newQuote; // Runs the function on click
