import Ball from "./Ball.js";
import Wall from "./Wall.js";

/**
 * @var ctx
 * @type HTMLCanvasElement
 */
const canvas = document.getElementById('canvas');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const ctx = canvas.getContext('2d');

let ball = new Ball(ctx, window.innerWidth / 2, window.innerHeight / 2, 1, 1);
const ground = new Wall(ctx, 0, (window.innerHeight - 20), 20, window.innerWidth);
const leftWall = new Wall(ctx, 0, 0, window.innerHeight - 20, 20);
const rightWall = new Wall(ctx, window.innerWidth - 20, 0, window.innerHeight - 20, 20);

const sceneObjects = [
    // ball,
    ground,
    leftWall,
    rightWall,
]

window.addEventListener('mousemove', (ev) => {
    const x = ev.clientX;
    const y = ev.clientY;
    ball = new Ball(ctx, x, y, 0, 0);
})

function start() {
    requestAnimationFrame(start);

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // Draw
    sceneObjects.forEach((obj) => {
        obj.update(sceneObjects);
    });

    ball.update(sceneObjects);
}

start();
