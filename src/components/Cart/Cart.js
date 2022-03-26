import React from 'react';
import SelectedPlant from '../SelectedPlant/SelectedPlant';
import './Cart.css';

const Cart = ({cart, chooseRandomPlant, clearSelectedPlant, selectedPlantClose, isClose}) => {
    
    
    return (
        <div className='cart'>
            <h2>Selected Plants</h2>
            <div>
                <p>Selected items: {cart.length}</p>
                {
                    cart.map(plant => <SelectedPlant 
                        plant={plant}
                        key = {plant.id}
                        ></SelectedPlant>)
                }
                <button onClick={()=>chooseRandomPlant(cart)}>CHOOSE 1 FOR ME</button> 
                <button onClick={()=>clearSelectedPlant(cart)}>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Cart;