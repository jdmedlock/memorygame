import Deck from './Deck';
import GamePlay from './GamePlay';
import GameUI from './GameUI';

// Instantiate the classes that implement the games functionality.
const deck = new Deck();
const gamePlay = new GamePlay();
const gameUI = new GameUI();

gamePlay.setDeck(deck);
gamePlay.setGameUI(gameUI);
gamePlay.startNewGame();

// Define event handlers for each UI element to start the game
const deckElement = document.querySelector('.deck');
document.querySelector('.deck').addEventListener('click', (event) => {
  gamePlay.turn(event.target.getAttribute('id'));
});

const restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', (event) => {
  gamePlay.startNewGame();
});

