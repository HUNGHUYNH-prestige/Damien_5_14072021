// title h1 header

let h1 = document.getElementById('h1');
h1.classList.add('text-center');
h1.classList.add('bg-warning');
h1.innerHTML = 'Voici votre produit';



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
    console.log(doudou);
    let ici = window.location;
    console.log('la page est : ' + ici);
    let search = window.location.search;
    console.log('partie variable de la page :' + search);


}