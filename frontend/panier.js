// mettre ici que le code pour le fonctionnement de la page panier
// le code pour le formulaire est dans un autre script
// script only for article display

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
        
        
        let article = marchandise[unite];
        //console.log(article);
        //console.log(marchandise[unite]);
        /*
        ici le console.log pour article = console.log pour marchandise[unite] parce que unite est connue
        utile pour la suite attention 
        */
        

        let boite = document.createElement('div');
        boite.classList.add('boite');
        panier.appendChild(boite);
        

        let nom = document.createElement('div');
        nom.classList.add('information');
        nom.innerHTML = 'Nom de l\'article : ' + article['nom'];
        boite.appendChild(nom);

        let controle = document.createElement('div');
        controle.classList.add('d-flex');
        controle.classList.add('controle-quantite');
        boite.appendChild(controle);

        // mettre dans le controle la quantite
        let quantite = document.createElement('div');
        quantite.classList.add('information');
        quantite.innerHTML = 'Nombre de cet article : ' + article['quantite'];
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
        let entier = parseInt(article.prix);
        //console.log(typeof entier);
        
        // par produit le prix total
        let totalArticle = (article.quantite * entier);
        // entier = marchandise[unite].prix
        // entier = article.prix
        // parce que article = marchandise[unite]

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
        
        // le bouton - : moins 1 article pour la ligne d'article
        moins.addEventListener('click', function(){
            console.log('retirer un article');
            console.log(marchandise);
            
            moinsUnArticle(article);

            /*
            ATTENTION : marchandise[unite] != article
            bien que le console.log affiche un objet identique au depart hors du addeventlistener
            */
            console.log(marchandise);
            // marchandise est un array complet
            // marchandise est de typeof : object
            // console.log(marchandise[unite]); => indefined parce que unite n'est pas connu
            //console.log(marchandise[0].quantite);
            //console.log(marchandise[1].quantite);
            // marchandise[index du array].quantite retourne la valeur de la quantite 
            console.log(article);
            // article retourne uniquement un article de l'array marchandise
            // console.log(article) retourne l'article = marchandise[index] = array[index]
            
            if (article.quantite == 0){
                retirerUnArticle(article);
            }
            
            
           // tester la fonction ici
           // fonctionne : si reste 1 article dans le panier alors cette fonction supprime l'article du panier et ensuite comme le panier est vide => redirection vers HOME
           //retirerUnArticle(article);
        });


        // le bouton + : plus 1 article pour la ligne d'article
        plus.addEventListener('click', function(){
            console.log('click sur + event');
            plusUnArticle(article);

            if (article.quantite == 11){
                alert('Attention : beaucoup d\'articles !');
            }
        })


        //poubelle.addEventListener('click', supprimerUnArticle(marchandise[unite]));
        // le bouton pour SUPPRIMER CET ARTICLE de la ligne d'article
        poubelle.addEventListener('click', function(){
            console.log('fonction pour supprimer la ligne d\'article !');
            retirerUnArticle(article);
        })
        
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
        
        ligneTotal = ligneTotal + (parseInt(marchandise[indice].prix)*marchandise[indice].quantite);
        
    }
    return ligneTotal;
   
}


// plus un article dans la quantite d'un article
// faire plus 1 a chaque fois click sur +
function plusUnArticle(article){
    console.log('ajouter 1 article avec +');
    console.log(article);
    console.log(article.quantite);
    article.quantite++;
    console.log(article.quantite);
    localStorage.setItem('marchandise', JSON.stringify(marchandise));
    window.location.reload();

}


// moins un article dans la quantite d'un article
// faire moins 1 a chaque fois click sur -
function moinsUnArticle(article){
    //console.log('je suis dans la fonction');
    //console.log(article);
    //console.log(article.quantite);
    article.quantite--;
    //console.log(article.quantite);
    localStorage.setItem('marchandise',JSON.stringify(marchandise));
    window.location.reload();
}




// retirer un article du local storage = marchandise = array = panier
function retirerUnArticle(article){
    //console.log('je suis dans la fonction pour retirer un article !');
    console.log(marchandise);

    let index = marchandise.indexOf(article);
    marchandise.splice(index, 1);

    console.log('message alerte : article deleted');
    console.log('article.quantite == 0');

    localStorage.setItem('marchandise', JSON.stringify(marchandise));

    alert('Suppresion de l\'article !');
    
    window.location.reload();   
}




// call the main function
// definir la ligne total qui est la somme de toutes les lignes de tous les articles dans le panier
var ligneTotal = 0;
afficherLocalStorage();





// --- --- --- --- --- --- --- ---





console.log('Formulaire');
// code pour le formulaire


// get all elements from the DOM

let prenom  = document.getElementById('first-name');
let nom     = document.getElementById('last-name');
let adresse = document.getElementById('address');
let code    = document.getElementById('zip-code');
let ville   = document.getElementById('city');
let email   = document.getElementById('email');

let messagePrenom  = document.getElementById('first-name-message');
let messageNom     = document.getElementById('last-name-message');
let messageAdresse = document.getElementById('address-message');
let messageCode    = document.getElementById('zip-code-message');
let messageVille   = document.getElementById('city-message');
let messageEmail   = document.getElementById('email-message');

let submit  = document.getElementById('submit');

let order;

// define the regular expression for pattern check before submit

let emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
//let emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let zipcodeValid = /^(?:[0-8]\d|9[0-8])\d{3}$/;
let saisieValid = /^[^-\s][a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;
let addressValid = /^[a-zA-Z0-9\s\,\''\-]*$/;

// define the function to check the regular expression when input
function validFormCheckingRegularExpression(){
    prenom.addEventListener('change', function(){
        validationDeLaSaisie(saisieValid, this, messagePrenom);
    })
    nom.addEventListener('change', function(){
        validationDeLaSaisie(saisieValid, this, messageNom);
    })
    adresse.addEventListener('change', function(){
        validationDeLaSaisie(addressValid, this, messageAdresse);
    })
    code.addEventListener('change', function(){
        validationDeLaSaisie(zipcodeValid, this, messageCode);
    })
    ville.addEventListener('change', function(){
        validationDeLaSaisie(saisieValid, this, messageVille);
    })
    email.addEventListener('change', function(){
        validationDeLaSaisie(emailValid, this, messageEmail);
    })
}

validFormCheckingRegularExpression();


// define the function : validationDeLaSaisie(param1, param2, param3)
// check each input line before validation
function validationDeLaSaisie(regularExpressionPattern, saisie, zoneMessage){
    //let testing = regularExpressionPattern.test(saisie.value);
    //console.log(saisie.value);
    //console.log(testing);
    if (regularExpressionPattern.test(saisie.value) == false){
        console.log('je suis dans false');
        saisie.classList.add('border-warning');
        zoneMessage.innerHTML = 'ATTENTION ! Saisie incorrecte !';
    }
    else if(regularExpressionPattern.test(saisie.value) == true){
        console.log('je suis dans true');
        saisie.classList.remove('border-warning');
        saisie.classList.add('border-success');
        zoneMessage.innerHTML = 'PARFAIT !';
    }
    return regularExpressionPattern.test(saisie.value);
}



// submit the form
submit.addEventListener('click', function(quoi){
    console.log('submit : attention !');
    // si le champ est vide lorsque click on submit
    attentionChampVide(prenom,  messagePrenom);
    attentionChampVide(nom,     messageNom);
    attentionChampVide(adresse, messageAdresse);
    attentionChampVide(code,    messageCode);
    attentionChampVide(ville,   messageVille);
    attentionChampVide(email,   messageEmail);

    // check data input incorrect or empty or correct
    
    if (!prenom.value || !nom.value || !adresse.value || !code.value || !ville.value || !email.value || !saisieValid.test(prenom.value) || !saisieValid.test(nom.value) || !addressValid.test(adresse.value) || !zipcodeValid.test(code.value) || !saisieValid.test(ville.value) || !emailValid.test(email.value)){
        console.log('ATTENTION : soit VIDE soit INCORRECTE !');
        console.log('refresh the page to try again !');
        quoi.preventDefault();
    }
    else{
        // after checking
        console.log("data correct ready to send request post methods !");
        // send array to server
        // define the array : empty
        let arrayProductList = [];
        // define the object to send : customer order ; type : object
        order = {
            contact : {
                firstName : prenom.value,
                lastName  : nom.value,
                address   : adresse.value,
                city      : ville.value,
                email     : email.value
            },
            products : arrayProductList
        }
        console.log(arrayProductList);
        console.log(order);

        // for all items in local storage
        // remarque ce script vient a la suite d'un script qui a deja charge le local storage
        // ce script s'execute sur une page avec un local storage rempli donc il est possible de recuperer la data
        
        for (let indice = 0 ; indice < marchandise.length ; indice++){
            arrayProductList.push(marchandise[indice].identifiant);
            //arrayProductList.push(marchandise[indice].nom);
        }

        // total panier
        // le total du panier a mettre dans un array pour l'envoi
        let totalPanierArray = [];
        totalPanierArray.push(ligneTotal);
        console.log(totalPanierArray);
        localStorage.setItem('ligneTotal', JSON.stringify(totalPanierArray));
        
        postRequest("http://localhost:3000/api/teddies/order");
    }
})


// define the function attentionChampVide(input, messageInput)
// this function check if the input is empty or not
function attentionChampVide(saisie, messageSaisie){
    if (saisie.validity.valueMissing){
        console.log(saisie.validity.valueMissing);
        messageSaisie.innerHTML = 'ATTENTION : VIDE ! Merci de remplir';
        messageSaisie.classList.add('text-center');
        messageSaisie.classList.add('bg-warning');
    }
}


// request fetch post method
function postRequest(url){
    fetch(url, {
        method : 'post',
        headers : {
            'Content-type' : 'application/json'
        },
        body : JSON.stringify(order)
    })
    .then(function(result){
        if (result.ok){
            return result.json();
        }
    })
    .then(function(data){
        console.log(data);

        // get the orderId from the server
        let orderId = data.orderId;
        console.log(orderId);

        // create array for orderId
        let orderIdArray = [];
        orderIdArray.push(orderId);
        console.log(orderIdArray);

        // local storage set item
        localStorage.setItem('orderId', JSON.stringify(orderIdArray));

        // go confirmation
        window.location.href = 'confirmation.html';

        // check console
        console.log('Sending Post Request : OK !');
    })
    .catch(function(error){
        error = 'ATTENTION ! Error Request Post !';
        console.log(error);
        alert('OH ! OH ! ALERT !');
    })
}

console.log('fin de code');