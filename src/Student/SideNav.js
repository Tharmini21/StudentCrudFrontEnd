import React from 'react';
import '../App.css';

const SideNav = (props) => {
    return (
        <div style={{ width: '25%', paddingTop: '20px' }} id="mySidenav" className="sidenav">
            <a href="/Addstudent">Addstudent</a>
            <p><a href="/Studentlist">Student List</a></p>
        </div>
    );
};
export default SideNav;