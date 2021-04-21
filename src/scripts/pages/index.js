import '../../../src/pages/index.css'
import {Card} from '../components/Card.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithform from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import {FormValidator} from '../components/FormValidator.js'
import {editButton, closeButton, addCloseButton, addButtonSubmit, formElement, nameInput, jobInput, addButton, imgCloseButton, initialCards, validationConfig, addForm, profileForm, popupButtonProfile, elements, formAddElement} from '../utils/constants.js'
// функция создания новой карточки
const createCard = (item) => {
  const newCard = new Card({data: item, 
  handleCardClick: () => {
    imagePopup.open(item)
  } },
  '.template');
  newCard.getCard();
  return newCard
}
const imagePopup = new PopupWithImage('.popup_img')
imagePopup.setEventListeners()
// функция рендеринга массива в элементы
const cardList = new Section({
  items: initialCards,
  renderer: (data) => {
    const card = createCard(data);
    const cardView = card.getCard();
    cardList.addItem(cardView)
  }},
  elements
)
cardList.renderItems()
// делаем валидацию
  const validateProfileForm = new FormValidator(validationConfig, profileForm);
  validateProfileForm.enableValidation();
  const validateAddForm = new FormValidator(validationConfig, addForm);
  validateAddForm.enableValidation();
  const userInfo = new UserInfo('.profile__name', '.profile__job')
  // класс открытия попапа редактирования профиля
  const profilePopup = new PopupWithform('.popup_profile', 
  (values) => {
    const item = {name: values.name, job: values.job}
    userInfo.setUserInfo(item.name, item.job)
    profilePopup.close()
  })
  profilePopup.setEventListeners()
//класс открытия попапа добавления новой карточки
  const addPopup = new PopupWithform('.popup_add',
  (values) => {
  const item = {name: values.place, link: values.link}
  console.log(item)
  const newElement = createCard(item);
  document.querySelector(elements).prepend(newElement.getCard());
  addPopup.close();
  formAddElement.reset();
  })
  addPopup.setEventListeners()
// функция чтобы кнопка была валидной
function validateButton() {
  popupButtonProfile.removeAttribute('disabled');
  popupButtonProfile.classList.remove('popup__button_disabled')
}
// делаем функцию отправки данных из popup в профиль
function handleEditProfileFormSubmit (evt) {
    evt.preventDefault();
    userInfo.getUserInfo()
    console.log(userInfo.getUserInfo())
    profilePopup.close();
}
// отслеживаемые события
formElement.addEventListener('submit', handleEditProfileFormSubmit); 
editButton.addEventListener('click', () => {
  const getUserInfo = userInfo.getUserInfo()
  console.log(getUserInfo)
  nameInput.value = getUserInfo.name
  jobInput.value = getUserInfo.job
  validateButton()
profilePopup.open()
});
closeButton.addEventListener('click', () => {
  profilePopup.close()
});
addCloseButton.addEventListener('click', () => {
  addPopup.close();
});
addButton.addEventListener('click', function() {
  validateAddForm.hideInputErrors();
  addButtonSubmit.classList.add('popup__button_disabled')
  addButtonSubmit.setAttribute('disabled', true);
  addPopup.open();
});
imgCloseButton.addEventListener('click', () => {
  imagePopup.close();
});
