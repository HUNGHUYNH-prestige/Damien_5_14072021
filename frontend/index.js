// title h1 header

let h1 = document.getElementById('h1');
h1.classList.add('text-center');
h1.classList.add('bg-warning');
h1.innerHTML = 'Voici nos produits';

// create article tag to contain the products

let article = document.createElement('article');
article.classList.add('article');

// connect = append the article tag to the ID already set in HTml

let productsList = document.getElementById('products-list');
productsList.appendChild(article);

// create a function to fetch data from API

function getProduct(url){
    fetch(url)
    .then(function(result){
        if (result.ok){
            return result.json();
        }
    })
    .then(function(data){
        console.log(data);
        // display data from the API on the page
        displayData(data);
    })
    .catch(function(error){
        error = 'attention';
        console.log('Il y a une erreur : ' + error);
        console.error('Message d\'erreur : analyse URL');
    })
}

// call the function : fetch in order to get the data on the console

getProduct('http://localhost:3000/api/teddies');

// display the data on the page with this function : displayData()
// create the function

function displayData(data){   

    for (let indice = 0 ; indice < data.length ; indice = indice + 1){

        //console.log(indice);
        //console.log(data.length);

        let figure = document.createElement('figure');
        //figure.classList.add('card');
        figure.classList.add('card-size');
        article.appendChild(figure);

        let name = document.createElement('div');
        name.classList.add('card-header');
        name.classList.add('bg-warning');
        name.innerHTML = data[indice].name;
        figure.appendChild(name);

        let image = document.createElement('img');
        image.classList.add('card-img-top');
        image.classList.add('src');

        let source = data[indice].imageUrl;
        image.src = source;
        //console.log(source);
        //console.log(image);
        figure.appendChild(image);

        let figcaption = document.createElement('figcaption');
        figcaption.classList.add('card-body');
        figure.appendChild(figcaption);

        let cardTitle = document.createElement('h2');
        cardTitle.classList.add('card-text');
        cardTitle.innerHTML = 'Description <br><br>' + data[indice].description + ' <br><br>';
        figcaption.appendChild(cardTitle);

        let cardText = document.createElement('h2');
        cardText.classList.add('card-text');
        cardText.innerHTML = 'Prix <br><br>' + data[indice].price/100 + ' Euros';
        cardTitle.appendChild(cardText);

        let bouton = document.createElement('a');
        bouton.classList.add('href');
        
        //let id = data[indice]._id;
        //console.log('id du produit : ' + id);
        
        //let lien = 'product.html?id=' + data[indice]._id;
        let lien = 'product.html';
        bouton.href = lien;
        //console.log(lien);

        bouton.classList.add('btn');
        bouton.classList.add('btn-lg');
        bouton.classList.add('btn-primary');
        bouton.innerHTML = 'Prendre sans regret';
        figure.appendChild(bouton);

        
    }
}