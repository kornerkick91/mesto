const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddElement = document.querySelector('.profile__add-button');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddElement = document.querySelector('.popup_add-element');
const popupElementImage = document.querySelector('.popup_element-image');
const popupImage = document.querySelector('.popup__image');
const popupImageHeading = document.querySelector('.popup__image-heading');
const closePopupEditProfile = popupEditProfile.querySelector('.popup__close-button');
const closePopupAddElement = popupAddElement.querySelector('.popup__close-button');
const closePopupElementImage = popupElementImage.querySelector('.popup__close-button');
const formEditProfile = document.querySelector('.popup__form_edit-profile');
const formAddElement = document.querySelector('.popup__form_add-element');
const nameInput = document.querySelector('.popup__input_info_name');
const aboutInput = document.querySelector('.popup__input_info_about');
const elementNameInput = document.querySelector('.popup__input_element_name');
const elementLinkInput = document.querySelector('.popup__input_element_link');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element').content;

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function buttonEditProfileHandler () {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  openPopup(popupEditProfile);
}

function formEditProfileSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup(popupEditProfile);
}

const likeButtonHandler = (evt) => {
  evt.target.closest('.element__like-button').classList.toggle('element__like-button_type_active');
}

const deleteButtonHandler = (evt) => {
  evt.target.closest('.element').remove();
}

const formAddElementSubmitHandler = (evt) => {
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
  likeButton.addEventListener('click', likeButtonHandler);

  const deleteButton = newElement.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', deleteButtonHandler);

  return newElement;
}

const renderElement = (elementData) => {
  elements.prepend(generateElement(elementData));
};

elementsList.forEach((elementData) => {
  renderElement(elementData);
});

buttonEditProfile.addEventListener('click', buttonEditProfileHandler);
formEditProfile.addEventListener('submit', formEditProfileSubmitHandler);
closePopupEditProfile.addEventListener('click', () => closePopup(popupEditProfile));
popupEditProfile.addEventListener('click', function (evt) {
  if(evt.target === evt.currentTarget) {
    closePopup(popupEditProfile);
  }
});


buttonAddElement.addEventListener('click', () => openPopup(popupAddElement));
formAddElement.addEventListener('submit', formAddElementSubmitHandler);
closePopupAddElement.addEventListener('click', () => closePopup(popupAddElement));
popupAddElement.addEventListener('click', function (evt) {
  if(evt.target === evt.currentTarget) {
    closePopup(popupAddElement);
  }
});

closePopupElementImage.addEventListener('click', () => closePopup(popupElementImage));
popupElementImage.addEventListener('click', function (evt) {
  if(evt.target === evt.currentTarget) {
    closePopup(popupElementImage);
  }
});
