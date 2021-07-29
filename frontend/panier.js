console.log('ici le panier');

// reprendre le local storage
// reprendre les informations dans le local storage
let marchandise = JSON.parse(localStorage.getItem('marchandise'));
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


// si le local storage represente par marchandise est null donc vide
// alors afficher un message : le panier est vide
if (marchandise === null){
    console.log('panier vide : data null');
    let vide = document.createElement('div');
    vide.innerHTML = 'Le panier est vide';
    recaptitulatif.appendChild(vide);
    console.log(vide);
}
// si le local storage est rempli 
// alors marchandise non null
// marchandise est un array
else{
    console.log('panier rempli : data ok');    

    for (unite = 0; unite < marchandise.length; unite++){

        console.log(unite);
        console.log(marchandise.length);
        console.log(marchandise);
        console.log(marchandise[unite].nom);

        let contenu;
        
        contenu =
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

        recaptitulatif.innerHTML = contenu;

    }

    
}

