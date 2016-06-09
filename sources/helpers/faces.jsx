
//TODO: implement isomorphic function
export function getTranslateStylesForFaces(size) {
    const HALF_SIZE = size / 2;
    const translateStyles = [
        `translateZ(-${HALF_SIZE}px)`,
        `translateX(-${HALF_SIZE}px) rotateY(90deg)`,
        `translateX( ${HALF_SIZE}px) rotateY(90deg)`,
        `translateY(-${HALF_SIZE}px) rotateX(90deg)`,
        `translateY( ${HALF_SIZE}px) rotateX(90deg)`,
        `translateZ( ${HALF_SIZE}px)`
    ];
    const facesStyles = [];

    return _.map(translateStyles, (item) => {
        return { transform: item };
    });

}
