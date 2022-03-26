import React from 'react';
import './ReactWork.css'

const ReactWork = () => {
    return (
        <div className='react-work'>
            <h3>How react works?</h3>
            <p>React flows one way binding data or unidirectional data. It connects parent and child components, render them and fix bug very quickly. React creats a Virtual DOM (VDOM) that is a programming concept that keeps a version close to the real dom in memory, so that it can compare which part of the UI has changed, then change the UI accordingly. It takes a diff algorithm to understand which part has changed.</p>
        </div>
    );
};

export default ReactWork;