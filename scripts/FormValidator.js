class FormValidator {
    constructor(selectors, form){
        this._inputSelector = selectors.inputSelector;
        this._submitButtonSelector = selectors.submitButtonSelector;
        this._inactiveButtonClass = selectors.inactiveButtonClass;
        this._inputErrorClass = selectors.inputErrorClass;
        this._errorClass = selectors.errorClass;
        this._form = form;
    }

_allInputEmpty() {
    return !this._inputList.some(inputElement => inputElement.value.length > 0);
}

_hasInvalidInput() {
    return this._inputList.some(inputElement => !inputElement.validity.valid)
}
_showInputError(inputElement) {
    this._errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    this._errorElement.textContent = inputElement.validationMessage;
    this._errorElement.classList.add(this._errorClass);
}
_hideInputError (inputElement){
    this._errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    this._errorElement.classList.remove(this._errorClass);
};

_checkInput(inputElement) {
    if (inputElement.validity.valid) {
        this._hideInputError(inputElement);
    } else {
        this._showInputError(inputElement);
    }
}
_toggleButtonState() {
    if(this._hasInvalidInput() || this._allInputEmpty()
    ) {
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.setAttribute('disabled', true);
    } else {
        this._buttonElement.classList.remove(this._inactiveButtonClass)
        this._buttonElement.removeAttribute('disabled');
    }
}
_setInputListeners() {
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    console.log(this._inputList)
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
    this._inputList.forEach( inputElement => {
        inputElement.addEventListener('input', () => {
            this._checkInput(inputElement);
            // переключить состояние кнопки
            this._toggleButtonState(inputElement);
        });
        this._toggleButtonState(inputElement);
    });
}

enableValidation() {
    this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
    })
    this._setInputListeners(this._form, )
};
}
export {FormValidator}