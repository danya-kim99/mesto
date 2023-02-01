//общие функции
function openPopup(popupType) {
  popupType.classList.add('popup_opened');
}

function closePopup(popupType) {
  popupType.classList.remove('popup_opened');
}

//функционал поп-апа профиля
let editButton = document.querySelector('.profile__edit-button');
let closeButtonProfile = document.querySelector('.popup__close-button_profile');
let popupProfile = document.querySelector('.popup_type_profile');

function openPopupProfile() {
  openPopup(popupProfile);
  document.querySelector('.popup__input_type_name').value = document.querySelector('.profile__name').textContent;
  document.querySelector('.popup__input_type_profession').value = document.querySelector('.profile__profession').textContent;
}

function closePopupProfile() {
  closePopup(popupProfile);
}

editButton.addEventListener('click', openPopupProfile);
closeButtonProfile.addEventListener('click', closePopupProfile);

let submitButton = document.querySelector('.popup__submit');
let formElement = document.querySelector('.popup__container');

function formSubmitHandler(evt) {
  evt.preventDefault();
  document.querySelector('.profile__name').textContent = document.querySelector('.popup__input_type_name').value;
  document.querySelector('.profile__profession').textContent = document.querySelector('.popup__input_type_profession').value;
  popupProfile.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);

//функционал поп-апа с добавлением места
let addButton = document.querySelector('.profile__add-button')
let popupPlace = document.querySelector('.popup_type_place');
let closeButtonPlace = document.querySelector('.popup__close-button_place');

function openPopupPlace() {
  openPopup(popupPlace);
  document.querySelector('.popup__input_type_name').value = document.querySelector('.profile__name').textContent;
  document.querySelector('.popup__input_type_profession').value = document.querySelector('.profile__profession').textContent;
}

function closePopupPlace() {
  closePopup(popupPlace);
}

addButton.addEventListener('click', openPopupPlace);
closeButtonPlace.addEventListener('click', closePopupPlace);



//селектор для контейнера с карточками
const cardContainer = document.querySelector('.elements');

//функция для добавления карточек
function addCard(name, image) {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  cardElement.querySelector('.element__image').src = image;
  cardElement.querySelector('.element__title').textContent = name;

  cardContainer.append(cardElement);
}

//массив для карточек "из коробки"
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

//добавление карточек "из коробки"
initialCards.forEach(function (item) {
  addCard(item.name, item.link)
})

