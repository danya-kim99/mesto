export default class Card {
  constructor(name, image) {
    this.name = name;
    this.image = image;
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
    this._elementImage.src = this.image;
    this._elementImage.alt = this.name;
    this._elementName.textContent = this.name;

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
    increasedImage.src = this.image;
    increasedImage.alt = this.name;
    titleImage.textContent = this.name;

  }

  _setEventListeners() {
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._handleLikeClick()
    });

    this._element.querySelector('.element__trash').addEventListener('click', () => {
      this._handleTrashClick()
    });


  }
}
