// recuperation des variable
var nom = document.getElementById("nom");
var valeur = document.getElementById("valeur");
var ecrire = document.getElementById("ecrire");
var lire = document.getElementById("lire");
var effacer = document.getElementById("effacer");
var reinit = document.getElementById("reinitialiser");
var place = document.getElementById("previsualisation")

// Utiliser "ecrire" pour stocker
ecrire.addEventListener("click", event=>{

  // variable pour valeurs
  var nomVal = nom.value;
  var valeurVal = valeur.value;
  // stocker
  localStorage.setItem("Nom",nomVal);
  // recuperer dans stock
  var nomStoc = localStorage.getItem("Nom");

  localStorage.setItem("Valeur",valeurVal);
  var valeurStoc = localStorage.getItem("Valeur");

})

// Utiliser "lire" pour afficher
lire.addEventListener("click", event=>{
  var afficheNom= localStorage.getItem("Nom");
  var afficheValeur= localStorage.getItem("Valeur");
  // var affiches= ++ Nom+Valeur;
  place.innerHTML+=afficheNom+" qui à pour valeur "+afficheValeur;
  // place.innerHTML= affiches;
})
