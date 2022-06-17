import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import '../App.css';
import styled from "styled-components";
import { IconName } from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as CaIcons from "react-icons/cg";
import { IconContext } from "react-icons/lib";
import { sideMenu } from '../Sidebarmenu';
const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const SidebarNav = styled.nav`
background: #15171c;
width: 250px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
transition: 350ms;
z-index: 10;
`;

const SidebarWrap = styled.div`
width: 100%;
`;

const SideNav = (props) => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0px";
    }
    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav>
                    <FaIcons.FaBars onClick={showSidebar} />
                    {/* <div style={{ width: '25%', paddingTop: '20px' }} id="mySidenav" className="sidenav"> */}
                    {/* <div id="mySidenav" className="sidenav">
                <a href="" class="closebtn" onClick={closeNav}>&times;</a>
                <a href="/Addstudent">Addstudent</a>
                <p><a href="/Studentlist">Student List</a></p>
            </div> */}
                    <SidebarNav sidebar={sidebar}>
                        <SidebarWrap>
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                            {/* <a href="" class="closebtn" onClick={closeNav}>&times;</a> */}
                            {/* <Link to="/Addstudent">Add Student</Link>
                            <Link to="/Studentlist">Student List</Link> */}
                            {/* <NavLink exact to='/Studentlist'><AiIcons.AiOutlineUserAdd></AiIcons.AiOutlineUserAdd><span>Student List</span>
                            </NavLink> */}
                            <div class="navbar">
                                <a href="/Addstudent"><AiIcons.AiOutlineUserAdd></AiIcons.AiOutlineUserAdd>  Addstudent</a>
                                <p><a href="/Studentlist" onClick={showSidebar}><CaIcons.CgUserList></CaIcons.CgUserList>  Student List</a></p>

                            </div>
                            {/* {sideMenu.map((item, index) => {
                                return <NavItem key={index} item={item} />;
                            })} */}
                        </SidebarWrap>
                    </SidebarNav>
                </Nav>
            </IconContext.Provider>
        </>
    );
};
export default SideNav;