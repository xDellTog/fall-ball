export function randomNumberBetween(min, max) {
    return Math.random() * (max - min) + min;
}

export function isCollision(rectA, rectB) {
    return (
        (rectA.top <= rectB.bottom) &&
        (rectA.bottom >= rectB.top) &&
        (rectA.left <= rectB.right) &&
        (rectA.right >= rectB.left)
    )
}

export function start(draw) {
    let fps = 60;
    let now;
    let then = Date.now();
    let interval = 1000 / fps;
    let delta;

    function update() {
        requestAnimationFrame(update);

        now = Date.now();
        delta = now - then;

        if (delta > interval) {
            then = now - (delta % interval);

            if (!!draw) {
                draw(delta);
            }
        }
    }

    update();
}