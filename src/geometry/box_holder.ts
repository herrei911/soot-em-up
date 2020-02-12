module Geometry
{
    export interface BoxHolder extends PositionHolder, SizeHolder
    {
        box: Box;
    }
}