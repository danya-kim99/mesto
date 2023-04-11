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
  popupSubmitDeletionSelector
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
  }, containerSelector)

//подгрузка данных из апи
Promise.all([api.getInitialCards(), api.getProfileInfo()])
  .then(([initialCards, profileInfo]) => {
    userContent.setUserId(profileInfo._id);
    defaultCardList.renderItems(initialCards);
    userContent.setUserInfo(profileInfo)
    userContent.setUserAvatar(profileInfo.avatar)
  })
  .catch((err) => {
    console.log(err);
  })


//функция генерации карточки
function createCard(data) {
  const card = new Card(
    data,
    userContent.getUserId(),
    cardSelector,
    handleImageClick,
    function handleTrashClick(card) {
      submitDeletionPopup.open();
      submitDeletionPopup.setSubmitAction(() => {
        submitDeletionPopup.loading(true);
        api.deleteCard(card.getCardId())
          .then(() => {
            card.removeCard();
            submitDeletionPopup.close();
          })
          .catch((err) => {
            console.log(err)
          })
          .finally(() => submitDeletionPopup.loading(false))
      })
    },
    function handleLikeClick() {
      if (card.getLikedState(card.getNumberOfLikes())) {
        api.deleteLike(card.getCardId())
          .then((res) => {
            card.changeLikeAmount(res.likes);
            card.changeLikeState(res.likes);
          })
          .catch((err) => {
            console.log(err);
          })
      } else {
        api.putLike(card.getCardId())
          .then((res) => {
            card.changeLikeAmount(res.likes);
            card.changeLikeState(res.likes);
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

function handlePlaceFormSubmit(inputValues) {
  placePopup.loading(true);
  api.postCard(inputValues)
    .then((res) => {
      const cardElement = createCard(res)
      defaultCardList.addItem(cardElement);
      placePopup.close();
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => placePopup.loading(false))
}

function handleProfileFormSubmit(inputValues) {
  profilePopup.loading(true);
  api.patchProfileInfo(inputValues)
    .then((res) => {
      userContent.setUserInfo({
        name: res.name,
        about: res.about
      });
      profilePopup.close();
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => profilePopup.loading(false))
}

function handleAvatarFormSubmit(inputValues) {
  avatarPopup.loading(true);
  api.patchProfileAvatar(inputValues)
    .then((res) => {
      userContent.setUserAvatar(res.avatar);
      avatarPopup.close();
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => avatarPopup.loading(false))
}

//поп-ап профиля
const profilePopup = new PopupWithForm(popupProfileSelector, handleProfileFormSubmit, formValidators, 'Сохранить');

//поп-ап добавления места
const placePopup = new PopupWithForm(popupPlaceSelector, handlePlaceFormSubmit, formValidators, 'Создать');

//поп-ап картинки
const imagePopup = new PopupWithImage(popupImageSelector);

//поп-ап подтверждения удаления
const submitDeletionPopup = new PopupWithConfirmation(popupSubmitDeletionSelector);

//поп-ап обновления аватара
const avatarPopup = new PopupWithForm(popupAvatarSelector, handleAvatarFormSubmit, formValidators, 'Сохранить');

//навешивание слушателей на кнопки
editButton.addEventListener('click', () => {
  const currentValues = userContent.getUserInfo();
  profilePopup.setInputValues(currentValues);
  formValidators['popup__form_type_profile'].resetValidation()
  profilePopup.open();
});

addButton.addEventListener('click', () => {
  formValidators['popup__form_type_place'].resetValidation()
  placePopup.open();
});

avatarButton.addEventListener('click', () => {
  formValidators['popup__form_type_avatar'].resetValidation()
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
