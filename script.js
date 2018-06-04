var couleur = document.getElementById("couleur");
var choix = document.getElementById("choix");
var bouton = document.getElementById("bouton");
bouton.addEventListener("click", event =>{
  var couleurValide = couleur.value;
  var choixValide = choix.value;
localStorage.setItem("Couleur", couleurValide);
localStorage.setItem("Choix", choixValide);
  window.location = "page2.html";
  document.write(localStorage.getItem("Couleur")+" "+localStorage.getItem("Choix"));
});
//
// var bouton2 = document.getElementById("bouton2");
// bouton2.addEventListener("click", compte =>{
//
// })

// var clic = document.getElementById("nbreClic");
var bouton2 = document.getElementById("bouton2");
var compteur = 0;
bouton2.addEventListener("click", event =>{
  var compteurs = ++compteur;
localStorage.setItem("nbre", compteurs);
var Nbre = localStorage.getItem("nbre");
var Clic = document.getElementById("clic");
Clic.innerHTML = Nbre;
})
