import React from 'react';
import { Component } from 'react';
import randomColor from 'randomcolor';

import './face.styl';

export default class Face extends Component {

    render() {
        const style = {
            background: randomColor(),
            transform: this.props.transform,
            width: this.props.width,
            height: this.props.height
        };

        return (
            <div className="face" style={ style }></div>
        );
    }
}