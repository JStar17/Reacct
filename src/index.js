import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import{Home} from './components/Home'
// import{StringLenght} from './components/StringLenght'
// import{EmployeeRegistration} from './components/EmployeeRegistration'
// import { BrowserRouter } from 'react-router-dom';
// import{UserAPI} from './components/UserAPI'
// import{UserDetailApi} from './components/UserDetailApi'
// import{RoleApi} from './components/RoleApi'
// import{RelativeApi} from './components/RelativeApi'
// import{RelationApi} from './components/RelationApi'
// import{ParticipantsApi} from './components/ParticipantsApi'
// import{LeaveApi} from './components/LeaveApi'
// import{CelebrationApi} from './components/CelebrationApi'
// import{AppDemo} from './components/AppDemo'
// import{ApiDemo3} from './components/ApiDemo3'
// import{FileUpload} from './components/FileUpload'
// import{FormDemo} from './components/FormDemo'
// import {SelectDemo} from './components/SelectDemo'
import { Nav } from './pages/Nav';
import {Login} from './components/Login'
import { BrowserRouter } from 'react-router-dom';






ReactDOM.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>,
  document.getElementById('root')
);  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
