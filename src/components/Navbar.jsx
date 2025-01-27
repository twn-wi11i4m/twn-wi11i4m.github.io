import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavbarComponent = () => {
  const [navBarExpanded, setNavBarExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      bg="secondary"
      variant="dark"
      fixed="top"
      className="text-uppercase"
      id="mainNav"
      expanded={navBarExpanded}
      onToggle={() => setNavBarExpanded(!navBarExpanded)}
    >
      <Container>
        <Navbar.Brand href="#page-top" className="js-scroll-trigger">
          🛫 TWN-Wi11i4m 🛫
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarResponsive"
          className="navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
        >
          Menu
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ms-auto">
            <Nav.Link
              href="#portfolio"
              className="nav-item mx-0 mx-lg-1"
              onClick={() => setNavBarExpanded(false)}
            >
              <span className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">
                📝 Portfolio
              </span>
            </Nav.Link>
            <Nav.Link
              href="#about"
              className="nav-item mx-0 mx-lg-1"
              onClick={() => setNavBarExpanded(false)}
            >
              <span className="nav-link py-3 px-0 px-lg-</span>3 rounded js-scroll-trigger">
                💭 About
              </span>
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className="nav-item mx-0 mx-lg-1"
              onClick={() => setNavBarExpanded(false)}
            >
              <span className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">
                📩 Contact Me
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
