import React, {PureComponent} from 'react';
import Person from './Person/Person';
class Persons extends PureComponent{
  constructor(props){
    super(props);
    console.log('[Persons.js] inside constructor');
  }
  componentWillMount(){
    console.log('[Persons.js] inside componentWillMount()');
  }
  componentDidMount(){
    console.log('[Persons.js] inside componentDidMount()');
  }
  componentWillReceiveProps(nextProps){
    console.log("[UPDATE Persons.js] inside componentWillReciveProps()",nextProps);
  }
  componentWillUpdate(nextProps,nextState){
    console.log("[UPDATE Persons.js] inside componentWillUpdate()",nextProps,nextState);
  }
  componentDidUpdate(){
    console.log("[UPDATE Persons.js] inside componentDidUpdate()")
  }
  render(){
    console.log('[Persons.js] inside render()');
    return this.props.persons.map((person,index) =>{
      return <Person 
      cursor = 'pointer'
      click = {() => this.props.clicked( index )}
      name = {person.name}
      age = {person.age} 
      key = {person.id}
      position = {index}
      changed = {(event) => this.props.changed(event,person.id)}/>
    });
  }
} 

export default Persons;