import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import tarbay from "../images/tarbay_logo.png";
import dogHandLogo from "../images/dog_hand_logo.png";
import dogHandWhite from "../images/dog_hand_white.png";
function NavBar() {
  return (
    <Navbar expand="lg" className="p-0 justify-content-center d-flex">
      <Container className="p-0">
        <Navbar.Brand href="#home">
          <img
            className="img-fluid"
            src={tarbay}
            width={187.8}
            height={110}
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-2" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-2 mx-md-0 mx-lg-4 gap-2 gap-md-3 gap-lg-4 gap-xl-5">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Dogs</Nav.Link>
            <Nav.Link href="#link">Cats</Nav.Link>
            <Nav.Link href="#link">Shop</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
          </Nav>
          <Nav className="ms-auto me-3 d-none d-lg-block">
            <Button className="book_btn">
              <img
                className="me-2 mb-1"
                src={dogHandWhite}
                width={23.2}
                height={20}
                alt="Logo"
              />
              Book Now
            </Button>
          </Nav>
        </Navbar.Collapse>
        <div className="dog_hand_logo_box d-none d-lg-block">
          <img
            className="box_child1"
            src={dogHandLogo}
            width={76}
            height={67}
            alt="Logo"
          />
          <img
            className="box_child2"
            src={dogHandLogo}
            width={76}
            height={67}
            alt="Logo"
          />
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
