let objetos: any[] = [];

setInterval(
    function()
    {
        let nuevoPlatillo = new Entities.Platillo(document, Math.random() * 50);
        objetos.push(nuevoPlatillo);
        let nuevoHumo = new Entities.Humo(document, 60, 300);
        objetos.push(nuevoHumo);
    },
    2000
);

let lastMilliseconds = performance.now();

function step(milliseconds: number)
{
    let delta = milliseconds - lastMilliseconds;
    lastMilliseconds = milliseconds;
    for (let index = 0; index < objetos.length; index++)
    {
        let objeto = objetos[index];
        objeto.update(delta);
        if (objeto.left < -objeto.width)
        {
            objeto.dispose();
            objetos.splice(index, 1);
        }
    }
    requestAnimationFrame(step);
}

requestAnimationFrame(step);