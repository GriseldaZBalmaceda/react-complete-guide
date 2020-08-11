import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
class App extends Component {
state = {
  persons : [
    {name: 'Max', age:21},
    {name: 'Debbie', age:23}
  ],
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

nameChangedHandler = (event) => {
  this.setState({
    persons: [
      {name: event.target.value, age:21},
      {name: 'Debbie', age:23}
    ]
  })
}

userNameChangedHandler = (event)=>{
  this.setState({
    userName:event.target.value
  })
}

togglePerson = () => {
  let currentShow = this.state.showPersons
  this.setState({showPersons: !currentShow})
}

  render() {

    const style = {
      bakgroundColor: 'white',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }



    return (
      <div className="App">
        <h1>Hello</h1>
        <button onClick={this.togglePerson}> Toggle Persons </button>
        <button 
        style={style}
        onClick={()=>this.switchNameHandler('Maxie')}>Switch Name</button>
        {this.state.showPersons ? 
          <div>  
            <Person 
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.switchNameHandler.bind(this, 'Maxie')}
              changed={this.nameChangedHandler}
              >
            </Person>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}> 
              My hobbies are knitting and golfing
            </Person>
        </div> : '' }


      <h1>Practice 1</h1>
      <UserInput change={this.userNameChangedHandler} value={this.state.userName}></UserInput>
      <UserOutput userName={this.state.userName}></UserOutput>
      <UserOutput></UserOutput>
      </div>


    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1',null,'Hello'));
  }
}

export default App;
