import { elementsList, validationConfig } from "./constants.js";

import {
  popups,
  buttonEditProfile,
  buttonAddElement,
  popupEditProfile,
  popupAddElement,
  popupElementImage,
  popupImage,
  popupImageHeading,
  formEditProfile,
  formAddElement,
  nameInput,
  aboutInput,
  elementNameInput,
  elementLinkInput,
  profileName,
  profileAbout,
  elements
} from "./elements.js";

import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const validatorFormEditProfile = new FormValidator(validationConfig, formEditProfile);
const validatorFormAddElement = new FormValidator(validationConfig, formAddElement);


function closePopupEsc (evt) {
  if (evt.key === "Escape" || evt.key === "Esc") {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
};

function openPopup(popup) {
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
  closePopup(popupAddElement);
};

function handleClickImage(name, link) {
  popupImage.src = link;
  popupImage.alt = name;
  popupImageHeading.textContent = name;
  openPopup(popupElementImage);
}


const renderElement = (item) => {
  const card = new Card(item, '#element-template', handleClickImage);
  const cardElement = card.generateElement();
  elements.prepend(cardElement);
};

elementsList.forEach(renderElement);


buttonEditProfile.addEventListener('click', handleButtonEditProfile);
formEditProfile.addEventListener('submit', handleFormEditProfileSubmit);

buttonAddElement.addEventListener('click', handleButtonAddElement);
formAddElement.addEventListener('submit', handleFormAddElementSubmit);

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
        closePopup(popup);
      }
  });
});


validatorFormEditProfile.enableValidation();
validatorFormAddElement.enableValidation();
