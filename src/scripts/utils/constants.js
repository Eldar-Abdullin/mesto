//Присваиваем значения

const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const addCloseButton = document.querySelector('.popup__close-button_add');
const addButtonSubmit = document.querySelector('.popup__button_add');
const formElement = document.querySelector('.popup__container');
const formAddElement = document.querySelector('.popup__container_add');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const popupProfile = document.querySelector('.popup_profile');
const profileForm = document.querySelector('.popup__container-profile');
const addForm = document.querySelector('.popup__container_add');
const popupAdd= document.querySelector('.popup_add')
const popupImg = document.querySelector('.popup_img')
const popupImage = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__img-caption');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const addButton = document.querySelector('.profile__add-button');
const elements = '.elements';
const imgCloseButton = document.querySelector('.popup__close-button_img');
const popupButtonProfile = document.querySelector('.popup__button_profile');
const placeInput = document.querySelector('.popup__input_place_name');
const linkInput = document.querySelector('.popup__input_place_link');

const validationConfig = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }
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
  export {editButton, closeButton, addCloseButton, addButtonSubmit, formElement, formAddElement, nameInput, jobInput, popupProfile, popupAdd, popupImg, profileName, profileJob, addButton, elements, imgCloseButton, placeInput, linkInput, initialCards, validationConfig, profileForm, addForm, popupImage, popupImageCaption, popupButtonProfile}