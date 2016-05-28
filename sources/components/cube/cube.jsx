import React from 'react';
import { Component } from 'react';
import Face from '../face/face.jsx';

export default class Cube extends Component {
    render() {
        return (
            <div>
                {
                    this.props.faces.map((face, index) => {
                        return <Face background={face.background} key={index}/>
                    })
                }
            </div>
        );
    }
}