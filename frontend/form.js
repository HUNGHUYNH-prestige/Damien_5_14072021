// code pour le formulaire
console.log('Formulaire');

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

let commande;

// define the regular expression for pattern check before submit

let emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let zipcodeValid = /^(?:[0-8]\d|9[0-8])\d{3}$/;
let saisieValid = /^[^-\s][a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;

// define the function to check the regular expression when input
function validFormCheckingRegularExpression(){
    prenom.addEventListener('change', function(){
        validationDeLaSaisie(saisieValid, this, messagePrenom);
    })
    nom.addEventListener('change', function(){
        validationDeLaSaisie(saisieValid, this, messageNom);
    })
    adresse.addEventListener('change', function(){
        validationDeLaSaisie(saisieValid, this, messageAdresse);
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
    let testing = regularExpressionPattern.test(saisie.value);
    console.log(saisie.value);
    console.log(testing);
    if (testing == false){
        console.log('je suis dans false');
        saisie.classList.add('border-warning');
        zoneMessage.innerHTML = 'ATTENTION ! Saisie incorrecte !';
    }
    else if(testing == true){
        console.log('je suis dans true');
        saisie.classList.remove('border-warning');
        saisie.classList.add('border-success');
        zoneMessage.innerHTML = 'PARFAIT !';
    }
    return testing;
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


    // check data input correct or incorrect
    
    if (!prenom.value || !nom.value || !adresse.value || !code.value || !ville.value || !email.value || !saisieValid.test(prenom.value) || !saisieValid.test(nom.value) || !saisieValid.test(adresse.value) || !saisieValid.test(code.value) || !saisieValid.test(ville.value) || !saisieValid.test(email.value)){
        console.log('ATTENTION : soit VIDE soit INCORRECTE !');
        console.log('refresh the page');
        quoi.preventDefault();
    }

    // after checking
    // send array to server

    // define the array : empty
    let arrayProductList = [];


    // define the object to send : customer order
    commande = {
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
    console.log(commande);

    // for all items in local storage
    // remarque ce script vient a la suite d'un script qui a deja charge le local storage
    // ce script s'execute sur une page avec un local storage rempli donc il est possible de recuperer la data

    for (let indice = 0 ; indice < marchandise.length ; indice++){
        arrayProductList.push(marchandise[indice].identifiant);
        arrayProductList.push(marchandise[indice].nom);
    }

    console.log(arrayProductList);
    console.log(marchandise);

    // total panier
    let totalPanierArray = [];
    // attention : sommeFinalTotal undefined !
    //totalPanierArray.push(sommeFinalTotal);
    //console.log(sommeFinalTotal);
    console.log(totalPanierArray);

    localStorage.setItem('sommeFinalTotal', JSON.stringify(totalPanierArray));

    //postRequest('http://localhost:3000/api/teddies/commande');


})



// define the function attentionChampVide(input, messageInput)
// this function check if the input is empty or not
function attentionChampVide(saisie, messageSaisie){
    if (saisie.validity.valueMissing){
        console.log(saisie.validity.valueMissing);
        messageSaisie.innerHTML = 'ATTENTION : VIDE !';
        messageSaisie.classList.add('text-center');
        messageSaisie.classList.add('bg-warning');
    }
}
