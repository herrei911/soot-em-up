/// <reference path="position_holder.ts" />

module Geometry
{
    export class Box implements PositionHolder, SizeHolder
    {
        public position: Vector;
        public size: Size;

        constructor(size: Size, position: Vector)
        {
            this.position = position;
            this.size = size;
        }

        public static checkOverlap(a: Box, b: Box)
        {
            let al = a.position.x;
            let at = a.position.y;
            let ar = a.position.x + a.size.width;
            let ab = a.position.y + a.size.height;
            let bl = b.position.x;
            let bt = b.position.y;
            let br = b.position.x + b.size.width;
            let bb = b.position.y + b.size.height;
            return (
                    ((al > bl && al < br) || (ar > bl && ar < br) || (bl > al && bl < ar) || (br > al && br < ar))
                &&  ((at > bt && at < bb) || (ab > bt && ab < bb) || (bt > at && bt < ab) || (bb > at && bb < ab))
            );
        }
    }
}