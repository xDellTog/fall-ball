const VELOCITY = 0.3;
const GRAVITY = 1;
const FRICTION = 0.79;

export default class Ball {
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
        this.ctx.fillStyle = '#ff8888';
        this.ctx.fill();
        this.ctx.closePath();
    }

    update(dots) {
        this.draw();

        this.x += this.dx * this.velocity;
        this.y += this.dy * this.velocity;

        const rect = this.rect();

        dots.forEach((dot) => {
            if (this.distance(this.x, this.y, dot.x, dot.y) <= (this.radius + dot.radius)) {
                console.log('collision');
                // this.dx = -this.dx;
                this.dy = -this.dy;
            }
        });

        const inGround = Math.round(rect.bottom - window.innerHeight);
        if (inGround >= 0) {
            this.dy = -this.dy * FRICTION;
            this.y -= inGround;
        } else {
            this.dy += GRAVITY;
        }

        if ((rect.left <= 0) || (rect.right >= window.innerWidth)) {
            this.dx = -this.dx;
        }
    }

    distance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
    }
}
