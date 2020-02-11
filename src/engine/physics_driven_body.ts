module Engine
{
    export class PhysicsDrivenBody implements UpdateCapable
    {
        public velocity : Geometry.Vector;
        public aabbHolder : Geometry.AABBHolder;

        constructor(aabbHolder: Geometry.AABBHolder, velocity : Geometry.Vector)
        {
            this.aabbHolder = aabbHolder;
            this.velocity = velocity;
        }

        public update(deltaSeconds: number): void
        {
            this.aabbHolder.position = Geometry.Vector.add
            (
                this.aabbHolder.position,
                Geometry.Vector.mult(this.velocity, deltaSeconds)
            );
        }
    }
}