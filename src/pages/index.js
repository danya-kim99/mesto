import './index.css';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from '../components/PopupWithImage';
import PopupWithConfirmation from '../components/PopupWithConfirmation';
import UserInfo from '../components/UserInfo';
import Api from '../components/Api';
import {
  apiOptions,
  validationConfig,
  formValidators,
  editButton,
  addButton,
  avatarButton,
  profileInfoSelectors,
  cardSelector,
  containerSelector,
  popupImageSelector,
  popupPlaceSelector,
  popupProfileSelector,
  popupAvatarSelector,
  popupSubmitDeletionSelector,
  userId
} from "../utils/constants.js"
//api
const api = new Api(apiOptions)

//информация о юзере
const userContent = new UserInfo(profileInfoSelectors);

//создание контейнера для карточек
const defaultCardList = new Section(
  function renderer(item) {
    const cardElement = createCard(item)
    defaultCardList.addItem(cardElement)

    if (item._id != userId) {
      const elementTrashButton = cardElement.querySelector('.element__trash');
      cardElement.removeChild(elementTrashButton)
    }
  }, containerSelector)

//подгрузка данных из апи
defaultCardList.loading(true)
Promise.all([api.getInitialCards(), api.getProfileInfo()])
  .then(([initialCards, profileInfo]) => {
    defaultCardList.loading(false)
    defaultCardList.renderItems(initialCards);
    userContent.setUserInfo(profileInfo)
    userContent.setUserAvatar(profileInfo.avatar)
  })
  .catch((err) => {
    console.log(err);
  })


//функция генерации карточки
function createCard(data) {
  const card = new Card(data, cardSelector, handleImageClick, handleTrashClick, function handleLikeClick() {
    if (this.getLikedState(this.likes)) {
      api.deleteLike(this._id)
        .then((res) => {
          this.likes = res.likes;
          this.changeLikeAmount(res.likes);
          this.changeLikeState(res.likes);
        })
        .catch((err) => {
          console.log(err);
        })
    } else {
      api.putLike(this._id)
        .then((res) => {
          this.likes = res.likes;
          this.changeLikeAmount(res.likes);
          this.changeLikeState(res.likes);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  });
  return card.createCard();
}

//хендлеры для кнопок
function handleImageClick(name, image) {
  imagePopup.open(name, image);
}

function handleTrashClick(card) {
  submitDeletionPopup.open(card)
}

function handleSubmitDeletion(card) {
  submitDeletionPopup.loading(true);
  api.deleteCard(card.id)
    .then(() => {
      card.remove()
      submitDeletionPopup.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      submitDeletionPopup.loading(false);
      submitDeletionPopup.gotError();
    })
}

function handlePlaceFormSubmit(inputValues) {
  placePopup.loading(true);
  api.postCard(inputValues)
    .then((res) => {
      const cardElement = createCard(res)
      defaultCardList.addItem(cardElement);
      placePopup.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      placePopup.loading(false);
      placePopup.gotError();
    })
}

function handleProfileFormSubmit(inputValues) {
  profilePopup.loading(true);
  api.patchProfileInfo(inputValues)
    .then(() => {
      userContent.setUserInfo(inputValues);
      profilePopup.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      profilePopup.loading(false);
      profilePopup.gotError();
    })
}

function handleAvatarFormSubmit(inputValues) {
  avatarPopup.loading(true);
  api.patchProfileAvatar(inputValues)
    .then(() => {
      userContent.setUserAvatar(inputValues.link);
      avatarPopup.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      avatarPopup.loading(false);
      avatarPopup.gotError();
    })
}

//поп-ап профиля
const profilePopup = new PopupWithForm(popupProfileSelector, handleProfileFormSubmit, formValidators);

//поп-ап добавления места
const placePopup = new PopupWithForm(popupPlaceSelector, handlePlaceFormSubmit, formValidators);

//поп-ап картинки
const imagePopup = new PopupWithImage(popupImageSelector);

//поп-ап подтверждения удаления
const submitDeletionPopup = new PopupWithConfirmation(popupSubmitDeletionSelector, handleSubmitDeletion);

//поп-ап обновления аватара
const avatarPopup = new PopupWithForm(popupAvatarSelector, handleAvatarFormSubmit, formValidators);

//навешивание слушателей на кнопки
editButton.addEventListener('click', () => {
  const currentValues = userContent.getUserInfo();
  profilePopup.setInputValues(currentValues);
  profilePopup.open();
});

addButton.addEventListener('click', () => {
  placePopup.open();
});

avatarButton.addEventListener('click', () => {
  avatarPopup.open();
});

//навешивание слушателей на поп-апы
imagePopup.setEventListeners();
profilePopup.setEventListeners();
placePopup.setEventListeners();
submitDeletionPopup.setEventListeners();
avatarPopup.setEventListeners()

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
