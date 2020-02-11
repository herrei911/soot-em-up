module Adapters
{
    function ready(callback: () => void)
    {
        if (document.readyState != 'loading')
        {
            callback();
        }
        else
        {
            document.addEventListener('DOMContentLoaded', callback);
        }
    }

    export function gameloop(load: () => void, update: (deltaSeconds: number) => void)
    {
        ready
        (
            () =>
            {
                load();
                
                let lastMilliseconds = performance.now();
        
                let step = (milliseconds: number) =>
                {
                    let deltaSeconds = (milliseconds - lastMilliseconds) / 1000;
                    lastMilliseconds = milliseconds;
                    update(deltaSeconds);
                    window.requestAnimationFrame(step);
                }

                window.requestAnimationFrame(step);
            }
        )
    }
}