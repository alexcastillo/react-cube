import React from 'react';
import { Component } from 'react';

import Cube from '../cube/cube.jsx';
import './container.styl';

export default class Container extends Component {

    render() {
        //TODO: COLORS
        return (
            <div className="container">
                <Cube size={20} />
                <Cube size={50} />
                <Cube size={40} />
                <Cube size={60} />
                <Cube size={80} />
                <Cube size={40} />

            </div>

        );
    }
}
