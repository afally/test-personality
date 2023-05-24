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
      <MDBNavbar expand="lg" dark bgColor="primary" className="navbar">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#" style={{ fontSize: "30px" }}>
            HowWeWork
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            className="red-text"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              marginRight: "50px",
              color: "white",
              backgroundColor: "white",
            }}
            onClick={() => {
              setShowNavColor(!showNavColor);
            }}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColor} navbar>
            <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
              <MDBNavbarItem className="active">
                <MDBNavbarLink
                  aria-current="page"
                  href="/"
                  style={{ fontSize: "20px" }}
                >
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/question" style={{ fontSize: "20px" }}>
                  Tests
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
//export default Navbar
