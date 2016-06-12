import React from 'react';
import { Component } from 'react';

import Cube from '../cube/cube.jsx';
import './container.styl';

/**
 * container component. value of perspective and default spacer in the constants.styl
 */

export default class Container extends Component {

    render() {
        return (
            <div className="container">
                <Cube size={100} angleY={50} angleX={50}/>
            </div>

        );
    }
}
