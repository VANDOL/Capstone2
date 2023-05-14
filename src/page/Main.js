import React from "react";
import { Carousel } from "react-bootstrap";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/banner1.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/banner2.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/banner3.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <Container>
    <Row>
      <Col>
        <img/>
        <h4></h4>
      <p></p>
      <p></p>
      </Col>
    </Row>
  </Container>
  
  );
}

export default UncontrolledExample;
