import React from "react";
import FrontPage from "./components/FrontPage";
import Carousel from "./components/Carousel.jsx";
import Nav from "./components/Navbar.jsx";
import Products from "./components/Products.jsx";
import Footer from "./components/Footer.jsx";
import hero from "./images/UPF30.png";
import { Container, Image, Button } from "react-bootstrap";
import "./index.css";
import { Link } from "react-scroll";
function App() {
  return (
    <div className="App">
      <Nav />
      <div
        className="jumbotron"
        id="jumbo"
        style={{
          background: `url(${hero}`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      ></div>
      <div className="container-fluid">
        <Products />
      </div>
      <div className="container-fluid">
        <Footer />
      </div>
    </div>
  );
}

export default App;
