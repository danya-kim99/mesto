export const editButton = document.querySelector('.profile__edit-button');
export const popupProfileSelector = '.popup_type_profile';
export const profileName = document.querySelector('.profile__name');
export const addButton = document.querySelector('.profile__add-button');
export const popupPlaceSelector = '.popup_type_place';
export const placeFormElement = document.querySelector('.popup__container_place');
export const cardContainer = document.querySelector('.elements');
export const popupImageSelector = '.popup_type_image'
export const placeFormSelector = '.popup__container_place .popup__form';
export const increasedImage = document.querySelector('.popup__image');
export const titleImage = document.querySelector('.popup__title_image');
export const cardSelector = '#card';
export const containerSelector = '.elements';
export const profileInfoSelectors = {
  profileProfessionSelector: '.profile__profession',
  profileNameSelector: '.profile__name',
  profileAvatarSelector: '.profile__avatar'
}
export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inputErrorClass: 'popup__input_type_error'
};
export const apiOptions = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-63',
  token: '1c1b2771-2095-401c-a8a4-03c7a594e43a'
}
export const formValidators = {};
export const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];