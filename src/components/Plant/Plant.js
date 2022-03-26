import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Plant.css';

const Product = ({plant, addToCart}) => {
    const {img, name, price} = plant;
    return (
        <div className='plant'>
            <img src={img} alt="" />
            <div className='plant-info'>
                <h2>{name}</h2>
                <h4>Price: ${price}</h4>
            </div>
            <div onClick={() => addToCart(plant)}  className='plant-btn'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </div>
        </div>
    );
};

export default Product;