import React, {Component} from 'react'
import classes from  './Person.css'
import Aux from '../../../HOC/Auxilary'
import WithClass from '../../../HOC/withClass'

// instead of aux you can also use Reacts Fragment
class Person extends Component {
    render(){
        console.log('[Person.js] rendering')
        return (
            <Aux>
                <p className={classes.Person}>
                    <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old.</p>
                    <p>{this.props.children}</p>
                    <input type="text" onChange={this.props.changed} value={this.props.name}/>
                </p>                
            </Aux>

        )
    }
}
export default WithClass(Person,classes.Person); 