import React from 'react';
import { Component } from 'react';

import Cube from '../cube/cube.jsx';
import './container.styl';

export default class Container extends Component {

    render() {
        return (
            <div className="container">
                <Cube size={20} duration={10} />
                <Cube size={50} duration={8} />
                <Cube size={40} duration={20}/>
                <Cube size={60} duration={8} />
                <Cube size={80} duration={5} />
                <Cube size={40} duration={14} />
            </div>

        );
    }
}
