
//Event listener 1.
// Here I am going to use the random quote generator to generate a quote, seperating it by anime, character and quote
const URL1 = "https://animechan.vercel.app/api/random"

const randomBtnTag = document.querySelector('.container random');
const animeQuote = document.querySelector('#anime-quote');
const animeName = document.querySelector('#anime-name');
const characterName = document.querySelector('#character-name');

function getQuote(){
    fetch(URL1, {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(quote => {
        characterName.innerText= "CHARACTER: " + quote.character;
        animeName.innerText = "ANIME: " + quote.anime;
        animeQuote.innerText = "QUOTE: " +quote.quote;
        
        
        })
}



random.addEventListener('click', ()=>{
    getQuote();
})

const characterText = document.querySelector('#text');
const submitBtn = document.querySelector('#submit');
const animeResults = document.querySelector('#anime-results');
const characterResults = document.querySelector('#character-results');
const quoteResults = document.querySelector('#quote-results');
const resultsContainer = document.querySelector('#results');





function getQuoteByName(nameVariable){
    console.log('name', nameVariable)
    fetch(`https://animechan.vercel.app/api/quotes/character?name=${nameVariable}`)
      .then(response => response.json())
      .then(quotes => {
          console.log(quotes)
            animeResults.innerText = "ANIME: " + quotes[0].anime;
            characterResults.innerText = "CHARACTER: " + quotes[0].character;
            quoteResults.innerText = "QUOTE: " + quotes[0].quote;
          
      })
}


document.getElementById("submit").addEventListener("click", function() {
    const userInput = document.getElementById('text').value;
    getQuoteByName(userInput);
  });

reload.addEventListener('click', () => {
    location.reload();
})


