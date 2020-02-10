module Entities
{
    export class Platillo
    {
        _element: HTMLImageElement | null;
        _velocidad: number;
        _left: number;
        _top: number;

        constructor (document: Document, top: number)
        {
            this._element = document.createElement("img");
            this._element.src = "img/platillo.png";
            this._element.className = "platillo";
            document.body.appendChild(this._element);
            this._velocidad = 100;
            this.left = this._left = document.body.clientWidth + this.width;
            this.top = this._top = top;
        }

        dispose()
        {
            if (this._element != null)
            {
                document.body.removeChild(this._element);
                this._element = null;
            }
        }

        update(delta: number)
        {
            let seconds = delta / 1000;
            this.left = this._left - (seconds * this._velocidad);
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
            if (this._element != null)
            {
                this._element.style.left = value + "px";
            }
        }

        get top()
        {
            return this._top;
        }

        set top(value)
        {
            this._top = value;
            if (this._element != null)
            {
                this._element.style.top = value + "px";
            }
        }

        get width()
        {
            if (this._element != null)
            {
                return this._element.width;
            }

            return 0;
        }
    }
}