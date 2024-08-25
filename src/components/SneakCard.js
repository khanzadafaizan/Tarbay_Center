import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import cat1 from "../images/cat_image1.png";
import cat2 from "../images/cat_image22.png";
import dog1 from "../images/dog-1.png";
import dog2 from "../images/dog-2.png";
import eye from "../images/eye.png";
import dogHandLogo from "../images/dog_hand_logo.png";
import dogHandHalfr1 from "../images/dog_hand_half_r1.png";
import dogHandHalfr2 from "../images/dog_hand_half_r2.png";
function SneakCard() {
  return (
    <Container className="mt-3">
      <Row>
        <Col className="d-flex flex-wrap justify-content-sm-center gap-2 gap-md-3 p-0">
          <div className="wrapper m-auto m-md-0">
            <div className="sneak_card">
              <img src={cat1} alt="dogcat image" />
              <div className="info">
                <img className="mt-4" src={eye} alt="dogface" />
              </div>
            </div>
          </div>
          <div className="wrapper m-auto m-md-0">
            <div className="sneak_card">
              <img src={cat2} alt="dogcat image" />
              <div className="info">
                <img className="mt-4" src={eye} alt="dogface" />
              </div>
            </div>
          </div>
          <div className="wrapper m-auto m-md-0">
            <div className="sneak_card">
              <img src={dog1} alt="dogcat image" />
              <div className="info">
                <img className="mt-4" src={eye} alt="dogface" />
              </div>
            </div>
          </div>
          <div className="wrapper m-auto m-md-0">
            <div className="sneak_card">
              <img src={dog2} alt="dogcat image" />
              <div className="info">
                <img className="mt-4" src={eye} alt="dogface" />
              </div>
            </div>
          </div>
          <div className="sneak_dog_hand  d-none d-xl-block">
            <img
              src={dogHandLogo}
              className="dog_img1"
              width={76}
              height={87}
              alt="dog hand"
            />
            <img
              src={dogHandHalfr1}
              className="dog_img2"
              width={28.69}
              height={87}
              alt="dog hand"
            />
            <img
              src={dogHandLogo}
              className="dog_img3"
              width={76}
              height={87}
              alt="dog hand"
            />
            <img
              src={dogHandHalfr2}
              className="dog_img4"
              width={18.69}
              height={87}
              alt="dog hand"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SneakCard;
