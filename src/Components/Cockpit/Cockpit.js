import React from 'react'

const Cockpit = (props) => {
    return (    
        <div>
            <h1>Hello</h1>
            <button onClick={props.clicked}> Toggle Persons </button>
            <button 
            onClick={props.switchName}>Switch Name</button>
        </div>
    );
};

export default Cockpit;