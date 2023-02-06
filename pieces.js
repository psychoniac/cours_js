// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

//creation de la variable article qui contient le contenu du json 
const article = pieces[1];
//creation des variables contenant les balises html
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
const imageElement = document.createElement("img");
imageElement.src = article.image;
//on rajoute un operateur nullish pour ajouter une valeur par défaut quand catégorie est vide
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "(pas de catégorie)";

//rajout d'un operateur ternaire pour creer un indicateur pour savoir si le produit est sup a 35e
const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;

//rajout de la partie description
const descriptionElement = document.createElement("p");
descriptionElement.innerText = article.description ?? "(Pas de description pour le moment)";

//rajout de la partie disponibilité
const disponibiliteElement = document.createElement("p");
disponibiliteElement.innerText = article.disponibilite ? "en stock" : "pas en stock";

//on creer la variable qui va contenir le contener des fiches produits
const fiches = document.querySelector(".fiches");
fiches.appendChild(nomElement);
fiches.appendChild(imageElement);
fiches.appendChild(prixElement);
fiches.appendChild(categorieElement);
fiches.appendChild(descriptionElement);
fiches.appendChild(disponibiliteElement);