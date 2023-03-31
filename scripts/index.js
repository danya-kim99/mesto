import Card from "./components/Card.js";
import Popup from "./components/Popup.js";
import FormValidator from "./components/FormValidator.js";
import Section from "./components/Section.js";
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
  initialCards,
  containerSelector
} from "./utils/constants.js"



//функционал поп-апа профиля
function openPopupProfile() {
  formValidators[ profileForm.getAttribute('name') ].resetValidation();
  const currentPopup = new Popup(popupProfileSelector);
  currentPopup.open();
  profileInputName.value = profileName.textContent;
  profileInputProfession.value = profileProfession.textContent;
}








//фунционал добавления карточки с местом




//функционал открытия изображение после клика по карточке




const defaultCardList = new Section({
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

    formValidators[formName] = validator;
   validator.enableValidation();
  });
};

enableValidation(validationConfig);
