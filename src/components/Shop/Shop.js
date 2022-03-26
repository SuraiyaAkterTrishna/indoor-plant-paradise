import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Plant from '../Plant/Plant';
import './Shop.css'
const Shop = () => {
    const [plants, setPlants] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () => {
        fetch('plants.json')
        .then(res => res.json())
        .then(data => setPlants(data))
    }, []); 
    const handleAddToCart = (plant) => {
        const newCart = [...cart, plant];
        setCart(newCart); 
    }
    return (
        <div className='shop-container'>
            <div className="plants-container">
                {
                    plants.map(plant => <Plant 
                        key = {plant.id}
                        plant = {plant}
                        handleAddToCart = {handleAddToCart}
                        ></Plant>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;