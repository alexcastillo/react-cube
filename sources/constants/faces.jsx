const HALF_SIZE = 200 / 2;

const faces = [
    {
        background: 'red',
        transform: `translateZ(-${HALF_SIZE}px)`
    },
    {
        background: 'yellow',
        transform: `translateX(-${HALF_SIZE}px) rotateY(90deg)`
    },
    {
        background: 'green',
        transform: `translateX(${HALF_SIZE}px) rotateY(90deg)`
    },
    {
        background: 'blue',
        transform: `translateY(-${HALF_SIZE}px) rotateX(90deg)`
    },
    {
        background: 'black',
        transform: `translateY(${HALF_SIZE}px) rotateX(90deg)`
    },
    {
        background: 'purple',
        transform: `translateZ(${HALF_SIZE}px)`
    }
];

export default faces;