/// <reference path="geometry/aabb.ts" />
/// <reference path="adapters/gameloop.ts" />
let soots: Engine.GameObject[] = [];
let saucers: Engine.GameObject[] = [];
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
                let newSaucer = new Engine.GameObject(new Adapters.DOMImg("img/platillo.png", "platillo"))
                newSaucer.graphicElement.position = {x: viewPort.size.width, y: Math.floor(Math.random() * 5) * 50};
                newSaucer.physicsDrivenBody.velocity = {x: -100, y: 0};
                saucers.push(newSaucer);
            },
            2000
        );
        let pressed = false;
        document.addEventListener
        (
            'keydown',
            function(event)
            {
                if(event.keyCode == 32 && !pressed)
                {
                    pressed = true;
                    let newSoot = new Engine.GameObject(new Adapters.DOMImg("img/humo.png", "humo"))
                    newSoot.graphicElement.position = {x: 60, y: 300};
                    newSoot.physicsDrivenBody.velocity = {x: 0, y: -100};
                    soots.push(newSoot);
                }
            }
        );
        document.addEventListener
        (
            'keyup',
            function(event)
            {
                if(event.keyCode == 32)
                {
                    pressed = false;
                }
            }
        );
    },
    (deltaSeconds: number) =>
    {
        for (let saucerIndex = 0; saucerIndex < saucers.length; saucerIndex++)
        {
            let saucer = saucers[saucerIndex];
            saucer.update(deltaSeconds);
            if (!Geometry.AABB.checkOverlap(viewPort, saucer.graphicElement.aabb))
            {
                saucer.dispose();
                saucers.splice(saucerIndex, 1);
            }
        }
        for (let sootIndex = 0; sootIndex < soots.length; sootIndex++)
        {
            let soot = soots[sootIndex];
            soot.update(deltaSeconds);
            if (!Geometry.AABB.checkOverlap(viewPort, soot.graphicElement.aabb))
            {
                soot.dispose();
                soots.splice(sootIndex, 1);
                continue;
            }
            for (let saucerIndex = 0; saucerIndex < saucers.length; saucerIndex++)
            {
                let saucer = saucers[saucerIndex];
                if (Geometry.AABB.checkOverlap(soot.graphicElement.aabb, saucer.graphicElement.aabb))
                {
                    soot.dispose();
                    soots.splice(sootIndex, 1);
                    saucer.dispose();
                    saucers.splice(saucerIndex, 1);
                }
            }
        }
    }
);