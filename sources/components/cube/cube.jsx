import React from 'react';
import { Component } from 'react';
import Face from '../face/face.jsx';
import './cube.styl';

export default class Cube extends Component {
    render() {
        return (
            <div className='cube'>
                {
                    this.props.faces.map((face, index) => {
                        return <Face {...face} key={index}/>
                    })
                }
            </div>
        );
    }
}