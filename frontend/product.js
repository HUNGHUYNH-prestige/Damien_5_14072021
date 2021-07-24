// title h1 header

let h1 = document.getElementById('h1');
h1.classList.add('text-center');
h1.classList.add('bg-warning');
h1.innerHTML = 'Voici votre produit';

function getProduct(url){
    fetch(url)
    .then(function(result){
        if (result.ok){
            return result.json();
        }
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        error = 'attention';
        console.log('Il y a une erreur :' + error);
        console.error('Message d\'erreur : analyse URL');
    })
}

// call the function with fetch

getProduct('http://localhost:3000/api/teddies');




