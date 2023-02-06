// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

//creation de la variable article qui represente le contenu du json(pieces autos) 
const article = pieces[1];

//creation des balises html qui vont recevoir les differents elements
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
const imageElement = document.createElement("img");
imageElement.src = article.image;

//on rajoute un operateur nullish pour ajouter une valeur par défaut quand catégorie est vide
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "(pas de catégorie)";

//on rajoute un operateur ternaire pour creer un indicateur qui indique si le prix du produit est > a 35e
const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;

//on rajoute une balise p qui va contenir la description de l'element
//on gere le cas ou il n'a pas de desciption en ajoutant un operateur nullish 
const descriptionElement = document.createElement("p");
descriptionElement.innerText = article.description ?? "(Pas de description pour le moment)";

//on cree une balise p qui va contenir la partie disponibilité
//on ajoute un operateur ternaire qui definira si le produit est en stock ou pas?
const disponibiliteElement = document.createElement("p");
disponibiliteElement.innerText = article.disponibilite ? "en stock" : "pas en stock";

//on creer la variable qui va contenir le contener des fiches produits
const fiches = document.querySelector(".fiches");

//on relie les differents elements a leur contener parents
fiches.appendChild(nomElement);
fiches.appendChild(imageElement);
fiches.appendChild(prixElement);
fiches.appendChild(categorieElement);
fiches.appendChild(descriptionElement);
fiches.appendChild(disponibiliteElement);
