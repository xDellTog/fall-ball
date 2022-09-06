import Ball from "./Ball.js";
import Wall from "./Wall.js";

/**
 * @var ctx
 * @type HTMLCanvasElement
 */
const canvas = document.getElementById('canvas');

canvas.style.background = '#333333';

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const ctx = canvas.getContext('2d');

let dots = [];
let rows = 8;
let cols = 6;

const ball = new Ball(ctx, window.innerWidth / 2, 0, 5, 1, 10);

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        if (j % 2 !== 0) {
            if ((i + 1) === rows) continue;
            dots.push(new Wall(ctx, window.innerWidth / (rows + 1) * (i + 1.5), (window.innerHeight / (rows + 1) * (j + 1)), 0, 0, 10));
        } else {
            dots.push(new Wall(ctx, window.innerWidth / (rows + 1) * (i + 1), (window.innerHeight / (rows + 1) * (j + 1)), 0, 0, 10));
        }
    }
}

function start() {
    requestAnimationFrame(start);

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // Draw
    ball.update(dots);

    dots.forEach((dot) => {
       dot.update();
    });
}

start();
