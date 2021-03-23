//Присваиваем значения
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const addCloseButton = document.querySelector('.popup__close-button_add')
const formElement = document.querySelector('.popup__container');
const formAddElement = document.querySelector('.popup__container_add');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const popupProfile = document.querySelector('.popup_profile');
const popupAdd= document.querySelector('.popup_add')
const popupImg = document.querySelector('.popup_img')
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const addButton = document.querySelector('.profile__add-button');
const templateElement = document.querySelector('.template');
const elements = document.querySelector('.elements');
const imgElement = document.querySelector('.element__photo');
const imgCloseButton = document.querySelector('.popup__close-button_img');
const popupImage = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__img-caption')
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
    openPopup(popupImg);
  });
  const deleteButton = newELement.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', deleteElement);
  const likeButton = newELement.querySelector('.element__button-like');
  likeButton.addEventListener('click', function() {
    likeButton.classList.toggle('element__button-like_active')
  })
  return newELement
}
// функция добавления нового элемента
function addElement(evt) {
  evt.preventDefault();
  const nameInput = document.querySelector('.popup__input_place_name');
  const linkInput = document.querySelector('.popup__input_place_link');
  const item = {name: nameInput.value, link: linkInput.value}
  const newElement = createElements(item);
  elements.prepend(newElement);
  closePopup(popupAdd);
}

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
// функция рендеринга массива в элементы
function renderList() {
  const result = initialCards.map(createElements); 
elements.append(...result);
}
renderList();
// делаем функцию открытия ProfilePopup 
// и сразу вставляем данные в поля ввода из профиля
function openProfilePopup() {
    openPopup(popupProfile);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}
// функция открытия popup
function openPopup (popup) {
  popup.classList.add('popup_opened');
}
// функция закрытия popup
function closePopup (popup) {
  popup.classList.remove('popup_opened');
}
// делаем функцию закрытия ProfilePopup
// делаем функцию отправки данных из popup в профиль
function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupProfile);
}
// отслеживаемые события
formElement.addEventListener('submit', handleFormSubmit); 
editButton.addEventListener('click', openProfilePopup);
closeButton.addEventListener('click', function() {
  closePopup(popupProfile)
});
popupProfile.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('popup'))
  closePopup(popupProfile)
})
addCloseButton.addEventListener('click', function() {
 closePopup(popupAdd);
});
popupAdd.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('popup'))
  closePopup(popupAdd);
})
addButton.addEventListener('click', function() {
  openPopup(popupAdd);
});
imgCloseButton.addEventListener('click', function() {
  closePopup(popupImg);
});
popupImg.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('popup'))
  closePopup(popupImg);
})
const closingPopup = (evt) => {
  if (evt.key === 'Escape') {
    closePopup(popupImg);
    closePopup(popupAdd);
    closePopup(popupProfile);
}
}
document.addEventListener('keydown', closingPopup);
formAddElement.addEventListener('submit', addElement);
