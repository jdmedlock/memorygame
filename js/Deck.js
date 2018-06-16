/**
 * @description Manage the deck of cards for the Memory Game
 * @export
 * @class Deck
 */
module.exports = class Deck {
  /**
   * @description Creates an instance of the Deck class.
   * @memberof Deck
   */
  constructor() {
    /*
     * Define the card decks cardDeck is the template deck defining the
     * attributes of each card, while gameDeck is the shuffled copy of
     * created at the start of each game.
     *
     * symbol - FontAwesome icon name
     * visible - true if the card should be faceup; false for facedown
     * matched - true if the card was sucessfully matched; false if it is
     * still unmatched
     */
    this.cardDeck = [
      {symbol: 'fa-diamond', visible: false, matched: false},
      {symbol: 'fa-diamond', visible: false, matched: false},
      {symbol: 'fa-paper-plane-o', visible: false, matched: false},
      {symbol: 'fa-paper-plane-o', visible: false, matched: false},
      {symbol: 'fa-anchor', visible: false, matched: false},
      {symbol: 'fa-anchor', visible: false, matched: false},
      {symbol: 'fa-bolt', visible: false, matched: false},
      {symbol: 'fa-bolt', visible: false, matched: false},
      {symbol: 'fa-cube', visible: false, matched: false},
      {symbol: 'fa-cube', visible: false, matched: false},
      {symbol: 'fa-leaf', visible: false, matched: false},
      {symbol: 'fa-leaf', visible: false, matched: false},
      {symbol: 'fa-bicycle', visible: false, matched: false},
      {symbol: 'fa-bicycle', visible: false, matched: false},
      {symbol: 'fa-bomb', visible: false, matched: false},
      {symbol: 'fa-bomb', visible: false, matched: false},
    ];
    this.gameDeck = [];
  }

  /**
   * @description Start a new game by shuffling the template card deck
   * to create a new game deck
   */
  startNewGame() {
    this.gameDeck = this.shuffle(this.cardDeck);
  }

  /**
   * @description Shuffle a deck of game cards. This function is based on
   * http://stackoverflow.com/a/2450976
   * @memberof Rate
   */
  shuffle(deck) {
    var currentIndex = deck.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = deck[currentIndex];
        deck[currentIndex] = deck[randomIndex];
        deck[randomIndex] = temporaryValue;
    }

    return deck;
  }
};