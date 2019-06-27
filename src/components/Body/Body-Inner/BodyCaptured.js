import React, { Component } from 'react';

export default function BodyCaptured(props) {
    const { capturedPoke } = props;

    if(Object.keys(capturedPoke).length != 0) {
        return (
            <div className="body-captured">
                <div className="headeroo"><p>Captured Pokemon:</p></div>
                {
                    capturedPoke.map(x => (
                        <div className="captured-poke" key={x.name}>
                            <img src={x.url} />
                            <p>{x.name}</p>
                        </div>
                    ))
                }
            </div>
        )
    } else {
        return (
            <div className="body-captured">
                <div className="headeroo"><p>Captured Pokemon:</p></div>
            </div>
        )
    }  
}