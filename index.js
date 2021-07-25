

const URL1 = "https://animechan.vercel.app/api/random"

const randomQuote = document.querySelector('#random');

randomQuote.addEventListener('click', getQuote);

function getQuote(){
    return fetch(URL1, {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(quote => console.log(quote))
}

getQuote();
genRandomBtn.addEventListener('click', ()=>{
    getQuote();
})



