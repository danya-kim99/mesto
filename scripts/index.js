import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import Section from "./components/Section.js";
import { handleImageClick } from "./utils/utils.js";
import {
  cardSelector,
  validationConfig,
  formValidators,
  initialCards,
  containerSelector
} from "./utils/constants.js"

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
