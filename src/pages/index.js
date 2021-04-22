import './index.css'
import {Card} from '../scripts/components/Card'
import Section from '../scripts/components/Section.js'
import PopupWithImage from '../scripts/components/PopupWithImage.js'
import PopupWithform from '../scripts/components/PopupWithForm.js'
import UserInfo from '../scripts/components/UserInfo.js'
import {FormValidator} from '../scripts/components/FormValidator.js'
import {editButton, nameInput, jobInput, addButton, initialCards, validationConfig, addForm, profileForm, elements} from '../scripts/utils/constants.js'
// функция создания новой карточки
const createCard = (item) => {
  const newCard = new Card({data: item, 
  handleCardClick: () => {
    imagePopup.open(item)
  } },
  '.template');
  return newCard.getCard();
}
const imagePopup = new PopupWithImage('.popup_img', '.popup__image', '.popup__img-caption')
imagePopup.setEventListeners()
// функция рендеринга массива в элементы
const cardList = new Section({
  items: initialCards,
  renderer: (data) => {
    const card = createCard(data);
    cardList.addItem(card)
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
  cardList.addItem(newElement);
  addPopup.close();
  })
  addPopup.setEventListeners()
// делаем функцию отправки данных из popup в профиль
editButton.addEventListener('click', () => {
  const getUserInfo = userInfo.getUserInfo()
  nameInput.value = getUserInfo.name
  jobInput.value = getUserInfo.job
  validateProfileForm.hideInputErrors()
profilePopup.open()
});
addButton.addEventListener('click', function() {
  validateAddForm.hideInputErrors();
  addPopup.open();
});