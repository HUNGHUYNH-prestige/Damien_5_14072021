console.log('CONFIRMATION');
// code pour la confirmation de la post request methods

// get the data from the local storage
// commande dans le panier
let orderId = JSON.parse(localStorage.getItem('orderId'));
console.log(orderId);
// montant total de la commande
let ligneTotal = JSON.parse(localStorage.getItem('ligneTotal'));
console.log(ligneTotal);
// marchandise du local storage avec toutes les data
let marchandise = JSON.parse(localStorage.getItem('marchandise'));

console.log(marchandise);

// get id element from the dom
let confirmation = document.getElementById('confirmation');
let home = document.getElementById('home');

// function display message when order id is ok
function message(){
    // faire la mise en page de la page de confirmation
    // 1. contenu textuel pour le message de confirmation
    let boite = document.createElement('div');
    boite.classList.add('boite');
    confirmation.appendChild(boite);

    let merci = document.createElement('div');
    merci.innerHTML = 'ORIDOUDOU VOUS REMERCIE DE VOTRE ACHAT';
    boite.appendChild(merci);

    let reference = document.createElement('div');
    reference.innerHTML = 'Voici l\'identifiant de commande : ' + orderId;
    merci.appendChild(reference);

    let payer = document.createElement('div');
    payer.innerHTML = 'Total de la commande : ' + ligneTotal + ' euros';
    reference.appendChild(payer);

    let message = document.createElement('div');
    message.innerHTML = 'Livraison RAPIDE gratuite !';
    payer.appendChild(message);

    console.log('function message execute');
}
//message();

// function display message when order id is not ok
function absence(){
    let message = document.createElement('div');
    message.innerHTML = 'Absence de commande !';
    confirmation.appendChild(message);
    console.log('function absence execute');
}
//absence();



// 2. lien vers HOME PAGE pour finir
// function go home
function homeFunction(){
    let bouton = document.createElement('button');
    bouton.classList.add('btn');
    bouton.classList.add('btn-primary');
    bouton.innerHTML = 'Home';
    bouton.addEventListener('click', function(){
        window.location.href = 'index.html';
    })
    home.appendChild(bouton);
    console.log('bouton home execute');
}
homeFunction();

/*
// function go back page
function backpage(){
    let back = document.createElement('button');
    back.classList.add('btn');
    back.classList.add('btn-warning');
    back.innerHTML = 'Back';
    back.addEventListener('click',function(){
        window.location.href = 'panier.html';
    })
    home.appendChild(back);
    console.log('backpage function execute');

}
backpage();
*/

// 3. supprimer tous les objets du local storage
// function remove item in local storage
function suppression(){
    console.log('suppression function execute');
    localStorage.removeItem('orderId');
    localStorage.removeItem('ligneTotal');
    localStorage.removeItem('marchandise');
}
//suppression();






// execution
function execution(){
    if (orderId){
        console.log('order id true');
        console.log(orderId);
        message();
        suppression();
    }
    else{
        console.log('order id false');
        console.log(orderId);
        absence();
    }
}
execution();