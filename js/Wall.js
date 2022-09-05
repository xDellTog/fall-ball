export default class Wall {
    /**
     * @var ctx
     * @type CanvasRenderingContext2D
     */
    ctx;

    constructor(ctx, x, y, height, width) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }

    rect() {
        return {
            top: this.y,
            bottom: (this.y + this.height),
            left: this.x,
            right: (this.x + this.width),
        };
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.strokeStyle = 'red';
        this.ctx.lineWidth = 1;
        this.ctx.stroke();
        this.ctx.closePath();
    }

    update(objects = []) {
        this.draw();
    }
}
