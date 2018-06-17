
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
   * @description Enable an event listener to process clicks on the game cards
   * @param {Object} deckElement DOM element containing the displayed card deck
   * @memberof GameUI
   */
  addCardListener(deckElement) {
    deckElement.addEventListener('click', function(event) {
      event.stopPropagation();
      let selectedCard = event.target;
      let cardAttributes = selectedCard.getAttribute('class') + ' open faceup ';
      selectedCard.setAttribute('class', cardAttributes);
    });
  }

}

export default GameUI;
