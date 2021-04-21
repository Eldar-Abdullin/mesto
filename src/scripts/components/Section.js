export default class Section {
    constructor({ items, renderer}, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector)
    }
    //Содержит публичный метод addItem, который принимает DOM-элемент и добавляет его в контейнер.
    addItem(element){
        this._container.append(element)
    }
    renderItems() {
        this._renderedItems.forEach( item => {
            this._renderer(item);
        });
    }
}