const INITIAL_VELOCITY = 0.02;
const VELOCITY_INCREASE = 0.00000001;
const GRAVITY = 1;
const FRICTION = 0.99;

export default class Ball {
    constructor(el, x, y, dx, dy) {
        this.el = el;
        this.x = x;
        this.y = y;
        this.direction = {x: dx, y: dy};
        this.velocity = INITIAL_VELOCITY;
    }

    get x() {
        return parseFloat(getComputedStyle(this.el).getPropertyValue('--x'));
    }

    set x(value) {
        this.el.style.setProperty('--x', value);
    }

    get y() {
        return parseFloat(getComputedStyle(this.el).getPropertyValue('--y'));
    }

    set y(value) {
        this.el.style.setProperty('--y', value);
    }

    rect() {
        return this.el.getBoundingClientRect();
    }

    update(delta) {
        this.x += this.direction.x * this.velocity * delta;
        this.y += this.direction.y * this.velocity * delta;

        const rect = this.rect();

        if (rect.bottom > window.innerHeight) {
            this.direction.y = -this.direction.y * FRICTION;
        } else {
            this.direction.y += GRAVITY;
        }

        if ((rect.right >= window.innerWidth) || (rect.left <= 0)) {
            this.direction.x *= -1;
        }

        // if ((rect.bottom >= window.innerHeight) || (rect.top <= 0)) {
        //     this.direction.y *= -1;
        // }
    }
}

function randomNumberBetween(min, max) {
    return Math.random() * (max - min) + min;
}