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
    var a7 = ["la lune ", "le Soleil ", "Mercure " , "Vénus ", "la Terre ", "Mars ", "Jupiter ", "Saturne ", "Uranus ", "Neptune ", "Pluton ", "Saggitarius alpha "];
    var a8 = ["avec ", "et ", "qui est parallèle à "];
    var a9 = [ "Andromède", "la nébuleuse de la Verge", "le nuage du sceptre", "l'oeil de l'ours", "Cérès","Les Alliés", "Pontarlier", "le trou noir du milieu", "le mont de Vénus", "la constellation de l'Ithyphalle "];
    var a10 = ["car les ", "puisque les ", "étant donné que les ", "vu que les "];
    var a11 = ["sont sensibles à ", "ressentent l'influence de ", "ont leur karma aligné avec ", "ont une énergie similaire à ", "résonnent bien avec ", "ont une super relation avec "];
    
    var b1 = ["Ceci résulte en ", "Il en découle ", "Cela implique "];
    var b2 = ["plusieurs ", "beaucoup ", "un soupçon ", "un certain nombre "];
    var b3 = ["d'événements ", "d'occurrences ", "d'incidents ", "d'incidents ", "de coincidences "];
    var b4 = ["qui pourrait ", "qui va ", "pouvant potentiellement ", ];
    var b5 = ["te troubler ", "te déranger ", "te perturber ", "te boulverser ", "te déstabiliser ", "t'embèter ", "t'intimider "];
    var b6 = ["d'abord, ", "initialement, ", "pour un moment, ", "quelques jours, ", "temporairement, ", "momentanément, "];
    var b7 = ["attendre ", "trouver ", "anticiper "];
    var b8 = ["beaucoup ", "un sentiment ", "suffisamment ", "une quantité significative ", "au moins un peu ", "un besoin urgent ", "une arrivée imprévue ", "un tout petit peu "];
    var b9 = ["de soulagement ", "de confort ", " de support ", "d'affection ", "de bonheur ", "de ras le bol"];
    var b10 = ["plus tard. ", "bientôt. ", "à un certain moment ", "plus tard. ", "vers la fin du mois. ", "plus tôt que tu ne t'y attends. ", "dans pas longtemps. "];
    
    var c1 = ["Néanmoins, ", "Cependant, ", "Par contre, ", "Ceci dit, ", "Mais encore, ", "Toutefois, ", "Malgré ça, ", "Après, ", "Note que "];
    var c2 = ["il faut ", "tu devrais ", "n'oublies pas de "];
    var c3 = ["garder à l'esprit ", "te souvenir ", "reconnaitre ", "admettre "];
    var c4 = [" ce changements ", "cette évolution ", " ces developpements ", "cette transition ", "ce remous ", "ce retournement ", "ce tournant ", "cette perturbation "];
    var c5 = ["rapide ", "inattendu ", "prompt ", "turbulent ", "instable ", "soudain "];
    var c6 = ["cause ", "provoque ", "crée ", "produit ", "te laisse vulnérable à ", "t'ouvre à ", "te rend susceptible à ", "t'amène ", "te cause ", "induit ", "précipite ", "engendre "];
    var c7 = ["des changements d'humeur. ", "de la confusion. ", "de la mauvaise humeur. ", "une agitation. ", "une nervosité. ", "un état alarmé. ", "une anxiété. ", "de l'inquiétude. ", "du stress. ", "des douleurs testiculaires. ", "des douleurs testiculaires. "];
    
    var d01 = ["Puisque le ", "Comme le ", "Vu que le ", "Le ", "Un "];
    var d02 = ["est connu pour avoir ", "a ", "est sujet à ", "peut avoir ", "a presque toujours ", "reçoit souvent ", "pourrait observer ", "n'a presque jamais "];
    var d03 = ["un coup de pouce du destin, ", "des difficultés mineures, ", "un karma fluctuant, ", "une énergie troublée, ", "des problèmes d'érection, ", "des problèmes d'érection, ", "des ennuis informatiques, ", "une petite douleure à l'oreille gauche, ", "une amitié problématique, "];
    var d04 = ["cette période ", "ce mois ", "ces prochaines semaines ", "le futur proche "];
    var d1 = ["amène ", "signifie ", "permet ", "facilite ", "est favorable à ", "pourrait convenir à "];
    var d2 = ["des opportunités ", "des débuts ", "des entreprises ", "plusieurs projets ", "des options ", "des choix ", "des alternatives "];
    var d3 = ["nouveaux ", "frais ", "innovants ", "intriguants ", "prometteurs ", "inspirants "];
    var d4 = ["en rapport avec ", "en ce qui concerne ", "concernant "];
    var d5 = ["le business ", "le cours du bitcoin ", "ta prochaine 7B+ ", "tes beaux parents ", "le travail ", "tes collègues chiants ", "ta vie professionnelle ", "le truc qui te gratte derrière la glotte ", "ton dernier rêve dont tu ne te rappelles plus "];
    var d6 = ["l'amour. ", "un séance de grimpe. ", "l'amitié. ", "le prochain scandale 20 minutes. ", "ton réseau . "];
    
    var e1 = ["Peut-être ", "Probablement ", "Certainement ", "Sans doutes ", "Possiblement "];
    var e2 = ["penser à ", "considèrer ", "réfléchir à ", "essaier de te décider à "];
    var e3 = ["ton régime detox. ", "rééquilibrer ton karma.", "harmoniser tes énergies.", "lever les yeux au ciel.", "nettoyer ton téléscope.", "téléphoner à un ami."];
    var e4 = ["ne deviens pas ", "ne te sens pas ", "ne sois pas "];
    var e5 = ["trop ", "excessivement ", "irrésonablement ", "excessivement "];
    var e6 = ["hésitant ", "confus ", "indécis ", "certain ", "sceptique ", "réluctant ", "motivé"];

	
	function makeHoroscope(signe) {
			var finalvar = (month + random(a1) + random(a2) + random(a3) + random(a4) + random(a5) + random(a6) + random(a7) + random(a8) + random(a9) + ", " + random(a10) + signe + " " + random(a11) + random(a9) + ". " + 
			random(b1) + random(b2) + random(b3) + random(b4) + random(b5) + random(b6) + "néanmoins, tu peux " + random(b7) + random(b8) + random(b9) + random(b10) + 
			random(c1) + random(c2) + random(c3) + "que " + random(c4) + random(c5) + random(c6) + random(c7) + "<br><br/>" + 
			random(d01) + signe + " en " + month + " " + random(d02) + random(d03) + random(d04) + random(d1) + random(d2) + random(d3) + random(d4) + random(d5) + "ou " + random(d6) + 
			random(e1) + "devrais-tu " + random(e2) + random(e3) + " Mais " + random(e4) + random(e5) + random(e6) + "à ce propos!");
			
//			return(finalvar)
			document.getElementById("quoteHoroscope").innerHTML = finalvar;
}


function belier(){makeHoroscope(signe="bêlier")}
function taureau(){makeHoroscope(signe="taureau")}
function gemeau(){makeHoroscope(signe="gemeau")}
function cancer(){makeHoroscope(signe="cancer")}
function lion(){makeHoroscope(signe="lion")}
function vierge(){makeHoroscope(signe="vierge")}
function balance(){makeHoroscope(signe="balance")}
function scorpion(){makeHoroscope(signe="scorpion")}
function sagittaire(){makeHoroscope(signe="sagittaire")}
function capricorne(){makeHoroscope(signe="capricorne")}
function verseau(){makeHoroscope(signe="verseau")}
function poisson(){makeHoroscope(signe="poisson")}
		

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