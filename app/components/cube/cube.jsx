import React from 'react';
import { Component } from 'react';
import _ from 'lodash';

import Face from '../face/face.jsx';
import { getTranslateStylesForFaces } from '../../helpers/faces.jsx';
import generateColorsArray from '../../helpers/colors.jsx';
import './cube.styl';

const cubeColors = generateColorsArray();
/**
 * props:
 * size - face size (px)
 * angleX - x offset (deg)
 * angleY - y offset (deg)
 */

export default class Cube extends Component {

    render() {
        const faces = getTranslateStylesForFaces(this.props.size);

        const sharedOptions = {
            width: `${this.props.size}px`,
            height: `${this.props.size}px`
        };

        const options = {
            transform: `rotateY(${this.props.angleY || 0}deg) rotateX(${this.props.angleX || 0}deg)`
        };

        return (
            <div className='cube' style={_.merge(options, sharedOptions)}>
                {
                    _.map(faces, (face, index) => {
                        return <Face {...face} key={index} {...sharedOptions} color={cubeColors[index]}/>
                    })
                }
            </div>
        );
    }
}
