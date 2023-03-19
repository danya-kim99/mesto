export default class FormValidator {
  constructor(params, form) {
    this._params = params;
    this._form = form;
  }

  _showInputError(formElement, inputElement, errorMessage, inputErrorClass) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(formElement, inputElement, inputErrorClass) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(formElement, inputElement, inputErrorClass) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass);
    } else {
      this._hideInputError(formElement, inputElement, inputErrorClass);
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

  _setEventListeners(formSelector, inputSelector, submitButtonSelector, inputErrorClass) {
    const inputList = Array.from(formSelector.querySelectorAll(inputSelector));
    const submitButton = formSelector.querySelector(submitButtonSelector);
    this._toggleButtonState(inputList, submitButton);

    formSelector.addEventListener('reset', () => {
      setTimeout(() => {
        this._toggleButtonState(inputList, submitButton).bind(this), 0
      })
    })

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._toggleButtonState(inputList, submitButton);
        this._checkInputValidity(formSelector, inputElement, inputErrorClass);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners(this._form, this._params.inputSelector, this._params.submitButtonSelector, this._params.inputErrorClass)
  }
}
