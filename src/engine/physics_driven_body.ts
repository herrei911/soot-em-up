module Engine
{
    export class PhysicsDrivenBody implements UpdateCapable
    {
        public velocity : Geometry.Vector;
        public boxHolder : Geometry.BoxHolder;

        constructor(boxHolder: Geometry.BoxHolder, velocity : Geometry.Vector)
        {
            this.boxHolder = boxHolder;
            this.velocity = velocity;
        }

        public update(deltaSeconds: number): void
        {
            this.boxHolder.position = Geometry.Vector.add
            (
                this.boxHolder.position,
                Geometry.Vector.mult(this.velocity, deltaSeconds)
            );
        }
    }
}