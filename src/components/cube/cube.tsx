import './cube.css';
import * as React from 'react';

import Face from './face';
import { FaceTypes } from 'consts';

interface CubeProps {
    size: number,
    colours: string[],
}

const Cube = (props: CubeProps) => {
    const { size, colours } = props;

    return (
        <div className="cube">
            {
                colours.map((colour, index) => {
                    return <Face size={size} type={FaceTypes[index]} background={colour}/>;
                })
            }
        </div>
    );
};

export default Cube;