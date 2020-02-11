/// <reference path="geometry/aabb.ts" />
/// <reference path="adapters/gameloop.ts" />
let objetos: Engine.GameObject[] = [];
let viewPort: Geometry.AABB;

Adapters.gameloop(
    () =>
    {
        let clientRect = document.body.getBoundingClientRect();
        viewPort = new Geometry.AABB
        (
            {
                width: clientRect.width,
                height: clientRect.height
            },
            {
                x: clientRect.x,
                y: clientRect.y
            }
        );
        setInterval(
            function()
            {
                let nuevoPlatillo = new Engine.GameObject(new Adapters.DOMImg("img/platillo.png", "platillo"))
                nuevoPlatillo.aabbHolder.position = {x: viewPort.size.width, y: Math.random() * 50};
                nuevoPlatillo.physicsDrivenBody.velocity = {x: -100, y: 0};
                objetos.push(nuevoPlatillo);
                let nuevoHumo = new Engine.GameObject(new Adapters.DOMImg("img/humo.png", "humo"))
                nuevoHumo.aabbHolder.position = {x: 60, y: 300};
                nuevoHumo.physicsDrivenBody.velocity = {x: 0, y: -100};
                objetos.push(nuevoHumo);
            },
            2000
        );
    },
    (deltaSeconds: number) =>
    {
        for (let index = 0; index < objetos.length; index++)
        {
            let objeto = objetos[index];
            objeto.update(deltaSeconds);
            if (!Geometry.AABB.checkOverlap(viewPort, objeto.aabbHolder.aabb))
            {
                objeto.dispose();
                objetos.splice(index, 1);
            }
        }
    }
);