module Engine
{
    export interface UpdateCapable
    {
        update(deltaSeconds: number) : void;
    }
}