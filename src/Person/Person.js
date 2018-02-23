import React from 'react';
//must always import the css to be used. Pay attention to styling
import './Person.css';

//create an object with function
//props refers to the attribute within the component
//i.e.
const person = (props) => {
    //props.changePlaceholder should be props.property passed from parent (whoever that's importing it)
    //there's plenty of React.createElement happening here. Hence, you need to import React library
    //inside here, React is doing things in the background which is converting to JSX
    return (
        <div className='Person'>
            <p onClick={props.changePlaceholder}>I'm a React person named {props.name} and currently aged {props.age} years old!</p>
            <span>{props.children}</span>
            <input type="text" onChange={props.updateToChangeName} value={props.name}/>
        </div>
    )
};

//after defining the object, export it. And somewhere in the app, there will be a file that imports it
export default person;