import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/animations.css';
import './css/bootstrap.css';
import './css/flags.css';
import './css/main.css';
//import './css/variables.css';
import './css/App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
