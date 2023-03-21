export default class Card {
  constructor(name, image, cardSelector, handleImageClick) {
    this._name = name;
    this._image = image;
    this._handleImageClick = handleImageClick;
    this._cardSelector = cardSelector;
    this._element = this._getTemplate();
    this._elementLikeButton = this._element.querySelector('.element__like');
    this._elementTrashButton = this._element.querySelector('.element__trash');
    this._elementImage = this._element.querySelector('.element__image');
    this._elementName = this._element.querySelector('.element__title');
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
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


  _setEventListeners() {
    this._elementLikeButton.addEventListener('click', () => {
      this._handleLikeClick()
    });

    this._elementTrashButton.addEventListener('click', () => {
      this._handleTrashClick()
    });

    this._elementImage.addEventListener('click', () => {
      this._handleImageClick(this._name, this._image)
    });
  }
}
