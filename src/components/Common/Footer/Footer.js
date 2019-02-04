import React from "react";
import { MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
            <ul className="footer-content">
              <li className="list-unstyled">
                <NavLink to="/privacypolicy" style={{ textDecoration: 'none', fontSize: '15px' }} className="privacy">Privacy Policy</NavLink>
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
