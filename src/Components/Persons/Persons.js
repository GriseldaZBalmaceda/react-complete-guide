import React, {Component} from 'react'
import Person from  './Person/Person'
class Persons extends Component {
    //part of the creation cycles
    // static getDerivedStateFromProps(props,state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }
    shouldComponentUpdate(nextProps,nextState) {
        console.log('[Persons.js] shouldComponentUpdate')
        return true
    }
    componentDidUpdate() {
        console.log('[Persons.js] componentDidUpdate')
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return null;
    }
    render(){
    console.log('[Person.js] rendering...')
       return this.props.personsArray.map(person => {
            return (<Person 
                key={person.id} 
                name={person.name} 
                age={person.age} 
                changed={(event) => this.props.changed(event, person.id)} />
            )
        });
    }
}
export default Persons;