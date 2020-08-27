import React, { Component } from "react";
import armBands from "../images/armBands.png";
import faceShields from "../images/faceShields.png";
import headwear from "../images/headwear.png";
import kids from "../images/kids.png";
import shirts from "../images/shirts.png";
import strawHats from "../images/strawHats.png";
import summer from "../images/summer.png";
import hero from "../images/saGraphicTest.png";
import { Carousel, Container, Image } from "react-bootstrap";
import ReactPlayer from "react-player";
import video from "../images/video.mp4";
export default class CarouselComponent extends Component {
  render() {
    return (
      <div
        className="jumbotron"
        style={{ backgroundImage: `url(${hero})`, height: "100%" }}
      ></div>
    );
  }
}
