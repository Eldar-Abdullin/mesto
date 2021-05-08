import Popup from './Popup.js'
export default class PopupWithSubmit extends Popup {
    constructor(selectorPopup) {
        super(selectorPopup)
    }

    setSubmitAction(submitAction){
        this._handleSubmitCallback = submitAction
    }
    setEventListeners() {
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._handleSubmitCallback()
        })
        super.setEventListeners()
        
    }
}