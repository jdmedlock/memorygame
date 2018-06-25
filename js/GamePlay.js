
const MIN_PLAYER_RATING = 0;
const MAX_PLAYER_RATING = 3;
const TWO_SECONDS = 1000;
const MATCH_LIMIT = 8;

class GamePlay {
  /**
   * @description Creates an instance of the Game class.
   *
   * Note that the wait function used within this class was taken from
   * https://hackernoon.com/lets-make-a-javascript-wait-function-fa3a2eb88f11
   * @memberof GamePlay
   */
  constructor() {
    this.deck = null;
    this.gameDeck = [];
    this.gameUI = null;
    this.playerRating = MAX_PLAYER_RATING;
    this.moveCount = 0;
    this.flipCount = 0;
    this.matchCount = 0;
    this.firstCard = undefined;
    this.deckFragment = null;
    this.wait = ms => new Promise((r, j) => setTimeout(r, ms));
    this.isTurnInprogress = false;
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
    this.playerRating = MAX_PLAYER_RATING;
    this.gameUI.updatePlayerRating(this.playerRating, MAX_PLAYER_RATING);
    this.moveCount = 0;
    this.gameUI.updateMoveCount(this.moveCount);
    this.flipCount = 0;
    this.matchCount = 0;
    this.firstCard = undefined;
    this.gameDeck = this.deck.shuffle();
    this.gameUI.buildDeck(this.gameDeck);
    this.gameDeck.forEach((cardElement, cardIndex) => {
      this.gameUI.turnCardFaceDown(cardIndex);
    });
    this.gameUI.startTimer();
  }

  /**
   * @description Control a turn within the game. Within each turn the player
   * flips over a pair of cards If both cards have matching symbols they will
   * remain up. However, if the player chooses two cards with different symbols
   * they will both be flipped back over.
   * @param {Number} cardIndex Index of the selected card in the deck.
   * @returns {Boolean} True if last turn, otherwise false is returned
   * @memberof GamePlay
   */
  turn(selectedCardIndex) {
    // Ensure we have a valid card index and the selected card wasn't matched
    // in a previous turn
    if (selectedCardIndex === null) {
      return false;
    }
    if (this.firstCard === selectedCardIndex) {
      return false;
    }
    if (this.gameUI.isCardMatched(selectedCardIndex)) {
      return false;
    }
    // Ignore clicks until the preceeding pair of cards have been evaluated
    if (this.flipCount > 1) {
      return false;
    }

    this.gameUI.turnCardFaceUp(selectedCardIndex);
    this.flipCount += 1;
    if (this.flipCount === 1) {
      this.firstCard = selectedCardIndex;
    } else {
      this.moveCount += 1;
      this.gameUI.updateMoveCount(this.moveCount);
      if (!this.deck.isSymbolMatch(this.gameDeck, this.firstCard, selectedCardIndex)) {
        this.pairNotMatched(this.firstCard, selectedCardIndex);
      } else {
        this.pairMatched(this.firstCard, selectedCardIndex);
      }
    }

    // Check for the end of the current game
    if (this.matchCount >= MATCH_LIMIT) {
      this.gameUI.stopTimer();
      this.gameUI.showWinDialog(this, this.playerRating, this.moveCount);
      return true;
    }
    return false;
  }

  /**
   * @description Process a pair of cards matched by the user
   * @param {Number} firstCardCard Index of the first card of the pair in the deck
   * @param {Number} secondCardCard Index of the second card of the pair in the deck
   * @memberof GamePlay
   */
  pairMatched(firstCardIndex, secondCardIndex) {
    this.matchCount += 1;
    this.gameUI.markMatchedPair(firstCardIndex, secondCardIndex);
    this.firstCard = undefined;
    this.flipCount = 0;
    this.playerRating = this.playerRating < MAX_PLAYER_RATING
      ? this.playerRating += 1
      : this.playerRating;
    this.gameUI.updatePlayerRating(this.playerRating, MAX_PLAYER_RATING);
    }

  /**
   * @description Process a pair of selected cards whose symbols don't match
   * @param {Number} firstCardCard Index of the first card of the pair in the deck
   * @param {Number} secondCardCard Index of the second card of the pair in the deck
   * @memberof GamePlay
   */
  async pairNotMatched(firstCardIndex, secondCardIndex) {
    await this.wait(TWO_SECONDS);
    this.gameUI.turnCardFaceDown(firstCardIndex);
    this.gameUI.turnCardFaceDown(secondCardIndex);
    this.firstCard = undefined;
    this.flipCount = 0;
    this.playerRating = this.playerRating > MIN_PLAYER_RATING
      ? this.playerRating -= 1
      : this.playerRating;
    this.gameUI.updatePlayerRating(this.playerRating, MAX_PLAYER_RATING);
  }

}

export default GamePlay;
