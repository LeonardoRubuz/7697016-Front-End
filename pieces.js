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

document.querySelector(".fiches").innerHTML = ""

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
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
    });
    console.log(piecesFiltrees);
});

// Bouton d'affichage par ordre décroissant
const boutonDecroissant = document.querySelector(".btn-decroissant");
boutonDecroissant.addEventListener("click", () => {
    const piecesDecroissant = Array.from(pieces);
    piecesDecroissant.sort((a,b) => {
        return b.prix - a.prix;
    });
    console.log(piecesDecroissant);
});

// Bouton d'affichage d'élément avec description
const boutonDescription = document.querySelector(".btn-description");
boutonDescription.addEventListener("click", () => {
    const piecesDescription = pieces.filter(function (piece) {
        return piece.description;
    });
    console.log(piecesDescription);
});

// Création de la liste des noms des pièces abordables
const noms = pieces.map(piece => piece.nom);
for (let i = pieces.length - 1 ; i >= 0; i--) {
    if (pieces[i].prix > 35) {
        noms.splice(i,1)
    }   
}

// Création de la liste des prix des pièces abordables
const prix = pieces.map(piece => piece.prix);
for (let i = pieces.length - 1 ; i >= 0; i--) {
    if (pieces[i].prix > 35) {
        prix.splice(i,1)
    }   
}

// Création de la liste d'éléments abordables
const elementsAbordables = document.createElement('ul');
// Ajout de chaque nom à la liste
for (let i = 0; i < noms.length; i++) {
    const nomElement = document.createElement('li');
    nomElement.innerText = noms[i] +' - ' + prix[i]+'€';
    elementsAbordables.appendChild(nomElement)
    
}

document.querySelector(".abordables").appendChild(elementsAbordables);