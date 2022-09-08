import {Bodies, Body, Composite, Engine, Events, Render, Runner, World} from "matter-js";
import React, {useEffect, useRef} from "react";
import {Player} from "../components/Player";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const scene: any = useRef();
    const engine = useRef(Engine.create({
        gravity: {
            x: 0,
            y: 0,
        },
    }));
    const RADIUS = 10;

    const rows = 6;
    const cols = 6;
    let isStart = false;
    let dots: Body[] = [];

    let player: Body;
    let ground: Body;
    let wallL: Body;
    let wallR: Body;

    let directionX = 1;

    let render: Render;

    function keyUp(ev: KeyboardEvent) {
        switch (ev.key.toUpperCase()) {
            case ' ':
                engine.current.gravity.y = 1;
                player.friction = 0.5;
                player.frictionStatic = 0.5;
                isStart = true;
                break;
            case 'R':
                navigate('/loader');
                break;
            default:
                console.log(ev.key);
                break;
        }
    }

    function beforeUpdate() {
        if (!isStart) {
            Body.setVelocity(player, {
                x: (directionX * 2),
                y: 0
            });

            if (((directionX > 0) && ((player.position.x + player?.circleRadius!) >= wallR.bounds.min.x)) ||
                ((directionX < 0) && ((player.position.x - player?.circleRadius!) <= wallL.bounds.max.x))) {
                directionX *= -1;
            }
        }
    }

    useEffect(() => {
        render = Render.create({
            element: scene.current,
            engine: engine.current,
            options: {
                height: 633,
                width: 375,
                background: 'transparent',
                wireframes: false,
            }
        });

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (j % 2 !== 0) {
                    if ((i + 1) === rows) continue;
                    dots.push(Bodies.circle((render.canvas.width / (rows + 1) * (i + 1.5)), (render.canvas.width / (rows + 1) * (j + 1)), RADIUS, {
                        isStatic: true,
                        restitution: 1,
                        friction: 0,
                    }));
                } else {
                    dots.push(Bodies.circle((render.canvas.width / (rows + 1) * (i + 1)), (render.canvas.width / (rows + 1) * (j + 1)), RADIUS, {
                        isStatic: true,
                        restitution: 1,
                        friction: 0,
                    }));
                }
            }
        }

        player = Player.create(render.canvas.width / 2, 10, RADIUS);

        ground = Bodies.rectangle(render.canvas.width / 2, render.canvas.height - (RADIUS / 2), render.canvas.width, RADIUS, {
            isStatic: true,
            render: {
                fillStyle: '#333',
            },
        });
        wallL = Bodies.rectangle((RADIUS / 2), render.canvas.height / 2, RADIUS, render.canvas.height, {
            isStatic: true,
            render: {
                fillStyle: '#333',
            },
        });
        wallR = Bodies.rectangle(render.canvas.width - (RADIUS / 2), render.canvas.height / 2, RADIUS, render.canvas.height, {
            isStatic: true,
            render: {
                fillStyle: '#333',
            },
        });

        Composite.add(engine.current.world, [
            player,
            ...dots,
            wallL,
            wallR,
            ground,
        ]);

        let runner = Runner.create();

        Render.run(render);

        Runner.run(runner, engine.current);

        window.addEventListener('keyup', keyUp);

        Events.on(engine.current, 'beforeUpdate', beforeUpdate);

        return () => {
            Render.stop(render);
            World.clear(engine.current.world, true);
            Engine.clear(engine.current);
            Events.off(engine.current, 'beforeUpdate', beforeUpdate);
            render.canvas.remove();
            // @ts-ignore
            render.canvas = null;
            // @ts-ignore
            render.context = null;
            render.textures = {};
            window.removeEventListener('keyup', keyUp);
        };
    });

    return (
        <div className="d-flex flex-column h-100 bg-light">
            <div className="d-flex border-1 border-bottom bg-white">
                <h1 className="w-100 text-center fw-light m-0">
                    Pachinko
                </h1>
            </div>
            <div className="d-flex align-items-center justify-content-center flex-grow-1 overflow-auto">
                <div ref={scene}/>
            </div>
        </div>
    )
};

export default HomePage;