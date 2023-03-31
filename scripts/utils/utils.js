import {
  increasedImage,
  titleImage,
  popupImageSelector,
  popupProfileSelector,
  popupPlaceSelector,
  placeFormElement,
  editButton,
  addButton,
  profileInfoSelectors
} from "./constants.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

export function handleImageClick(name, image) {
  increasedImage.src = image;
  increasedImage.alt = name;
  titleImage.textContent = name;
  const currentPopup = new Popup(popupImageSelector);
  currentPopup.open();
}

function handlePlaceFormSubmit(inputValues) {
  const fromFormCard = [
    {
    name: inputValues.firstInputValue,
    link: inputValues.secondInputValue
    }
  ]
  const newCard = new Section({
    items: fromFormCard,
    renderer: (item) => {
      const card = new Card(item, cardSelector, handleImageClick);
      const cardElement = card.createCard();
      defaultCardList.addItem(cardElement)
    }
  }, containerSelector);
  newCard.renderItems();
}

function handleProfileFormSubmit(inputValues) {
  const userContent = new UserInfo(profileInfoSelectors);
  userContent.setUserInfo(inputValues);
}

placeFormElement.addEventListener('submit', handlePlaceFormSubmit);

editButton.addEventListener('click', () => {
  const currentPopup = new PopupWithForm(popupProfileSelector, handleProfileFormSubmit);

  currentPopup.open();
});

addButton.addEventListener('click', () => {
  const currentPopup = new PopupWithForm(popupPlaceSelector, handlePlaceFormSubmit);
  currentPopup.open();
});
