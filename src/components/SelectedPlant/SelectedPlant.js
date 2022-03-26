import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './SelectedPlant.css';

const SelectedPlant = ({plant}) => {
    const {name, img} = plant;
    const [isClose, setIsClose] = useState(false);
    const selectedPlantClose = () => setIsClose(!isClose);
    
    return (
        <div className={`selected-plant ${isClose ? 'close-plant' : ''}`}>
            <img src={img} alt="" />
            <p>{name}</p>
            <p onClick={()=>selectedPlantClose()} className='trash-can'>
                <FontAwesomeIcon icon={faTrashCan} />   
            </p>
        </div>
    );
};

export default SelectedPlant;