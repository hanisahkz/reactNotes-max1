//must always import React object
import React from 'react';
import Person from './Person/Person';

//JSX code goes inside here
//instead of syntax:
//const persons = (props) => (), we do like below because
//the function below defined is only 'returning' value. Not performing some kind of logic

//the usage of 'this' is specific to class
//we are using <Person> component, hence, we need to import the component

const persons = (props) => props.persons.map((personPlaceholder, index) => {
        return <Person
            name={personPlaceholder.name}
            age={personPlaceholder.age}
            click={() => props.clicked(index)}
            key={personPlaceholder.id}
            updateToChangeName={(event) => props.changed(event, personPlaceholder.id)}
        />
    }
);

//each file needs to be exported
export default persons;