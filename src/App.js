import React from 'react'; 
import './App.css';
import Addstudent from './Student/Addstudent'; 
import Studentlist from './Student/Studentlist'; 
import Editstudent from './Student/Editstudent'; 
import LoadingSpinner from "./LoadingSpinner";
import { BrowserRouter as Router, Route, Link,Routes } from 'react-router-dom';
function App() {
  return (
    <Router>  
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
            </ul>  
          </div>  
        </nav> <br />     
      </div>  
      <Routes>
          <Route  path="/Studentlist" element={<Studentlist/>}/>
          <Route  path="/Addstudent" element={<Addstudent/>}/>
          <Route exact path='/edit/:id' element={<Editstudent/>} />  
        </Routes>
    </Router> 
  );
}

export default App;
