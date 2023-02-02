//общие функции
function openPopup(popupType) {
  popupType.classList.add('popup_opened');
}

function closePopup(popupType) {
  popupType.classList.remove('popup_opened');
}

//функционал поп-апа профиля
const editButton = document.querySelector('.profile__edit-button');
const closeButtonProfile = document.querySelector('.popup__close-button_profile');
const popupProfile = document.querySelector('.popup_type_profile');

function openPopupProfile() {
  openPopup(popupProfile);
  document.querySelector('.popup__input_type_name').value = document.querySelector('.profile__name').textContent;
  document.querySelector('.popup__input_type_profession').value = document.querySelector('.profile__profession').textContent;
}

function closePopupProfile() {
  closePopup(popupProfile);
}

editButton.addEventListener('click', openPopupProfile);
closeButtonProfile.addEventListener('click', closePopupProfile);

const profileFormElement = document.querySelector('.popup__container_profile');

function profileFormSubmitHandler(evt) {
  evt.preventDefault();
  document.querySelector('.profile__name').textContent = document.querySelector('.popup__input_type_name').value;
  document.querySelector('.profile__profession').textContent = document.querySelector('.popup__input_type_profession').value;
  popupProfile.classList.remove('popup_opened');
}

profileFormElement.addEventListener('submit', profileFormSubmitHandler);

//функционал поп-апа с добавлением места

const addButton = document.querySelector('.profile__add-button')
const popupPlace = document.querySelector('.popup_type_place');
const closeButtonPlace = document.querySelector('.popup__close-button_place');

function openPopupPlace() {
  openPopup(popupPlace);
  document.querySelector('.popup__input_type_name').value = document.querySelector('.profile__name').textContent;
  document.querySelector('.popup__input_type_profession').value = document.querySelector('.profile__profession').textContent;
}

function closePopupPlace() {
  closePopup(popupPlace);
}

addButton.addEventListener('click', openPopupPlace);
closeButtonPlace.addEventListener('click', closePopupPlace);

//фунционал добавления карточки с местом

const placeFormElement = document.querySelector('.popup__container_place');

function placeFormSubmitHandler(evt) {
  evt.preventDefault();
  const nameInput = document.querySelector('.popup__input_type_title');
  const imageInput = document.querySelector('.popup__input_type_link');
  const cardName = nameInput.value;
  const cardImage = imageInput.value;
  addCard(cardName, cardImage);
  nameInput.value = '';
  imageInput.value = '';
  popupPlace.classList.remove('popup_opened');
}

placeFormElement.addEventListener('submit', placeFormSubmitHandler);

const cardContainer = document.querySelector('.elements');
const popupImage = document.querySelector('.popup_type_image');

//функция для добавления карточек
function addCard(name, image) {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  cardElement.querySelector('.element__image').src = image;
  cardElement.querySelector('.element__image').alt = name;
  cardElement.querySelector('.element__title').textContent = name;

  cardContainer.prepend(cardElement);

  const likeButton = document.querySelector('.element__like');
  likeButton.addEventListener('click', function (evt) {
    const like = evt.target;
    like.classList.toggle('element__like_pressed');
  });

  const trashButton = document.querySelector('.element__trash');
  trashButton.addEventListener('click', function (evt) {
    const trash = evt.target;
    trash.parentElement.remove();
  });

  const elementImage = document.querySelector('.element__image');
  const increasedImage = document.querySelector('.popup__image');
  const titleImage = document.querySelector('.popup__title_image');
  elementImage.addEventListener('click', function (evt) {
    const target = evt.target;
    increasedImage.src = target.src;
    titleImage.textContent = target.nextElementSibling.textContent;
    openPopup(popupImage);
  });
}

//закрытие попапа с картинкой
const closeButtonImage = document.querySelector('.popup__close-button_image');
closeButtonImage.addEventListener('click', closePopupImage);

function closePopupImage() {
  closePopup(popupImage);
}

//массив для карточек "из коробки"
const initialCards = [{
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

//добавление карточек "из коробки"
initialCards.forEach(function (item) {
  addCard(item.name, item.link)
})
