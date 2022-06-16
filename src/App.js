import React from 'react';
import './App.css';
import Addstudent from './Student/Addstudent';
import Studentlist from './Student/Studentlist';
import Editstudent from './Student/Editstudent';
import Addstudentdata from './Addstudentdata';
import Editstudentdata from './Editstudentdata';
import LoadingSpinner from "./LoadingSpinner";
import AppLayout from './AppLayout';
// import SideNav from './Student/SideNav';

import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';
// import {  createBrowserHistory as history } from 'history';
// import { withRouter } from "react-router";
import history from './history'
import SideNav from './Student/SideNav';
function App() {
  // function openNav() {
  //   document.getElementById("mySidenav").style.width = "250px";
  // }
  
  const closeNav=()=> {
    document.getElementById("mySidenavbar").style.width = "0";
  }
  return (
  
    <Router history={history}>
      <SideNav/>
      {/* <div id="mySidenavbar" class="sidenav">
        <a href="" class="closebtn" onClick={closeNav}>&times;</a>
        <a href="/Addstudent">Addstudent</a>
        <a href="/Studentlist">Student List</a>
      </div> */}
      {/* <SideNav style={{width:'25%'}}/> */}
      {/* <div className="container">
        <nav className="navbar navbar-expand-lg navheader">
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/Addstudent'} className="nav-link">Addstudent</Link>
              </li>
              <li className="nav-item">
                <Link to={'/Studentlist'} className="nav-link">Student List</Link>
              </li>
              <li className="nav-item">
                <Link to={'/Addstudentdata'} className="nav-link">Addstudent function</Link>
              </li>
            </ul>
          </div>
        </nav> <br />
      </div> */}
      <Routes>
        {/* <Route path="/Studentlist" render={(props) => <Studentlist {...props}/>} /> */}
        {/* <Route path='/' element={<AppLayout />}/> */}
        <Route exact path="/Studentlist" element={<Studentlist />} />
        <Route exact path="/Addstudent" element={<Addstudent />} />
        {/* <Route exact path="/Addstudent" component={withRouter(Addstudent)}/> */}
        <Route exact path='/edit/:id' element={<Editstudent/>} />  
        <Route exact path="/Addstudentdata" element={<Addstudentdata />} />
        {/* <Route exact path='/edit/:id' element={<Editstudentdata />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
//export default withRouter(App);
