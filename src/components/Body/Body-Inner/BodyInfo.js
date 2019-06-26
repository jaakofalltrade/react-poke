import React, { Component } from 'react';
import BodyPic from './BodyPic';

export default class BodyInfo extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="body-info">
                <BodyPic />
            </div>
        )
    }
}