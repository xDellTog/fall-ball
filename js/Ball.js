const VELOCITY = 0.5;
const GRAVITY = 1;
const FRICTION = 0.59;

export default class Ball {
    constructor(ctx, x, y, dx, dy) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
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

    update(objects = []) {
        this.draw();

        this.x += this.dx * this.velocity;
        this.y += this.dy * this.velocity;

        const rect = this.rect();
        for (let object of objects) {
            if (object === this) continue;

            let objectRect = object.rect();

            // console.log('ball: ', rect);
            // console.log('object', objectRect);

            // if ((rect.bottom >= objectRect.top) ||
            //     (rect.top >= objectRect.bottom) ||
            //     (rect.left >= objectRect.right) ||
            //     (rect.right >= objectRect.left)) {
            //     this.dy = -this.dy * FRICTION;
            // } else {
            //     this.dy += GRAVITY;
            // }

            if ((rect.top >= objectRect.bottom) ||
                (rect.bottom >= objectRect.top) ||
                (rect.left >= objectRect.right) ||
                (rect.right >= objectRect.left)) {
                // this.dx = -this.dx;
                console.log('collision');
            }
        }
    }
}
