import './index.css';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from '../components/PopupWithImage';
import UserInfo from '../components/UserInfo';
import {
  validationConfig,
  formValidators,
  initialCards,
  editButton,
  addButton,
  profileInfoSelectors,
  cardSelector,
  containerSelector,
  popupImageSelector,
  popupPlaceSelector,
  popupProfileSelector,
} from "../utils/constants.js"


//отрисовка дефолтных карточек
export const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item)
    defaultCardList.addItem(cardElement)
  }
}, containerSelector)
defaultCardList.renderItems();

//функция генерации карточки
function createCard(data) {
  const card = new Card(data, cardSelector, handleImageClick);
  return card.createCard();
}

const userContent = new UserInfo(profileInfoSelectors);

//хендлеры для кнопок
function handleImageClick(name, image) {
  imagePopup.open(name, image);
}

function handlePlaceFormSubmit(inputValues) {
  const cardElement = createCard(inputValues)
  defaultCardList.addItem(cardElement);
}


function handleProfileFormSubmit(inputValues) {
  userContent.setUserInfo(inputValues);
}

//поп-ап профиля
const profilePopup = new PopupWithForm(popupProfileSelector, handleProfileFormSubmit, formValidators);

//поп-ап добавления места
const placePopup = new PopupWithForm(popupPlaceSelector, handlePlaceFormSubmit, formValidators);

//поп-ап картинки
const imagePopup = new PopupWithImage(popupImageSelector);

//навешивание слушателей на кнопки
editButton.addEventListener('click', () => {
  const currentValues = userContent.getUserInfo();
  profilePopup.setInputValues(currentValues);
  profilePopup.open();
});

addButton.addEventListener('click', () => {
  placePopup.open();
});

//навешивание слушателей на поп-апы
imagePopup.setEventListeners();
profilePopup.setEventListeners();
placePopup.setEventListeners();

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
