import React from 'react';
import { Component } from 'react';
import _ from 'lodash';

import Face from '../face/face.jsx';
import { getTranslateStylesForFaces } from '../../helpers/faces.jsx';
import './cube.styl';

export default class Cube extends Component {

    render() {
        const faces = getTranslateStylesForFaces(this.props.size);
        const options = {
            width: `${this.props.size}px`,
            height: `${this.props.size}px`,
            animation: `rotate ${this.props.duration}s infinite linear`
        };

        return (
            <div className='cube' style={options}>
                {
                    _.map(faces, (face, index) => {
                        return <Face {...face} key={index} {...options}/>
                    })
                }
            </div>
        );
    }
}
