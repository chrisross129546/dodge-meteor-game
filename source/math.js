export const random = (range = 1) => {
    return Math.trunc(Math.random() * range);
};

export const randomIntegerBetween = (minimum, maximum) => {
    return random(maximum - minimum + 1) + minimum;
};

export const getDistanceBetween = (source, destination) => {
    return Math.hypot(destination.y - source.y, destination.x - source.x);
};
