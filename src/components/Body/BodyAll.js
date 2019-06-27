import React, { Component } from 'react';

import BodyHeader from './Body-Header/BodyHeader';
import BodyCont from './Body-Inner/BodyCont';

export default class BodyAll extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <React.Fragment>
                <BodyHeader
                    clickExplore={this.props.clickExplore}
                    changedTheArea={this.props.changedTheArea}
                    changedTheLocation={this.props.changedTheLocation}
                    changedTheRegion={this.props.changedTheRegion}
                    regions={this.props.regions}
                    locations={this.props.locations}
                    areas={this.props.areas}
                />
                <BodyCont
                    captureThePoke={this.props.captureThePoke}
                    currPoke={this.props.currPoke}
                    capturedPoke={this.props.capturedPoke}
                />
            </React.Fragment>
        )
    }
}