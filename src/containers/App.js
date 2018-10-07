import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends PureComponent {
  constructor(props){
    super(props);
    console.log('[App.js] inside constructor');
    this.state = {
      persons: [
        {id: 'asasd5', name: "Manan", age: 20},
        {id: 'asdds7', name: "Rituja", age: 21},
        {id: 'sdasd9', name: "Akansha", age: 19}
      ],
      otherstate: 'some other value',
      showPersons: false,
      toggleClicked: 0
    } 
  }
  componentWillMount(){
    console.log('[App.js] inside componentWillMount()');
  }
  componentDidMount(){
    console.log('[App.js] inside componentDidMount()');
  }
  componentWillReceiveProps(nextProps){
    console.log("[UPDATE App.js] inside componentWillReciveProps()",nextProps);
  }
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log("[UPDATE App.js] inside shouldComponentUpdate()",nextProps,nextState);
  //   return true;
  // }
  componentWillUpdate(nextProps,nextState){
    console.log("[UPDATE App.js] inside componentWillUpdate()",nextProps,nextState);
  }

  nameChangeHandler = (event,id) =>{
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    })
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({
      persons:persons
    })
  }

  deletePersonHandler = (personIndex) =>{
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons}) 
  }
  togglePersonsHandler = () => {
    const show = this.state.showPersons;
    this.setState((preState,props) => {
      return {showPersons: !show,toggleClicked: preState.toggleClicked+1}
     } )
  }

  render() {
    console.log('[App.js] inside render');
    let persons = null;

    if(this.state.showPersons){
      persons = (
          <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangeHandler}
            />
      );
    }
   
    return (
      <Aux>
        <button onClick = {() => {this.setState({showPersons: true})}}>showPersons</button>
        <Cockpit 
        title = {this.props.title}
        showPersons = {this.state.showPersons}
        persons = {this.state.persons}
        clicked={this.togglePersonsHandler}
        />
        {persons}
      </Aux>
    );
  }
}


export default withClass(App,classes.App);