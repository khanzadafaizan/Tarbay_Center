import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import trusted from "../images/trusted_members.png";
function Trusted() {
  return (
    <Container className="py-5">
      <Row>
        <Col className="trusted d-flex justify-content-center flex-column align-items-center">
          <h2>Our Trusted Members</h2>
          <img
            className="my-5 img-fluid"
            src={trusted}
            width={660}
            height={75}
          />
          <p>Licenced By Royal Borough of Windsor & Maidenhead </p>
          <p>Licence Number 009AB</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Trusted;
