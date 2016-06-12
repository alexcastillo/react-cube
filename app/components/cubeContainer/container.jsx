import React from 'react';
import { Component } from 'react';

import Cube from '../cube/cube.jsx';
import './container.styl';

/**
 * container component. value of perspective and default spacer in the constants.styl
 */

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 50,
            y: 50
        }
    }

    incrementX() {
        this.setState({
            x: this.state.x + 10,
            y: this.state.y
        })
    }

    incrementY() {
        this.setState({
            x: this.state.x,
            y: this.state.y + 10
        })
    }

    render() {
        return (
            <div className="container">
                <Cube size={100} angleY={this.state.x} angleX={this.state.y}/>
                <button onClick={this.incrementX.bind(this)}>X</button>
                <button onClick={this.incrementY.bind(this)}>Y</button>
            </div>

        );
    }
}