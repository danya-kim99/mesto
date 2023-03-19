export default class FormValidator {
  constructor(params, form) {
    this._params = params;
    this._form = form;
    this._inputList = Array.from(form.querySelectorAll(params.inputSelector));
    this._inputErrorClass = params.inputErrorClass;
    this._submitButtonSelector = params.submitButtonSelector;
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement, this._inputErrorClass);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState = (inputList, submitButton) => {
    if (this._hasInvalidInput(inputList)) {
      submitButton.setAttribute('disabled', true)
    } else {
      submitButton.removeAttribute('disabled')
    }
  }

  _setEventListeners() {
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
    this._toggleButtonState(this._inputList, this._submitButton);

    this._form.addEventListener('reset', () => {
      setTimeout(() => {
        this._toggleButtonState(this._inputList, this._submitButton), 0
      })
    })

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._toggleButtonState(this._inputList, this._submitButton);
        this._checkInputValidity(this._form, inputElement);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners()
  }
}
