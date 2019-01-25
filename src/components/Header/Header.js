import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a>Fishtopia</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1}>
            <NavLink to="/home">Home</NavLink>
            </NavItem>
            <NavItem eventKey={2}>
            <NavLink to="/about">About</NavLink>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={2} href="#">
              Logout
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Header;
