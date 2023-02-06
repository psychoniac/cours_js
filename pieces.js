// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

//creation de la variable article qui contient le contenu du json 
const article = pieces[0];
//creation des variables contenant les balises html
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
const imageElement = document.createElement("img");
imageElement.src = article.image;
const prixElement = document.createElement("p");
prixElement.innerText = 'Prix : ${article.prix} euro';
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie;

