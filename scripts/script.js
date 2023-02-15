//константы
const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_profile');
const profileInputName = document.querySelector('.popup__input_type_name');
const profileInputProfession = document.querySelector('.popup__input_type_profession');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const profileFormElement = document.querySelector('.popup__container_profile');
const addButton = document.querySelector('.profile__add-button');
const popupPlace = document.querySelector('.popup_type_place');
const increasedImage = document.querySelector('.popup__image');
const titleImage = document.querySelector('.popup__title_image');
const placeFormElement = document.querySelector('.popup__container_place');
const cardContainer = document.querySelector('.elements');
const popupImage = document.querySelector('.popup_type_image');
const nameInput = document.querySelector('.popup__input_type_title');
const imageInput = document.querySelector('.popup__input_type_link');
const cardTemplate = document.querySelector('#card').content;


//общие функции
function openPopup(popupType) {
  popupType.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

function closePopup(popupType) {
  popupType.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}
//закрытие поп-апов

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup)
  }
}

const popups = document.querySelectorAll('.popup')

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close-button')) {
          closePopup(popup)
        }
    })
})


editButton.addEventListener('click', openPopupProfile);

//функционал поп-апа профиля

function openPopupProfile() {
  openPopup(popupProfile);
  profileInputName.value = profileName.textContent;
  profileInputProfession.value = profileProfession.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileInputName.value;
  profileProfession.textContent = profileInputProfession.value;
  closePopup(popupProfile);
}

profileFormElement.addEventListener('submit', handleProfileFormSubmit);

//функционал поп-апа с добавлением места

function openPopupPlace() {
  openPopup(popupPlace);
}

addButton.addEventListener('click', openPopupPlace);


//фунционал добавления карточки с местом


function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  const cardName = nameInput.value;
  const cardImage = imageInput.value;
  addCard(cardName, cardImage);
  evt.target.reset()
  closePopup(popupPlace)
}

placeFormElement.addEventListener('submit', handlePlaceFormSubmit);


//функция создания карточки
function createCard(name, image) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const elementImage = cardElement.querySelector('.element__image');
  const elementName = cardElement.querySelector('.element__title');
  elementImage.src = image;
  elementImage.alt = name;
  elementName.textContent = name;

  const likeButton = cardElement.querySelector('.element__like');
  likeButton.addEventListener('click', function (evt) {
    const like = evt.target;
    like.classList.toggle('element__like_pressed');
  });

  const trashButton = cardElement.querySelector('.element__trash');
  trashButton.addEventListener('click', function (evt) {
    const trash = evt.target;
    trash.closest('.element').remove();
  });

  elementImage.addEventListener('click', function (evt) {
    const target = evt.target;
    increasedImage.src = target.src;
    increasedImage.alt = name;
    titleImage.textContent = name;
    openPopup(popupImage);
  });

  return cardElement
}

//функция для добавления карточек
function addCard(name, image) {
  const cardElement = createCard(name, image);
  cardContainer.prepend(cardElement);
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

document.addEventListener('click', (evt) => console.log(evt.target))
