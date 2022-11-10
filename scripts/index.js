// открытие закрытие попапа
const editButtonElem = document.querySelector('.profile__edit-button');
const popupElem = document.querySelector('.popup');
const popupCloseElem = popupElem.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_info_name');
const aboutInput = document.querySelector('.popup__input_info_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

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


// обработка формы редактирования профиля
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    popupClose();
}

formElement.addEventListener('submit', formSubmitHandler);

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

const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element').content;

const generateElement = (elementData) => {
  const newElement = elementTemplate.cloneNode(true);

  newElement.querySelector('.element__image').src = elementData.link;
  newElement.querySelector('.element__name').textContent = elementData.name;

  return newElement;
}


const renderElement = (elementData) => {
  elements.prepend(generateElement(elementData));
};

elementsList.forEach((elementData) => {
  renderElement(elementData);
});











