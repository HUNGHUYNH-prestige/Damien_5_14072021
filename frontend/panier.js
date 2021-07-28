console.log('ici le panier');

// reprendre le local storage
// reprendre les informations dans le local storage
let marchandise = JSON.parse(localStorage.getItem('panier'));
// afficher le contenu du local storage
console.log(marchandise);

let titre = document.createElement('h1');
titre.innerHTML = 'Vos choix sont ici';
titre.classList.add('h1');

// s'accrocher a un element HTML existant pour commencer
let panier = document.getElementById('products-panier');
panier.innerHTML = 'PAGE PANIER';
panier.appendChild(titre);

// PAGE PANIER
// Vos choix sont ici
// suivi de l'identite du produit en commencant par le nom

let recaptitulatif = document.createElement('article');
recaptitulatif.classList.add('recaptitulatif-panier-css');
panier.appendChild(recaptitulatif);

if (marchandise === null){
    console.log('panier vide : data null');
    let vide = document.createElement('div');
    vide.innerHTML = 'Le panier est vide';
    recaptitulatif.appendChild(vide);
    console.log(vide);
}else{
    console.log('panier rempli : data ok');

    let rien = [];

    for (unite = 0; unite < marchandise.length; unite++){

        //console.log(unite);
        //console.log(marchandise.length);
        //console.log(marchandise);
        //console.log(marchandise[unite].nom);
        
        //console.log(rien);

        rien = rien + 
        `<article class="container bg-info">
            <div class="panier-fiche">Fiche Produit</div>

                <div class="row d-flex justify-content-around">
                    <div class="panier-data">Nom du produit</div>
                    <div class="panier-data bg-warning">${marchandise[unite].nom}</div>
                </div>

                <div class="row d-flex justify-content-around">
                    <div class="panier-data">Prix du produit</div>
                    <div class="panier-data bg-warning">${marchandise[unite].prix}</div>
                </div>

                <div class="row d-flex justify-content-around">
                    <div class="panier-data">Quantite du produit</div>
                    <div class="panier-data bg-warning">${marchandise[unite].quantite}</div>
                </div>

                <div class="row d-flex justify-content-around">
                    <div class="row d-flex justify-content-around">Supprimer ce produit</div>
                    <i class="icone fas fa-trash bg-danger"></i>
                </div>

        </article>`;

        recaptitulatif.innerHTML = rien;

        //console.log(rien);
        //console.log(marchandise[unite].nom);

    }

    
}

// afficher les produits selectionnes par le client
// le code permet de mettre un message pour indiquer au client que le panier est vide
// lorsque le local storage est vide
// le code permet d'afficher tous les produits lorsqu'il y a des produits dans le local storage
// dans le local storage il y a le panier avec tous les articles choisis par le client

// fin de : afficher la liste des produits

// ---------------------
/*
comment mettre en place le bouton de suppression d'un article ?

penser a faire simple

ajouter un article en fin de tableau
et 
supprimer un article avec pop()
creer un bouton pour faire la suppression du dernier article
approfondir les connaissances sur les array
*/


