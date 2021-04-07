const allInputEmpty = (inputList) => {
    return !inputList.some(inputElement => inputElement.value.length > 0);
}

const hasInvalidInput = (inputList) => {
    return inputList.some(inputElement => !inputElement.validity.valid)
}

const showInputError = (formElement, inputElement,{inputErrorClass, errorClass}) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorClass);
}
const hideInputError = (formElement, inputElement,{inputErrorClass, errorClass}) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
};

const checkInput = (formElement, inputElement, rest) => {
    if (inputElement.validity.valid) {
        hideInputError(formElement, inputElement, rest)
    } else {
        showInputError(formElement, inputElement, rest)
    }
}
const toggleButtonState = (inputList, buttonElement,{inactiveButtonClass}) => {
    if(hasInvalidInput(inputList) || allInputEmpty(inputList)
    ) {
        buttonElement.classList.add(inactiveButtonClass)
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove(inactiveButtonClass)
        buttonElement.removeAttribute('disabled');
    }
}


const setInputListeners = (formElement, {inputSelector, submitButtonSelector, ...rest}) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    inputList.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
            checkInput(formElement, inputElement, rest);
            // переключить состояние кнопки
            toggleButtonState(inputList, buttonElement, rest);
        });
        toggleButtonState(inputList, buttonElement, rest);
    });
}

const enableValidation = ({formSelector, ...rest}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach(formElement => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setInputListeners(formElement, rest);
    });
};
const validationConfig = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }
enableValidation(validationConfig)