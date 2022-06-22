import React from 'react';
import './App.css';
import Addstudent from './Student/Addstudent';
import Studentlist from './Student/Studentlist';
import Editstudent from './Student/Editstudent';
import Addstudentdata from './Addstudentdata';
import Editstudentdata from './Editstudentdata';
import LoadingSpinner from "./LoadingSpinner";
import AppLayout from './AppLayout';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';
import history from './history'
import SideNav from './Student/SideNav';
import { Admin } from './Student/Admin';
function App() {
  return (
    <Router history={history}>
      <SideNav/>
      <Routes>
        <Route exact path="/Studentlist" element={<Studentlist />} />
        <Route exact path="/Addstudent" element={<Addstudent />} />
        <Route exact path='/edit/:id' element={<Editstudent/>} />  
        <Route exact path="/Addstudentdata" element={<Addstudentdata />} />
        <Route exact path="/" element={<Admin />} />
      </Routes>
    </Router>
  );
}
export default App;
