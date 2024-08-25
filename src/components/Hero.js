import React from "react";
import Carousel from "react-bootstrap/Carousel";
import cover from "../images/dog_cover.png";
import { Button } from "react-bootstrap";
import dogHandYellow from "../images/dog_hand_yellow.png";
function Hero() {
  return (
    <>
      <div className="justify-content-center d-flex">
        <Carousel data-bs-theme="dark" className="">
          <Carousel.Item className="custom-item">
            <div className="image-container">
              <img className="img-fluid" src={cover} alt="Second slide" />
              <span className="gradient-overlay"></span>
            </div>
            <Carousel.Caption className="custom-caption">
              <h5>
                Welcome To Tarbay <span>Center</span>
              </h5>
              <p>
                The Tarbay Centre is a country retreat for dogs and cats. We
                pride ourselves on providing your pet with the best care
                possible and understand that trusting others with the welfare of
                your animals is tough. Together we will work hard to help your
                pet enjoy a long, happy and healthy life! Hopefully making dog
                or cat ownership simpler for you too.
              </p>
              <Button className="learn_btn">
                <img
                  className="me-2 mb-1 img-fluid"
                  src={dogHandYellow}
                  width={23.2}
                  height={20}
                  alt="Logo"
                />
                Learn More
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="custom-item">
            <div className="image-container">
              <img className="img-fluid" src={cover} alt="Second slide" />
              <span className="gradient-overlay"></span>
            </div>
            <Carousel.Caption className="custom-caption">
              <h5>
                Welcome To Tarbay <span>Center</span>
              </h5>
              <p>
                The Tarbay Centre is a country retreat for dogs and cats. We
                pride ourselves on providing your pet with the best care
                possible and understand that trusting others with the welfare of
                your animals is tough. Together we will work hard to help your
                pet enjoy a long, happy and healthy life! Hopefully making dog
                or cat ownership simpler for you too.
              </p>
              <Button className="learn_btn">
                <img
                  className="me-2 mb-1"
                  src={dogHandYellow}
                  width={23.2}
                  height={20}
                  alt="Logo"
                />
                Learn More
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Hero;
