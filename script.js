let quotes = []

//get quotes from API
async function fetchQuotes() {
    const quoteApiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

    try {
        const response = await fetch(quoteApiUrl);
        quotes = await response.json();
        console.log(quotes)
        singleQuote();
    } catch (error) {
        //error here
    }
}

//pick a single quote from
function singleQuote() {
    const quoteToUse = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(quoteToUse)
}

//idea for other buttons to use:
//make a const for each tag (let quotes1array = )
// let quotes1 = []
// for(i=0; i < 100; i++) {
//     quotes1.push(quotes[i])
// }
// console.log(quotes1)

fetchQuotes();