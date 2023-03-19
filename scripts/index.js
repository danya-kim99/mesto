import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

//константы
const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_profile');
const profileInputName = document.querySelector('.popup__input_type_name');
const profileInputProfession = document.querySelector('.popup__input_type_profession');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const profileFormElement = document.querySelector('.popup__container_profile');
const addButton = document.querySelector('.profile__add-button');
const popupPlace = document.querySelector('.popup_type_place');
const popups = document.querySelectorAll('.popup')
const placeFormElement = document.querySelector('.popup__container_place');
const cardContainer = document.querySelector('.elements');
const popupImage = document.querySelector('.popup_type_image');
const nameInput = document.querySelector('.popup__input_type_title');
const imageInput = document.querySelector('.popup__input_type_link');
const profileForm = document.querySelector('.popup__container_profile .popup__form');
const placeForm = document.querySelector('.popup__container_place .popup__form');
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inputErrorClass: 'popup__input_type_error'
};
const profileFormValidator = new FormValidator(validationConfig, profileForm);
const cardFormValidator = new FormValidator(validationConfig, placeForm);
const initialCards = [{
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


//общие функции
function openPopup(popupType) {
  popupType.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

function closePopup(popupType) {
  popupType.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

//закрытие поп-апов
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup)
  }
}

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup)
    }
  })
})

//функционал поп-апа профиля
function openPopupProfile() {
  openPopup(popupProfile);
  profileInputName.value = profileName.textContent;
  profileInputProfession.value = profileProfession.textContent;
}

editButton.addEventListener('click', openPopupProfile);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileInputName.value;
  profileProfession.textContent = profileInputProfession.value;
  closePopup(popupProfile);
}

profileFormElement.addEventListener('submit', handleProfileFormSubmit);

//функционал поп-апа с добавлением места
function openPopupPlace() {
  openPopup(popupPlace);
}

addButton.addEventListener('click', openPopupPlace);

//фунционал добавления карточки с местом
function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  const cardName = nameInput.value;
  const cardImage = imageInput.value;
  addCard(cardName, cardImage);
  evt.target.reset()
  closePopup(popupPlace)
}

placeFormElement.addEventListener('submit', handlePlaceFormSubmit);

//функционал открытия изображение после клика по карточке
const openPopupImage = () => {
  openPopup(popupImage);
}

//функция создания карточки
function createCard(name, image) {
  const cardElement = new Card(name, image, openPopupImage).createCard();
  return cardElement
}

//функция для добавления карточек
function addCard(name, image) {
  const cardElement = createCard(name, image);
  cardContainer.prepend(cardElement);
}

//добавление карточек "из коробки"
initialCards.forEach(function (item) {
  addCard(item.name, item.link)
})

//включение валидаций
profileFormValidator.enableValidation()
cardFormValidator.enableValidation()
