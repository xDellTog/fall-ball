import Ball from "./Ball.js";
import Wall from "./Wall.js";
import Canvas from "./Canvas.js";
import {randomNumberBetween, start} from "./utils.js";

const canvas = new Canvas(document.getElementById('canvas'));
const ctx = canvas.el.getContext('2d');
const ball = new Ball(ctx, (canvas.el.width / 3), (canvas.el.height / 5 - 30), 10, 0);
const wall1 = new Wall(ctx, (canvas.el.width / 3), (canvas.el.height / 5), 0, 0);
const wall2 = new Wall(ctx, (canvas.el.width / 3 * 2), (canvas.el.height / 5 * 2), 0, 0);
const wall3 = new Wall(ctx, (canvas.el.width / 3), (canvas.el.height / 5 * 3), 0, 0);
const wall4 = new Wall(ctx, (canvas.el.width / 3 * 2), (canvas.el.height / 5 * 4), 0, 0);
const wall5 = new Wall(ctx, (canvas.el.width / 3), (canvas.el.height / 5 * 4), 0, 0);
const wall6 = new Wall(ctx, (canvas.el.width / 3 * 2), (canvas.el.height / 5 * 3), 0, 0);
const wall7 = new Wall(ctx, (canvas.el.width / 3), (canvas.el.height / 5 * 2), 0, 0);
const wall8 = new Wall(ctx, (canvas.el.width / 3 * 2), (canvas.el.height / 5), 0, 0);

start((delta) => {
    ctx.clearRect(0, 0, canvas.el.width, canvas.el.height);

    ball.update(delta, [
        wall1.rect(),
        wall2.rect(),
        wall3.rect(),
        wall4.rect(),
        wall5.rect(),
        wall6.rect(),
        wall7.rect(),
        wall8.rect(),
    ]);
    wall1.update(delta);
    wall2.update(delta);
    wall3.update(delta);
    wall4.update(delta);
    wall5.update(delta);
    wall6.update(delta);
    wall7.update(delta);
    wall8.update(delta);
});