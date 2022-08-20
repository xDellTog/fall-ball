import Ball from "./Ball.js";
import Canvas from "./Canvas.js";
import {randomNumberBetween, start} from "./utils.js";

const canvas = new Canvas(document.getElementById('canvas'));
const ctx = canvas.el.getContext('2d');
const ball1 = new Ball(ctx, (canvas.el.width / 3), canvas.el.height / 2, randomNumberBetween(-10, 10), 1);
const ball2 = new Ball(ctx, (canvas.el.width / 3 * 2), canvas.el.height / 2, randomNumberBetween(-10, 10), 1);

start((delta) => {
    ctx.clearRect(0, 0, canvas.el.width, canvas.el.height);

    ball1.update(delta, [ball2.rect()]);
    ball2.update(delta, [ball1.rect()]);
});