import React from 'react';
import { Component } from 'react';

import './face.styl';

export default class Face extends Component {

    render() {
        const style = {
            background: this.props.background
        };

        return (
            <div className="face" style={ style } ></div>
        );
    }
}