import React from 'react';
import { Component } from 'react';

import Cube from '../cube/cube.jsx';
import FACES_OPTIONS from  '../../constants/faces.jsx';
import './container.styl';

export default class Container extends Component {

    render() {

        return (
            <div className="container">
                <Cube faces={FACES_OPTIONS} />
            </div>

        );
    }
}
