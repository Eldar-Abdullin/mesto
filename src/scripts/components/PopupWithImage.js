import Popup from './Popup.js'
export default class PopupWithImage extends Popup {
    constructor(selectorPopup, selectorImage, selectorImageCaption){
        super(selectorPopup);
        this._image = document.querySelector(selectorImage);
        this._imageCaption = document.querySelector(selectorImageCaption)
    }
    open({name, link}){
        this._image.src = link;
        this._image.alt = name;
        this._imageCaption.textContent = name
        super.open()
    }
}