var quotes = [
  "La thèse donne un sacré bonus!",
  "Lorsque les planètes sont nettes, il faut augmenter la focale.",
  "Un message spatial procure tant de bonheur!",
  "Quant un pulsar dégage l'orbite, mieux vaut s'éloigner!",
  "En concentrant son troisième oeil, on peut provoquer l'annulation d'une nova.",
  "L'effet des forces est avant tout une question de pression.",
  "Lorsque vous êtes tenté par un bel amas, n'hésitez pas à braquer votre téléscope!",
  "Durant ma carrière, j'ai obtenu la quote de bien des comètes.",
  "La théorie des super cubes a tendance à perturber les chercheurs.",
  "On a pas besoin d'une grosse auto pour observer l'écliptique.",
  "La méditation transcendentale ouvre l'accès au monde conique.",
  "Mes collègues et moi aimons contester nos particules.",
  "À bout de course, les objets stellaires finissent par s'arrêter.",
  "À force de butter, les hommes verront leurs mythes disparaître.",
  "La connaissance de la métaphysique couvre les Suisses.",
  "Pour observer le cosmos à la belle saison qui passe, les nuits paisibles posent problème.",
  "Aux Alliés, le bois va jusqu'au Doubs.",
  "J'ai toujours aimé la médecine naturelle. Si vous saviez ce que votre plante me fait...",
  "Les preuves sont sous les voutes de l'univers.",
  "Dans le vide, il est difficile de distinguer l'écho des sons.",
  "Après une grande découverte, faut-il faire le malin dans la cour ?",
  "Devant la taille de l'univers, on se sent abaissé par tant de grandeur.",
  "Dans un amas de nébuleuses, les shorts sont mauves.",
  "En radioastronomie, le son passe tellement vite qu'on risque de se briser la nuque.",
  "La plupart des gens se laissent abuser par les mythes de la science.",
  "Ce vaccin, quel sujet! Ne croyez pas ce que les médias vous disent.",
  "Acculé dans l'antre du laboratoire, un physicien doit rester concentré.",
  "Devant ton pulsar, entends-tu le glas qui vibre dans la tempête ?",
  "Appliquer le chiffre pi à la lune peut provoquer la chute d'un pape.",
  "Ces équations complexes sont tout de mon cru.",
  "Le modèle standard est une vision ridicule détestée.",
  "Dans les publications, attention au partage des faits !",
  "Quand il y a trop de touristes autour du téléscope, il faut y mettre des boules anti-mites.",
  "Le téléscope se pilote à l'aide d'une pâle d'un ampère-heure.",
  "Les suisses sont vachement calés en théorie des cordes.",
  "La théorie du tout? Aucun homme n'est jamais assez fort pour ce calcul.",
  "Quand je reçois des reviews, j'ai la trouille d'un mauvais coup.",
  "Content de son sort, l'astrophysicien retourne à ses pensées impénétrables.",
  "Avant, les partisans du big crunch se battaient, voilà qu'ils se taisent maintenant.",
  "Grâce à la théorie des champs, les mythes seront abolis.",
  "Avec une telle pub, ce sera une belle thèse !",
  "J'ai observé un bond quantique décalé dans le nuage d'Oort.",
  "À l'observatoire de Genève, tout le monde utilise le franglais.",
  "La proximité d'un quasar assymétrique risque de combler ce trou noir.",
  "La beauté d'un site dépend de son niveau vibratoire.",
  "Les sons courts émis par Saggitarius Alpha sont difficiles à entendre.",
  "L'aventure spatiale, c'est quérir des quêtes trop petites pour l'humanité.",
  "Vos doutes sur l'unité Bovis sont imprécis.",
  "Bob hésite à partager sa découverte. (Robert Oppenheimer, 1944)",
  "À la TAUP 2021 World Conference, les mythos se clashent, mais je sais que tout n'est que vibration.",
  "Pour la spectroscopie relativiste, les colonnes du téléscope doivent être branchées."
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length)
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}

window.onload = newQuote; // Runs the function on page load

function showHome(){
  document.getElementById("home").style.display = "block";
  document.getElementById("homebutton").classList.add('active');
  
  document.getElementById("horoscope").style.display = "none";
  document.getElementById("horoscopebutton").classList.remove('active');
  
  document.getElementById("bib").style.display = "none";
  document.getElementById("bibbutton").classList.remove('active');
  
  document.getElementById("article").style.display = "none";
  document.getElementById("articlebutton").classList.remove('active');
}

function showHoroscope(){
  document.getElementById("home").style.display = "none";
  document.getElementById("homebutton").classList.remove('active');
  
  document.getElementById("horoscope").style.display = "block";
  document.getElementById("horoscopebutton").classList.add('active');
  
  document.getElementById("bib").style.display = "none";
  document.getElementById("bibbutton").classList.remove('active');
  
  document.getElementById("article").style.display = "none";
  document.getElementById("articlebutton").classList.remove('active');
}

function showBib(){
  document.getElementById("home").style.display = "none";
  document.getElementById("homebutton").classList.remove('active');
  
  document.getElementById("horoscope").style.display = "none";
  document.getElementById("horoscopebutton").classList.remove('active');
  
  document.getElementById("bib").style.display = "block";
  document.getElementById("bibbutton").classList.add('active');
  
  document.getElementById("article").style.display = "none";
  document.getElementById("articlebutton").classList.remove('active');
}

function showArticle(){
  document.getElementById("home").style.display = "none";
  document.getElementById("homebutton").classList.remove('active');
  
  document.getElementById("horoscope").style.display = "none";
  document.getElementById("horoscopebutton").classList.remove('active');
  
  document.getElementById("bib").style.display = "none";
  document.getElementById("bibbutton").classList.remove('active');
  
  document.getElementById("article").style.display = "block";
  document.getElementById("articlebutton").classList.add('active');
}

