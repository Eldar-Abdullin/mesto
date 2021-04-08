 function openPopup (popup) {
     hideErrorsInForms(popup)
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc);
  }
function closePopup (popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc);

  }
const closeByEsc = (evt) => {
    if (evt.key === 'Escape') {
      const currentPopup = document.querySelector('.popup_opened')
      closePopup(currentPopup);
  }
}
function hideErrorsInForms (form) {
    const inputCurrentForm = form.querySelectorAll('.popup__input');
    console.log(inputCurrentForm)
    inputCurrentForm.forEach( item => {
      const errorContainers = form.querySelector(`#${item.id}-error`)
      console.log(errorContainers)
      console.log(item)
      item.classList.remove('popup__input_type_error')
      errorContainers.classList.remove('popup__error_visible')
    })
  }
export {openPopup, closePopup, closeByEsc}