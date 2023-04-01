import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handler, formValidators) {
    super(popupSelector)
    this._popupContainer = this._popup.querySelector('.popup__container');
    this._form = this._popup.querySelector('.popup__container .popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._handler = handler;
    this._formValidators = formValidators;
  }

  close() {
    super.close();
    this._form.reset()
    this._formValidators[this._form.getAttribute('name')].resetValidation();
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setInputValues(values) {
    this._inputList.forEach(input => {
      input.value = values[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners()
    this._popupContainer.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handler(this._getInputValues());
      this.close()
    })
  }
}
