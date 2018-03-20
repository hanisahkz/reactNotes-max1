import React from 'react';
//the method below doesn't work for create-react-app
import classes from './Cockpit.css'; //this is retained just to resolve issue with 'classes'
import './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    if (props.isVisible) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.Red);
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className='Cockpit'>
            <h1>Hi, I'm a React app</h1>
            <p className={assignedClasses.join('')}>Dynamic color generation</p>
            <button className='Red'
                    onClick={props.clicked}>Switch here!</button>
        </div>
    )
};

export default cockpit;