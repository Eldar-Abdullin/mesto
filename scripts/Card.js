import { popupImg } from "./constants.js";
import {openPopup} from './index.js'
export class Card {
    constructor(item, cardSelector) {
        this._name = item.name;
        this._link = item.link;
        this._cardSelector = cardSelector;
        this._element = document.querySelector(this._cardSelector).content

    
    }
    _createView() {
        this._view = this._element.querySelector('.element').cloneNode(true);
    }
    getCard() {
        this._setEventListeners();
        this._img();
        this._title();
        return this._view;
    }
    _img(){
        this._imgElement = this._view.querySelector('.element__photo');
        this._imgElement.src = this._link;
        this._imgElement.alt = this._name;
    }

    _title(){
        this._cardName = this._view.querySelector('.element__title');
        this._cardName.textContent = this._name; 
    }
    _remove() {
        this._view.remove();
    }

    _like() {
        this._view.querySelector('.element__button-like').classList.toggle('element__button-like_active');
    }

    _setEventListeners() {
        this._createView()
        this._view.querySelector('.element__button-like').addEventListener('click',() => {
            this._like();
        })
        this._view.querySelector('.element__delete-button').addEventListener('click', () => {
            this._remove();
        })
        this._view.querySelector('.element__photo').addEventListener('click', () => {
            document.querySelector('.popup__image').src = this._link;
            document.querySelector('.popup__image').alt = this._name;
            document.querySelector('.popup__img-caption').textContent = this._name;
            openPopup(popupImg)
        })
        
    }    
}

