import React, { Component } from 'react';
import BodyCaptured from './BodyCaptured';
import BodyPic from './BodyPic';

export default class BodyCont extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="body-cont">
                <BodyPic
                    captureThePoke={this.props.captureThePoke}
                    currPoke={this.props.currPoke} 
                />
                <BodyCaptured capturedPoke={this.props.capturedPoke} />
            </div>
        )
    }
}