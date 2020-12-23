import React, { Component } from 'react';
import '../Containers/App.css';
import Persons from  '../Components/Persons/Persons'
import withClass from '../HOC/WithClass'
// import UserInput from '../Components/UserInput/UserInput'
// import UserOutput from '../Components/UserOutput/UserOutput'
// import ValidateCharacters from '../Challenges/ValidationChar/ValidationChar'
// import Character from '../Challenges/Characters/CharComponent'
import Cockpit from '../Components/Cockpit/Cockpit'
class App extends Component {

constructor(props) {
  super(props);
  console.log('[App.js] constructor')
  this.state = {
    persons : [
      {id:'345', name: 'Max', age:21},
      {id:'800', name: 'Debbie', age:23}
    ],
    character:'',
    userName: 'cool user name',
    showPersons: false,
    showCockpit: true
  }
}

static getDerivedStateFromProps(props, state) {
console.log('[App.js] getDerivedStateFromProps' , props)
return state;
}
componentWillMount() {
  console.log('[App.js] componentWillMount')
}
componentDidMount() {
  console.log('[App.js] componentDidMount')
}
componentDidUpdate(){
  console.log('[App.js] componentDidUpdate')
}
shouldComponentUpdate() {
  console.log('[App.js] shouldComponentUpdate')
  return true;
}
switchNameHandler = (newName) =>{
  this.setState({
    persons: [
      {name: newName, age:21, id: 213},
      {name: 'Debbie', age:23, id:656}
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
    console.log('[App.js] render')

    let personsTemp = null

    if(this.state.showPersons){
      personsTemp = (<div><Persons personsArray={this.state.persons} changed={this.nameChangedHandler.bind(this)} /></div>)
    }

    // let charactersArray = this.state.character.split('')
    // let characterOutput =  charactersArray.map((element,index)=> <Character key={index} text={element} clicked={()=>this.removeCharacter(index)}> </Character>)
    return (
       <withClass classes="App">
         <button onClick={()=> {this.setState({showCockpit:false})}}>Remove Cockpit</button>
         {this.state.showCockpit ? 
         <Cockpit
          title={this.props.appTitle}
          personsLength={this.state.persons.length}
          clicked={this.togglePerson} switchName={()=>this.switchNameHandler('Maxie')}/> : null  }
          {personsTemp}
      {/* <h1>Practice 1</h1>
      <UserInput change={this.userNameChangedHandler} value={this.state.userName}></UserInput>
      <UserOutput userName={this.state.userName}></UserOutput>
      <UserOutput></UserOutput>
      

      <h2>Practice 2</h2> 
      <input onChange={(event)=>this.addCharacters(event)} />
      <ValidateCharacters textLength={this.state.character.length}> </ValidateCharacters>
      {characterOutput} */}
      </withClass>       
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1',null,'Hello'));
  }
}

export default App;
