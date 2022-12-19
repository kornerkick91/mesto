// карточки из коробки
export const elementsList = [
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
export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

export const popups = document.querySelectorAll('.popup');
export const buttonEditProfile = document.querySelector('.profile__edit-button');
export const buttonAddElement = document.querySelector('.profile__add-button');
export const popupEditProfile = document.querySelector('.popup_edit-profile');
export const popupAddElement = document.querySelector('.popup_add-element');
export const formEditProfile = document.querySelector('.popup__form_edit-profile');
export const formAddElement = document.querySelector('.popup__form_add-element');
export const nameInput = formEditProfile.querySelector('.popup__input_info_name');
export const aboutInput = formEditProfile.querySelector('.popup__input_info_about');
export const elementNameInput = formAddElement.querySelector('.popup__input_element_name');
export const elementLinkInput = formAddElement.querySelector('.popup__input_element_link');
export const profileName = document.querySelector('.profile__name');
export const profileAbout = document.querySelector('.profile__about');
export const elements = document.querySelector('.elements');
