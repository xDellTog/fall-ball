import Ball from "./Ball.js";

const ball1 = new Ball(document.getElementById('ball1'), 50, 75, -1, 0);
const ball2 = new Ball(document.getElementById('ball2'), 25, 50, 1, 0);

function start() {
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

            // DRAW HERE
            ball1.update(delta);
            ball2.update(delta);
        }
    }

    update();
}

start();