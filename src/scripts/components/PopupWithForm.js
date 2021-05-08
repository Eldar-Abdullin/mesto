import Popup from './Popup.js'
export default class PopupWithForm extends Popup {
    constructor(selectorPopup, handleFormSubmit) {
        super(selectorPopup);
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = this._popup.querySelector('.popup__container');
        this._inputList = this._popupForm.querySelectorAll('.popup__input')
        this._popupButton = this._popup.querySelector('.popup__button')
    }
    // Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
    _getInputValues() {
        this._newValues = {}
        this._inputList.forEach( inputElement => {
            this._newValues[inputElement.name] =  inputElement.value;
            
        });
        return this._newValues;
    }
    // Перезаписывает родительский метод setEventListeners. Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
    setEventListeners() {
        this._popupForm.addEventListener('submit', (evt) =>
        {evt.preventDefault() 
        this._handleFormSubmit(this._getInputValues())})
        super.setEventListeners()   
    }
    //Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
    close () {
        this._popupForm.reset()
        super.close()
    }
}