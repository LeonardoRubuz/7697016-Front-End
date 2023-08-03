// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

// Création des éléments
const article = pieces[0];
const imageElement = document.createElement("img");
imageElement.src = article.image;
imageElement.alt = "Une image";

const nomElement = document.createElement('h2');
nomElement.innerText = article.nom;

const prixElement = document.createElement('p');
prixElement.innerText  = `Prix: ${article.prix} (${article.prix < 35 ? "€" : "€€€"})`;

const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";

// Rattachement des éléments dans le document

const sectionFiches = document.querySelector(".fiches");
let elementsList = [
    imageElement,
    nomElement,
    prixElement,
    categorieElement
]
for (let element of elementsList) {
    sectionFiches.appendChild(element);
}