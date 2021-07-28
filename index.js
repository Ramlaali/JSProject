// Random quote generator 
// Event Listener 1

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
        const {character, anime} = quote
        console.log(character)
        characterName.innerText= "CHARACTER: " + quote.character;
        animeName.innerText = "ANIME: " + quote.anime;
        animeQuote.innerText = "QUOTE: " +quote.quote;
        
       
    });


}
const likeButton = document.createElement("button");
var count = 0; 

likeButton.type = "submit";
likeButton.id = "likeButton";
console.log('children',document.body);

document.body.appendChild(likeButton); 
likeButton.innerHTML = "Like"
likeButton.addEventListener("click", () => {
    count++;
    //console.log('Hello')
    likeButton.innerHTML = `Like ${count}`;
 });



random.addEventListener('click', ()=>{
    getQuote();
})

// User generated Quote.
// Event listener 2

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


  //Reload button
  // Event listener 3
reload.addEventListener('click', () => {
    location.reload();
})



