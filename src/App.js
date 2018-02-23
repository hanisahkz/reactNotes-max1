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
              age: 20
          },
          {
              name: "Anna",
              age: 19
          }
      ]
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
  changeNameHandler = (event) => {
      // console.log("attempt to activate change event")
      this.setState  ({
          personsArray:[
              {
                  name: "Jessicar",
                  age: 24
              },
              {
                  name: event.target.value,
                  age: 19
              }
          ]
      })
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

    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <button style={customStyle} onClick={() => this.switchNameHandler("Qwerty!")}>Switch here!</button>
        <Person
            name={this.state.personsArray[0].name}
            age={this.state.personsArray[0].age}
        />
        <Person
            name={this.state.personsArray[1].name}
            age={this.state.personsArray[1].age}
            changePlaceholder={this.switchNameHandler.bind(this, "jawesomePerson")}
            updateToChangeName={this.changeNameHandler}
        >Profession: Cook</Person>
      </div>
    );
    //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Harlow! I\'m sam' ));
  }
}

export default App;
