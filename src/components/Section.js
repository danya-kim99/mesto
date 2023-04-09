export default class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
    this._spinner = document.querySelector('.spinner');
  }

  addItem(item) {
    this._container.prepend(item);
  }

  loading(isLoading) {
    if (isLoading) {
      this._spinner.classList.add('spinner_visible');
    } else {
      this._spinner.classList.remove('spinner_visible');
    }
  }

  renderItems(items) {
    items.forEach(item => {
      this._renderer(item)
    });
  }
}
