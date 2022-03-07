import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import{Home} from './components/Home'
// import{StringLenght} from './components/StringLenght'
import{EmployeeRegistration} from './components/EmployeeRegistration'
// import { BrowserRouter } from 'react-router-dom';
import{API} from './components/API'

ReactDOM.render(
  <>
  <App/>
  </>,
  document.getElementById('root')
);  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
