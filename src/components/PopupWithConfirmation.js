import Popup from "./Popup.js";
export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handler) {
    super(popupSelector)
    this._popupContainer = this._popup.querySelector('.popup__container');
    this._handler = handler
    this._currentCard
  }

  open(card) {
    super.open()
    this._currentCard = card
  }

  setEventListeners() {
    super.setEventListeners()
    this._popupContainer.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handler(this._currentCard);
      this.close()
    })
  }
}
