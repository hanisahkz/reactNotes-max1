import React, {Component} from 'react';
import './App.css'; //this is importing the styling to be used by this component
// .. : means from this current location, go up one level
// then find a folder called 'components'
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/cockpit/Cockpit';

//remember that react passes data from Parent to Child. Notice how all the data are passed from the Parent
//this is an App component that gets called in index.js
//after importing the object, can call the component inside the root div here.
//but it can get convoluted really quickly as you begin to have more and more components here.

//state, eventHandling occurs at parent level
class App extends Component {
  state = {
      personsArray:[
          {
              name: "Jessie",
              age: 20,
              id: 'dsda3211'
          },
          {
              name: "Anna",
              age: 19,
              id: 'adsdad32'
          }
      ],
      isVisible: false
  };

  //pay attention to the syntax
  switchNameHandler = (replaceName) => {
      // console.log("I was clicked!");
      this.setState  ({
          personsArray:[
              {
                  name: replaceName,
                  age: 24
              },
              {
                  name: "Annabelle",
                  age: 19
              }
          ]
      })
  };

  //for two-way binding, you'll for sure pass an event object
  //we want to update input only to the applicable object
  changeNameHandler = (event, id) => {
    //Step 1: findIndex will return the index of the current element if it's true
    const currentPersonIndex = this.state.personsArray.findIndex(p => {
        return p.id === id;
    });

    //Step 2: once you get the current person index, make a copy of the person value
    //spread operator allows you to make a copy
    const currentPerson = {
        ...this.state.personsArray[currentPersonIndex]
    };

    //Step 3: so, once you've made a copy of that specific person object.
    // You can now begin changing the state of the object
    currentPerson.name = event.target.value;

    //Step 4: now need to update the overall list holding person object when it matters
    //by updating only the changed person object with the correct value
    const dupPersonsArray = this.state.personsArray;
    dupPersonsArray[currentPersonIndex] = currentPerson;

    //update the list
    this.setState  ({
        personsArray: dupPersonsArray
    })
  };

  toggleThisBlock = () => {
      const visibleStatus = this.state.isVisible;
      this.setState({ isVisible: !visibleStatus});
  };

  deletePerson = (personIndex) => {
      // const currentPersonsArray = this.state.personsArray; //assign the variable to the whole personsArray
      //const currentPersonsArray = this.state.personsArray.slice(); //this is how
      const currentPersonsArray = [...this.state.personsArray]; //this is how you make a copy

      currentPersonsArray.splice(personIndex, 2); //splice will delete the element from the list
      this.setState({personsArray: currentPersonsArray})
  };

  render() {
    //each time the state updates, this will trigger React rendering
    let persons = null;

    //normally access 'this' through a class
    // can only do directly: persons = <Person> provided that the content inside <Person>
    //has already handled <div>
    if (this.state.isVisible) {
        persons = <Persons
                    persons={this.state.personsArray}
                    clicked={this.deletePerson}
                    changed={this.changeNameHandler}/>;
    }

    //scoping. Within the 'return' , you have to use JSX. There's limitation on what you can do.
    return (
      <div className="App">
        <Cockpit
            showPersons={this.state.isVisible}
            persons={this.state.personsArray}
            clicked={this.toggleThisBlock}/>
        {persons}
      </div>
    );
  }
}

export default App;
