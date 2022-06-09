import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
// import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { Router } from 'react-router-dom';
import history from './history';
import Addstudent from './Student/Addstudent';
import Studentlist from './Student/Studentlist';
import Editstudent from './Student/Editstudent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// ReactDOM.render(
//   <Router history={history}>
//     <App />
//   </Router>
//   , document.getElementById('root'))
reportWebVitals();
