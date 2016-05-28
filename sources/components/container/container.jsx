import React from 'react';
import { Component } from 'react';

import Cube from '../cube/cube.jsx';
import './container.styl';

export default class Container extends Component {

    render() {
        return (
            <div className="container">
                <Cube />
            </div>

        );
    }
}
