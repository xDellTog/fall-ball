import Ball from "./Ball.js";
import Canvas from "./Canvas.js";
import {randomNumberBetween, start} from "./utils.js";

const canvas = new Canvas(document.getElementById('canvas'));
const ctx = canvas.el.getContext('2d');
const ball1 = new Ball(ctx, randomNumberBetween(10, (canvas.el.width - 10)), randomNumberBetween(10, (canvas.el.height - 10)), randomNumberBetween(-10, 10), 1);
const ball2 = new Ball(ctx, randomNumberBetween(10, (canvas.el.width - 10)), randomNumberBetween(10, (canvas.el.height - 10)), randomNumberBetween(-10, 10), 1);
const ball3 = new Ball(ctx, randomNumberBetween(10, (canvas.el.width - 10)), randomNumberBetween(10, (canvas.el.height - 10)), randomNumberBetween(-10, 10), 1);
const ball4 = new Ball(ctx, randomNumberBetween(10, (canvas.el.width - 10)), randomNumberBetween(10, (canvas.el.height - 10)), randomNumberBetween(-10, 10), 1);
const ball5 = new Ball(ctx, randomNumberBetween(10, (canvas.el.width - 10)), randomNumberBetween(10, (canvas.el.height - 10)), randomNumberBetween(-10, 10), 1);
const ball6 = new Ball(ctx, randomNumberBetween(10, (canvas.el.width - 10)), randomNumberBetween(10, (canvas.el.height - 10)), randomNumberBetween(-10, 10), 1);
const ball7 = new Ball(ctx, randomNumberBetween(10, (canvas.el.width - 10)), randomNumberBetween(10, (canvas.el.height - 10)), randomNumberBetween(-10, 10), 1);

start((delta) => {
    ctx.clearRect(0, 0, canvas.el.width, canvas.el.height);

    ball1.update(delta, [ball2.rect()]);
    ball2.update(delta, [ball1.rect()]);
    ball3.update(delta);
    ball4.update(delta);
    ball5.update(delta);
    ball6.update(delta);
    ball7.update(delta);
});