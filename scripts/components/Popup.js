export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add('popup_opened');
  };

  close() {
    this._popup.classList.remove('popup_opened');
    this._removeEventListeners();
  };

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      this.close(openedPopup);
    }
  };

  setEventListeners() {
    document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close()
      }
      if (evt.target.classList.contains('popup__close-button')) {
        this.close()
      }
    })
  };

  _removeEventListeners() {
    document.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
  }

}
