import React, { Component } from 'react';


import  GetPic, { GetStat } from './GetPic';


export default class BodyPic extends Component {
    constructor() {
        super();
    }

    render() {
        console.log(this.props.currPoke)
        if(Object.keys(this.props.currPoke).length != 0) {
            return (
                <div className="body-info">
                    <div className="body-pic">
                        <GetPic captureThePoke={this.props.captureThePoke} currPoke={this.props.currPoke} />
                    </div>
                    <div className="body-stat">
                        <div className="headeroo">
                            <p>Vital Statistics: </p>
                        </div>
                        <div className="bodyroo">
                            <GetStat currPoke={this.props.currPoke} />
                        </div>
                    </div>
                </div>
            ) 
        } else {
            return (
                <div className="body-info">
                    <div className="body-pic">
                        
                    </div>
                    <div className="body-stat">
                        <div className="headeroo">
                            <p>Vital Statistics: </p>
                        </div>
                        <div className="bodyroo">

                        </div>
                    </div>
                </div>
            )   
        }
    }
    
}