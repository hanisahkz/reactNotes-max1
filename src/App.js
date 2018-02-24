import React, { Component } from 'react';
import './App.css'; //this is importing the styling to be used by this component
import Person from './Person/Person';

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
    //the attribute value must be a string
    //the attribute name follows javascript acceptable format. i.e. background-color is an invalid form
    const customStyle = {
        backgroundColor: 'white',
        border: 'solid 1px gold',
        padding: '5px',
        cursor: 'pointer',
        font: 'inherit'
    };

    //each time the state updates, this will trigger React rendering
    let persons = null;

    //here, persons will be assigned with HTML content now
    //we introduce index as the 2nd argument to delete specific element from the list
    if (this.state.isVisible) {
        persons = (
            <div>
                {this.state.personsArray.map((personPlaceholder, index) => {
                    return <Person
                        name={personPlaceholder.name}
                        age={personPlaceholder.age}
                        click={() => this.deletePerson(index)}
                        key={personPlaceholder.id}
                        updateToChangeName={(event) => this.changeNameHandler(event, personPlaceholder.id)}
                    />
                    }
                )}
            </div>
        );
    }

    //scoping. Within the 'return' , you have to use JSX. There's limitation on what you can do.
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <button style={customStyle} onClick={this.toggleThisBlock}>Switch here!</button>
        {persons}
      </div>
    );
    //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Harlow! I\'m sam' ));
  }
}

export default App;
