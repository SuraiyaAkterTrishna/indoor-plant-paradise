import React, { useEffect, useState } from 'react';
import Plant from '../Plant/Plant';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
    const [plants, setPlants] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( ()=>{
        fetch('plants.json')
        .then(res => res.json())
        .then(data => setPlants(data))
    },[]);
    
    let newCart;
    const addToCart = selectedPlant => {
        const exists = cart.find(plant => plant.id === selectedPlant.id);
        if (!exists) {
            if (cart.length>3) {
                alert('Ops!! You can added maximum 4 plants in the cart!');
                newCart = cart;
            } else {
                newCart = [...cart, selectedPlant];
            }
        } else {
            newCart = cart;
        }
        setCart(newCart);
    }
    const chooseRandomPlant = cart =>{
        if (cart.length === 0) {
            alert('There are no selected plant for choosing!');
        } else {
            const randomPlant = cart[Math.floor(Math.random()*cart.length)];
            newCart = [randomPlant];
            setCart(newCart);
        }
    }
    const clearSelectedPlant =  cart =>{
        newCart = [];
        setCart(newCart);
    }
    return (
        <div className='shop'>
            <div className='plants'>
                {
                    plants.map(plant => <Plant
                    key = {plant.id}
                    plant = {plant}
                    addToCart = {addToCart}
                    ></Plant>)
                }
            </div>
            <div className='cart-area'>
                <Cart 
                cart={cart} 
                key={cart.id}
                chooseRandomPlant={chooseRandomPlant}
                clearSelectedPlant={clearSelectedPlant}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;