let platillo = new Platillo(document, 100);

function step(delta)
{
    platillo.update(delta);
    requestAnimationFrame(step);
}

requestAnimationFrame(step);