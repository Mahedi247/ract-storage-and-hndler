import React from 'react';
import { addToDb, removeFromDb } from '../utilities/localstaragemanage';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const { id, name, price } = props.cosmetic;

    const addToCart = (id) => {
        addToDb(id)
    }
    const removeFromCart = id => {
        removeFromDb(id)

    }

    return (
        <div data-aos="flip-up"
            className='product'>
            <h2>Buy This:{name}</h2>
            <h3>Only for:${price}</h3>
            <p>It has id:{id}</p>
            <button onClick={() => addToCart(id)}>Add to cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;