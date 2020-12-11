import React, {useEffect} from 'react'

const Cockpit = (props) => {
    //useEffect combines componentDidMount and componentDidUpdate, takes a function that runs on every render
    useEffect(()=>{
        console.log('[Cockpit.js] useEffect');
        setTimeout(()=> {
            alert('saved data to cloud')
        },1000);
        return ()=> {
        console.log('[Cockpit.js] cleanup work in useEffect')
        }
    },[]);

    useEffect(()=>{
        console.log('[Cockpit.js] 2nd useEffect');
        return ()=> {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect')
        }
    })
    //with an empty array it will only run once
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