export const editButton = document.querySelector('.profile__edit-button');
export const popupProfile = document.querySelector('.popup_type_profile');
export const popupProfileSelector = '.popup_type_profile';
export const profileInputName = document.querySelector('.popup__input_type_name');
export const profileInputProfession = document.querySelector('.popup__input_type_profession');
export const profileName = document.querySelector('.profile__name');
export const profileProfession = document.querySelector('.profile__profession');
export const profileFormElement = document.querySelector('.popup__container_profile');
export const addButton = document.querySelector('.profile__add-button');
export const popupPlace = document.querySelector('.popup_type_place');
export const popupPlaceSelector = '.popup_type_place';
export const popups = document.querySelectorAll('.popup')
export const placeFormElement = document.querySelector('.popup__container_place');
export const cardContainer = document.querySelector('.elements');
export const popupImage = document.querySelector('.popup_type_image');
export const popupImageSelector = '.popup_type_image'
export const nameInput = document.querySelector('.popup__input_type_title');
export const imageInput = document.querySelector('.popup__input_type_link');
export const profileForm = document.querySelector('.popup__container_profile .popup__form');
export const placeForm = document.querySelector('.popup__container_place .popup__form');
export const placeFormSelector = '.popup__container_place .popup__form';
export const increasedImage = document.querySelector('.popup__image');
export const titleImage = document.querySelector('.popup__title_image');
export const cardSelector = '#card';
export const containerSelector = '.elements'
export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inputErrorClass: 'popup__input_type_error'
};
export const formValidators = {};
export const initialCards = [
{
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
