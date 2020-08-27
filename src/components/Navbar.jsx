import React, { Component } from "react";
import logo from "../images/SA_Co_Shield-1.png";
import { Navbar, Nav, Button } from "react-bootstrap";
export default class NavbarStrap extends Component {
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: "#000000" }} expand="lg">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              height="100"
              width="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            style={{ color: "#ffff" }}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse style={{ color: "#ffff" }} id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link style={{ color: "#ffff" }} href="#home">
                SHOP
              </Nav.Link>
              <Nav.Link style={{ color: "#ffff" }} href="#link">
                SUMMER GEAR
              </Nav.Link>
              <Nav.Link style={{ color: "#ffff" }} href="#home">
                PACK DEALS
              </Nav.Link>
              <Nav.Link style={{ color: "#ffff" }} href="#link">
                WHOLESALE / CUSTOM GEAR
              </Nav.Link>
              <Nav.Link style={{ color: "#ffff" }} href="#home">
                EXPLORE SA
              </Nav.Link>
            </Nav>
            <Button
              style={{
                color: "#ffff",
                backgroundColor: "#343a40",
                border: "solid 1px #343a40",
              }}
            >
              LOGIN
            </Button>
            <Button style={{ backgroundColor: "#30b7d4" }}>
              CART / $0.00 <i class="fas fa-shopping-cart"></i>
            </Button>{" "}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
