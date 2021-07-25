

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
        animeQuote.innerText = quote.quote;
        animeName.innerText = quote.anime;
        characterName.innerText= quote.character;
        })
}



random.addEventListener('click', ()=>{
    getQuote();
})

const characterText = document.querySelector('#text');
const submitBtn = document.querySelector('#submit');
const resultsTag = document.querySelector('#results');
const userInput = document.getElementById("text");

submitBtn.addEventListener('click', getQuoteByName(userInput));

function getQuoteByName(nameVariable){
    console.log('name', nameVariable)
    fetch(`https://animechan.vercel.app/api/quotes/character?name=${nameVariable}`)
      .then(response => response.json())
      .then(quotes => {
          console.log(quotes)
          //resultsTag.innerText = quotes.anime;
      })
}


