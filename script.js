const quoteBox = document.getElementById('container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author-name')
const quoteButton = document.getElementById('generate-quote');
const twitterButton = document.getElementById('twitter');
const loader = document.getElementById('loader');
let quotes = []

//loading and finishing loading
function loading() {
    loader.hidden = false;
    quoteBox.hidden = true;
}

function doneLoading() {
    loader.hidden = true;
    quoteBox.hidden = false;
}

//get quotes from API
async function fetchQuotes() {
    loading();
    const quoteApiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

    try {
        const response = await fetch(quoteApiUrl);
        quotes = await response.json();
        singleQuote();
    } catch (error) {
        //error here
    }
}

//pick a single quote from the data to print to the screen
function singleQuote() {
    loading();
    //randomize a quote out of the returned data
    const quoteToUse = quotes[Math.floor(Math.random() * quotes.length)];

    //check to see if the quote and author exist, and if so print them to the screen. 
    if (!quoteToUse.author) {
        authorText.textContent = 'Unknown'
    } else {
        authorText.textContent = quoteToUse.author;
    }

    if (!quoteToUse.text) {
        quoteText.textContent = 'Somethings not working here! Please try again later.'
        authorText.textContent = ''
    } else {
        quoteText.textContent = quoteToUse.text;
    }

    //check the quote's length to determine text-size
    if(quoteToUse.text.length > 125) {
        quoteText.classList.add('long-quote')
    } else {
        quoteText.classList.remove('long-quote')
    }
    doneLoading();
}

//post to twitter
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank')
}

quoteButton.addEventListener('click', singleQuote)
twitterButton.addEventListener('click', tweetQuote)

fetchQuotes();