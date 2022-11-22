let edit_button = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let close_button = document.querySelector('.popup__close-button');

function open_popup() {
  popup.classList.add('popup_opened');
  document.querySelector('.popup__input:first-of-type').value = document.querySelector('.profile__name').textContent;
  document.querySelector('.popup__input:nth-of-type(2)').value = document.querySelector('.profile__profession').textContent;
}

function close_popup() {
  popup.classList.remove('popup_opened');
}



edit_button.addEventListener('click', open_popup);
close_button.addEventListener('click', close_popup);

let submit_button = document.querySelector('.popup__submit');
let formElement = document.querySelector('.popup__container');


function formSubmitHandler(evt) {
  evt.preventDefault();
  document.querySelector('.profile__name').textContent = document.querySelector('.popup__input:first-of-type').value;
  document.querySelector('.profile__profession').textContent = document.querySelector('.popup__input:nth-of-type(2)').value;
  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);

