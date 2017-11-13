import React from 'react';

import Face from './face';
import { FaceTypes } from '../../consts';
import * as CSS from '../../utils/css';

const Cube = props => {
    const { size, colours, position = {} } = props;
    const { x = 0, y = 0, z = 0 } = position;
    const facesOrder = [FaceTypes.front, FaceTypes.back, FaceTypes.top, FaceTypes.bottom, FaceTypes.left, FaceTypes.right];
    const style = {
        transformStyle: 'preserve-3d',
        width: size,
        height: size,
        display: 'inline-block',
        transform: `${CSS.rotateX(x)} ${CSS.rotateY(y)} ${CSS.rotateZ(z)}`
    };

    return React.createElement(
        'div',
        { className: 'cube', style: style },
        facesOrder.map(type => React.createElement(Face, { key: type, size: size, type: type, background: colours[type] }))
    );
};

export default Cube;