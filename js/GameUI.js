
class GameUI {

  /**
   * @description Build a DOM document fragment containing the cards the
   * user will interact with in a game
   * @param {Object[]} gameDeck Cards in the current game deck
   * @returns {Object} DOM node fragment
   * @memberof GameUI
   */
  buildDeckFragment(gameDeck) {
    const deckFragment = document.createDocumentFragment();
    gameDeck.forEach((card) => {
      const liElement = document.createElement('li');
      liElement.setAttribute('class','card');
      const iElement = document.createElement('i');
      iElement.setAttribute('class',`fa ${card.symbol}`);
      liElement.appendChild(iElement);
      deckFragment.appendChild(liElement);
    });
    return deckFragment;
  }

  /**
   * @description Process a click on a game card
   * @param {Event} event Event object for the card that was clicked
   * @memberof GameUI
   */
  addCardListener(deckElement) {
    deckElement.addEventListener('click', function(event) {
      event.stopPropagation();
      console.log('Card was clicked');
    });
  }

}

export default GameUI;
