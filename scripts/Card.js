export default class Card {
  constructor(elementsList, elementSelector, openPopup) {
    this._name = elementsList.name;
    this._link = elementsList.link;
    this._elementTemplate = elementSelector;
    this._openPopup = openPopup;
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

  _handleLikeButton() {
    this._likeButton.classList.toggle('element__like-button_type_active');
  }

  _handleDeleteButton() {
    this._newElement.remove();
  }

  _handleClickImage() {
    const popupElementImage = document.querySelector('.popup_element-image');
    const popupImage = document.querySelector('.popup__image');
    const popupImageHeading = document.querySelector('.popup__image-heading');
    popupImage.src = this._image.src;
    popupImage.alt = this._image.alt;
    popupImageHeading.textContent = this._heading.textContent;
    this._openPopup(popupElementImage);
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
}
