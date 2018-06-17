
class GamePlay {
  /**
   * @description Creates an instance of the Game class.
   * @memberof GamePlay
   */
  constructor() {
    this.deck = null;
    this.gameDeck = [];
    this.gameUI = null;
    this.turnCounter = 0;
    this.playerRating = 3;
  }

  /**
   * @description Set the reference to the Deck object
   * @param {Object} deck Reference to an instance of the Deck class
   * @memberof GamePlay
   */
  setDeck(deck) {
    this.deck = deck;
  }

  /**
   * @description Set the reference to the GameUI object
   * @param {Object} gameUI Reference to an instance of the GameUI class
   * @memberof GamePlay
   */
  setGameUI(gameUI) {
    this.gameUI = gameUI;
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
    const deckFragment = this.gameUI.buildDeck(this.gameDeck);
  }

}

export default GamePlay;
