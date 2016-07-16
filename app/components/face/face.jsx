import React from 'react';
import { Component } from 'react';

import './face.styl';

/**
 * face of the cube ... TBC
 */


export default class Face extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            background: this.props.color,
            transform: this.props.transform,
            width: this.props.width,
            height: this.props.height
        };

        return (
            <div className="face" style={ style }></div>
        );
    }
}