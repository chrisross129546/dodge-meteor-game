import { updateEntity } from './entity.js';

const UP_KEYS = KEYS => KEYS.has('ArrowUp') || KEYS.has('w');
const LEFT_KEYS = KEYS => KEYS.has('ArrowLeft') || KEYS.has('a');
const RIGHT_KEYS = KEYS => KEYS.has('ArrowRight') || KEYS.has('d');
const BOTTOM_KEYS = KEYS => KEYS.has('ArrowDown') || KEYS.has('s');

export const VELOCITY = {
    x: 0,
    xTarget: 0,
    y: 0,
    yTarget: 0
};

export const KEYS = new Set();

const lerp = (a, b, t) => a + (b - a) * t;

export const handleKeyPresses = (player, KEYS) => {
    if (UP_KEYS(KEYS) || BOTTOM_KEYS(KEYS)) {
        if (UP_KEYS(KEYS) && BOTTOM_KEYS(KEYS)) VELOCITY.yTarget = 0;

        if (UP_KEYS(KEYS)) VELOCITY.yTarget -= 2.5;
        if (BOTTOM_KEYS(KEYS)) VELOCITY.yTarget += 2.5;
    } else VELOCITY.yTarget = 0;

    if (LEFT_KEYS(KEYS) || RIGHT_KEYS(KEYS)) {
        if (LEFT_KEYS(KEYS) && RIGHT_KEYS(KEYS)) VELOCITY.xTarget = 0;

        if (LEFT_KEYS(KEYS)) VELOCITY.xTarget -= 2.5;
        if (RIGHT_KEYS(KEYS)) VELOCITY.xTarget += 2.5;
    } else VELOCITY.xTarget = 0;

    VELOCITY.x = lerp(VELOCITY.x, VELOCITY.xTarget, 0.02);
    VELOCITY.y = lerp(VELOCITY.y, VELOCITY.yTarget, 0.02);
};
