// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {
        for (i = 0; i < res.data.articles.javascript.length; i++){
            cardsContainer.appendChild(cardMaker(res.data.articles.javascript[i]))
        }
        for (i = 0; i < res.data.articles.bootstrap.length; i++){
            cardsContainer.appendChild(cardMaker(res.data.articles.bootstrap[i]))
        }
        for (i = 0; i < res.data.articles.technology.length; i++){
            cardsContainer.appendChild(cardMaker(res.data.articles.technology[i]))
        }
        for (i = 0; i < res.data.articles.jquery.length; i++){
            cardsContainer.appendChild(cardMaker(res.data.articles.jquery[i]))
        }
        for (i = 0; i < res.data.articles.node.length; i++){
            cardsContainer.appendChild(cardMaker(res.data.articles.node[i]))
        }




        // console.log(Object.data.articles.keys(res))
    //     Object.data.articles.entries(res).forEach(entry => {
    //         for (i = 0; i < res.data.articles.length; i++){
    //             cardsContainer.appendChild(cardMaker(res.data.articles.entry[i]))
    //         }            
    //     })
    })
    .catch(err => {
        debugger;
    })

function cardMaker(articleObject) {
    // create the elements 
    const card = document.createElement('div')
    const cardHeadline = document.createElement('div')
    const cardAuthor = document.createElement('div')
    const cardImgCont = document.createElement('div')
    const cardImg = document.createElement('img')
    const cardAuthorSpan = document.createElement('span')

    // fill elements with available info
    card.classList.add('card')
    cardHeadline.classList.add('headline')
    cardHeadline.textContent = articleObject.headline
    cardAuthor.classList.add('author')
    cardImgCont.classList.add('img-container')
    cardImg.src = articleObject.authorPhoto
    cardAuthorSpan.textContent = `By ${articleObject.authorName}`    

    // create structure
    card.appendChild(cardHeadline)
    card.appendChild(cardAuthor)
    cardAuthor.appendChild(cardImgCont)
    cardImgCont.appendChild(cardImg)
    cardAuthor.appendChild(cardAuthorSpan)
    


    card.addEventListener('click', function(event){
        console.log(cardHeadline.textContent)
    })

    return card;
}

console.log(cardMaker({
    "id": "0802b90e-4057-45c8-b088-600e6aaec339",
    "headline": "ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects",
    "authorPhoto": "https://tk-assets.lambdaschool.com/08d1372e-e393-47f1-ac44-fcb7d0baf0e2_sir.jpg",
    "authorName": "SIR RUFF'N'STUFF"
}))


