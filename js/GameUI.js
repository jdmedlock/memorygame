
class GameUI {

  /**
   * @description Create and instance of GameUI
   * @memberof GameUI
   */
  constructor() {
    this.gameTimer = null;
    this.gameTimerMinutes = 0;
    this.gameTimerSeconds = 0;
    this.secondsDOMElement = document.querySelector('.timer-seconds');
    this.minutesDOMElement = document.querySelector('.timer-minutes');
  }

  /**
   * @description Build a DOM document fragment containing the cards the
   * user will interact with in a game
   * @param {Object[]} gameDeck Cards in the current game deck
   * @memberof GameUI
   */
  buildDeck(gameDeck) {
    const deckElement = document.querySelector('.deck');
    if (deckElement.childElementCount > 0) {
      while (deckElement.firstChild) {
        deckElement.removeChild(deckElement.firstChild);
      }
    }
    const deckFragment = document.createDocumentFragment();
    gameDeck.forEach((card, cardIndex) => {
      const liElement = document.createElement('li');
      liElement.setAttribute('id', `${cardIndex}`);
      liElement.setAttribute('class', 'card');
      const iElement = document.createElement('i');
      iElement.setAttribute('class', `fa ${card.symbol}`);
      liElement.appendChild(iElement);
      deckFragment.appendChild(liElement);
    });
    deckElement.appendChild(deckFragment);
  }

  /**
   * @description Turn a card facedown on the game board
   * @param {Number} selectedCard Index of the selected card in the deck
   * @memberof GameUI
   */
  turnCardFaceDown(selectedCardIndex) {
    const selectedCard = document.getElementById(`${selectedCardIndex}`);
    selectedCard.setAttribute('class', 'card');
  }

  /**
   * @description Turn a card faceup on the game board
   * @param {Number} selectedCard Index of the selected card in the deck
   * @memberof GameUI
   */
  turnCardFaceUp(selectedCardIndex) {
    const selectedCard = document.getElementById(`${selectedCardIndex}`);
    const cardAttributes = selectedCard.getAttribute('class') + ' open faceup ';
    selectedCard.setAttribute('class', cardAttributes);
  }

  /**
   * @description Mark the selected card as being matched
   * @param {Number} firstCardCard Index of the first card of the pair in the deck
   * @param {Number} secondCardCard Index of the second card of the pair in the deck
   * @memberof GameUI
   */
  markMatchedPair(firstCardIndex, secondCardIndex) {
    const firstSelectedCard = document.getElementById(`${firstCardIndex}`);
    let cardAttributes = firstSelectedCard.getAttribute('class') + ' match ';
    firstSelectedCard.setAttribute('class', cardAttributes);
    const secondSelectedCard = document.getElementById(`${secondCardIndex}`);
    cardAttributes = secondSelectedCard.getAttribute('class') + ' match';
    secondSelectedCard.setAttribute('class', cardAttributes);
    this.animateMatchedPair(firstSelectedCard, secondSelectedCard);
  }

  /**
   * @description Check if a card has been previously matched
   * @param {Number} cardIndex Index of the card to check
   * @returns {Boolean} true if the card was previously matched, otherwise false
   * @memberof GameUI
   */
  isCardMatched(cardIndex) {
    return document.getElementById(`${cardIndex}`)
      .getAttribute('class')
      .includes('match');
  }

  /**
   * @description Animate a pair of cards successfully matched by the player
   * @param {*} firstSelectedCard DOM element of the first matched card
   * @param {*} secondSelectedCard DOM element of the second matched card
   * @memberof GameUI
   */
  animateMatchedPair(firstSelectedCard, secondSelectedCard) {
    const matchedPairStyle = 'animation-duration: 1s; animation-name: card-match;';
    firstSelectedCard.setAttribute("style", matchedPairStyle);
    secondSelectedCard.setAttribute("style", matchedPairStyle);
  }

  /**
   * @description Display the current turn count (i.e. moves)
   * @param {Number} moveCount Number of turns the player has made in the
   * current game
   * @memberof GameUI
   */
  updateMoveCount(moveCount) {
    const countElement = document.querySelector('.moves');
    countElement.innerText = moveCount;
  }

  /**
   * @description Display the current player star rating
   * @param {Number} starCount Players current star rating
   * @param {Number} starLimit Maximum possible number of stars
   * @memberof GameUI
   */
  updatePlayerRating(starCount, starLimit) {
    const closedStarClasses = 'rating fa fa-star';
    const openStarClasses = 'rating fa fa-star-o';
    const ratingNodeList = document.querySelectorAll('.rating');
    for (let i = 0; i < starLimit; i += 1) {
      if ((starCount - i) <= 0) {
        ratingNodeList[i].setAttribute('class', openStarClasses);
      } else {
        ratingNodeList[i].setAttribute('class', closedStarClasses);
      }
    }
  }

  /**
   * @description Start a new game timer
   * @memberof GameUI
   */
  startTimer() {
    this.stopTimer();
    this.gameTimerMinutes = 0;
    this.minutesDOMElement.innerText = '00';
    this.gameTimerSeconds = 0;
    this.secondsDOMElement.innerText = '00';
    this.gameTimer = setInterval(this.showNewTime, 1000, this);
  }

  /**
   * @description Update the game timer and add the results to the DOM
   * @memberof GameUI
   */
  showNewTime(gameui) {
    gameui.gameTimerSeconds += 1;
    if (gameui.gameTimerSeconds >= 60) {
      gameui.gameTimerSeconds = 0;
      gameui.gameTimerMinutes += 1;
      gameui.minutesDOMElement.innerText = ("0" + gameui.gameTimerMinutes).slice(-2);
    }
    gameui.secondsDOMElement.innerText = ("0" + gameui.gameTimerSeconds).slice(-2);
  }

  /**
   * @description Stop the game timer if one is currently active
   * @memberof GameUI
   */
  stopTimer() {
    if (this.gameTimer !== null) {
      clearInterval(this.gameTimer);
      this.gameTimer = null;
    }
  }

  /**
   * @description Display the game win dialog with play metrics
   * @param {*} gamePlay
   * @param {*} playerRating
   * @param {*} moveCount
   * @memberof GameUI
   */
  showWinDialog(gamePlay, playerRating, moveCount) {
    document.querySelector('.game-board').setAttribute('style', 'display: none');

    document.querySelector('.win-minutes').innerText = this.gameTimerMinutes;
    document.querySelector('.win-seconds').innerText = this.gameTimerSeconds;
    document.querySelector('.win-moves').innerText = moveCount;
    document.querySelector('.win-stars').innerText = playerRating;

    const winButton = document.querySelector('.win-button');
    winButton.gamePlayRef = gamePlay; // Make gamePlay available to event handler
    winButton.addEventListener('click', this.setupForNewGame);
    document.querySelector('.win-dialog').setAttribute('style', 'display: flex');
  }

  /**
   * @description Win Button vent handler. Note that the 'win-button' element
   * is expected to contain a 'gamePlayRef' attribute containing the reference
   * to the GamePlay object instance.
   * @param {*} event The event that was triggered
   * @memberof GameUI
   */
  setupForNewGame(event) {
    document.querySelector('.win-dialog').setAttribute('style', 'display: none');
    document.querySelector('.game-board').setAttribute('style', 'display: flex');
    event.target.gamePlayRef.startNewGame();
  }

}

export default GameUI;
