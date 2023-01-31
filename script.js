let edit_button = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let close_button = document.querySelector('.popup__close-button');

function open_popup() {
  popup.classList.add('popup_opened');
  document.querySelector('.popup__input_type_name').value = document.querySelector('.profile__name').textContent;
  document.querySelector('.popup__input_type_profession').value = document.querySelector('.profile__profession').textContent;
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
  document.querySelector('.profile__name').textContent = document.querySelector('.popup__input_type_name').value;
  document.querySelector('.profile__profession').textContent = document.querySelector('.popup__input_type_profession').value;
  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);

const cardContainer = document.querySelector('.elements');

function addCard(name, image) {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  cardElement.querySelector('.element__image').src = image;
  cardElement.querySelector('.element__title').textContent = name;

  cardContainer.append(cardElement);
}

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach(function (item) {
  addCard(item.name, item.link)
})

