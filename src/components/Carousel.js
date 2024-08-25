import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Col, Container, Row } from "react-bootstrap";

function Carousel() {
  return (
    <>
      <Container className="owl_carousel-container">
        <OwlCarousel className="owl-theme" loop margin={10}>
          <div class="item owl_carousel" style={{ background: "#270b79" }}>
            <p>
              Huge thank you for looking after my treasured two – they were
              relaxed and purring when I picked them up. Thank you and see you
              again at Christmas
            </p>
          </div>
          <div class="item owl_carousel" style={{ background: "#0F4E6F" }}>
            <p>
              Despite feeling bad about leaving my dogs, they don't look back
              when we approach the kennels, they love it so much!!
            </p>
          </div>
          <div class="item owl_carousel" style={{ background: "#B66D2D" }}>
            <p>
              Huge thank you for looking after my treasured two – they were
              relaxed and purring when I picked them up. Thank you and see you
              again at Christmas
            </p>
          </div>
          <div class="item owl_carousel" style={{ background: "#FE9816" }}>
            <p>
              Huge thank you for looking after my treasured two – they were
              relaxed and purring when I picked them up. Thank you and see you
              again at Christmas
            </p>
          </div>
        </OwlCarousel>
      </Container>
    </>
  );
}

export default Carousel;
