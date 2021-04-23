import Popup from './Popup.js'
export default class PopupWithImage extends Popup {
    constructor(selectorPopup, selectorImage, selectorImageCaption){
        super(selectorPopup);
        this._image = this._popup.querySelector(selectorImage);
        this._imageCaption = this._popup.querySelector(selectorImageCaption)
    }
    open({name, link}){
        this._image.src = link;
        this._image.alt = name;
        this._imageCaption.textContent = name
        super.open()
    }
}