export default class Card {
  constructor(data, cardSelector, handleImageClick, handleTrashClick) {
    this._name = data.name;
    this._image = data.link;
    this._id = data._id;
    this._likes = data.likes;
    this._handleImageClick = handleImageClick;
    this._handleTrashClick = handleTrashClick;
    this._cardSelector = cardSelector;
    this._element = this._getTemplate();
    this._elementLikeButton = this._element.querySelector('.element__like');
    this._elementLikesNumber = this._element.querySelector('.element__number-of-likes');
    this._elementTrashButton = this._element.querySelector('.element__trash');
    this._elementImage = this._element.querySelector('.element__image');
    this._elementName = this._element.querySelector('.element__title');
    this._elementId = this._element.id
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
    this._element.id = this._id;
    this._elementImage.src = this._image;
    this._elementImage.alt = this._name;
    this._elementName.textContent = this._name;
    this._elementLikesNumber.textContent = (this._likes)? this._likes.length : 0;

    return this._element
  }

  _handleLikeClick() {
    this._elementLikeButton.classList.toggle('element__like_pressed');
  }

  _setEventListeners() {
    this._elementLikeButton.addEventListener('click', () => {
      this._handleLikeClick()
    });

    this._elementTrashButton.addEventListener('click', () => {
      this._handleTrashClick(this._element)
    });

    this._elementImage.addEventListener('click', () => {
      this._handleImageClick(this._name, this._image)
    });
  }
}
