import {popupImage, popupImageCaption} from '../utils/constants.js'
import Popup from './Popup.js'
export default class PopupWithImage extends Popup {
    open({name, link}){
        popupImage.src = link;
        popupImage.alt = name;
        popupImageCaption.textContent = name
        super.open()
    }
}