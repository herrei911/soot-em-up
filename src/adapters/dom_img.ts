module Adapters
{
    export class DOMImg implements Gateways.GraphicElement
    {
        private _element : HTMLImageElement | null;
        private _box: Geometry.Box;

        constructor (src: string, className: string)
        {
            this._element = document.createElement("img");
            this._element.src = src;
            this._element.className = className;
            document.body.appendChild(this._element);
            let rect = this.getElement().getBoundingClientRect();
            this._box = {
                position: new Geometry.Vector(rect.x, rect.y),
                size:
                {
                    width: rect.width,
                    height: rect.height
                }
            };
        }

        public get box(): Geometry.Box
        {
            return this._box;
        }

        public set box(value: Geometry.Box)
        {
            this._box = value;
            let element = this.getElement();
            element.style.position = "absolute";
            element.style.left = value.position.x + "px";
            element.style.top = value.position.y + "px";
            element.style.width = value.size.width + "px";
            element.style.height = value.size.height + "px";
        }

        public get position(): Geometry.Vector
        {
            return this._box.position;
        }

        public set position(value: Geometry.Vector)
        {
            this._box.position = value;
            let element = this.getElement();
            element.style.position = "absolute";
            element.style.left = value.x + "px";
            element.style.top = value.y + "px";
        }

        public get size(): Geometry.Size
        {
            return this._box.size;
        }

        public set size(value: Geometry.Size)
        {
            this._box.size = value;
            let element = this.getElement();
            element.style.position = "absolute";
            element.style.width = value.width + "px";
            element.style.height = value.height + "px";
        }

        public dispose(): void
        {
            if (this._element != null)
            {
                document.body.removeChild(this._element);
                this._element = null;
            }
        }

        private getElement(): HTMLImageElement
        {
            if (this._element == null)
            {
                throw `DOMImg disposed`;
            }
            return this._element;
        }
    }
}