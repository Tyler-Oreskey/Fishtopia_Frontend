import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';

const Footer = () => {
  return (
    <MDBFooter style={{'background-color': '#212121'}} className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
          </MDBCol>
          <MDBCol md="6">
            <ul>
              <li className="list-unstyled">
              <NavItem>
                <NavLink to="/privacypolicy" style={{ textDecoration: 'none', fontSize: '30' }} className="links">Privacy Policy</NavLink>
              </NavItem>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Fishtopia
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
export default Footer;
