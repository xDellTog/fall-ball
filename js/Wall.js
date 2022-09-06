const VELOCITY = 0.3;
const GRAVITY = 1;
const FRICTION = 0.79;

export default class Wall {
    constructor(ctx, x, y, dx, dy, radius) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.velocity = VELOCITY;
    }

    rect() {
        return {
            top: (this.y - this.radius),
            bottom: (this.y + this.radius),
            left: (this.x - this.radius),
            right: (this.x + this.radius),
        };
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.ctx.fillStyle = '#8888FF';
        this.ctx.fill();
        this.ctx.closePath();
    }

    update() {
        this.draw();

        this.x += this.dx * this.velocity;
        this.y += this.dy * this.velocity;
    }
}
