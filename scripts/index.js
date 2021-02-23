//Присваиваем значения
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let popupOpenElement = document.querySelector('.popup')
let profileName = document.querySelector('.profile__name')
let profileJob = document.querySelector('.profile__job')
// делаем функцию открытия popup 
// и сразу вставляем данные в поля ввода из профиля
function openPopup() {
    popupOpenElement.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}
// делаем фунцкию закрытия popup
function closePopup() {
    popupOpenElement.classList.remove('popup_opened');
}
// делаем фунцкию отправки данных из popup 
// в профиль
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}
formElement.addEventListener('submit', formSubmitHandler); 
// отслеживаемые события
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);