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

const cardsContainer = document.querySelector('.cards-container')

axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(res => {
    console.log(res.data);
    console.log(res.data.articles);
    console.log(res.data.articles.bootstrap);
    const javascripts = res.data.articles.javascript;
    const bootstraps = res.data.articles.bootstrap;
    const technologies = res.data.articles.technology;
    const jqueries = res.data.articles.jquery;
    const nodes = res.data.articles.node;
    const articles = javascripts.concat(bootstraps, technologies, jqueries, nodes);
    console.log(articles);

    articles.forEach(createArticle(res.data.articles));
  });

function createArticle(article) {
  const card = document.createElement('div');
  card.classList.add('card');

  const headline = document.createElement('div');
  headline.textContent = article.headline;
  headline.classList.add('headline');

  const author = document.createElement('div');
  author.classList.add('author');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');

  const image = document.createElement('img');
  image.src = article.authorPhoto;

  const name = document.createElement('span');
  name.textContent = `By: ${article.authorName}`;

  cardsContainer.append(card);
  card.append(headline);
  card.append(author);
  author.append(imgContainer);
  imgContainer.append(image);
  author.append(name);

  return createArticle;
}
