import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
state = {
  persons : [
    {name: 'Max', age:21},
    {name: 'Debbie', age:23}
  ]
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

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <button onClick={()=>this.switchNameHandler('Maxie')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Maxie')}
          changed={this.nameChangedHandler}
          >
        </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My hobbies are knitting and golfing</Person>
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1',null,'Hello'));
  }
}

export default App;
