/**
 * Card Duel Game Lab Instructions
 * -------------------------------
 *
 * Goal:
 * Implement the JavaScript functionality for a card duel game where you draw cards against the computer.
 * Use the Deck of Cards API to manage the deck and card drawing. Display the drawn cards, keep score of wins, and declare a final winner.
 *
 * Setup:
 * HTML and CSS are provided. Focus on completing the JavaScript file to add interactivity to the game.
 *
 * Completed Example:
 * Reference the completed example here: https://660f7722fa5cb63b81e4d9ed--melodious-conkies-07f0f6.netlify.app/
 *
 * API Reference:
 * Deck of Cards API - https://deckofcardsapi.com/
 *
 * Tasks:
 * 1. Use the fetch API with async/await to shuffle a new deck when the game starts and draw two cards each round.
 *
 * 2. Display the player's and computer's drawn card images in the provided <img> elements.
 *
 * 3. Implement logic to compare the drawn cards. Update the score based on the higher card. In case of a tie, no points are awarded.
 *
 * 4. After all cards have been drawn, disable the "Draw Card" button and display a message indicating the winner.
 *
 * Hints:
 * - For card value comparison, assign numerical values to face cards (e.g., Jack = 11, Queen = 12, King = 13, Ace = 14).
 * - Utilize the 'remaining' field in the API's draw card response to determine when the deck is exhausted.
 *
 * Note: Reference the completed example for guidance on structure and functionality.
 */

let playerScore = 0;
let computerScore = 0;
let deckId;

document.getElementById("drawCard").addEventListener("click", () => drawCards());

// Initialize the game
async function initializeGame() {
    const shuffle = await fetch(
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    const shuffleData = await shuffle.json();
    deckId = shuffleData.deck_id;
    const draw = await drawCards();
}

// Draw two cards
async function drawCards() {
    const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const playerCard = data.cards[0];
        const computerCard = data.cards[1];
        console.log(playerCard, computerCard);
        return data.cards;
    }
    catch (error) {
        console.error("Error drawing cards:", error);
    }
}

// Update UI after drawing cards
function updateGameUI(cards) { 
    
}

// Update scores
function updateScores(playerCard, computerCard) { }

// Convert card values to numbers for comparison
function cardValue(card) { }

// Declare a winner at the end
function declareWinner() { }

// Initialize game on load
initializeGame();
