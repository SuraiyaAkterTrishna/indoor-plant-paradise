import React, { useEffect, useState } from 'react';
import Plant from '../Plant/Plant';
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
            <div className="plants-container">
                {
                    plants.map(plant => <Plant 
                        key = {plant.id}
                        plant = {plant}
                        ></Plant>)
                }
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
            </div>
        </div>
    );
};

export default Shop;