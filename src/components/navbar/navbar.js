import React, {useState} from "react";
import './navbar.css';
import {Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
// import styles from 'bootstrap/dist/css/bootstrap.min.css';

//Usage:  <CustomNavbar />


function CustomNavbar(){
  return(
  <Navbar collapseOnSelect expand="md" bg="light" variant="light">
  <Container>
  <Navbar.Brand href="#home" className="Navbar-Brand">LOGO</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">

    </Nav>
    <Nav>
    <Nav.Link href="#page"  className={"navbtn"} >Summary</Nav.Link>
    <Nav.Link href="#page" className={"navbtn"} >Installation</Nav.Link>
    <Nav.Link href="#page" className={"navbtn"} >Tutorial</Nav.Link>
    <Nav.Link href="#page"  className={"navbtn"} >Sample Page</Nav.Link>
    <Nav.Link href="#page" className={"navbtn"} >Conclusion</Nav.Link>
    <Nav.Link href="#page" className={"navbtn"} >Credits</Nav.Link>

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>  
  );
}

export default CustomNavbar;

