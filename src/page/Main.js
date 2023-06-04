import React from "react";
import { Carousel } from "react-bootstrap";
import { Navigate } from "react-router-dom";

function Main(props) {
  const isLogin = props.isLogin;
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/basketball1.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Main;
