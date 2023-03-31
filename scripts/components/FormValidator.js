export default class FormValidator {
  constructor(params, form) {
    this._params = params;
    this._form = form;
    this._inputList = Array.from(form.querySelectorAll(params.inputSelector));
    this._inputErrorClass = params.inputErrorClass;
    this._submitButtonSelector = params.submitButtonSelector;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement, this._inputErrorClass);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState = () => {
    if (this._hasInvalidInput(this._inputList)) {
      this._submitButton.setAttribute('disabled', true)
    } else {
      this._submitButton.removeAttribute('disabled')
    }
  }

  _setEventListeners() {
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
    this._toggleButtonState();

    this._form.addEventListener('reset', () => {
      setTimeout(() => {
        this._toggleButtonState(), 0
      })
    })

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._toggleButtonState();
        this._checkInputValidity(inputElement);
      });
    });
  }

  resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });

  }

  enableValidation() {
    this._form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners()
  }
}
