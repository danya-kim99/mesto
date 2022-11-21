let edit_button = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let close_button = document.querySelector('.popup__close-button');

function add_class(element) {
  element.classList.add('popup_opened');
}

function remove_class(element) {
  element.classList.remove('popup_opened');
}


edit_button.addEventListener('click', add_class(popup));

close_button.addEventListener('click', remove_class(popup));
