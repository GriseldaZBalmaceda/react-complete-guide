import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import ValidateCharacters from './ValidationChar/ValidationChar.jsx'
import Character from './Characters/CharComponent'
class App extends Component {
state = {
  persons : [
    {id:'345', name: 'Max', age:21},
    {id:'800', name: 'Debbie', age:23}
  ],
  character:'',
  userName: 'cool user name',
  showPersons: false
}


switchNameHandler = (newName) =>{
  this.setState({
    persons: [
      {name: newName, age:21},
      {name: 'Debbie', age:23}
    ]
  })
}

nameChangedHandler = (event, id) => {
  let personIndex = this.state.persons.findIndex(p=>
    {return p.id === id
    });

  const person = {...this.state.persons[personIndex]}
  console.log(person)
  person.name = event.target.value

  let persons = [...this.state.persons]
  persons[personIndex] = person


  this.setState({persons:persons})
}

userNameChangedHandler = (event) => {
  this.setState({
    userName:event.target.value
  })
}

togglePerson = () => {
  let currentShow = this.state.showPersons
  this.setState({showPersons: !currentShow})
}

addCharacters = (event) => {
let character = event.target.value
this.setState({character: character})
}
removeCharacter = (index) => {
let character = this.state.character.split('')
character.splice(index, 1);
let newCharacter = character.join('')
this.setState({character: newCharacter})
}

  render() {

    const style = {
      bakgroundColor: 'white',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let persons = this.state.persons.map(person => {
      return <Person key={person.id} name={person.name} age={person.age} changed={(event) => this.nameChangedHandler(event, person.id)} />
    })
    let charactersArray = this.state.character.split('')
    let characterOutput =  charactersArray.map((element,index)=> <Character key={index} text={element} clicked={()=>this.removeCharacter(index)}> </Character>)
    return (
      <div className="App">
        <h1>Hello</h1>
        <button onClick={this.togglePerson}> Toggle Persons </button>
        <button 
        style={style}
        onClick={()=>this.switchNameHandler('Maxie')}>Switch Name</button>
        {this.state.showPersons ? 
          <div>  
            {persons}
        </div> : '' }


      <h1>Practice 1</h1>
      <UserInput change={this.userNameChangedHandler} value={this.state.userName}></UserInput>
      <UserOutput userName={this.state.userName}></UserOutput>
      <UserOutput></UserOutput>
      

      <h2>Practice 2</h2> 
      <input onChange={(event)=>this.addCharacters(event)} />
      <ValidateCharacters textLength={this.state.character.length}> </ValidateCharacters>
      {characterOutput}
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1',null,'Hello'));
  }
}

export default App;
