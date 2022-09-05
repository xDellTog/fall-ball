const RADIUS = 10;

function start() {
    let {
        Engine,
        Render,
        Runner,
        Bodies,
        Composite
    } = Matter;

    let engine = Engine.create();

    let render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            height: window.innerHeight,
            width: window.innerWidth,
        }
    });

    window.addEventListener('resize', () => {
        render.canvas.height = window.innerHeight;
        render.canvas.width = window.innerWidth;
    });

    window.addEventListener('mousemove', (ev) => {
        console.log({
            x: ev.clientX,
            y: ev.clientY,
        });
    });

    let dots = [];
    let rows = 12;
    let cols = 8;

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
        // player,
        ...dots,
        wallL,
        wallR,
        ground,
    ]);

    Render.run(render);

    let runner = Runner.create();

    Runner.run(runner, engine);

    window.addEventListener('mouseup', (ev) => {
        console.log({
            x: ev.clientX,
            y: ev.clientY,
        });
        let x = ev.clientX;
        let y = ev.clientY;
        let player = Bodies.circle(x, y, RADIUS, {
            restitution: 1,
            friction: 0,
            render: {
                fillStyle: '#FFF',
            },
        });
        Composite.add(engine.world, [
            player,
        ]);
    });
}


start();