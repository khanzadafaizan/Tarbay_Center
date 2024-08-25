import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

function TopBar() {
  return (
    <Navbar className="topbar">
      <Container>
        <Nav className="ms-auto">
          <Nav.Link className="text-white ">
            <MdOutlineMail className="top-icon" />
            info@tarbaycenter.com
          </Nav.Link>
          <Nav.Link className="text-white ms-0 ms-lg-0">
            <FaPhoneVolume className="top-icon" />
            +14401753868688
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default TopBar;
