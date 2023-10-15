import { createEntity, updateEntity } from './entity.js';
import { randomIntegerBetween, random } from './math.js';

export const enemies = new Set();

export const createWave = () => {
    for (let i = 0; i < 10; i++) {
        const { colour, radii, x, y } = createEntity(
            'blue',
            100,
            randomIntegerBetween(innerWidth, innerWidth * 4),
            random(innerHeight)
        );

        enemies.add({ colour, radii, x, y });
    }
};
