import React, { Component } from 'react';
import './Header.css'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

//create a header that will be used with router to hot load pages from routes
class Header extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand className="title">
            Fishtopia
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1}>
            <NavLink to="/login" style={{ textDecoration: 'none' }} className="links">Login</NavLink>
            </NavItem>
            <NavItem eventKey={2}>
            <NavLink to="/home" style={{ textDecoration: 'none' }} className="links">Home</NavLink>
            </NavItem>
            <NavItem eventKey={3}>
            <NavLink to="/gmaps" style={{ textDecoration: 'none' }} className="links">Post a Fish</NavLink>
            </NavItem>
            <NavItem eventKey={4}>
            <NavLink to="/submitform" style={{ textDecoration: 'none' }} className="links">Submit Form</NavLink>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={5} className="logout">
              Logout
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Header;
