import './face.css'

import * as React from 'react';
import { FaceTypes } from 'consts';
import * as CSS from 'utils/css';

interface FaceProps {
    size: number,
    background: string,
    type: string,
}


function getFacePosition(type: string, size: number): string {
    const halfSize = size / 2;

    switch(type) {
        case FaceTypes.front:
            return CSS.translateZ(halfSize);
        case FaceTypes.back:
            return CSS.translateZ(-halfSize);
        case FaceTypes.top:
            return `${CSS.translateY(-halfSize)} ${CSS.rotateX(90)}`;
        case FaceTypes.bottom:
            return `${CSS.translateY(halfSize)} ${CSS.rotateX(90)}`;
        case FaceTypes.left:
            return `${CSS.translateY(-halfSize)} ${CSS.rotateY(90)}`;
        case FaceTypes.right:
            return `${CSS.translateY(-halfSize)} ${CSS.rotateY(90)}`;
    }
}

const Face = (props: FaceProps) => {
    const { size, background, type } = props;
    const style = {
        width: size,
        height: size,
        background,
        transform: getFacePosition(type, size)
    };

    return <div className={`face ${type}`} style={style}/>
};

export default Face;