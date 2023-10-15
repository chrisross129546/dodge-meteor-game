export const createTitle = (text, context) => {
    context.beginPath();

    context.fillStyle = 'green';
    context.fillText(text, innerWidth / 2, innerHeight / 2);
};
