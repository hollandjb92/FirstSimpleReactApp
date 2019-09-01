import React from 'react'; // allows you to write the "html" in your JS file
import ReactDOM from 'react-dom'; // interacts with the dom
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( < App / > , document.getElementById('root')); //looking for element with ID of root (in public folder index.html) and replacing it with App funciton from App.js file

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();