import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Sneak() {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="d-flex justify-content-center flex-column sneak">
          <h2 className="text-center">
            Sneak A Peek Into Our Kennels And Cattery
          </h2>
          <p>
            Recently our kennels and cattery have undertaken massive
            improvements. This is to insure all of our guests have the most
            comfortable and happy stay as possible. We understand that leaving
            your pets welfare in the hands of others is no easy undertaking. The
            Tarbay Centre aims to give your pets a home from home feel. If you
            are still unsure about bringing your pets to stay we welcome you to
            come and take a look at our facilities. Our staff are always at hand
            to answer any questions or concerns you may have. Mark has led the
            £250K investment project undertaken at the Tarbay Centre.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Sneak;
