import React, { Component } from 'react';
import HeaderControl from './HeaderControl';
import HeaderReport from './HeaderReport';

export default class BodyHeader extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="header-body">
                <HeaderControl
                    clickExplore={this.props.clickExplore}
                    changedTheArea={this.props.changedTheArea}
                    changedTheLocation={this.props.changedTheLocation}
                    changedTheRegion={this.props.changedTheRegion} 
                    regions={this.props.regions}
                    locations={this.props.locations}
                    areas={this.props.areas}
                />
            </div>
        );
    }
}