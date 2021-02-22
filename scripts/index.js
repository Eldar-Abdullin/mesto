let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let popupButton = document.querySelector('.popup__button');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_job');
let popupOpenElement = document.querySelector('.popup')
let profileName = document.querySelector('.profile__name')
let profileJob = document.querySelector('.profile__job')
function openPopup() {
    popupOpenElement.classList.add('popup_opened');
    nameInput.value = profileName.innerHTML;
    jobInput.value = profileJob.innerHTML;
}
editButton.addEventListener('click', openPopup);
function closePopup() {
    popupOpenElement.classList.remove('popup_opened');
}
closeButton.addEventListener('click', closePopup);
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}
formElement.addEventListener('submit', formSubmitHandler); 