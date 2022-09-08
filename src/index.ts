import * as Matter from "matter-js";
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';

const RADIUS = 10;

function start() {
    let {
        Engine,
        Render,
        Runner,
        Bodies,
        Composite,
        Body,
        Events,
    } = Matter;

    let isStart = false;

    let engine = Engine.create({
        gravity: {
            x: 0,
            y: 0,
        },
    });

    let render = Render.create({
        engine: engine,
        element: document.getElementById('game'),
        options: {
            height: window.innerHeight,
            width: window.innerWidth,
        }
    });

    let dots = [];
    let rows = 7;
    let cols = 6;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (j % 2 !== 0) {
                if ((i + 1) === rows) continue;
                dots.push(Bodies.circle((window.innerWidth / (rows + 1) * (i + 1.5)), (window.innerHeight / (rows + 1) * (j + 1)), RADIUS, {
                    isStatic: true,
                    restitution: 1,
                    friction: 0,
                }));
            } else {
                dots.push(Bodies.circle((window.innerWidth / (rows + 1) * (i + 1)), (window.innerHeight / (rows + 1) * (j + 1)), RADIUS, {
                    isStatic: true,
                    restitution: 1,
                    friction: 0,
                }));
            }
        }
    }

    let player = Bodies.circle(window.innerWidth / 2, 20, RADIUS, {
        restitution: 1,
        friction: Infinity,
        frictionStatic: Infinity,
        render: {
            fillStyle: '#FFF',
        },
    });

    let ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight - (RADIUS / 2), window.innerWidth, RADIUS, {
        isStatic: true
    });
    let wallL = Bodies.rectangle((RADIUS / 2), window.innerHeight / 2, RADIUS, window.innerHeight, {
        isStatic: true
    });
    let wallR = Bodies.rectangle(window.innerWidth - (RADIUS / 2), window.innerHeight / 2, RADIUS, window.innerHeight, {
        isStatic: true,
    });

    Composite.add(engine.world, [
        player,
        ...dots,
        wallL,
        wallR,
        ground,
    ]);

    Render.run(render);

    let runner = Runner.create();

    Runner.run(runner, engine);

    window.addEventListener('keyup', (ev) => {
        if (ev.key === ' ') {
            engine.gravity.y = 1;
            player.friction = 1;
            player.frictionStatic = 0.5;
            isStart = true;
        }
    });

    let directionX = 1;
    Events.on(engine, 'beforeUpdate', () => {
        if (!isStart) {
            Body.setVelocity(player, {
                x: (directionX * 2),
                y: 0
            });

            if (((directionX > 0) && ((player.position.x + player.circleRadius) >= wallR.bounds.min.x)) ||
                ((directionX < 0) && ((player.position.x - player.circleRadius) <= wallL.bounds.max.x))) {
                directionX *= -1;
            }
        }
    });
}

start();