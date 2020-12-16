import React, {useEffect} from 'react'
import Classes from './Cockpit.css'

const Cockpit = (props) => {
    const assignedClasses = [];
    //useEffect combines componentDidMount and componentDidUpdate, takes a function that runs on every render
    useEffect(()=>{
        console.log('[Cockpit.js] useEffect');
       const timer =  setTimeout(()=> {
            alert('saved data to cloud')
        },1000);
        return ()=> {
        clearTimeout(timer)
        //runs after the last useEffect, similar to componentWillUmount,
        // it runs before the main useEffect function runs, but after the first render cycle
        console.log('[Cockpit.js] cleanup work in useEffect')
        }
    },[]);
    //with an empty array it will only run the first time
    useEffect(()=>{
        console.log('[Cockpit.js] 2nd useEffect');
        return ()=> {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect')
        }
    })
    //updated every updata cycle
    if(props.personsLength <=2){
        assignedClasses.push(Classes.red);
    }
    if(props.personsLength <=1) {
        assignedClasses.push(Classes.bold)
    }
    return (    
        <div>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join('')}>This is really working</p>
            <button onClick={props.clicked}> Toggle Persons </button>
            <button 
            onClick={props.switchName}>Switch Name</button>
        </div>
    );
};

export default React.memo(Cockpit);