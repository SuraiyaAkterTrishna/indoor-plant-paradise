import React from 'react';
import './PropsVsState.css'

const PropsVsState = () => {
    return (
        <div className='props-vs-state'>
            <h3>What are the difference between props and state?</h3>
            <p>props is used to get data from another component. props are read-only. props can't be modified.</p>
            <p>state is used to manage internal data changes of the component. state changes can be asynchronous. state can be modified using this.setState().</p>
        </div>
    );
};

export default PropsVsState;