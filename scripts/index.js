const editProfileButton = document.querySelector('.profile__edit-button');
const addElementButton = document.querySelector('.profile__add-button');
const popup = document.querySelector('.popup');
const popupEditProfile = document.querySelector('.popup.popup_edit-profile');
const popupAddElement = document.querySelector('.popup.popup_add-element');
const closePopupEditProfile = popupEditProfile.querySelector('.popup__close-button');
const closePopupAddElement = popupAddElement.querySelector('.popup__close-button');
const editProfileForm = document.querySelector('.popup__form_edit-profile');
const addElementForm = document.querySelector('.popup__form_add-element');
const nameInput = document.querySelector('.popup__input_info_name');
const aboutInput = document.querySelector('.popup__input_info_about');
const elementNameInput = document.querySelector('.popup__input_element_name');
const elementLinkInput = document.querySelector('.popup__input_element_link');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

// открытие-закрытие попапа
function popupOpen(popup) {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}

function popupClose(popup) {
  popup.classList.remove('popup_opened');
}

editProfileButton.addEventListener('click', () => popupOpen(popupEditProfile));

addElementButton.addEventListener('click', () => popupOpen(popupAddElement));

closePopupEditProfile.addEventListener('click', () => popupClose(popupEditProfile));
popupEditProfile.addEventListener('click', function (evt) {
  if(evt.target === evt.currentTarget) {
    popupClose(popupEditProfile);
  }
});

closePopupAddElement.addEventListener('click', () => popupClose(popupAddElement));
popupAddElement.addEventListener('click', function (evt) {
  if(evt.target === evt.currentTarget) {
    popupClose(popupAddElement);
  }
});

//обработчик формы редактирования профиля
function editProfileFormSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    popupClose(popupEditProfile);
}

editProfileForm.addEventListener('submit', editProfileFormSubmitHandler);

// карточки из коробки
const elementsList = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//cоздаем элемент
const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element').content;

const likeButtonHandler = (evt) => {
  evt.target.closest('.element__like-button').classList.toggle('element__like-button_type_active');
}

const generateElement = (elementData) => {
  const newElement = elementTemplate.cloneNode(true);

  newElement.querySelector('.element__image').src = elementData.link;
  newElement.querySelector('.element__name').textContent = elementData.name;

  const likeButton = newElement.querySelector('.element__like-button');
  likeButton.addEventListener('click', likeButtonHandler);

  return newElement;
}

//обработчик формы добавления элемента
const addElementFormSubmitHandler = (evt) => {
  evt.preventDefault();
  renderElement({name: elementNameInput.value, link: elementLinkInput.value});
  elementNameInput.value = '';
  elementLinkInput.value = '';
  popupClose(popupAddElement);
};

//отрисовываем элемент на странице
const renderElement = (elementData) => {
  elements.prepend(generateElement(elementData));
};

addElementForm.addEventListener('submit', addElementFormSubmitHandler);

elementsList.forEach((elementData) => {
  renderElement(elementData);
});

