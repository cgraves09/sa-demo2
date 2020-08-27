import React, { Component } from "react";
import logo from "../images/SA_Co_Shield-1.png";
import { Col, Row, Container, Image } from "react-bootstrap";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <Container
          fluid
          style={{
            backgroundColor: "#30b7d4",
            textAlign: "center",
          }}
        >
          <Row style={{ color: "#ffff", paddingTop: 30 }}>
            <Col>
              <h4 style={{ fontFamily: "Bebas Neue" }}>NEED HELP?</h4>
              <hr className="lineBreak" />
              <h6>
                <i class="fas fa-comments"></i>Visit our Customer Service Page
              </h6>
            </Col>
            <Col>
              <h4 style={{ fontFamily: "Bebas Neue" }}>Links</h4>
              <hr className="lineBreak" />
              <h6>My Account</h6>
              <h6>F.A.Q.</h6>
              <h6>Shipping Policy</h6>
              <h6>Sales Tax Policy</h6>
              <h6>Returns & Exchanges</h6>
              <h6>Privacy Policy</h6>
              <h6>Contact Us</h6>
              <h6>Newsletter Sign Up</h6>
              <h6>Face Shield® Information</h6>
              <h6>Employment</h6>
              <h6>Any & All Sponsorship</h6>
            </Col>
            <Col>
              <h4 style={{ fontFamily: "Bebas Neue" }}>PAYMENT & SHIPPING</h4>
              <hr className="lineBreak" />

              <h6>Payment Methods</h6>
              <h6>Shipping Guide</h6>
              <h6>Payment Accept Secure SSL Connection</h6>
            </Col>
            <Col>
              <h4 style={{ fontFamily: "Bebas Neue" }}>SA COMPANY</h4>
              <hr className="lineBreak" />
              <Image height="300" width="300" src={logo} />
            </Col>
          </Row>
        </Container>
        <Container
          style={{
            backgroundColor: "#000000",
            color: "#ffff",
            textAlign: "center",
          }}
          fluid
        >
          <Row>
            <Col>
              <h6>Digital Marketing Powered By: SAMA</h6>
            </Col>
            <Col>
              <h6>Copyright 2020 © SAFISHING.COM</h6>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
