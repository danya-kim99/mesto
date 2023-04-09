import {
  userId
} from "../utils/constants";

export default class Card {
  constructor(data, cardSelector, handleImageClick, handleTrashClick, handleLikeClick) {
    this._name = data.name;
    this._image = data.link;
    this._id = data._id;
    this.likes = data.likes;
    this._handleImageClick = handleImageClick;
    this._handleTrashClick = handleTrashClick;
    this._handleLikeClick = handleLikeClick;
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
    this.changeLikeAmount(this.likes);
    this.changeLikeState(this.likes);

    return this._element
  }

  changeLikeAmount(likes) {
    this._elementLikesNumber.textContent = likes ? likes.length : 0;
  }

  getLikedState(likes) {
    if (likes) {
      return likes.some(item => item._id === userId)
      ? true
      : false
    } else {
      return false
    }
  }

  changeLikeState(likes) {
    this.getLikedState(likes)
    ? this._elementLikeButton.classList.add('element__like_pressed')
    : this._elementLikeButton.classList.remove('element__like_pressed')
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
