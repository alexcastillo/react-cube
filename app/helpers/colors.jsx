import randomColor from 'randomcolor';

export default function generateRandomColorsArray(size = 8) {
    const colors = [];
    for (let i = 0; i < size; i++) {
        colors.push(randomColor());
    }
    return colors;
}