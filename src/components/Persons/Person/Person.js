import React, {Component} from 'react';
import './Person.css';
import classes from './Person.css'
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Aux'
import PropsTypes from 'prop-types';
class Person extends Component{
    constructor(props){
        super(props);
        console.log('[Person.js] inside constructor');
      }
      componentWillMount(){
        console.log('[Person.js] inside componentWillMount()');
      }
      componentDidMount(){
        console.log('[Person.js] inside componentDidMount()');
        if ( this.props.position === 0)
        this.inputElement.focus();
      }
    render(){
        console.log('[Person.js] inside render()');
        return(
            <Aux>
                <p onClick = {this.props.click}>I am a Person ! and i my name is {this.props.name} and my age is {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input 
                    ref = {(inp) => {this.inputElement = inp}}
                    type = "text" 
                    onChange = {this.props.changed} 
                    value = {this.props.name}/>
            </Aux>
        )
    }
}

Person.PropsTypes = {
    click: PropsTypes.func,
    name: PropsTypes.string,
    age: PropsTypes.number,
    changed: PropsTypes.func
  }
export default withClass(Person,classes.Person);