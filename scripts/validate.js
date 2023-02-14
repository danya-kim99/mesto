const showInputError = (form, inputElement, errorMessage, inputErrorClass) => {
  const errorElement = form.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (form, inputElement, inputErrorClass) => {
  const errorElement = form.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (form, inputElement, inputErrorClass) => {
  if (!inputElement.validity.valid) {
    showInputError(form, inputElement, inputElement.validationMessage, inputErrorClass);
  } else {
    hideInputError(form, inputElement, inputErrorClass);
  }
};

const setEventListeners = (form, inputSelector, submitButtonSelector, inputErrorClass) => {
  const inputList = Array.from(form.querySelectorAll(inputSelector));
  const submitButton = form.querySelector(submitButtonSelector);
  toggleButtonState(inputList, submitButton);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      toggleButtonState(inputList, submitButton);
      checkInputValidity(form, inputElement, inputErrorClass);
    });
  });
};

const enableValidation = (params) => {
  const formsList = Array.from(document.querySelectorAll(params.formSelector));
  formsList.forEach((form) => {
    form.addEventListener('submit', function (evt) {
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
