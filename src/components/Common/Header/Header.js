import React, { Component } from 'react';
import './Header.css'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import SubmitForm from '../../SubmitForm/SubmitForm'
import FishList from '../../FishList/FishList'

//create a header that will be used with router to hot load pages from routes
class Header extends Component {
  render() {
    return (
      <div>
      <Navbar
      style={{
        backgroundColor: '#000000',
        'height': '70px'
      }}
      inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand className="title">
            Fishtopia
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <NavLink to="/home" style={{ textDecoration: 'none' }} className="links">Home</NavLink>
            <NavLink to="/gmaps" style={{ textDecoration: 'none' }} className="links">Post a Fish</NavLink>
            <NavLink to="/submitform" style={{ textDecoration: 'none' }} className="links">Submit form</NavLink>
            <NavLink to="/listfish" style={{ textDecoration: 'none' }} className="links">list fish</NavLink>

          <Nav pullRight>
            <NavItem eventKey={3} className="logout">
              Logout
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}
export default Header;
