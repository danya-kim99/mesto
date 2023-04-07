import './index.css';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from '../components/PopupWithImage';
import UserInfo from '../components/UserInfo';
import Api from '../components/Api';
import {
  apiOptions,
  validationConfig,
  formValidators,
  editButton,
  addButton,
  profileInfoSelectors,
  cardSelector,
  containerSelector,
  popupImageSelector,
  popupPlaceSelector,
  popupProfileSelector,
} from "../utils/constants.js"

//api
const api = new Api(apiOptions)

//информация о юзере
const userContent = new UserInfo(profileInfoSelectors);

//создание контейнера для карточек
const defaultCardList = new Section(
  function renderer (item) {
    const cardElement = createCard(item)
    defaultCardList.addItem(cardElement)
  }
, containerSelector)

//подгрузка данных из апи
Promise.all([api.getInitialCards(), api.getProfileInfo()])
  .then(([initialCards, profileInfo]) => {
    defaultCardList.renderItems(initialCards);
    userContent.setUserInfo(profileInfo)
    userContent.setUserAvatar(profileInfo.avatar)
  })
  .catch((err) => {
    console.log(err);
  })


//функция генерации карточки
function createCard(data) {
  const card = new Card(data, cardSelector, handleImageClick);
  return card.createCard();
}

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
  api.patchProfileInfo(inputValues)
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
