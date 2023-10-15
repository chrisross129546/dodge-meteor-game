import { enemies } from './asteroid.js';
import { VELOCITY } from './eventListeners.js';

export const createEntity = (colour, radii, x, y) => {
    return { colour, radii, x, y };
};

export const renderEntity = (colour, radii, x, y, context) => {
    context.beginPath();
    context.fillStyle = colour;

    context.arc(x, y, radii, 0, Math.PI * 2);
    context.fill();
};

export const updateEntity = (isPlayer, entity, velocityX, velocityY, width, height) => {
    entity.x += velocityX;
    entity.y += velocityY;

    if (isPlayer) {
        entity.x >= width && ((entity.x = width), (VELOCITY.x = 0));
        entity.x <= 0 && ((entity.x = 0), (VELOCITY.x = 0));

        entity.y >= height && ((entity.y = height), (VELOCITY.y = 0));
        entity.y <= 0 && ((entity.y = 0), (VELOCITY.y = 0));
    } else {
        entity.x <= 0 - 100 && enemies.delete(entity);
    }
};
