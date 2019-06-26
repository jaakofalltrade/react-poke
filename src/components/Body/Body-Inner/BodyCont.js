import React, { Component } from 'react';
import BodyInfo from './BodyInfo';
import BodyCaptured from './BodyCaptured';

export default class BodyCont extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="body-cont">
                <BodyInfo />
                <BodyCaptured />
            </div>
        )
    }
}