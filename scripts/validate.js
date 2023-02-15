const showInputError = (formElement, inputElement, errorMessage, inputErrorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, inputErrorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, inputErrorClass) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass);
  } else {
    hideInputError(formElement, inputElement, inputErrorClass);
  }
};

const setEventListeners = (formSelector, inputSelector, submitButtonSelector, inputErrorClass) => {
  const inputList = Array.from(formSelector.querySelectorAll(inputSelector));
  const submitButton = formSelector.querySelector(submitButtonSelector);
  toggleButtonState(inputList, submitButton);

  formSelector.addEventListener('reset', () => {
    setTimeout(() => {
      toggleButtonState(inputList, submitButton), 0 })
  })

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      toggleButtonState(inputList, submitButton);
      checkInputValidity(formSelector, inputElement, inputErrorClass);
    });
  });
};

const enableValidation = (params) => {
  const formsList = Array.from(document.querySelectorAll(params.formSelector));
  formsList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    formsList.forEach((formElement) => {
      setEventListeners(formElement, params.inputSelector, params.submitButtonSelector, params.inputErrorClass);
    });
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, submitButton) => {
  if (hasInvalidInput(inputList)) {
    submitButton.setAttribute('disabled', true)
  } else {
    submitButton.removeAttribute('disabled')
  }
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inputErrorClass: 'popup__input_type_error'
});
