import React from 'react';
import { Component } from 'react';

import Face from '../face/face.jsx';
import { getStylesForFaces } from '../../helpers/faces.jsx';
import './cube.styl';

export default class Cube extends Component {

    render() {
        const faces = getStylesForFaces(this.props.size);
        const options = {
            width: `${this.props.size}px`,
            height: `${this.props.size}px`,
            animation: `rotate ${this.props.duration}s infinite linear`
        };

        return (
            <div className='cube' style={options}>
                {
                    faces.map((face, index) => {
                        return <Face {...face} key={index} {...options}/>
                    })
                }
            </div>
        );
    }
}