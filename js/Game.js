import Deck from './Deck';

/**
 * @description Manage the Memory Game's gameplay
 * @export
 * @class Game
 */
module.exports = class Game {
  /**
   * @description Creates an instance of the Game class.
   * @memberof Game
   */
  constructor(cardDeck) {
    this.cardDeck = cardDeck;
    this.gameDeck = [];
  }

  /**
   * @description Start a new game by shuffling the template card deck
   * to create a new game deck
   */
  startNewGame() {
    this.gameDeck = Deck.shuffle(this.cardDeck.getCardDeck());
  }

};