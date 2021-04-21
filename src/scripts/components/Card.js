export class Card {
    constructor({data, handleCardClick}, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._handleCardClick = handleCardClick
        this._cardSelector = cardSelector;
        this._element = document.querySelector(this._cardSelector).content
        
    }
    _createView() {
        this._view = this._element.querySelector('.element').cloneNode(true);
        this._buttonLike = this._view.querySelector('.element__button-like')
    }
    getCard() {
        this._createView()
        this._setEventListeners();
        this._imgElement = this._view.querySelector('.element__photo');
        this._imgElement.src = this._link;
        this._imgElement.alt = this._name;
        this._cardName = this._view.querySelector('.element__title');
        this._cardName.textContent = this._name; 
        return this._view;
    }
    _deleteCardHandler() {
        this._view.remove();
    }

    _likeHandler() {
        this._buttonLike.classList.toggle('element__button-like_active');
    }

    _setEventListeners() {
        this._buttonLike.addEventListener('click',() => {
            this._likeHandler();
        })
        this._view.querySelector('.element__delete-button').addEventListener('click', () => {
            this._deleteCardHandler();
        })
        this._view.querySelector('.element__photo').addEventListener('click', () => 
        this._handleCardClick({
            name: this._name,
            link: this._link
        }))}        
}

