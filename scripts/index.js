import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

// карточки из коробки
const elementsList = [
  {
    name: 'Варадеро',
    link: 'https://images.unsplash.com/photo-1529426301869-82f4d98d3d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  },
  {
    name: 'Калуга',
    link: 'https://images.unsplash.com/photo-1662325652845-19a3b8324352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Рускеала',
    link: 'https://images.unsplash.com/photo-1573156667506-115190c68737?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  },
  {
    name: 'Минск',
    link: 'https://images.unsplash.com/photo-1659657320665-0cf58cf8079f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
  },
  {
    name: 'Великий Новгород',
    link: 'https://images.unsplash.com/photo-1600253613497-8a39b8b4a5de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
  },
  {
    name: 'Красная Поляна',
    link: 'https://images.unsplash.com/photo-1604231787570-99263ec7b715?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  }
];

// настройки валидации
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

const popups = document.querySelectorAll('.popup');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddElement = document.querySelector('.profile__add-button');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddElement = document.querySelector('.popup_add-element');
export const popupElementImage = document.querySelector('.popup_element-image');
export const popupImage = document.querySelector('.popup__image');
export const popupImageHeading = document.querySelector('.popup__image-heading');
const formEditProfile = document.querySelector('.popup__form_edit-profile');
const formAddElement = document.querySelector('.popup__form_add-element');
const nameInput = formEditProfile.querySelector('.popup__input_info_name');
const aboutInput = formEditProfile.querySelector('.popup__input_info_about');
const elementNameInput = formAddElement.querySelector('.popup__input_element_name');
const elementLinkInput = formAddElement.querySelector('.popup__input_element_link');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const elements = document.querySelector('.elements');

function closePopupEsc (evt) {
  if (evt.key === "Escape" || evt.key === "Esc") {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
};

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

function handleButtonEditProfile () {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  openPopup(popupEditProfile);
  validatorFormEditProfile.resetValidation();
}

function handleFormEditProfileSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup(popupEditProfile);
}

function handleButtonAddElement () {
  openPopup(popupAddElement);
  formAddElement.reset();
  validatorFormAddElement.resetValidation();
}

const handleFormAddElementSubmit = (evt) => {
  evt.preventDefault();
  renderElement({name: elementNameInput.value, link: elementLinkInput.value});
  evt.target.reset();
  closePopup(popupAddElement);
};



const renderElement = (item) => {
  const card = new Card(item, '.element-template');
  const cardElement = card.generateElement();
  elements.prepend(cardElement);
};

elementsList.forEach((item) => {
  renderElement(item);
});



buttonEditProfile.addEventListener('click', handleButtonEditProfile);
formEditProfile.addEventListener('submit', handleFormEditProfileSubmit);

buttonAddElement.addEventListener('click', handleButtonAddElement);
formAddElement.addEventListener('submit', handleFormAddElementSubmit);

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        closePopup(popup);
      }
      if (evt.target.classList.contains('popup__close-button')) {
        closePopup(popup);
      }
  })
})



const validatorFormEditProfile = new FormValidator(validationConfig, formEditProfile);
validatorFormEditProfile.enableValidation();

const validatorFormAddElement = new FormValidator(validationConfig, formAddElement);
validatorFormAddElement.enableValidation();




