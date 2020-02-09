let objetos = [];

setInterval(
    function()
    {
        let nuevoPlatillo = new Platillo(document, Math.random() * 50);
        objetos.push(nuevoPlatillo);
    },
    2000
);

function step(delta)
{
    for (let index = 0; index < objetos.length; index++)
    {
        let objeto = objetos[index];
        objeto.update(delta);
    }
    requestAnimationFrame(step);
}

requestAnimationFrame(step);