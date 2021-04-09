import {Card} from './Card.js'
import {openPopup, closePopup} from './utils.js'
import {FormValidator} from './FormValidator.js'
import {editButton, closeButton, addCloseButton, addButtonSubmit, formElement, formAddElement, nameInput, jobInput, popupProfile, popupAdd, popupImg, profileName, profileJob, addButton, elements, imgCloseButton, placeInput, linkInput, initialCards, validationConfig, addForm, profileForm, popupButtonProfile} from './constants.js'
//функция добавления нового элемента из формы
function submitAddCardForm(evt) {
  evt.preventDefault();
  const item = {name: placeInput.value, link: linkInput.value}
  const newElement = createCard(item);
  elements.prepend(newElement.getCard());
  closePopup(popupAdd);
  placeInput.value = '';
  linkInput.value = '';
}
// функция создания новой карточки
const createCard = (item) => {
  const newCard = new Card(item, '.template');
  newCard.getCard();
  return newCard
}
// функция рендеринга массива в элементы
function renderList() {
  initialCards.forEach( item => {
    const newElement = createCard(item);
    elements.append(newElement.getCard())
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
    validateProfileForm.hideInputErrors();
}
// функция чтобы кнопка была валидной
function validateButton() {
  
  popupButtonProfile.removeAttribute('disabled');
  popupButtonProfile.classList.remove('popup__button_disabled')
}
// делаем функцию отправки данных из popup в профиль
function handleEditProfileFormSubmit (evt) {
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
formElement.addEventListener('submit', handleEditProfileFormSubmit); 
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
  validateAddForm.hideInputErrors();
  addButtonSubmit.classList.add('popup__button_disabled')
  addButtonSubmit.setAttribute('disabled', true);
  openPopup(popupAdd);
});
imgCloseButton.addEventListener('click', function() {
  closePopup(popupImg);
});
popupImg.addEventListener('click', clickOnOverlay)

formAddElement.addEventListener('submit', submitAddCardForm);
