export default class Api {
    constructor(config){
        this._url = config.url;
        this._headers = config.headers
    }
    getAllCards() {
        return fetch(`${this._url}/cards`,
        {method: 'GET',
            headers: this._headers})
            .then(this._checkResponse)
        }
        _checkResponse(res) {
            if (res.ok) {
                return res.json();}
                return Promise.reject(`Ошибка: ${res.status}`);
            
        }
    getUserInfo() {
        return fetch(`${this._url}/users/me`,
        {method: 'GET',
            headers: this._headers})
            .then(this._checkResponse)
        }
    getAllNeededData() {
        return Promise.all([this.getAllCards(), this.getUserInfo()])
    }    
    changeUserInfo(name, about) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
              name: name,
              about: about
            })
          }).then(this._checkResponse); 
    }
    addNewCard(name, link) {
        return fetch(`${this._url}/cards`,
        {method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
              name: name,
              link: link
            })
        }).then(this._checkResponse)
    }
    changeUserAvatar(avatar){
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
              avatar: avatar
            })
          }).then(this._checkResponse);
    }
    likeCard(cardId) {
        return fetch(`${this._url}/cards/likes/${cardId}`,{
            method: 'PUT',
            headers: this._headers
        }
        )
        .then(this._checkResponse)
    }
    deleteLike(cardId) {
        return fetch(`${this._url}/cards/likes/${cardId}`,{
            method: 'DELETE',
            headers: this._headers
        }
        )
        .then(this._checkResponse)
    }
    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(this._checkResponse)
    }
    }