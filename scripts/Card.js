export default class Card {
  constructor(name, image, onImageClick) {
    this._name = name;
    this._image = image;
    this._onImageClick = onImageClick;
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
    this._element = this._getTemplate();
    this._setEventListeners();

    this._elementImage = this._element.querySelector('.element__image');
    this._elementName = this._element.querySelector('.element__title');
    this._elementImage.src = this._image;
    this._elementImage.alt = this._name;
    this._elementName.textContent = this._name;

    return this._element
  }

  _handleLikeClick() {
    console.log(this)
    this._element.querySelector('.element__like').classList.toggle('element__like_pressed');
  }

  _handleTrashClick() {
    this._element.remove();
  }

  _handleImageClick() {
    const increasedImage = document.querySelector('.popup__image');
    const titleImage = document.querySelector('.popup__title_image');
    increasedImage.src = this._image;
    increasedImage.alt = this._name;
    titleImage.textContent = this._name;
    this._onImageClick()
  }

  _setEventListeners() {
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._handleLikeClick()
    });

    this._element.querySelector('.element__trash').addEventListener('click', () => {
      this._handleTrashClick()
    });

    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleImageClick()
    });
  }
}
