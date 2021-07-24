// title h1 header

let h1 = document.getElementById('h1');
h1.classList.add('text-center');
h1.classList.add('bg-warning');
h1.innerHTML = 'Voici votre produit';

// get the ID of the product
// query string with ?
// avec ou sans window : retour dans console identique

const queryString = window.location.search;
console.log('voici le :' + queryString);
// queryString returns voici le :?id=5be9c8541c9d440000665243


// utiliser la classe URLSearchParams
// parametreUrl contient la partie variable de l'URL
// parametreUrl contient les parametres de l'URL

const parametreUrl = new URLSearchParams(queryString);
console.log(parametreUrl);
// la console liste toute les methods de URLSearchParams

// use get() method of the URLSearchParams to get the first result in parameter
// get('id') can try with get('name')

const productId = parametreUrl.get('id');
console.log('content :' + productId);
// la console affiche l'id du produit









// function fetch to get products data

function getProduct(url){
    fetch(url)
    .then(function(result){
        if (result.ok){
            return result.json();
        }
    })
    .then(function(data){
        console.log(data);
        getArticle(data);
    })
    .catch(function(error){
        error = 'attention';
        console.log('Il y a une erreur :' + error);
        console.error('Message d\'erreur : analyse URL');
    })
}

// call the function with fetch

getProduct('http://localhost:3000/api/teddies');


// l'article est un doudou

function getArticle(doudou){
    console.table(doudou);
    let ici = window.location;
    console.log('la page est : ' + ici);
    let search = window.location.search;
    console.log('partie variable de la page :' + search);


}