import {isCollision} from "./utils.js";

const VELOCITY = 0.01;
const GRAVITY = 1;
const FRICTION = 0.89;

export default class Ball {
    constructor(ctx, x, y, dx, dy) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.direction = {x: dx, y: dy};
        this.velocity = VELOCITY;
    }

    rect() {
        return {
            top: (this.y - 10),
            bottom: (this.y + 10),
            left: (this.x - 10),
            right: (this.x + 10),
        };
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, false);
        this.ctx.fillStyle = 'red';
        this.ctx.fill();
        this.ctx.closePath();
    }

    update(delta, rects = []) {
        this.draw();

        this.x += this.direction.x * this.velocity * delta;
        this.y += this.direction.y * this.velocity * delta;

        const rect = this.rect();
        if (rect.bottom > this.ctx.canvas.height) {
            this.direction.y = -this.direction.y * FRICTION;
        } else {
            this.direction.y += GRAVITY;
        }

        if ((rect.right >= this.ctx.canvas.width) || (rect.left <= 0)) {
            this.direction.x = -this.direction.x;
        }

        // if (rects.some(r => isCollision(r, rect))) {
        //     this.direction.x = -this.direction.x;
        // }
    }
}
