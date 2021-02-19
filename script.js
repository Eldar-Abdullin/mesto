let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_job');
let popupOpenElement = document.querySelector('.popup')
function openPopup() {
    popupOpenElement.classList.add('popup_opened');
}
editButton.addEventListener('click', openPopup);
function closePopup() {
    popupOpenElement.classList.remove('popup_opened');
}
closeButton.addEventListener('click', closePopup);
function formSubmitHandler (evt) {
    evt.preventDefault();

    // Получите значение полей jobInput и nameInput из свойства value
    
    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 
//document.querySelector('.profile__name').textContent = document.querySelector('.popup__input_name').value;