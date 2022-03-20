import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css'

const Cosmetics = () => {
    const [cosmetics, getCosmetics] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => getCosmetics(data))

    }, [])
    return (

        <div>
            <h1>Welcome to my Cosmetics world!!</h1>
            <div className='grids'>

                {
                    cosmetics.map(cosmetic => <Cosmetic cosmetic={cosmetic} key={cosmetic.id}></Cosmetic>)
                }
            </div>
        </div>
    );
};

export default Cosmetics;