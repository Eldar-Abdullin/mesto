export default class UserInfo {
    constructor(selectorUserName, selectorUserJob, selectorUserAvatar){
        this._userName = document.querySelector(selectorUserName);
        this._userJob = document.querySelector(selectorUserJob);
        this._userAvatar = document.querySelector(selectorUserAvatar);
    }
    // Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
    getUserInfo() {
        this._userInfo = {};
        this._userInfo.name = this._userName.textContent
        this._userInfo.job = this._userJob.textContent
        return this._userInfo 
    }
    // Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.
    setUserInfo(name, job) {
        this._userName.textContent = name;
        this._userJob.textContent = job;
    }
    setUserAvatar(avatar) {
        this._userAvatar.src = avatar;
    }
}