import React from 'react';
import './Plant.css';

const Plant = (props) => {
    const {name, img, price} = props.plant;
    return (
        <div className='plant'>
            <img src = {img} alt = ''></img>
            <p className='plant-name'>{name}</p>
        </div>
    );
};

export default Plant;