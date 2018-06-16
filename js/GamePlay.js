import Deck from './Deck';
import GameUI from './GameUI';

class GamePlay {
  /**
   * @description Creates an instance of the Game class.
   * @memberof GamePlay
   */
  constructor() {
    this.deck = new Deck();
    this.gameDeck = [];
    this.gameUI = new GameUI();
  }

  /**
   * @description Retrieve the game deck
   * @returns {Object[]} Game deck
   * @memberof GamePlay
   */
  getGameDeck() {
    return this.gameDeck;
  }

  /**
   * @description Start a new game by shuffling the template card deck
   * to create a new game deck
   * @memberof GamePlay
   */
  startNewGame() {
    this.gameDeck = this.deck.shuffle();
    const deckFragment = this.gameUI.buildDeckFragment(this.gameDeck);
    document.querySelector('.deck').appendChild(deckFragment);
  }

}

export default GamePlay;
