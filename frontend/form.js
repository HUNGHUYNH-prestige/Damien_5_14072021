// code pour le formulaire
console.log('Formulaire');

// get all elements from the DOM

let prenom  = document.getElementById('first-name');
let nom     = document.getElementById('last-name');
let adresse = document.getElementById('address');
let code    = document.getElementById('zip-code');
let ville   = document.getElementById('city');
let email   = document.getElementById('email');

let submit  = document.getElementById('submit');

// define the regular expression for pattern check before submit

let emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let zipcodeValid = /^[0-9]{5}(?:-[0-9]{4})?$/;
// international names from stackoverflow
// https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
let saisieValid = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

// define the function to check the regular expression when input
function checkingRegularExpression(){
    prenom.addEventListener('change', function(){
        validationDeLaSaisie(saisieValid, saisie);
    })
    nom.addEventListener('change', function(){
        validationDeLaSaisie(saisieValid, saisie);
    })
    adresse.addEventListener('change', function(){
        validationDeLaSaisie(saisieValid, saisie);
    })
    code.addEventListener('change', function(){
        validationDeLaSaisie(zipcodeValid, saisie);
    })
    ville.addEventListener('change', function(){
        validationDeLaSaisie(saisieValid, saisie);
    })
    email.addEventListener('change', function(){
        validationDeLaSaisie(emailValid, saisie);
    })
}


// define the function : validationDeLaSaisie(param1, param2)
function validationDeLaSaisie(regularExpressionPattern, saisie){
    let testing = regularExpressionPattern.test(saisie.value);
    console.log(saisie.value);
    console.log(testing);
    if (testing == false){
        let incorrecte = document.createElement('div');
        incorrecte.classList.add('border-warning');
        incorrecte.innerHTML = 'ATTENTION ! Saisie incorrecte !';
        // ne vas pas apparaitre parce qu'il faut creer des ID dans le DOM
        // ou trouver un autre moyen de faire apparaitre le message

    }
    else if(testing == true){
        let correct = document.createElement('div');
        correct.classList.add('border-success');
        correct.innerHTML = 'PARFAIT !';
    }
    return testing;
}