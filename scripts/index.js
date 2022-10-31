let editButtonElem = document.querySelector('.profile__edit-button');
let popupElem = document.querySelector('.popup');
let popupCloseElem = popupElem.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_info_name');
let aboutInput = document.querySelector('.popup__input_info_about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

function popupOpen() {
  popupElem.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}

function popupClose() {
  popupElem.classList.remove('popup_opened');
}

editButtonElem.addEventListener('click', popupOpen);
popupCloseElem.addEventListener('click', popupClose);
popupElem.addEventListener('click', function (evt) {
  if(evt.target === evt.currentTarget) {
    popupClose();
  }
});

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    popupClose();
}

formElement.addEventListener('submit', formSubmitHandler);
