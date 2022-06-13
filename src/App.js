import React from 'react'; 
import './App.css';
import Addstudent from './Student/Addstudent'; 
import Studentlist from './Student/Studentlist'; 
import Editstudent from './Student/Editstudent'; 
import Addstudentdata from './Addstudentdata'; 
import Editstudentdata from './Editstudentdata'; 
import LoadingSpinner from "./LoadingSpinner";

import { BrowserRouter as Router, Route, Link,Routes,useNavigate } from 'react-router-dom';
// import {  createBrowserHistory as history } from 'history';
// import { withRouter } from "react-router";
import history from './history'
function App() {
  return (
    <Router history={history}>  
       <div className="container">  
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
              <li className="nav-item">  
                <Link to={'/Editstudentdata'} className="nav-link">Edit function</Link>  
              </li>  
            </ul>  
          </div>  
        </nav> <br />     
      </div>  
      <Routes>
      {/* <Route path="/Studentlist" render={(props) => <Studentlist {...props}/>} /> */}
          <Route exact path="/Studentlist" element={<Studentlist/>}/>
          <Route exact path="/Addstudent" element={<Addstudent/>}/>
          {/* <Route exact path="/Addstudent" component={withRouter(Addstudent)}/> */}
          {/* <Route exact path='/edit/:id' element={<Editstudent/>} />   */}
          <Route exact path="/Addstudentdata" element={<Addstudentdata/>}/>
          <Route exact path='/edit/:id' element={<Editstudentdata/>} /> 
        </Routes>
    </Router> 
  );
}

export default App;
//export default withRouter(App);
