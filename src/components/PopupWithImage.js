import Popup from "./Popup";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupTitle = this._popup.querySelector('.popup__title_image');
  }

  open(name, image) {
    super.open()
    this._popupImage.src = image;
    this._popupImage.alt = name;
    this._popupTitle.textContent = name;
  };

}
