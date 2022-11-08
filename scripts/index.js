// открытие закрытие попапа
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


// обработка формы редактирования профиля
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    popupClose();
}

formElement.addEventListener('submit', formSubmitHandler);

// карточки из коробки
const initialCards = [
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

initialCards.forEach((item) => {
  const elementTemplate = document.querySelector('#element').content;
  const elements = document.querySelector('.elements');
  let elementElement = elementTemplate.querySelector('.element').cloneNode(true);
  // наполняем содержимым
  elementElement.querySelector('.element__image').src = item.link;
  elementElement.querySelector('.element__name').textContent = item.name;
  // отображаем на странице
  elements.append(elementElement);
});














