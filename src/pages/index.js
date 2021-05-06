import './index.css'
import {Card} from '../scripts/components/Card'
import Section from '../scripts/components/Section.js'
import PopupWithImage from '../scripts/components/PopupWithImage.js'
import PopupWithform from '../scripts/components/PopupWithForm.js'
import PopupWithSubmit from '../scripts/components/PopupWithSubmit'
import UserInfo from '../scripts/components/UserInfo.js'
import Api from '../scripts/components/Api'
import {FormValidator} from '../scripts/components/FormValidator.js'
import {avatarButton,editButton, nameInput, jobInput, addButton, validationConfig, addForm, profileForm, elements, avatarForm} from '../scripts/utils/constants.js'
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-23',
  headers: {
    authorization: '214a54ce-1055-4190-abb2-8e0a2b6796dd',
    'Content-Type': 'application/json'
  }
})
api.getAllNeededData().then ( ([cardsArray, userData]) => {
const userInfo = new UserInfo('.profile__name', '.profile__job', '.profile__avatar') 
api.getUserInfo()
// .then((data) => {
//   userInfo.setUserInfo(data.name, data.about, data.avatar)
// })
// // функция создания новой карточки
const createCard = (item) => {
  const newCard = new Card({data: item, 
  handleCardClick: () => {
    imagePopup.open(item)
  },
  handleLikeClick: () => {
    api.likeCard(item._id)
    console.log(item)
    console.log(item._id)
  },
  handleDeleteIconClick: () => {
    confirmDeletePopup.open()
    confirmDeletePopup.setSubmitAction(() => {api.deleteCard(item._id)
    newCard.deleteCardHandler()}
    )
  }
},
  '.template',
  userId
  );
  return newCard.getCard();
}
const cardList = new Section({
  renderer: (item) => {
    const card = createCard(item);
    cardList.addItem(card)
  }},
  elements)
//const apiCard = api.getAllCards()
// apiCard.then((data) => {
//   cardList.renderItems(data)
//   })
  const userId = userData._id
  userInfo.setUserInfo(userData.name, userData.about, userData.avatar)
  cardList.renderItems(cardsArray)
const imagePopup = new PopupWithImage('.popup_img', '.popup__image', '.popup__img-caption')
imagePopup.setEventListeners()
// делаем валидацию
  const validateProfileForm = new FormValidator(validationConfig, profileForm);
  validateProfileForm.enableValidation();
  const validateAddForm = new FormValidator(validationConfig, addForm);
  validateAddForm.enableValidation();
  const validateAvatarForm = new FormValidator(validationConfig, avatarForm)
  validateAvatarForm.enableValidation();
  // попап подтверждения удаления карточки 
const confirmDeletePopup = new PopupWithSubmit('.popup_delete')
confirmDeletePopup.setEventListeners()
  // класс открытия попапа редактирования профиля
  const profilePopup = new PopupWithform('.popup_profile', 
  (values) => {
    const item = {name: values.name, job: values.job}
    const changeUserInfo = api.changeUserInfo(item.name, item.job)
    console.log(changeUserInfo)
    profilePopup.close()
  })
  profilePopup.setEventListeners()
//класс открытия попапа добавления новой карточки
  const addPopup = new PopupWithform('.popup_add',
  (values) => {
  const item = {name: values.place, link: values.link}
  const newElement = api.addNewCard(item.name, item.link);
  cardList.addItem(newElement);
  addPopup.close();
  })
  addPopup.setEventListeners()
  const avatarPopup = new PopupWithform('.popup_change-avatar',
  (value) => {
    const item = {link: value.link}
    const newAvatar = api.changeUserAvatar(item.link)
    avatarPopup.close()
  })
  avatarPopup.setEventListeners();
// делаем функцию отправки данных из popup в профиль
editButton.addEventListener('click', () => {
  const getUserInfo = userInfo.getUserInfo()
  nameInput.value = getUserInfo.name
  jobInput.value = getUserInfo.job
  validateProfileForm.hideInputErrors()
profilePopup.open()
});
avatarButton.addEventListener('click',() => {
  avatarPopup.open()
} )
addButton.addEventListener('click', function() {
  validateAddForm.hideInputErrors();
  addPopup.open();
});
})
