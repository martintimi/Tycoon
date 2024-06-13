import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <h2 className={scrolled ? "text-dark pt-1" : "text-light pt-1"}>TYC.</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#features"
              className={activeLink === "features" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("features")}
            >
              Features
            </Nav.Link>
            <Nav.Link
              href="#overview"
              className={activeLink === "overview" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("overview")}
            >
              Overview
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              className={activeLink === "pricing" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("pricing")}
            >
              Pricing
            </Nav.Link>
            <Nav.Link
              href="#team"
              className={activeLink === "team" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("team")}
            >
              Team
            </Nav.Link>
            <Nav.Link
              href="#blog"
              className={activeLink === "blog" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("blog")}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={activeLink === "contact" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <button
              className={`vvd ${scrolled ? "scrolled" : ""}`}
              onClick={() => console.log("connect")}
            >
              <span>Get It Now</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
