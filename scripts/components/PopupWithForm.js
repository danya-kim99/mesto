import { formValidators } from "../utils/constants.js";
import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handler) {
    super(popupSelector)
    this._popupContainer = this._popup.querySelector('.popup__container');
    this._form = this._popup.querySelector('.popup__container .popup__form');
    this._handler = handler;
  }

  open() {
    super.open()
  }

  close(){
    super.close()
    formValidators[ this._form.getAttribute('name') ].resetValidation();
  }

  _getInputValues(){
    this._inputs = Array.from(this._form.querySelectorAll('.popup__input'));
    const inputValues = {
      firstInputValue: this._inputs[0].value,
      secondInputValue: this._inputs[1].value,
    }
    return inputValues;
  }

  setEventListeners(){
    super.setEventListeners()
    this._popupContainer.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handler(this._getInputValues());
      evt.target.reset();
      this.close()
    })
  }
}
