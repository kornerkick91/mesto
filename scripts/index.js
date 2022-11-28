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
const elementTemplate = document.querySelector('#element').content;

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

const handleLikeButton = (evt) => {
  evt.target.closest('.element__like-button').classList.toggle('element__like-button_type_active');
}

const handleDeleteButton = (evt) => {
  evt.target.closest('.element').remove();
}

const handleFormAddElementSubmit = (evt) => {
  evt.preventDefault();
  renderElement({name: elementNameInput.value, link: elementLinkInput.value});
  evt.target.reset();
  closePopup(popupAddElement);
};

const generateElement = (elementData) => {
  const newElement = elementTemplate.cloneNode(true);
  const image = newElement.querySelector('.element__image');
  const heading = newElement.querySelector('.element__name');

  image.src = elementData.link;
  image.alt = elementData.name;
  heading.textContent = elementData.name;

  image.addEventListener('click', () => {
    popupImage.src = image.src;
    popupImage.alt = image.alt;
    popupImageHeading.textContent = heading.textContent;
    openPopup(popupElementImage);
  });

  const likeButton = newElement.querySelector('.element__like-button');
  likeButton.addEventListener('click', handleLikeButton);

  const deleteButton = newElement.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', handleDeleteButton);

  return newElement;
}

const renderElement = (elementData) => {
  elements.prepend(generateElement(elementData));
};

elementsList.forEach((elementData) => {
  renderElement(elementData);
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
