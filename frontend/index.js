// create function with FETCH data API
function affichageDoudou() {
  fetch('http://localhost:3000/api/teddies')
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(dataDoudou){
      console.log(dataDoudou);
      for (doudou in dataDoudou){
        console.log(doudou);

        // 1. mettre en place le premier element de base qui s'accroche a un autre element du DOM

        var texte = document.createElement('div');
        document.querySelector('.liste').appendChild(texte);
        texte.classList.add('btn');
        texte.classList.add('btn-warning');
        texte.classList.add('fs-1');
        texte.classList.add('w-100');
        texte.innerHTML = dataDoudou[doudou]['name'];

        // 2. mettre en place la carte pour contenir l'image

        var card = document.createElement('div');
        card.classList.add('card');
        texte.appendChild(card);
        // a ce parent texte j'ajoute un enfant card : parent texte vers => enfant card

        // 3. mettre en place le lien vers l'API pour afficher l'image

        var image = document.createElement('img');
        image.classList.add('card-img-top');
        image.src = dataDoudou[doudou]['imageUrl'];
        card.appendChild(image);

        // 4. mettre en place le body de la carte pour contenir le texte
        
        var cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        cardBody.classList.add('bg-info');
        cardBody.classList.add('w-100');
        image.appendChild(cardBody);
        console.log(cardBody);

        // 5. mettre en place la description du doudou

        var cardTitle = document.createElement('div');
        cardTitle.classList.add('card-title');
        cardTitle.innerHTML = dataDoudou[doudou]['description'];
        cardBody.appendChild(cardTitle);

        var cardText = document.createElement("div");
        cardText.classList.add('card-text');
        cardTitle.appendChild(cardText);
        cardText.innerText = dataDoudou[doudou]['price']/100 + ' EUR';

        var achat = document.createElement('button');
        achat.classList.add('btn');
        achat.classList.add('btn-primary');
        achat.innerHTML = 'Je le prends !';

      }
    })
    .catch(function(error) {
      console.log(error);
      // incoming error
      let messageError = document.getElementById("message-erreur");
      messageError.innerHTML = "Les doudous ne souhaitent pas venir ...";
    })
};

// call de la fonction
// au meme moment que le chargement de la page
//affichageDoudou();


// chargement de tous les elements du DOM
// ensuite appelle de la fonction
window.onload = affichageDoudou;