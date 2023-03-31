import {
  increasedImage,
  titleImage,
  popupImage
} from "./constants.js";

export function handleImageClick(name, image) {
  increasedImage.src = image;
  increasedImage.alt = name;
  titleImage.textContent = name;
  openPopup(popupImage);
}
