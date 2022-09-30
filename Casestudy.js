class Sneaker{
    constructor(name, brand, color,size, price, image) {
        this._name = name;
        this._color = color;
        this._price = price;
        this._brand = brand;
        this._size = size;
        this._image = image;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }

    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }

    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }

    get brand() {
        return this._brand;
    }
    set brand(value) {
        this._brand = value;
    }

    get size() {
        return this._size;
    }
    set size(value) {
        this._size = value;
    }

    get image() {
        return this._image;
    }
    set image(value) {
        this._image = value;
    }
}

