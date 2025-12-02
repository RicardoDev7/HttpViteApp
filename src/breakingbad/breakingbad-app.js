/**
 * @returns {Object} Quote Information
 */
const fetchQuote = async () => {
    const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await response.json();
    return (!data) ? null : data[0];
}
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingBadApp = async (element) => {
    const appTitle = document.getElementById('h1AppTitle');
    appTitle.innerHTML = 'BreakingBad App';
    element.innerHTML = 'Loading...';

    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = (data) => {
        if(!data) return;
        quoteLabel.innerHTML = data.quote;
        authorLabel.innerHTML = data.author;
        element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);
    }

    nextQuoteButton.addEventListener('click', async () => {
        nextQuoteButton.disabled = true;
        element.innerHTML = 'Loading...';
        const data = await fetchQuote();
        renderQuote(data);
        nextQuoteButton.disabled = false;
    });

    fetchQuote().then(renderQuote);
}