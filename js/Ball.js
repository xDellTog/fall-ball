import Screen from "./Screen.js";

const INITIAL_VELOCITY = 0.02;
const VELOCITY_INCREASE = 0.000001;

export default class Ball {
    constructor(el) {
        this.el = el;
        this.reset();
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

    reset() {
        this.direction = {x: 1, y: 1};
        this.velocity = INITIAL_VELOCITY;
    }

    update(delta) {
        this.x += this.direction.x * this.velocity * delta;
        this.y += this.direction.y * this.velocity * delta;
        this.velocity += VELOCITY_INCREASE * delta;

        const rect = this.rect();
        if ((rect.right >= window.innerWidth) || (rect.left <= 0)) {
            this.setHue(randomNumberBetween(0, 360));
            this.direction.x *= -1;
        }
        if ((rect.bottom >= window.innerHeight) || (rect.top <= 0)) {
            this.setHue(randomNumberBetween(0, 360));
            this.direction.y *= -1;
        }
    }

    setHue(value) {
        document.documentElement.style.setProperty('--hue', value);
    }
}

function randomNumberBetween(min, max) {
    return Math.random() * (max - min) + min;
}