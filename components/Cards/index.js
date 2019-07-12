// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cards = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
        const articles = res.data.articles;
        const articleSubject = Object.keys(articles);

        articleSubject.map(topic => {
            articles[`${topic}`].map(article => {
                cards.append(creatingCard(article));
            });
        });
    })
        
        .catch(err => {
            console.log('Error: not working', err);
        });

function creatingCard(data) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorsName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = data.headline;
    img.src = data.authorPhoto;
    authorsName.textContent = data.authorName;

    card.append(headline);
    card.append(author);
    author.append(imgContainer);
    author.append(authorsName);
    imgContainer.append(img);

    return card;
}