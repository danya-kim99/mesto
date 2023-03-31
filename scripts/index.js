import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import { handleImageClick } from "./utils/utils.js";
import {
  editButton,
  popupProfile,
  profileInputName,
  profileInputProfession,
  profileName,
  profileProfession,
  profileFormElement,
  addButton,
  popupPlace,
  popups,
  placeFormElement,
  cardContainer,
  nameInput,
  imageInput,
  profileForm,
  placeForm,
  cardSelector,
  validationConfig,
  formValidators,
  initialCards
} from "./utils/constants.js"

const containerSelector = '.elements'

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
  formValidators[ profileForm.getAttribute('name') ].resetValidation();
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
  formValidators[ placeForm.getAttribute('name') ].resetValidation();
  openPopup(popupPlace);
}

addButton.addEventListener('click', openPopupPlace);

//фунционал добавления карточки с местом
function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  const fromFormCard = [
    {
    name: nameInput.value,
    link: imageInput.value
    }
  ]
  const newCard = new Section({
    items: fromFormCard,
    renderer: (item) => {
      const card = new Card(item, cardSelector, handleImageClick);
      const cardElement = card.createCard();
      defaultCardList.addItem(cardElement)
    },
    containerSelector
  });
  newCard.renderItems();
  evt.target.reset();
  closePopup(popupPlace);
}

placeFormElement.addEventListener('submit', handlePlaceFormSubmit);

//функционал открытия изображение после клика по карточке


//функция создания карточки
function createCard(name, image) {
  const cardElement = new Card(name, image, cardSelector, handleImageClick).createCard();
  return cardElement
}

//функция для добавления карточек
function addCard(name, image) {
  const cardElement = createCard(name, image);
  cardContainer.prepend(cardElement);
}

const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, cardSelector, handleImageClick);
    const cardElement = card.createCard();
    defaultCardList.addItem(cardElement)
  },
  containerSelector
})
defaultCardList.renderItems();

//включение валидаций
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
    const formName = formElement.getAttribute('name')

    formValidators[formName] = validator;
   validator.enableValidation();
  });
};

enableValidation(validationConfig);
