import React, {useEffect} from 'react'

const Cockpit = (props) => {
    useEffect(()=>{
        console.log('[Cockpit.js] useEffect');
        setTimeout(()=> {
            alert('saved datato cloud')
        },1000);
    },[]);
    return (    
        <div>
            <h1>{props.title}</h1>
            <button onClick={props.clicked}> Toggle Persons </button>
            <button 
            onClick={props.switchName}>Switch Name</button>
        </div>
    );
};

export default Cockpit;