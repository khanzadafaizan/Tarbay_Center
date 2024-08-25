import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import rspcaImg from "../images/rspca.png";
import dogHandYellow from "../images/dog_hand_yellow.png";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import dogHandLogo from "../images/dog_hand_logo.png";
import dogHandHalf from "../images/dog_hand_half.png";
import dogHandHalf2 from "../images/dog_hand_half2.png";
function Footer() {
  return (
    <div className="footer">
      <Container>
        <div className="footer_dog_hand d-none d-xl-block">
          <img
            className="dog_img1"
            src={dogHandHalf}
            width={42.69}
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
            width={38.69}
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
        <Row>
          <Col
            xs={12}
            className="border-bottom d-flex flex-wrap justify-content-md-around py-5 footer_container"
          >
            <ul>
              TARBAY Centre
              <li>
                <p>
                  Our goal Is to become your partner in all of pet care needs
                  and to establish that partnership upon a solid foundation of
                  comprehensive wellness care. Together we will work hard to
                  help your pet enjoy a long, happy and healthy life! And
                  hopefully make dog ownership simpler for you too.
                </p>
              </li>
            </ul>
            <ul>
              TARBAY SHOP
              <li>
                <p>
                  We sell a wide range of hypo-allergenic dog and cat food.
                  Please ask a member of staff on arrival or alternatively send
                  us an enquiry.
                </p>
              </li>
              <li>
                <a href="3" className="learn_btn">
                  <img
                    className="me-2 mb-1"
                    src={dogHandYellow}
                    width={17.01}
                    height={15}
                    alt="Logo"
                  />
                  Learn More
                </a>
              </li>
            </ul>
            <ul>
              KEEP IN TOUCH
              <li>
                <FaRegArrowAltCircleRight className="arrow_right" />
                <a href="#">The Team</a>
              </li>
              <li>
                <FaRegArrowAltCircleRight className="arrow_right" />
                <a href="#">Exercise Paddocks</a>
              </li>
              <li>
                <FaRegArrowAltCircleRight className="arrow_right" />
                <a href="#">Cats</a>
              </li>
              <li>
                <FaRegArrowAltCircleRight className="arrow_right" />
                <a href="#">Complete Care</a>
              </li>
              <li>
                <FaRegArrowAltCircleRight className="arrow_right" />
                <a href="#">For The Dogs</a>
              </li>
              <li>
                <FaRegArrowAltCircleRight className="arrow_right" />
                <a href="#">Shop</a>
              </li>
            </ul>
            <ul>
              KEEP IN TOUCH
              <li>
                <p href="#">
                  {" "}
                  We would love to hear your feedback. Follow us on our social
                  media links.{" "}
                </p>
              </li>
              <li className="social_media">
                <a href="#">
                  <FaFacebook className="icons" />
                </a>
                <a href="#">
                  <FaInstagram className="icons" />
                </a>
                <a href="#">
                  <FaLinkedin className="icons" />
                </a>
              </li>
              <li className="footer-email-phone">
                <MdOutlineMail className="footer-icon" />
                <a href="#" className="footer-icon-text">
                  info@tarbaycenter.com{" "}
                </a>
              </li>
              <li className="footer-email-phone">
                <FaPhoneVolume className="footer-icon" />
                <a href="#" className="footer-icon-text">
                  +14401753868688{" "}
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} className="py-3 py-md-3 py-lg-5">
            <ul className="footer-bottom">
              <li>
                Copyright 2022 . All Rights Reserved.
                <span>The Tarbay Centre Ltd.</span>
              </li>
              <li>
                Rspca Approved
                <img
                  className="ms-2"
                  src={rspcaImg}
                  width={70}
                  height={40}
                  alt="RSPA Logo"
                />
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
