export class Card {
    constructor({data, handleCardClick,handleLikeAdd,handleDeleteLike, handleDeleteIconClick}, cardSelector, meUserId) {
        this._data = data
        this._name = data.name;
        this._link = data.link;
        this._userId = data.owner._id
        this._meUserId = meUserId;
        this._handleCardClick = handleCardClick;
        this._handleLikeAdd = handleLikeAdd;
        this._handleDeleteLike = handleDeleteLike
        this._handleDeleteIconClick = handleDeleteIconClick
        this._cardSelector = cardSelector;
        this._element = document.querySelector(this._cardSelector).content.cloneNode(true)
        
    }
    _visibleDeleteButton() {
        if(this._userId !== this._meUserId){
            this._deleteButton.classList.add('element__delete-button_visible')
        }

    }
    _isLiked() {
        return this._data.likes.some(id => id._id === this._meUserId)
    }
    _updateLikesView(){
        this._numberLike.textContent = this._data.likes.length
        if(this._isLiked() === true)
        {this._addLikeButton()}
    }
    setLIkesInfo(data){
        this._data.likes = data
        this._updateLikesView()
    }
    _createView() {
        this._view = this._element.querySelector('.element');
        this._deleteButton = this._view.querySelector('.element__delete-button')
        this._buttonLike = this._view.querySelector('.element__button-like')
        this._numberLike = this._view.querySelector('.element__quantity-likes')
        this._updateLikesView()
        console.log(this._isLiked())
        this._visibleDeleteButton()
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
    deleteCardHandler() {
        this._view.remove();
    }
    _deleteLikeButton(){
        this._buttonLike.classList.remove('element__button-like_active')
    }
    _addLikeButton(){
        this._buttonLike.classList.add('element__button-like_active')
    }
    _setEventListeners() {
        this._buttonLike.addEventListener('click',() => {
            if(this._isLiked() === true){
                this._handleDeleteLike();
                this._deleteLikeButton();
            }else {this._handleLikeAdd();
             this._addLikeButton()}
        })
        this._deleteButton.addEventListener('click', () => {
            this._handleDeleteIconClick();
        })
        this._view.querySelector('.element__photo').addEventListener('click', () => 
        this._handleCardClick({
            name: this._name,
            link: this._link
        }))}        
}

