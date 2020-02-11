module Geometry
{
    export class Vector
    {
        public readonly x: number;
        public readonly y: number;

        constructor(x: number, y: number)
        {
            this.x = x;
            this.y = y;
        }

        public static add(a: Vector, b: Vector) : Vector
        {
            return {x: a.x + b.x, y: a.y + b.y};
        }

        public static mult(a: Vector, factor: number) : Vector
        {
            return {x: a.x * factor, y: a.y * factor};
        }
    }
}