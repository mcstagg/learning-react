import React from 'react';

export const Greeting = (props) => {

    console.log(props);

    return (
        <>
        <h2>
            Peace Among Worlds {props.name} !!!
        </h2>
        <h2>
            {props.name}'s favorite number is {props.favNumber}
        </h2>
        <h3>
            {props.name}'s favorite colors are: 
        </h3>
        <ul>
            {props.favColors && [ ... new Set(props.favColors)].map(x => <li key={x}>{x}</li>)}
            {!props.favColors && <li>None</li>}
        </ul>
        </>
    );
};