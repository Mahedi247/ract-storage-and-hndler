import React from 'react';
import { add, divide, multiply } from '../utilities/calculate';

const Shoes = () => {
    const first = 150;
    const second = 250;
    const total = multiply(first, second)
    const result = add(first, second)
    const division = divide(first, second)
    return (
        <div style={{ borderBottom: '10px solid green', margin:'30px' }}>
            <h2 style={{borderBottom:'10px dotted blue'}}>This is Shoes Compo</h2>
            <h3>Multiply: {total}</h3>
            <h3>Addition: {result}</h3>
            <h3>Divide: {division}</h3>
        </div>
    );
};

export default Shoes;