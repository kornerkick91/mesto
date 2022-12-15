const popups = document.querySelectorAll('.popup');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddElement = document.querySelector('.profile__add-button');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddElement = document.querySelector('.popup_add-element');
const popupElementImage = document.querySelector('.popup_element-image');
const popupImage = document.querySelector('.popup__image');
const popupImageHeading = document.querySelector('.popup__image-heading');
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
  resetValidation(popupEditProfile);
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
  resetValidation(popupAddElement);
}

const handleFormAddElementSubmit = (evt) => {
  evt.preventDefault();
  generateElement();
  evt.target.reset();
  closePopup(popupAddElement);
};




class Card {
  constructor(elementsList, elementSelector) {
    this._name = elementsList.name;
    this._link = elementsList.link;
    this._elementTemplate = elementSelector;
  }

  _getTemplate() {
    const element = document.querySelector(this._elementTemplate).content.querySelector('.element').cloneNode(true);
    return element;
  }

  generateElement() {
    this._newElement = this._getTemplate();
    this._newElement.querySelector('.element__image').src = this._link;
    this._newElement.querySelector('.element__image').alt = this._name;
    this._newElement.querySelector('.element__name').textContent = this._name;
    this._likeButton = this._newElement.querySelector('.element__like-button');
    this._deleteButton = this._newElement.querySelector('.element__delete-button');
    this._image = this._newElement.querySelector('.element__image');
    this._heading = this._newElement.querySelector('.element__name');
    this._setEventListeners();

    return this._newElement;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLikeButton();
    });
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteButton();
    });
    this._image.addEventListener('click', () => {
      this._handleClickImage();
    });
  }

  _handleLikeButton() {
    this._likeButton.classList.toggle('element__like-button_type_active');
  }

  _handleDeleteButton() {
    this._newElement.remove();
  }

  _handleClickImage() {
    popupImage.src = this._image.src;
    popupImage.alt = this._image.alt;
    popupImageHeading.textContent = this._heading.textContent;
    openPopup(popupElementImage);
  }
}

elementsList.forEach((item) => {
  const card = new Card(item, '.element-template');
  const cardElement = card.generateElement();
  document.querySelector('.elements').prepend(cardElement);
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

