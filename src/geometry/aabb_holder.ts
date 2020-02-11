module Geometry
{
    export interface AABBHolder extends PositionHolder, SizeHolder
    {
        aabb: AABB;
    }
}