// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

// Sélection de la section fiche
const sectionFiches = document.querySelector(".fiches");

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
    if (article.disponibilite) {
        dispoElement.style.color='lightgreen';
    } else {
        dispoElement.style.color='red';  
    }
    // Création d'un élément "card"
    const pieceElement = document.createElement("article")
    
    // Rattachement des éléments dans la balise 'article'
    let elementsList = [
        imageElement,
        nomElement,
        prixElement,
        categorieElement,
        descriptionElement,
        dispoElement
    ]
    for (let element of elementsList) {
        pieceElement.appendChild(element);
    }

    // Rattachement de chaque article dans la section fiche
    sectionFiches.appendChild(pieceElement);
}


// Ajout des évènements sur les bouttons
const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", () => {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort((a,b) => {
        return a.prix - b.prix;
    });
    console.log(piecesOrdonnees);
});

const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", () => {
    
})