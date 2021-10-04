	var d = new Date();
	var m = d.getMonth();
	var allMonths = ["Janvier", "Février",
                "Mars", "Avril", "Mai", "Juin", "Juillet",
                "Aout", "Septembre", "Octobre", "Novembre",
                "Décembre"];
	var month = allMonths[m];
	
	var x, y;
    function random (z) {
        x = Math.floor(Math.random() * z.length);
        y = Math.floor(x);
        return z[y];
    }
	
	  var a1 = [" pourrait être  ", " est probablement ", " est ", " deviendra "];
	  var a2 = ["un moment ", "une période ", "un mois ", "un point "];
    var a3 = ["intriguant ", "spécial ", "unique ", "compliqué ", "peu ordinaire ", "intimidant ", "cruciale ", "confus "];
    var a4 = ["dans ta vie, ", "pour toi, ", "dans ton existance, ", "cette année, "];
    var a5 = ["en résultat ", "à cause ", "à la suite ", "en conséquence "];
    var a6 = ["d'une conjonction entre ", "d'un alignement entre ", "de la résonnance entre ", "d'une vibration entre ", "une analogie entre "];
    var a7 = ["la lune ", "le Soleil ", "Mercure " , "Vénus ", "la Terre ", "Mars ", "Jupiter ", "Saturne ", "Uranus ", "Neptune ", "Pluton "];
    var a8 = ["avec ", "et ", "qui est parallèle à "];
    var a9 = [ "Andromède. ", "la nébuleuse de la Verge. ", "le nuage du sceptre. ", "l'oeil de l'ours. ", "Cérès. ","Les Alliés. ", "Pontarlier. "];
    
    var b1 = ["Ceci résulte en ", "Il en découle ", "Cela implique "];
    var b2 = ["plusieurs ", "beaucoup ", "un soupçon ", "un certain nombre "];
    var b3 = ["d'événements ", "d'occurrences ", "d'incidents ", "d'incidents ", "de coincidences "];
    var b4 = ["qui pourrait ", "qui va ", "pouvant potentiellement ", ];
    var b5 = ["te troubler ", "te déranger ", "te perturber ", "te boulverser ", "te déstabiliser ", "t'embèter ", "t'intimider "];
    var b6 = ["d'abord, ", "initialement, ", "pour un moment, ", "quelques jours, ", "temporairement, ", "momentanément, "];
    var b7 = ["attendre ", "trouver ", "anticiper "];
    var b8 = ["beaucoup ", "un sentiment ", "suffisamment ", "une quantité significative ", "au moins un peu ", "un besoin urgent ", "une arrivée imprévue ", "un tout petit peu "];
    var b9 = ["de soulagement ", "de confort ", " de support ", "d'affection ", "de bonheur "];
    var b10 = ["plus tard. ", "bientôt. ", "à un certain moment ", "plus tard. ", "vers la fin du mois. ", "plus tôt que tu t'y attends. "];
    
    var c1 = ["Néanmoins, ", "Cependant, ", "Par contre, ", "Ceci dit, ", "Mais encore, ", "Toutefois, ", "Malgré ça, ", "Après, ", "Note que "];
    var c2 = ["il faut ", "tu devrais ", "n'oublies pas de "];
    var c3 = ["garder à l'esprit ", "te souvenir ", "reconnaitre ", "admettre "];
    var c4 = [" ce changements ", "cette évolution ", " ces developpements ", "cette transition ", "ce remous ", "ce retournement ", "ce tournant ", "cette perturbation "];
    var c5 = ["rapide ", "inattendu ", "prompt ", "turbulent ", "instable ", "soudain "];
    var c6 = ["cause ", "provoque ", "crée ", "produit ", "te laisse vulnérable à ", "t'ouvre à ", "te rend susceptible à ", "t'amène ", "te cause ", "induit ", "précipite ", "engendre "];
    var c7 = ["des changements d'humeur. ", "de la confusion. ", "de la mauvaise humeur. ", "une agitation. ", "une nervosité. ", "un état alarmé. ", "une anxiété. ", "de l'inquiétude. ", "du stress. "];
    
    var d1 = ["amène ", "signifie ", "permet ", "facilite ", "est favorable à ", "pourrait convenir à "];
    var d2 = ["des opportunités ", "des débuts ", "des entreprises ", "plusieurs projets ", "des options ", "des choix ", "des alternatives "];
    var d3 = ["nouveaux ", "frais ", "innovants ", "intriguants ", "prometteurs ", "inspirants "];
    var d4 = ["en rapport avec ", "en ce qui concerne ", "concernant "];
    var d5 = ["le business ", "l'argent ", "les finances ", "la créativité ", "le travail ", "le marché du travail ", "ta vie professionnelle "];
    var d6 = ["l'amour. ", "une romance. ", "l'amitié. ", "la vie sociale. ", "ton réseau. ", "rencontrer des nouvelles personnes. "];
    
    var e1 = ["Peut-être ", "Probablement ", "Certainement ", "Sans doutes ", "Possiblement "];
    var e2 = ["penser à ", "garder à l'esprit ", "considèrer ", "réfléchir à ", "essaier de te décider à "];
    var e3 = ["tes options. ", "tes choix. ", "tes alternatives. ", "ton plan d'action. ", "ton future. ", "ton avenir. ", "ton prochain objectif. "];
    var e4 = ["ne deviens pas ", "ne te sens pas ", "ne sois pas "];
    var e5 = ["trop ", "excessivement ", "irrésonablement ", "excessivement "];
    var e6 = ["hésitant ", "confus ", "indécis ", "certain ", "sceptique ", "réluctant "];

	
	function makeHoroscope() {
			var finalvar = (month + random(a1) + random(a2) + random(a3) + random(a4) + random(a5) + random(a6) + random(a7) + random(a8) + random(a9) + "<br><br/>" + 
			random(b1) + random(b2) + random(b3) + random(b4) + random(b5) + random(b6) + "néanmoins, tu peux " + random(b7) + random(b8) + random(b9) + random(b10) + "<br><br/>" + 
			random(c1) + random(c2) + random(c3) + "que " + random(c4) + random(c5) + random(c6) + random(c7) + "<br><br/>" + 
			month + " ammène aussi " + random(d1) + "aussi " + random(d2) + random(d3) + random(d4) + random(d5) + "ou " + random(d6) + "<br><br/>" + 
			random(e1) + "vas-tu " + random(e2) + random(e3) + "Donc " + random(e4) + random(e5) + random(e6) + "à ce propos!");
			
//			return(finalvar)
			document.getElementById("quoteHoroscope").innerHTML = finalvar;
}
		
		

//window.onload = makeHoroscope; // Runs the function on page load

/*
// set up text to print, each item in array is new line
var aText = makeHoroscope();
var iSpeed = 10; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 var destination = document.getElementById("typedtext");
 
 //while ( iRow < iIndex ) {
 // sContents += aText[iRow++] + '<br />';
 //}
 destination.innerHTML = aText.substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();
*/