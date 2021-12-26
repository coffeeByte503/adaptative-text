class FontSizeAdapter {
  constructor({ maxSize, fontFamily, minSize = 32 }) {
    this._context = document.createElement("canvas").getContext("2d");
    this._context.font = `1px ${fontFamily}`;

    this.fontFamily = fontFamily;
    this._maxSize = maxSize;
    this._minSize = minSize;
  }

  computeTextFontSize(text) {
    const metrics = this._context.measureText(text);

    let fontSize = innerWidth / metrics.width;

    if (this._maxSize && fontSize > this._maxSize) {
      fontSize = this._maxSize;
    } else if (fontSize < this._minSize) {
      fontSize = this._minSize;
    }

    return fontSize;
  }

  setMaxSize(size) {
    this._maxSize = size;
  }

  setMinSize(size) {
    this._minSize = size;
  }
}
