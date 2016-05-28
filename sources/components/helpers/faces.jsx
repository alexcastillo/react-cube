
//TODO: implement isomorphic function with color mapping
export function getStylesForFaces(size) {
    const HALF_SIZE = size / 2;
    const faces = [
        {
            transform: `translateZ(-${HALF_SIZE}px)`
        },
        {
            transform: `translateX(-${HALF_SIZE}px) rotateY(90deg)`
        },
        {
            transform: `translateX(${HALF_SIZE}px) rotateY(90deg)`
        },
        {
            transform: `translateY(-${HALF_SIZE}px) rotateX(90deg)`
        },
        {
            transform: `translateY(${HALF_SIZE}px) rotateX(90deg)`
        },
        {
            transform: `translateZ(${HALF_SIZE}px)`
        }
    ];

    return faces;
}