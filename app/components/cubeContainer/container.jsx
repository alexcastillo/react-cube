import React from 'react';
import { Component } from 'react';
import { createSelector } from 'reselect'
import { connect } from 'react-redux';

import Cube from '../cube/cube.jsx';
import * as RotateActions from '../../actions/rotate.jsx';
import { rotateX, rotateY } from '../../selectors/coordinates.jsx';
import './container.styl';

/**
 * container component. value of perspective and default spacer in the constants.styl
 */

class Container extends Component {
    render() {
        return (
            <div className="container">
                <Cube size={100} angleY={this.props.y} angleX={this.props.x}/>
                <button onClick={RotateActions.incrementX}>X</button>
                <button onClick={RotateActions.incrementY}>Y</button>
            </div>

        );
    }
}


const containerSelector = createSelector(
[rotateX, rotateY],
(rotateX, rotateY) => {
    return {
        x: rotateX,
        y: rotateY
    };
});

export default connect(containerSelector)(Container);
