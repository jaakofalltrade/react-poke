import React, { useState } from 'react';
import axios from 'axios';

export function GetStat(props) {
    const [ PokeStats, setPokeStats ] = useState([]);
    const { currPoke } = props;

    axios.get(currPoke.url)
    .then(e => {
        setPokeStats(e.data.stats);
    });

    return (
        PokeStats.map(x => (
            <p key={x.stat.name}>{x.stat.name}: {x.base_stat}</p>
        ))
    )
}

export default function GetPic(props) {

    const [ PokeName, setPokeName ] = useState([]);
    const [PokeUrl, setPokeUrl] = useState("");
    const { currPoke, captureThePoke } = props;

    axios.get(currPoke.url)
    .then(e => {
        setPokeName(e.data.name);
        setPokeUrl(e.data.sprites.front_default)
    });
    return (
        <React.Fragment>
            <img src={PokeUrl} />
            <h1>{PokeName}</h1>
            <button onClick={e => captureThePoke()}>Capture</button>
        </React.Fragment>
    )
}