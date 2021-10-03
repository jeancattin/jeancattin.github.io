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
	
	  var det0 = [" pourrait être  ", " est probablement ", " est ", " deviendra "];
	  var nn1 = ["un moment ", "une période ", "un mois ", "un point "];
    var adj1 = ["intriguant ", "spécial ", "unique ", "compliqué ", "peu ordinaire ", "intimidant ", "cruciale ", "confus "];
    var nn1_2 = ["dans ta vie, ", "pour toi, ", "dans ton existance, ", "cette année, "];
    var conj1 = ["en résultat ", "à cause ", "à la suite ", "en conséquence "];
    var det1 = ["de plusieurs ", "de beaucoup ", "d'un soupçon ", "d'un certain nombre "];
    var nn2 = ["d'événements ", "d'occurrences ", "d'incidents ", "d'incidents ", "de coincidences "];
    var det1_2 = ["qui pourrait ", "qui va ", "pouvant potentiellement ", ];
    var vb1 = ["te troubler ", "te déranger ", "te perturber ", "te boulverser ", "te déstabiliser ", "t'embèter ", "t'intimider "];
    var det2 = ["d'abord, ", "initialement, ", "pour un moment, ", "quelques jours, ", "temporairement, ", "momentanément, "];
    var vb2 = ["attendre ", "trouver ", "anticiper "];
    var adj2 = ["beaucoup ", "un sentiment ", "suffisamment ", "significatif ", "au moins un peu ", "un besoin urgent "];
    var nn3 = ["de soulagement ", "de confort ", " de support ", "d'affection ", "de bonheur "];
    var det3 = ["plus tard. ", "bientôt. ", "à un certain moment ", "plus tard. ", "vers la fin du mois. ", "plus tôt que tu t'y attends. "];
    var det4 = ["Néanmoins, ", "Cependant, ", "Par contre, ", "Ceci dit, ", "Mais encore, ", "Toutefois, ", "Malgré ça, ", "Après, "];
    var vb2_2 = ["il faut ", "tu devrais ", "n'oublies pas de "];
    var vb3 = ["garder à l'esprit ", "te souvenir ", "reconnaitre ", "admettre "];
    var nn4 = [" ce changements ", "cette évolution ", " ces developpements ", "cette transition ", "ce remous ", "ce retournement ", "ce tournant ", "cette perturbation "];
    var adj3 = ["rapide ", "inattendu ", "prompt ", "turbulent ", "instable ", "soudain "];
    var vb4 = ["cause ", "provoque ", "crée ", "produit ", "te laisse vulnérable à ", "t'ouvre à ", "te rend susceptible à ", "t'amène ", "te cause ", "induit ", "précipite ", "engendre "];
    var nn5 = ["des changements d'humeur. ", "de la confusion. ", "de la mauvaise humeur. ", "une agitation. ", "une nervosité. ", "un état alarmé. ", "une anxiété. ", "de l'inquiétude. ", "du stress. "];
    var vb5 = ["amène ", "signifie ", "permet ", "facilite ", "est favorable à ", ("peut être  " + random(nn1) + "pour " ), "pourrait convenir à "];
    var nn6 = ["des opportunités ", "des débuts ", "des entreprises ", "plusieurs projets ", "des options ", "des choix ", "des alternatives "];
    var adj4 = ["nouveaux ", "frais ", "innovants ", "intriguants ", "prometteurs ", "inspirants "];
    var det5 = ["en rapport avec ", "en ce qui concerne ", "concernant "];
    var nn7 = ["le business ", "l'argent ", "les finances ", "la créativité ", "le travail ", "le marché du travail ", "ta vie professionnelle "];
    var nn8 = ["l'amour. ", "une romance. ", "l'amitié. ", "la vie sociale. ", "ton réseau. ", "rencontrer des nouvelles personnes. "];
    var det6 = ["Peut-être ", "Probablement ", "Certainement ", "Sans doutes ", "Possiblement"];
    var vb6 = ["penser à ", "garder à l'esprit ", "considèrer ", "réfléchir à ", "essaier de te décider à "];
    var nn9 = ["tes options. ", "tes choix. ", "tes alternatives. ", "ton plan d'action. ", "ton future. ", "ton avenir. ", "ton prochain objectif. "];
    var vb7 = ["ne deviens pas ", "ne te sens pas ", "ne sois pas "];
    var det7 = ["trop ", "excessivement ", "irrésonablement ", "excessivement "];
    var adj5 = ["hésitant ", "confus ", "indécis ", "certain ", "sceptique ", "réluctant "];

	
	function makeHoroscope() {
			var finalvar = (month + random(det0) + random(nn1) + random(adj1) + random(nn1_2) + random(conj1) + random(det1) + random(nn2) + random(det1_2) + random(vb1) + random(det2) + "néanmoins, tu peux " + random(vb2) + random(adj2) + random(nn3) + random(det3) + random(det4) + random(vb2_2) + random(vb3) + "que " + random(nn4) + random(adj3) + random(vb4) + random(nn5) + "\n\n" + random(det4) + month + " " + random(vb5) + "aussi " + random(nn6) + random(adj4) + random(det5) + random(nn7) + "ou " + random(nn8) + random(det6) + "vas-tu " + random(vb6) + random(nn9) + random(det4) + random(vb7) + random(det7) + random(adj5) + "à ce propos!");
			
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