export default class UserInfo {
    constructor(selectorUserName, selectorUserJob){
        this._UserName = document.querySelector(selectorUserName);
        this._UserJob = document.querySelector(selectorUserJob);
    }
    // Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
    getUserInfo() {
        this._userInfo = {};
        this._userInfo.name = this._UserName.textContent
        this._userInfo.job = this._UserJob.textContent
        return this._userInfo 
    }
    // Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.
    setUserInfo(name, job) {
        this._UserName.textContent = name;
        this._UserJob.textContent = job
    }
}