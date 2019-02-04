import React, { Component } from 'react';
import './Header.css'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

//create a header that will be used with router to hot load pages from routes
class Header extends Component {
  render() {
    return (
      <div className="header">
        <Navbar
          style={{
            backgroundColor: '#000000',
            'height': '70px',
            'margin-bottom': '0',
            'posistion':'absolute',
            'top':'0',
            'right':'0',
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
            <Nav pullRight>
              <NavLink to="/login" style={{ textDecoration: 'none' }} className="links">Logout</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;
