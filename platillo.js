class Platillo
{
    constructor (document)
    {
        this.element = document.createElement("img");
        this.element.src = "img/platillo.png";
        this.element.className = "platillo";
        document.body.appendChild(this.element);
        this.left = document.body.clientWidth + this.width;
        this.top = 100;
        this.velocidad = 1;
    }

    update(delta)
    {
        let seconds = delta / 1000;
        let newLeft = this._left - (seconds * this.velocidad);
        this.left = newLeft;
    }

    get velocidad()
    {
        return this._velocidad;
    }

    set velocidad(value)
    {
        this._velocidad = value;
    }

    get left()
    {
        return this._left;
    }

    set left(value)
    {
        this._left = value;
        this.element.style.left = value + "px";
    }

    get top()
    {
        return this._top;
    }

    set top(value)
    {
        this._top = value;
        this.element.style.top = value + "px";
    }

    get width()
    {
        return this.element.width;
    }
}