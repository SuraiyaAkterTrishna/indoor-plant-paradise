import React, { useEffect, useState } from 'react';
import './Shop.css'
const Shop = () => {
    const [plants, setPlants] = useState([]);
    useEffect( () => {
        fetch('plants.json')
        .then(res => res.json())
        .then(data => setPlants(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="products-container">
                <h1>This is for Products: {plants.length}</h1>
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
            </div>
        </div>
    );
};

export default Shop;