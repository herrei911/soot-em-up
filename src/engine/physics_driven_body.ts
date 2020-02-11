module Engine
{
    export class PhysicsDrivenBody implements UpdateCapable
    {
        public velocity : Geometry.Vector;
        public positionHolder : Geometry.PositionHolder;

        constructor(positionHolder: Geometry.PositionHolder, velocity : Geometry.Vector)
        {
            this.positionHolder = positionHolder;
            this.velocity = velocity;
        }

        public update(deltaSeconds: number): void
        {
            this.positionHolder.position = Geometry.Vector.add
            (
                this.positionHolder.position,
                Geometry.Vector.mult(this.velocity, deltaSeconds)
            );
        }
    }
}