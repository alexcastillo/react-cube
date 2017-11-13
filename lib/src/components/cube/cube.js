import React from 'react';

import Face from './face';
import { FaceTypes } from '../../consts';

const Cube = props => {
    const { size, colours } = props;
    const facesOrder = [FaceTypes.front, FaceTypes.back, FaceTypes.top, FaceTypes.bottom, FaceTypes.left, FaceTypes.right];

    return React.createElement(
        'div',
        { className: 'cube' },
        facesOrder.map(type => React.createElement(Face, { key: type, size: size, type: type, background: colours[type] }))
    );
};

export default Cube;