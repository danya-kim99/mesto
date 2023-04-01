import './index.css';

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import {
  handleImageClick,
  handlePlaceFormSubmit,
  handleProfileFormSubmit
} from "../utils/utils.js";
import {
  cardSelector,
  validationConfig,
  formValidators,
  initialCards,
  containerSelector,
  popupImageSelector,
  popupPlaceSelector,
  popupProfileSelector
} from "../utils/constants.js"

//поп-ап профиля
export const profilePopup = new PopupWithForm(popupProfileSelector, handleProfileFormSubmit);

//поп-ап добавления места
export const placePopup = new PopupWithForm(popupPlaceSelector, handlePlaceFormSubmit);

//поп-ап картинки
export const imagePopup = new Popup(popupImageSelector);

//навешивание слушателей на поп-апы
imagePopup.setEventListeners();
profilePopup.setEventListeners();
placePopup.setEventListeners();

//отрисовка дефолтных карточек
export const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, cardSelector, handleImageClick);
    const cardElement = card.createCard();
    defaultCardList.addItem(cardElement)
  }
}, containerSelector)
defaultCardList.renderItems();


//включение валидаций
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
    const formName = formElement.getAttribute('name')
    console.log(formName)

    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(validationConfig);
