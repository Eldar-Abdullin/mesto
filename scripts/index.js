//Присваиваем значения
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const addCloseButton = document.querySelector('.popup__close-button_add')
const formElement = document.querySelector('.popup__container');
const formAddElement = document.querySelector('.popup__container_add');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const popupProfile = document.querySelector('.popup_profile');
const popupAddOpenElement = document.querySelector('.popup_add')
const imgPopup = document.querySelector('.popup_img')
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const addButton = document.querySelector('.profile__add-button');
const templateElement = document.querySelector('.template');
const elements = document.querySelector('.elements');
const placeName = document.querySelector('.popup__input_place_name');
const placeLink = document.querySelector('.popup__input_place_link');
const nameElement = document.querySelector('.element__title');
const imgElement = document.querySelector('.element__photo');
const imgCloseButton = document.querySelector('.popup__close-button_img');
const popupImage = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__img-caption')
const element = document.querySelector('.element')
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
  const newELement = templateElement.content.cloneNode(true);
  const nameElement = newELement.querySelector('.element__title');
  nameElement.textContent = item.name;
  const imgElement = newELement.querySelector('.element__photo');
  imgElement.alt = item.name
  imgElement.src = item.link
  imgElement.addEventListener('click', function() {
    popupImage.src = item.link;
    popupImage.alt = item.name;
    popupImageCaption.textContent = item.name;
    imgPopup.classList.add('popup_opened')
  });
  const deleteButton = newELement.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', deleteElement);
  const likeButton = newELement.querySelector('.element__button-like');
  likeButton.addEventListener('click', function() {
    
    likeButton.classList.toggle('element__button-like_active')
  })
  return newELement
}
function openImgPopup() {
  imgPopup.classList.add('popup_opened');
  
  popupImage.src = imgElement.src

}
function addElement(evt) {
  evt.preventDefault();
  const nameInput = document.querySelector('.popup__input_place_name');
  const linkInput = document.querySelector('.popup__input_place_link');
  const item = {name: nameInput.value, link: linkInput.value}
  const newElement = createElements(item);
  elements.prepend(newElement);
  closeAddPopup();
}
formAddElement.addEventListener('submit', addElement);
//функция лайка element
function likeElement() {
  likeButton.classList.toggle('element__button-like_active')
}
// функция удаления Element
function deleteElement(evt) {
  const target = evt.target;
  const currentElement = target.closest('.element');
  currentElement.remove();
}
function renderList() {
  const result = initialCards.map(createElements); 
elements.append(...result);
}
renderList();
// делаем функцию открытия ProfilePopup 
// и сразу вставляем данные в поля ввода из профиля
function openProfilePopup() {
    popupProfile.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}
// делаем функцию открытия AddPopup 
function openAddPopup() {
    popupAddOpenElement.classList.add('popup_opened')
}
// делаем функцию закрытия ProfilePopup
function closeProfilePopup() {
    popupProfile.classList.remove('popup_opened');
}
// делаем функцию закрытия AddPopup
function closeAddPopup() {
    popupAddOpenElement.classList.remove('popup_opened');
}
function closeImgPopup() {
  imgPopup.classList.remove('popup_opened');
}
// делаем функцию отправки данных из popup в профиль
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
addCloseButton.addEventListener('click', closeAddPopup);
addButton.addEventListener('click', openAddPopup);
imgCloseButton.addEventListener('click', closeImgPopup);
