import React from 'react';
import { FaceTypes } from '../../../consts';
import * as CSS from '../../../utils/css';

function getFacePosition(type, size) {
    const halfSize = size / 2;

    switch (type) {
        case FaceTypes.front:
            return CSS.translateZ(halfSize);
        case FaceTypes.back:
            return CSS.translateZ(-halfSize);
        case FaceTypes.top:
            return `${CSS.translateY(-halfSize)} ${CSS.rotateX(90)}`;
        case FaceTypes.bottom:
            return `${CSS.translateY(halfSize)} ${CSS.rotateX(90)}`;
        case FaceTypes.left:
            return `${CSS.translateX(-halfSize)} ${CSS.rotateY(90)}`;
        case FaceTypes.right:
            return `${CSS.translateY(halfSize)} ${CSS.rotateY(90)}`;
    }
}

const Face = props => {
    const { size, background, type, key } = props;
    const style = {
        background,
        width: size,
        height: size,
        transform: getFacePosition(type, size),
        display: 'inline-block',
        position: 'absolute'
    };

    return React.createElement('div', { key: key, className: `face ${type}`, style: style });
};

export default Face;