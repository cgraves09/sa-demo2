import React, { Component, useState } from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Products from "./Products";
import Footer from "./Footer";
export default class FrontPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
        <hr style={{ border: "solid 2px #30b7d4", width: "80%" }} />
        <Products />
        <br />
        <Footer />
      </div>
    );
  }
}
