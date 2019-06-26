import React from 'react';

function PokeShow(props) {
    const { items, change } = props;
    return (
        <div>
            <select onChange={e => {
                change(e.target.value)
            }} 
                disabled={!items.length}>
                {
                    !items.length ?
                        (
                            <option>Empty</option>
                        )
                    :
                        items.map(item => (
                            <option key={item.name} value={item.url}>
                                {item.name}
                            </option>
                        ))
                }
            </select>
        </div>
    )
}

export default function(props) {
    const { regions=[], locations=[], areas=[], changedTheRegion, changedTheLocation, changedTheArea, clickExplore } = props;
    return (
        <div className="header-control">
            <div className="header-form">
                <div className="header-select">
                    <div><p>Region: </p></div>
                    <PokeShow items={regions} change={changedTheRegion} />
                </div>
                <div className="header-select">
                    <div><p>Location: </p></div>
                    <PokeShow items={locations} change={changedTheLocation} />
                </div>
                <div className="header-select">
                    <div><p>Area: </p></div>
                    <PokeShow items={areas} change={changedTheArea} />
                </div>
            </div>
            <div className="header-butt">
                <button onClick={e => clickExplore()}>Explore</button>
            </div>
        </div>
    );
}