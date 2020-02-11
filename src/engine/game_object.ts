module Engine
{
    export class GameObject implements UpdateCapable, Disposable
    {
        public readonly aabbHolder: Gateways.GraphicElement;
        public readonly physicsDrivenBody: Engine.PhysicsDrivenBody;

        constructor (aabbHolder: Gateways.GraphicElement)
        {
            this.aabbHolder = aabbHolder;
            this.physicsDrivenBody = new Engine.PhysicsDrivenBody(aabbHolder, {x:0, y:0});
        }

        public update(deltaSeconds: number): void
        {
            this.physicsDrivenBody.update(deltaSeconds);
        }

        dispose(): void
        {
            this.aabbHolder.dispose();
        }
    }
}