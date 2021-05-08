export default class Section {
    constructor({renderer}, containerSelector) {
        //this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector)
    }
    //Содержит публичный метод addItem, который принимает DOM-элемент и добавляет его в контейнер.
    addItem(element){
        this._container.prepend(element)
    }
    renderItems(array) {
        array.forEach( item => {
            (this._renderer(item));
        });
    }
}