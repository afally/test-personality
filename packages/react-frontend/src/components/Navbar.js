import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function Navbar() {
  const [showNavColor, setShowNavColor] = useState(false);
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const [showNavColorThird, setShowNavColorThird] = useState(false);

  return (
    <>
      <MDBNavbar expand="lg" dark bgColor="primary">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">Personality Test</MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            className="red-text"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ marginRight: "50px", color: "white" }}
            onClick={() => setShowNavColor(!showNavColor)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColor} navbar>
            <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
              <MDBNavbarItem className="active">
                <Link
                  to="./"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    transition: "color 0.3s ease",
                  }}
                >
                  Home
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link
                  to="./question"
                  className="primary-button"
                  style={{
                    fontSize: "15px",
                    color: "black",
                    textDecoration: "none",
                    alignItems: "center",
                  }}
                >
                  Start Quiz
                </Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
//export default Navbar
