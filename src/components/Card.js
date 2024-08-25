import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import dogFace from "../images/dog_face.png";
import dogHandYellow from "../images/dog_hand_yellow.png";
import catFace from "../images/cat_face.png";
import dogHandBorder from "../images/dog_hand_white_b.png";
import dogHandLogo from "../images/dog_hand_logo.png";
import dogHandHalf from "../images/dog_hand_half.png";
import dogHandHalf2 from "../images/dog_hand_half2.png";
import dogCat1 from "../images/dog_cat1.png";
import dogs from "../images/dog_cat22.png";
import dogCat2 from "../images/dog_cat33.png";
function Card() {
  return (
    <Container>
      <Row>
        <Col
          xs={12}
          className="d-flex flex-wrap justify-content-sm-center gap-2 gap-md-3 py-4 p-0"
        >
          <div className="card_dog_hand d-none d-xl-block">
            <img
              className="dog_img1"
              src={dogHandHalf}
              width={28}
              height={87}
              alt="dog hand"
            />
            <img
              className="dog_img2"
              src={dogHandLogo}
              width={76}
              height={87}
              alt="dog hand"
            />
            <img
              className="dog_img3"
              src={dogHandHalf2}
              width={18.69}
              height={87}
              alt="dog hand"
            />
            <img
              className="dog_img4"
              src={dogHandLogo}
              width={76}
              height={87}
              alt="dog hand"
            />
          </div>
          {/* card1 section start */}
          <div className="wrapper m-auto m-md-0">
            <div className="image">
              <img src={dogCat1} alt="dogcat image" />
              <div className="info">
                <div className="block-content">
                  <img
                    className="dog-face"
                    src={dogFace}
                    width={103.15}
                    height={90}
                    alt="dogface"
                  />
                  <h5>Kennels And Cattery</h5>
                </div>
                <div className="hidden-content">
                  <p>
                    The Tarbay Centre caters for all your pets needs. We are
                    away from noisy, busy roads and have undergone some big
                    changes and upgrades that needed to be done to maintain our
                    high standards of pet care.
                  </p>
                  <Button className="learn_btn">
                    <img
                      className="me-2 mb-1"
                      src={dogHandYellow}
                      width={14.75}
                      height={13}
                      alt="Logo"
                    />
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* card1 section end */}
          {/* card2 section start */}
          <div className="wrapper m-auto m-md-0">
            <div className="image">
              <img src={dogs} alt="dogcat image" />
              <div className="info2">
                <div className="block-content">
                  <img
                    className="mt-4"
                    src={catFace}
                    width={103.15}
                    height={100}
                    alt="dogface"
                  />
                  <h5>Exercise Facilities</h5>
                </div>
                <div className="hidden-content">
                  <p>
                    The Tarbay Centre caters for all your pets needs. We are
                    away from noisy, busy roads and have undergone some big
                    changes and upgrades that needed to be done to maintain our
                    high standards of pet care.
                  </p>
                  <Button className="learn_btn">
                    <img
                      className="me-2 mb-1"
                      src={dogHandYellow}
                      width={14.75}
                      height={13}
                      alt="Logo"
                    />
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* card2 section end */}
          {/* card3 section start */}
          <div className="wrapper m-auto m-md-0">
            <div className="image">
              <img src={dogCat2} alt="dogcat image" />
              <div className="info2">
                <div className="block-content">
                  <img
                    className="mt-4 img-dog-hand"
                    src={dogHandBorder}
                    width={103.15}
                    height={90}
                    alt="dogface"
                  />
                  <h5>Complete Care</h5>
                </div>
                <div className="hidden-content">
                  <p>
                    The Tarbay Centre caters for all your pets needs. We are
                    away from noisy, busy roads and have undergone some big
                    changes and upgrades that needed to be done to maintain our
                    high standards of pet care.
                  </p>
                  <Button className="learn_btn">
                    <img
                      className="me-2 mb-1"
                      src={dogHandYellow}
                      width={14.75}
                      height={13}
                      alt="Logo"
                    />
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* card3 section end */}
        </Col>
      </Row>
    </Container>
  );
}

export default Card;
