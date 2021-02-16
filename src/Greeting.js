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
        </>
    );
};