import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import fbLogo from "../images/fb_logo.jpg";
import twitter from "../images/twitter_logo.webp";
import insta from "../images/insta_logo.jpg";
import youtube from "../images/youtube_logo.jpg";
import girl from "../images/girl-with-dog.png";
function Customers() {
  return (
    <Container className="">
      <Row>
        <Col className="our_customer ps-1 ps-md-2 ps-lg-4" xs={12} md={6}>
          <h2>Our Happy Customers</h2>
          <p>
            We try and update ‘our happy customers’ section as regularly as we
            can. This is something we love to do and believe it gives our guests
            family an insight into their animals stay with us, and hopefully
            provide the re-assurance that your pets are in loving hands whilst
            you are away. Please feel free to like and comment on the photos you
            see below.
          </p>
          <h5>You Can Find Us On</h5>
          <div className="box_logo">
            <a href="#">
              <img src={fbLogo} width={50} height={50} alt="Facebook Logo" />
            </a>
            <a href="#">
              <img src={twitter} width={50} height={50} alt="Twitter Logo" />
            </a>
            <a href="#">
              <img src={insta} width={50} height={50} alt="Instagram Logo" />
            </a>
            <a href="#">
              <img src={youtube} width={50} height={50} alt="YouTube Logo" />
            </a>
          </div>
        </Col>
        <Col xs={12} md={6} className="girl">
          <img src={girl} width={""} height={""} />
        </Col>
      </Row>
    </Container>
  );
}

export default Customers;
