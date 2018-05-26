import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import Main from './Router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
