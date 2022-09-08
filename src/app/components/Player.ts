import {Bodies} from "matter-js";

export class Player {
    static create(x: number, y: number, radius: number) {
        return Bodies.circle(x, y, radius, {
            restitution: 1,
            friction: Infinity,
            frictionStatic: Infinity,
            render: {
                fillStyle: '#333',
            },
        });
    }
}