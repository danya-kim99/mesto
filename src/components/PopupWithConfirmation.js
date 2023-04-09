import Popup from "./Popup.js";
export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handler) {
    super(popupSelector)
    this._popupContainer = this._popup.querySelector('.popup__container');
    this._handler = handler;
    this._submitButton = this._popup.querySelector('.popup__submit');
    this._currentCard;
  }

  open(card) {
    super.open()
    this._currentCard = card;
    this.loading(false);
  }

  loading(isLoading) {
    if (isLoading) {
      this._submitButton.value = 'Удаление...';
    } else {
      this._submitButton.value = 'Да';
    }
  }

  gotError() {
    this._submitButton.value = 'Попробуйте ещё раз';
  }

  setEventListeners() {
    super.setEventListeners()
    this._popupContainer.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handler(this._currentCard);
    })
  }
}
