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
    //console.log('recapitulatif des produits dans le panier');

    for (unite = 0 ; unite < marchandise.length ; unite++){
        /*
        console.log(unite);
        console.log(marchandise.length);
        console.log(marchandise[unite]);
        console.log(marchandise[unite].quantite);
        */

        
        /*
        let article = marchandise[unite];
        console.log(article);
        console.log(marchandise[unite]);
        */

        let boite = document.createElement('div');
        boite.classList.add('boite');
        panier.appendChild(boite);
        

        let nom = document.createElement('div');
        nom.classList.add('information');
        nom.innerHTML = 'Nom de l\'article : ' + marchandise[unite]['nom'];
        boite.appendChild(nom);

        let controle = document.createElement('div');
        controle.classList.add('d-flex');
        controle.classList.add('controle-quantite');
        boite.appendChild(controle);

        // mettre dans le controle la quantite
        let quantite = document.createElement('div');
        quantite.classList.add('information');
        quantite.innerHTML = 'Nombre de cet article : ' + marchandise[unite]['quantite'];
        controle.appendChild(quantite);

        // mettre dans le controle le - pour retirer
        let moins = document.createElement('button');
        moins.classList.add('btn');
        moins.classList.add('btn-primary');
        moins.innerHTML = '-';
        controle.appendChild(moins);

        let plus = document.createElement('button');
        plus.classList.add('btn');
        plus.classList.add('btn-primary');
        plus.innerHTML = '+';
        controle.appendChild(plus);

        // decision : affiche le prix et la poubelle
        let decision = document.createElement('div');
        decision.classList.add('information');
        
        boite.appendChild(decision);

        // effectuer une conversion du string en number pour le prix de marchandise
        let entier = parseInt(marchandise[unite].prix);
        //console.log(typeof entier);
        
        // par produit le prix total
        let totalArticle = (marchandise[unite].quantite * entier);
        // entier = marchandise[unite].prix

        /*
        console.log(typeof marchandise);
        // marchandise = object

        console.log(typeof marchandise[unite].quantite);
        // marchandise[unite].quantite = number

        console.log(typeof marchandise[unite].prix);
        // marchandise[unite].prix = string
        */
        
        let prixTotalParProduit = document.createElement('div');
        prixTotalParProduit.classList.add('prix-pour-cet-article');
        prixTotalParProduit.innerHTML = 'Prix total pour cet article : ' + totalArticle + ' euros';
        decision.appendChild(prixTotalParProduit);

        let poubelle = document.createElement('button');
        poubelle.classList.add('text-center');
        poubelle.innerHTML = 'SUPPRIMER CET ARTICLE !';
        decision.appendChild(poubelle);
        
        moins.addEventListener('click', function(){
            console.log('retirer un article');
            console.log(marchandise);

            index = marchandise.indexOf(marchandise);
            console.log(index);

            for (unite = 0 ; unite < marchandise.length ; unite++){
                
            }

            



            /*
            for (unite = 0 ; unite < marchandise.length ; unite++){
                console.log(marchandise[unite].quantite);
                marchandise[unite].quantite--;
                localStorage.setItem('marchandise', JSON.stringify(marchandise));

                console.log(marchandise[unite].quantite);     
            }
            window.location.reload();

            if (marchandise[unite].quantite == 0){
                console.log('vider vider vider');
                

                marchandise.splice(index,1);
                console.log(marchandise.splice(index,1));
                console.log(marchandise);

                localStorage.setItem('marchandise', JSON.stringify(marchandise));

                alert('Retirer article du panier !');

                window.location.reload();
            }

            */

            

            
            


        });


        //plus.addEventListener('click', ajouterUnArticle(marchandise[unite]));

        //poubelle.addEventListener('click', supprimerUnArticle(marchandise[unite]));
        
    }

    sommeDeTousLesArticlesDansLePanier();

    let sommeFinalTotal = ligneTotal + ' euros';
    /*
    console.log(typeof marchandise[0]);
    console.log(typeof marchandise.quantite);
    console.log(typeof sommeFinalTotal);
    */
    let finalTotal = document.createElement('div');
    finalTotal.classList.add('text-center');
    finalTotal.innerHTML = 'LE PANIER TOTAL EST DE : ' + sommeFinalTotal;
    panier.appendChild(finalTotal);
    
}

// faire la somme de tous les articles dans le panier
function sommeDeTousLesArticlesDansLePanier(){
    //console.log('somme de tous les articles dans le panier');
    for (indice in marchandise){
        
        article = marchandise[indice];
        ligneTotal = ligneTotal + (parseInt(marchandise[indice].prix)*marchandise[indice].quantite);
        
    }
    return ligneTotal;
   
}




// call the main function
// definir la ligne total qui est la somme de toutes les lignes de tous les articles dans le panier
var ligneTotal = 0;
afficherLocalStorage();