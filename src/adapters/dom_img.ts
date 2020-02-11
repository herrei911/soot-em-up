module Adapters
{
    export class DOMImg implements Gateways.GraphicElement
    {
        private _element : HTMLImageElement | null;
        private _aabb: Geometry.AABB;

        constructor (src: string, className: string)
        {
            this._element = document.createElement("img");
            this._element.src = src;
            this._element.className = className;
            document.body.appendChild(this._element);
            let rect = this.getElement().getBoundingClientRect();
            this._aabb = {
                position: new Geometry.Vector(rect.x, rect.y),
                size:
                {
                    width: rect.width,
                    height: rect.height
                }
            };
        }

        public get aabb(): Geometry.AABB
        {
            return this._aabb;
        }

        public set aabb(value: Geometry.AABB)
        {
            this._aabb = value;
            let element = this.getElement();
            element.style.position = "absolute";
            element.style.left = value.position.x + "px";
            element.style.top = value.position.y + "px";
            element.style.width = value.size.width + "px";
            element.style.height = value.size.height + "px";
        }

        public get position(): Geometry.Vector
        {
            return this._aabb.position;
        }

        public set position(value: Geometry.Vector)
        {
            this._aabb.position = value;
            let element = this.getElement();
            element.style.position = "absolute";
            element.style.left = value.x + "px";
            element.style.top = value.y + "px";
        }

        public get size(): Geometry.Size
        {
            return this._aabb.size;
        }

        public set size(value: Geometry.Size)
        {
            this._aabb.size = value;
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