import {
  increasedImage,
  titleImage,
  editButton,
  addButton,
  profileInfoSelectors,
  containerSelector,
  cardSelector
} from "./constants.js";
import {
  imagePopup,
  placePopup,
  profilePopup
} from "../index.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

export function handleImageClick(name, image) {
  increasedImage.src = image;
  increasedImage.alt = name;
  titleImage.textContent = name;
  imagePopup.open();
}

export function handlePlaceFormSubmit(inputValues) {
  const fromFormCard = [{
    name: inputValues.firstInputValue,
    link: inputValues.secondInputValue
  }]
  const newCard = new Section({
    items: fromFormCard,
    renderer: (item) => {
      const card = new Card(item, cardSelector, handleImageClick);
      const cardElement = card.createCard();
      newCard.addItem(cardElement)
    }
  }, containerSelector);
  newCard.renderItems();
}

const userContent = new UserInfo(profileInfoSelectors);

export function handleProfileFormSubmit(inputValues) {
  userContent.setUserInfo(inputValues);
}

editButton.addEventListener('click', () => {
  const currentValues = userContent.getUserInfo();
  profilePopup.setInputValues(currentValues);
  profilePopup.open();
});

addButton.addEventListener('click', () => {
  placePopup.open();
});
