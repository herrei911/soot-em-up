let platillo = new Platillo(document);

function step(delta)
{
    platillo.update(delta);
    requestAnimationFrame(step);
}

requestAnimationFrame(step);