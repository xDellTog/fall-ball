export default class Canvas {
    constructor(el) {
        this.el = el;
        this.reset();

        addEventListener('resize', () => {
            this.reset();
        });
    }

    reset() {
        this.el.height = window.innerHeight;
        this.el.width = window.innerWidth;
    }
}