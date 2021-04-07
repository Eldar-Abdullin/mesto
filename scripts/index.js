import {Card} from './Card.js'
import {FormValidator} from './FormValidator.js'
import {editButton, closeButton, addCloseButton, addButtonSubmit, formElement, formAddElement, nameInput, jobInput, popupProfile, popupAdd, popupImg, profileName, profileJob, addButton, elements, imgCloseButton, placeInput, linkInput, initialCards, validationConfig, addForm, profileForm} from './constants.js'
//функция добавления нового элемента
function addElement(evt) {
  evt.preventDefault();
  const item = {name: placeInput.value, link: linkInput.value}
  const newElement = new Card(item, '.template');
  elements.prepend(newElement.getCard());
  closePopup(popupAdd);
  placeInput.value = '';
  linkInput.value = '';
}
// функция рендеринга массива в элементы
function renderList() {
  initialCards.forEach((item)=> {
    const card = new Card(item, '.template');
    elements.append(card.getCard())
  }); 
}
renderList();
// делаем валидацию
  const validateProfileForm = new FormValidator(validationConfig, profileForm);
  validateProfileForm.enableValidation();
  const validateAddForm = new FormValidator(validationConfig, addForm);
  validateAddForm.enableValidation();

// делаем функцию открытия ProfilePopup 
// и сразу вставляем данные в поля ввода из профиля
function openProfilePopup() {
    openPopup(popupProfile);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    validateButton();
}
// функция чтобы кнопка была валидной
function validateButton() {
  const popupButtonProfile = document.querySelector('.popup__button_profile');
  popupButtonProfile.removeAttribute('disabled');
  popupButtonProfile.classList.remove('popup__button_disabled')
}
// функция открытия popup
export function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closingPopup);
}
// функция закрытия popup
function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closingPopup);
}
// делаем функцию закрытия ProfilePopup
// делаем функцию отправки данных из popup в профиль
function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupProfile);
}
//делаем функцию закрытия попапа по оверлею
function clickOnOverlay(evt) {
  if(evt.target.classList.contains('popup'))
    closePopup(evt.target)
}
// отслеживаемые события
formElement.addEventListener('submit', handleFormSubmit); 
editButton.addEventListener('click', openProfilePopup);
closeButton.addEventListener('click', function() {
  closePopup(popupProfile)
});
popupProfile.addEventListener('click', clickOnOverlay)
addCloseButton.addEventListener('click', function() {
 closePopup(popupAdd);
});
popupAdd.addEventListener('click', clickOnOverlay)
addButton.addEventListener('click', function() {
  addButtonSubmit.classList.add('popup__button_disabled')
  addButtonSubmit.setAttribute('disabled', true);
  openPopup(popupAdd);
});
imgCloseButton.addEventListener('click', function() {
  closePopup(popupImg);
});
popupImg.addEventListener('click', clickOnOverlay)
const closingPopup = (evt) => {
  if (evt.key === 'Escape') {
    const currentPopup = document.querySelector('.popup_opened')
    closePopup(currentPopup);
}
}
formAddElement.addEventListener('submit', addElement);
