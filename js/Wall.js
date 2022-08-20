export default class Wall {
    constructor(ctx, x, y, dx, dy) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
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
        this.ctx.fillStyle = 'black';
        this.ctx.fill();
        this.ctx.closePath();
    }

    update() {
        this.draw();
    }
}
