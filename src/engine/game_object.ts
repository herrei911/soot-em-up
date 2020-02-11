module Engine
{
    export class GameObject implements UpdateCapable, Disposable
    {
        public readonly graphicElement: Gateways.GraphicElement;
        public readonly physicsDrivenBody: Engine.PhysicsDrivenBody;

        constructor (graphicElement: Gateways.GraphicElement)
        {
            this.graphicElement = graphicElement;
            this.physicsDrivenBody = new Engine.PhysicsDrivenBody(graphicElement, {x:0, y:0});
        }

        public update(deltaSeconds: number): void
        {
            this.physicsDrivenBody.update(deltaSeconds);
        }

        dispose(): void
        {
            this.graphicElement.dispose();
        }
    }
}