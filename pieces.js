// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

// Création des éléments
for (let i = 0; i < pieces.length; i++) {
    
    const article = pieces[i];
    const imageElement = document.createElement("img");
    imageElement.src = article.image;
    imageElement.alt = "Une image";

    const nomElement = document.createElement('h2');
    nomElement.innerText = article.nom;

    const prixElement = document.createElement('p');
    prixElement.innerText  = `Prix: ${article.prix} (${article.prix < 35 ? "€" : "€€€"})`;

    const categorieElement = document.createElement("p");
    categorieElement.innerText = article.categorie ?? "(aucune catégorie)";

    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description ?? "(Pas de description pour le moment)";

    const dispoElement = document.createElement("p");
    dispoElement.innerText = `${article.disponibilite ? "En stock" : "Rupture de stock"}`;
    
    // Création d'un élément "card"
    const pieceElement = document.createElement("article")
    
    // Rattachement des éléments dans le document
    
}

const sectionFiches = document.querySelector(".fiches");
let elementsList = [
    imageElement,
    nomElement,
    prixElement,
    categorieElement,
    descriptionElement,
    dispoElement
]
for (let element of elementsList) {
    sectionFiches.appendChild(element);
}