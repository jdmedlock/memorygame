
class GameUI {

  /**
   * @description Build a DOM document fragment containing the cards the
   * user will interact with in a game
   * @param {Object[]} gameDeck Cards in the current game deck
   * @returns {Object} DOM node fragment
   * @memberof GameUI
   */
  buildDeckFragment(gameDeck) {
    const deckNode = document.createDocumentFragment();
    gameDeck.forEach((card) => {
      const liElement = document.createElement('li');
      liElement.setAttribute('class','card');
      const iElement = document.createElement('i');
      iElement.setAttribute('class',`fa ${card.symbol}`);
      liElement.appendChild(iElement);
      deckNode.appendChild(liElement);
    });
    return deckNode;
  }

}

export default GameUI;
