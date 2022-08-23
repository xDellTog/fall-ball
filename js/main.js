import Ball from "./Ball.js";
import Canvas from "./Canvas.js";
import {start} from "./utils.js";

const canvas = new Canvas(document.getElementById('canvas'));
const ctx = canvas.el.getContext('2d');

let balls = [];

addEventListener('click', (ev) => {
    balls.push(new Ball(ctx, ev.x, ev.y, 0, 0));
});

start((delta) => {
    ctx.clearRect(0, 0, canvas.el.width, canvas.el.height);

    balls.forEach((ball) => {
        ball.update(delta);
    });
});