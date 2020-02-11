module Geometry
{
    export class Size implements Size
    {
        public readonly width: number;
        public readonly height: number;

        constructor(width: number, height: number)
        {
            if (width < 0)
            {
                throw `width cannot be negative`;
            }
            if (height < 0)
            {
                throw `height cannot be negative`;
            }
            this.width = width;
            this.height = height;
        }
    }
}