export default class Popup {
    constructor(selectorPopup){
        this._popup = document.querySelector(selectorPopup);
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    //Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.
    open () {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown',this._handleEscClose)

    };
    close () {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown',this._handleEscClose)
    };
//Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
_handleEscClose (evt) {
    if (evt.key === 'Escape') {
        console.log(evt.key)
        this.close();
    }
};
//Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа.
setEventListeners(){
    this._popup.querySelector('.popup__close-button').addEventListener('click', this.close())
    this._popup.addEventListener('click', (evt) => {
        if(evt.target.classList.contains('popup'))
        this.close()
    })
}
}