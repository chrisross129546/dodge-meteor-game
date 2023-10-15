import { renderBackground, particles, renderParticle } from './background.js';
import { handleKeyPresses, KEYS, VELOCITY } from './eventListeners.js';
import { createEntity, renderEntity, updateEntity } from './entity.js';
import { createWave, enemies } from './asteroid.js';
import { getDistanceBetween } from './math.js';

const createCanvas = () => {
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    return { canvas, context };
};

const { context, canvas } = createCanvas();

const manageResize = (width, height) => {
    canvas.width = width;
    canvas.height = height;

    void clearInterval(backgroundInterval) ?? (backgroundInterval = renderBackground(context, width, height));
};

const player = createEntity('red', 30, 40, innerHeight / 2);
let backgroundInterval = renderBackground(context, innerWidth, innerHeight);

requestAnimationFrame(function frame() {
    context.clearRect(0, 0, innerWidth, innerHeight);

    particles.forEach(({ colour, radii, x, y }) => {
        renderParticle(colour, radii, x, y, context);
    });

    enemies.forEach(enemy => {
        const { colour, radii, x, y } = enemy;

        updateEntity(false, enemy, -5, 0, innerWidth, innerHeight);
        renderEntity(colour, radii, x, y, context);

        getDistanceBetween(enemy, player) <= 125 && 
    });

    handleKeyPresses(player, KEYS);

    updateEntity(true, player, VELOCITY.x, VELOCITY.y, innerWidth, innerHeight);
    renderEntity(player.colour, player.radii, player.x, player.y, context);

    requestAnimationFrame(frame);
});

createWave();

addEventListener('resize', () => manageResize(innerWidth, innerHeight));
addEventListener('keydown', ({ key }) => KEYS.add(key));
addEventListener('keyup', ({ key }) => KEYS.delete(key));
