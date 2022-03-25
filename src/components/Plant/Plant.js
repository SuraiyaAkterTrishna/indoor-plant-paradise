import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
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
            <button className='button-cart'>
                <div className='button-text'>
                    <p>Add to Cart</p>
                </div>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Plant;