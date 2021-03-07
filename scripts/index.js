//Присваиваем значения
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const addCloseButton = document.querySelector('.popup__close-button_add')
const formElement = document.querySelector('.popup__container');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const popupProfileOpenElement = document.querySelector('.profile-popup');
const popupAddOpenElement = document.querySelector('.add-popup')
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const addButton = document.querySelector('.profile__add-button');
const templateElement = document.querySelector('.template');
const elements = document.querySelector('.elements');
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
function createElements(item) {
  const newItem = templateElement.content.cloneNode(true);
  const nameElement = newItem.querySelector('.element__title');
  nameElement.textContent = item.name;
  const imgElement = newItem.querySelector('.element__photo');
  imgElement.src = item.link
  return newItem
}
function renderList() {
  const result = initialCards.map(createElements); 
elements.append(...result);
}
renderList();
function addTaskFormListener(evt) {
  evt.preventDefault();
}
// делаем функцию открытия ProfilePopup 
// и сразу вставляем данные в поля ввода из профиля
function openProfilePopup() {
    popupProfileOpenElement.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}
// делаем функцию открытия AddPopup 
function openAddPopup() {
    popupAddOpenElement.classList.add('popup_opened')
}
// делаем функцию закрытия ProfilePopup
function closeProfilePopup() {
    popupProfileOpenElement.classList.remove('popup_opened');
}
// делаем функцию закрытия ProfilePopup
function closeAddPopup() {
    popupAddOpenElement.classList.remove('popup_opened');
}
// делаем фунцкию отправки данных из popup 
// в профиль
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closeProfilePopup();
}
formElement.addEventListener('submit', formSubmitHandler); 
// отслеживаемые события
editButton.addEventListener('click', openProfilePopup);
closeButton.addEventListener('click', closeProfilePopup);
addCloseButton.addEventListener('click', closeAddPopup)
addButton.addEventListener('click', openAddPopup);