import Ball from "./Ball.js";

/**
 * @var ctx
 * @type HTMLCanvasElement
 */
const canvas = document.getElementById('canvas');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const ctx = canvas.getContext('2d');

const ball = new Ball(ctx, window.innerWidth / 2, window.innerHeight / 2, 5, 1, 10);

function start() {
    requestAnimationFrame(start);

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // Draw
    ball.update();
}

start();
