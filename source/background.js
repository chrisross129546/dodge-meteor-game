import { random } from './math.js';

const BACKGROUND_INTERVAL_SPEED = 300;
const STAR_COLOUR_VARIENTS = ['#e2e2e2', 'white', '#ffedbf', '#fff27a'];
export const particles = new Set();

const createParticle = (colour, radii, x, y) => {
    return { colour, radii, x, y };
};

export const renderParticle = (colour, radii, x, y, context) => {
    context.beginPath();
    context.fillStyle = colour;

    context.arc(x, y, radii, 0, Math.PI * 2);
    context.fill();
};

export const renderBackground = (context, width, height) => {
    const particleInterval = setInterval(
        (width, height) => {
            particles.clear();

            for (let i = 0; i < 200; i++) {
                const { colour, radii, x, y } = createParticle(
                    STAR_COLOUR_VARIENTS[random(4)],
                    random(5),
                    random(width),
                    random(height)
                );

                particles.add({ colour, radii, x, y });
            }
        },
        BACKGROUND_INTERVAL_SPEED,
        width,
        height
    );

    return particleInterval;
};
