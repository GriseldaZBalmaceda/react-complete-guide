import React, {PureComponent} from 'react'
import Person from  './Person/Person'
class Persons extends PureComponent {
    //part of the creation cycles
    // static getDerivedStateFromProps(props,state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }
    // componentWillReceiveProps(props){
    //     console.log('[Persons.js] componentWillRecieveProps', props)
    // }
    shouldComponentUpdate(nextProps,nextState) {
        console.log('Person.js shouldComponentUpdate')
        var personsChanged =  nextProps.personsArray !== this.props.personsArray ? true : false
        return personsChanged;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return {message:'Snapchat'};
    }
    componentDidUpdate(prevProps,prevState,snapshot) {
        console.log('[Persons.js] componentDidUpdate')
        console.log(snapshot)
    }
    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount')
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