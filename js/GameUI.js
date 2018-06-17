
class GameUI {

  /**
   * @description Build a DOM document fragment containing the cards the
   * user will interact with in a game
   * @param {Object[]} gameDeck Cards in the current game deck
   * @memberof GameUI
   */
  buildDeck(gameDeck) {
    const deckFragment = document.createDocumentFragment();
    gameDeck.forEach((card) => {
      const liElement = document.createElement('li');
      liElement.setAttribute('class','card');
      const iElement = document.createElement('i');
      iElement.setAttribute('class',`fa ${card.symbol}`);
      liElement.appendChild(iElement);
      deckFragment.appendChild(liElement);
    });
    //return deckFragment;
    const deckElement = document.querySelector('.deck');
    deckElement.appendChild(deckFragment);
  }

  /**
   * @description Enable an event listener to process clicks on the game cards
   * @param {Object} deckElement DOM element containing the displayed card deck
   * @memberof GameUI
   */
  OLDaddCardListener(deckElement) {
    deckElement.addEventListener('click', function(event) {
      event.stopPropagation();
      this.turnCardFaceUp(event.target);
      /*
      let selectedCard = event.target;
      let cardAttributes = selectedCard.getAttribute('class') + ' open faceup ';
      selectedCard.setAttribute('class', cardAttributes);
      */
    });
  }

  /**
   * @description Process clicks on the game cards
   * @param {Object} deckElement DOM element containing the displayed card deck
   * @memberof GameUI
   */
  cardWasClicked(event) {
    event.stopPropagation();
    this.turnCardFaceUp(event.target);
  }

  /**
   * @description Turn a card faceup on the game board
   * @param {Object} selectedCard DOM element referencing the card that was clicked
   * @memberof GameUI
   */
  turnCardFaceUp(selectedCard) {
    let cardAttributes = selectedCard.getAttribute('class') + ' open faceup ';
    selectedCard.setAttribute('class', cardAttributes);
  }

}

export default GameUI;
