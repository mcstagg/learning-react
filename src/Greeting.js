import React from 'react';

export const Greeting = ({
    name , 
    favNumber ,
    favColors
}) => {

    // console.log(props);

    return (
        <>
        <h2>
            Peace Among Worlds {name} !!!
        </h2>
        <h2>
            {name}'s favorite number is {favNumber}
        </h2>
        <h3>
            {name}'s favorite colors are: 
        </h3>
        <ul>
            {favColors && [ ... new Set(favColors)].map(x => <li key={x}>{x}</li>)}
            {!favColors && <li>None</li>}
        </ul>
        </>
    );
};