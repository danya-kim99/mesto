export default class Card {
  constructor(name, image, onImageClick) {
    this._name = name;
    this._image = image;
    this._onImageClick = onImageClick;
    this._element = this._getTemplate();
    this._elementLikeButton = this._element.querySelector('.element__like');
    this._elementTrashButton = this._element.querySelector('.element__trash');
    this._elementImage = this._element.querySelector('.element__image');
    this._elementName = this._element.querySelector('.element__title');
    this._increasedImage = document.querySelector('.popup__image');
    this._titleImage = document.querySelector('.popup__title_image');
  }

  _getTemplate() {
    const cardElement = document
      .querySelector('#card')
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }

  createCard() {
    this._setEventListeners();

    this._elementImage.src = this._image;
    this._elementImage.alt = this._name;
    this._elementName.textContent = this._name;

    return this._element
  }

  _handleLikeClick() {
    this._elementLikeButton.classList.toggle('element__like_pressed');
  }

  _handleTrashClick() {
    this._element.remove();
  }

  _handleImageClick() {
    this._increasedImage.src = this._image;
    this._increasedImage.alt = this._name;
    this._titleImage.textContent = this._name;
    this._onImageClick()
  }

  _setEventListeners() {
    this._elementLikeButton.addEventListener('click', () => {
      this._handleLikeClick()
    });

    this._elementTrashButton.addEventListener('click', () => {
      this._handleTrashClick()
    });

    this._elementImage.addEventListener('click', () => {
      this._handleImageClick()
    });
  }
}
