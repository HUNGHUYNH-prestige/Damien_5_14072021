console.log('ici le panier');

// reprendre le local storage
// reprendre les informations dans le local storage
let marchandise = JSON.parse(localStorage.getItem('marchandise'));
// afficher le contenu du local storage
console.log(marchandise);

// GET THE ID ELEMENT TO ATTACH THING
let panier = document.getElementById('products-panier');
panier.innerHTML = 'ICI le PANIER';

// get the data from the local storage

function afficherLocalStorage(){
    if (marchandise === null || marchandise.length === 0){

        let attention = document.createElement('h3');
        attention.classList.add('h3');
        attention.innerHTML = 'ATTENTION : PANIER VIDE';
        panier.appendChild(attention);

        let avertissement = confirm('OK pour Home\nANNULER pour rester');
        if (avertissement == true){
            window.location.href = 'index.html';
        }

        let disabled = document.getElementById('fieldset');
        //disabled.classList.add('disabled');
        disabled.setAttribute('disabled','');

    }
    else {

        let resume = document.createElement('div');
        panier.appendChild(resume);
        sommeDesArticlesDansLePanier();
        resume.innerHTML = 'Panier avec un ';

        viderLaListeDesArticles();

        recapitulatifDesProduitsDansLePanier();



        

    }

}


function sommeDesArticlesDansLePanier(){
    //console.log('faire la somme des articles dans le panier');

    let total = 0;
    if (marchandise != null || marchandise != 0){
        let vide = document.createElement('div');
        for (nombre = 0 ; nombre < marchandise.length ; nombre++){

            let quantite = marchandise[nombre].quantite;
            total = total + quantite;

            /*
            console.log(marchandise.length);
            console.log(marchandise[nombre]);
            console.log(marchandise[nombre].quantite);
            console.log('total : ' + total);
            */
            
        }
        
        vide.innerHTML = 'Total des articles = ' + total;
        panier.appendChild(vide);
        //return total;
    }

}



function viderLaListeDesArticles(){
    let vider = document.createElement('button');
    vider.classList.add('btn');
    vider.classList.add('btn-primary');
    vider.classList.add('bouton-vider-liste');
    vider.innerHTML = 'Vider la liste';
    panier.appendChild(vider);

    vider.addEventListener('click', viderTout);

}

function viderTout(propre){
    propre.preventDefault();
    alert('ATTENTION : vider le panier ! et direction HOME');
    localStorage.removeItem('marchandise');
    window.location.href = 'index.html';

}

function recapitulatifDesProduitsDansLePanier(){
    console.log('recapitulatif des produits dans le panier');

    for (unite = 0 ; unite < marchandise.length ; unite++){
        //console.log(unite);
        //console.log(marchandise.length);
        //console.log(marchandise[unite]);

        
        /*
        let article = marchandise[unite];
        console.log(article);
        console.log(marchandise[unite]);
        */

        let boite = document.createElement('div');
        boite.classList.add('row');
        boite.classList.add('d-flex');
        boite.classList.add('boite');
        panier.appendChild(boite);
        

        let nom = document.createElement('div');
        nom.classList.add('information');
        //nom.innerHTML = 'Nom de l\'article : ' + marchandise[unite]['nom'];
        boite.appendChild(nom);

        let quantite = document.createElement('div');
        quantite.classList.add('information');
        //quantite.innerHTML = 'Nombre de cet article : ' + marchandise[unite]['quantite'];
        boite.appendChild(quantite);

        // jusqu'ici tout est ok
        // reprendre sur le bouton + et -
        // fonction total du panier problem de nan
        

        


        
    }
    
}

// fonction pour faire la somme totale des articles dans le panier : prix unitaire x nombre d'articles dans la panier


function totalDuPanier(){
    let total = 0;
    
    for (nombre = 0; nombre < marchandise.length ; nombre++){

        let prix = marchandise[nombre].prix;
        let quantite = marchandise[nombre].quantite;

        let total = total + (prix * quantite);
        
        console.log(prix);
        console.log(quantite);
        console.log(total);
    }
    return total;
    
}

totalDuPanier();



// call the main function

afficherLocalStorage();