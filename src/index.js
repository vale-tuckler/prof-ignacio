import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import '../node_modules/react-bootstrap' ;
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import './Fonts/quick-kiss-converted/quick-kiss.woff';
import './Fonts/Jelytta-converted/jelytta.woff';

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
