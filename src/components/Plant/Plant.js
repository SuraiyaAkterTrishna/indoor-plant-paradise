import React from 'react';
import './Plant.css';

const Plant = (props) => {
    const {name, img, price} = props.plant;
    return (
        <div className='plant'>
            <img src = {img} alt = ''></img>
            <div className='plant-info'>
                <p className='plant-name'>{name}</p>
                <p>Price: ${price}</p>
            </div>
            
        </div>
    );
};

export default Plant;