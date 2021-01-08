import React, {Component} from 'react'
import classes from  './Person.css'
import Aux from '../../../HOC/Auxilary'
import WithClass from '../../../HOC/withClass'
import PropTypes from 'prop-types'
// instead of aux you can also use Reacts Fragment
class Person extends Component {
    constructor(props){
        super(props)
        this.inputElementRef = React.createRef();
    }
    componentDidMount(){
        this.inputElementRef.current.focus();
    }
    render(){
        console.log('[Person.js] rendering')
        return (
            <Aux>
                {this.props.authenticated ? 'You are authenticated':'Please login'}
                <p className={classes.Person}>
                    <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old.</p>
                    <p>{this.props.children}</p>
                    <input
                    ref={this.inputElementRef}
                    //  ref={(inputEl)=>{this.inputElement = inputEl}}
                     type="text" 
                     onChange={this.props.changed} 
                     value={this.props.name}/>
                </p>                
            </Aux>

        )
    }
}

Person.propTypes = {
    click : PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};
export default WithClass(Person,classes.Person); 