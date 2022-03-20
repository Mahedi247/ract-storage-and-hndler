import React from 'react';

const Cosmetic = (props) => {
    const { id, name, price } = props.cosmetic;

    return (
        <div>
            <h2>Buy This:{name}</h2>
            <h3>Only for:${price}</h3>
            <p>It has id:{id}</p>
        </div>
    );
};

export default Cosmetic;