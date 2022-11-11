const editProfileButton = document.querySelector('.profile__edit-button');
const addElementButton = document.querySelector('.profile__add-button');
const popup = document.querySelector('.popup');
const popupEditProfile = document.querySelector('.popup.popup_edit-profile');
const popupAddElement = document.querySelector('.popup.popup_add-element');
const popupElementImage = document.querySelector('.popup.popup_element-image');
const popupImage = document.querySelector('.popup__image');
const popupImageHeading = document.querySelector('.popup__image-heading');
const closePopupEditProfile = popupEditProfile.querySelector('.popup__close-button');
const closePopupAddElement = popupAddElement.querySelector('.popup__close-button');
const closePopupElementImage = popupElementImage.querySelector('.popup__close-button');
const editProfileForm = document.querySelector('.popup__form_edit-profile');
const addElementForm = document.querySelector('.popup__form_add-element');
const nameInput = document.querySelector('.popup__input_info_name');
const aboutInput = document.querySelector('.popup__input_info_about');
const elementNameInput = document.querySelector('.popup__input_element_name');
const elementLinkInput = document.querySelector('.popup__input_element_link');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

// открытие-закрытие попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

editProfileButton.addEventListener('click', () => openPopup(popupEditProfile));

addElementButton.addEventListener('click', () => openPopup(popupAddElement));

closePopupEditProfile.addEventListener('click', () => closePopup(popupEditProfile));
popupEditProfile.addEventListener('click', function (evt) {
  if(evt.target === evt.currentTarget) {
    closePopup(popupEditProfile);
  }
});

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

//обработчик формы редактирования профиля
function editProfileFormSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    closePopup(popupEditProfile);
}

editProfileForm.addEventListener('submit', editProfileFormSubmitHandler);

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

//cоздаем элемент
const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element').content;

const likeButtonHandler = (evt) => {
  evt.target.closest('.element__like-button').classList.toggle('element__like-button_type_active');
}

const deleteButtonHandler = (evt) => {
  evt.target.closest('.element').remove();
}

const generateElement = (elementData) => {
  const newElement = elementTemplate.cloneNode(true);
  const image = newElement.querySelector('.element__image');
  const heading = newElement.querySelector('.element__name');

  image.src = elementData.link;
  heading.textContent = elementData.name;

  image.addEventListener('click', () => {
    popupImage.src = image.src;
    popupImageHeading.textContent = heading.textContent;
    openPopup(popupElementImage);
  });

  const likeButton = newElement.querySelector('.element__like-button');
  likeButton.addEventListener('click', likeButtonHandler);

  const deleteButton = newElement.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', deleteButtonHandler);

  return newElement;
}

//обработчик формы добавления элемента
const addElementFormSubmitHandler = (evt) => {
  evt.preventDefault();
  renderElement({name: elementNameInput.value, link: elementLinkInput.value});
  elementNameInput.value = '';
  elementLinkInput.value = '';
  closePopup(popupAddElement);
};

//отрисовываем элементы на странице
const renderElement = (elementData) => {
  elements.prepend(generateElement(elementData));
};

addElementForm.addEventListener('submit', addElementFormSubmitHandler);

elementsList.forEach((elementData) => {
  renderElement(elementData);
});
