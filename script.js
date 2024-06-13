const quotes = [
    "The only way to do great work is to love what you do. <br> – Steve Jobs",
    "You are never too old to set another goal or to dream a new dream. <br> – C.S. Lewis",
    "Success is not the key to happiness. Happiness is the key to success. <br> – Albert Schweitzer",
    "Your time is limited, don't waste it living someone else's life.<br> – Steve Jobs",
    "Believe you can and you're halfway there. <br> – Theodore Roosevelt",
    "The best way to predict the future is to invent it. <br> – Alan Kay",
    "It does not matter how slowly you go as long as you do not stop.<br> – Confucius",
    "Don't watch the clock; do what it does. Keep going.<br> – Sam Levenson",
    "The only way to do great work is to love what you do. <br> – Steve Jobs ",
    "You are never too old to set another goal or to dream a new dream. <br> – C.S. Lewis",
    "Success is not the key to happiness. Happiness is the key to success. <br> – Albert Schweitzer",
    "Your time is limited, don't waste it living someone else's life. <br> – Steve Jobs",
    "Believe you can and you're halfway there. <br> – Theodore Roosevelt",
    "The best way to predict the future is to invent it. <br> – Alan Kay",
    "It does not matter how slowly you go as long as you do not stop. <br> – Confucius",
    "Don't watch the clock; do what it does. Keep going. <br> – Sam Levenson",
    "Success is not how high you have climbed, but how you make a positive difference to the world. <br> – Roy T. Bennett",
    "The only limit to our realization of tomorrow will be our doubts of today. <br> – Franklin D. Roosevelt",
    "Opportunities don't happen. You create them. <br> – Chris Grosser",
    "The way to get started is to quit talking and begin doing. <br> – Walt Disney",
    "Success usually comes to those who are too busy to be looking for it. <br> – Henry David Thoreau",
    "The only person you are destined to become is the person you decide to be. <br> – Ralph Waldo Emerson",
    "The future belongs to those who believe in the beauty of their dreams. <br> – Eleanor Roosevelt",
];

const quoteText = document.getElementById('quote-text');
const newQuoteBtn = document.getElementById('new-quote');

function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    console.log("Index: " + randomIndex);
    quoteText.innerHTML = quotes[randomIndex];
}

newQuoteBtn.addEventListener('click', generateRandomQuote);
