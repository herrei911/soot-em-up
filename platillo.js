class Platillo
{
    constructor (document, top)
    {
        this.element = document.createElement("img");
        this.element.src = "img/platillo.png";
        this.element.className = "platillo";
        document.body.appendChild(this.element);
        this.left = document.body.clientWidth + this.width;
        this.top = top;
        this.velocidad = 1;
    }

    dispose()
    {
        if (this.element != null)
        {
            document.body.removeChild(this.element);
            this.element = null;
        }
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
        if (this.element != null)
        {
            this.element.style.left = value + "px";
        }
    }

    get top()
    {
        return this._top;
    }

    set top(value)
    {
        this._top = value;
        if (this.element != null)
        {
            this.element.style.top = value + "px";
        }
    }

    get width()
    {
        if (this.element != null)
        {
            return this.element.width;
        }

        return 0;
    }
}