import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';

const Footer = () => {
  return (
    <MDBFooter style={{'background-color': '#000000'}} className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
            <ul className="footer-content">
              <li className="list-unstyled">
                <NavLink to="/privacypolicy" style={{ textDecoration: 'none', fontSize: '15px' }} className="links">Privacy Policy</NavLink>
              </li>
              <div className="footer-copyright text-center py-3">
                  &copy; {new Date().getFullYear()} Copyright: Fishtopia
              </div>
            </ul>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}
export default Footer;
