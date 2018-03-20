import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

//the argument that you can put inside ReactDOM.render()
//can either be a React component: <App /> or non-react component like a typical HTML structure
ReactDOM.render(<App />, document.getElementById('root'));
//for caching
registerServiceWorker();

