
class GameUI {

  /**
   * @description Build a DOM document fragment containing the cards the
   * user will interact with in a game
   * @param {Object[]} gameDeck Cards in the current game deck
   * @memberof GameUI
   */
  buildDeck(gameDeck) {
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
    //return deckFragment;
    const deckElement = document.querySelector('.deck');
    deckElement.appendChild(deckFragment);
  }

  /**
   * @description Turn a card facedown on the game board
   * @param {Object} selectedCard DOM element referencing the card
   * @memberof GameUI
   */
  turnCardFaceDown(selectedCard) {
    selectedCard.setAttribute('class', 'card');
  }

  /**
   * @description Turn a card faceup on the game board
   * @param {Object} selectedCard DOM element referencing the card
   * @memberof GameUI
   */
  turnCardFaceUp(selectedCard) {
    let cardAttributes = selectedCard.getAttribute('class') + ' open faceup ';
    selectedCard.setAttribute('class', cardAttributes);
  }

}

export default GameUI;
