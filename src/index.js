import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

var lastScrollTop = 0;
var podeRolar = true;
var rolagem = 0;
var body = document.querySelector('body');
