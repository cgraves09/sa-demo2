import React, { Component } from "react";
import images from "../utils/products.json";
export default class Products extends Component {
  state = {
    color: "all",
  };
  sortedProducts = (color) => {
    let products = [];
    for (let j = 0; j < images.length; j++) {
      for (let i = 0; i < images[j].color.length; i++) {
        if (images[j].color[i] === color) {
          products.push(images[j]);
        }
      }
    }
    return products.map((product) => (
      <div className="col-md-4" style={{ padding: 15 }} key={product.id}>
        <img src={product.image} alt="" className="img-thumbnail" />
        <p style={{ color: "black" }}>{product.name}</p>
        <p>{product.price}</p>
        <button
          style={{ color: "blue", background: "none" }}
          type="button"
          className="btn btn-primary"
        >
          ADD TO CART
        </button>
      </div>
    ));
  };
  renderImages = (color) => {
    switch (color) {
      case "red":
        this.setState({ color: color });
        break;
      case "white":
        this.setState({ color: color });
        break;
      case "blue":
        this.setState({ color: color });
        break;
      case "black":
        this.setState({ color: color });
        break;
      case "green":
        this.setState({ color: color });
        break;
      case "orange":
        this.setState({ color: color });
        break;
      case "camo":
        this.setState({ color: color });
        break;
      case "flag":
        this.setState({ color: color });
        break;
      case "neon":
        this.setState({ color: color });
        break;
      case "all":
        this.setState({ color: "all" });
        break;
      default:
        this.setState({ color: "all" });
    }
  };

  displayProducts = () => {
    if (this.state.color === "all") {
      return images.map((image) => (
        <div
          className="col-md-4"
          style={{ padding: 15, fontFamily: "babe neue" }}
          key={image.id}
        >
          <img
            src={image.image}
            alt=""
            style={{ border: "none", height: 400, width: 400 }}
            className="img-thumbnail"
          />
          <h5 style={{ color: "black" }}>{image.name}</h5>
          <p>{image.price}</p>
          <button
            style={{ background: "none", color: "blue" }}
            type="button"
            className="btn btn-primary"
          >
            Buy Now
          </button>
        </div>
      ));
    }
    if (this.state.color === "red") {
      return this.sortedProducts("red");
    }
    if (this.state.color === "blue") {
      return this.sortedProducts("blue");
    }
    if (this.state.color === "black") {
      return this.sortedProducts("black");
    }
    if (this.state.color === "white") {
      return this.sortedProducts("white");
    }
    if (this.state.color === "orange") {
      return this.sortedProducts("orange");
    }
    if (this.state.color === "neon") {
      return this.sortedProducts("neon");
    }
    if (this.state.color === "green") {
      return this.sortedProducts("green");
    }
    if (this.state.color === "camo") {
      return this.sortedProducts("camo");
    }
    if (this.state.color === "flag") {
      return this.sortedProducts("flag");
    }
  };
  render() {
    return (
      <div>
        <div style={{ color: "#ffff", textAlign: "center" }} className="row">
          <div className="col-md-2">
            <h1 style={{ fontFamily: "babes neue" }}>Colors</h1>
            <hr className="lineBreak" />
            <div className="row">
              <div
                onClick={() => {
                  this.renderImages("red");
                }}
                className="col-md-4"
              >
                <i style={{ color: "red" }} class="fas fa-circle"></i>
                <br />
                <button
                  style={{
                    border: "none",
                    background: "none",
                    color: "#ffff",
                    fontSize: 22,
                    padding: 5,
                  }}
                >
                  Red
                </button>
              </div>
              <div
                onClick={() => {
                  this.renderImages("black");
                }}
                className="col-md-4"
              >
                <i style={{ color: "black" }} class="fas fa-circle"></i>
                <br />
                <button
                  style={{
                    border: "none",
                    background: "none",
                    color: "#ffff",
                    fontSize: 22,
                    padding: 5,
                  }}
                >
                  Black
                </button>
              </div>
              <div
                onClick={() => {
                  this.renderImages("white");
                }}
                className="col-md-4"
              >
                <i style={{ color: "white" }} class="fas fa-circle"></i>
                <br />
                <button
                  style={{
                    border: "none",
                    background: "none",
                    color: "#ffff",
                    fontSize: 22,
                    padding: 5,
                  }}
                >
                  White
                </button>
              </div>
              <div
                onClick={() => {
                  this.renderImages("blue");
                }}
                className="col-md-4"
              >
                <i style={{ color: "blue" }} class="fas fa-circle"></i>
                <br />
                <button
                  style={{
                    border: "none",
                    background: "none",
                    color: "#ffff",
                    fontSize: 22,
                    padding: 5,
                  }}
                >
                  Blue
                </button>
              </div>
              <div
                onClick={() => {
                  this.renderImages("orange");
                }}
                className="col-md-4"
              >
                <i style={{ color: "Orange" }} class="fas fa-circle"></i>
                <br />
                <button
                  style={{
                    border: "none",
                    background: "none",
                    color: "#ffff",
                    fontSize: 22,
                    padding: 5,
                  }}
                >
                  Orange
                </button>
              </div>
              <div
                onClick={() => {
                  this.renderImages("green");
                }}
                className="col-md-4"
              >
                <i style={{ color: "Green" }} class="fas fa-circle"></i>
                <br />
                <button
                  style={{
                    border: "none",
                    background: "none",
                    color: "#ffff",
                    fontSize: 22,
                    padding: 5,
                  }}
                >
                  Green
                </button>
              </div>
              <div
                onClick={() => {
                  this.renderImages("neon");
                }}
                className="col-md-4"
              >
                <i style={{ color: "#66FF66" }} class="fas fa-circle"></i>
                <br />
                <button
                  style={{
                    border: "none",
                    background: "none",
                    color: "#ffff",
                    fontSize: 22,
                    padding: 5,
                  }}
                >
                  Neon
                </button>
              </div>
              <div
                onClick={() => {
                  this.renderImages("camo");
                }}
                className="col-md-4"
              >
                <i style={{ color: "#78866B" }} class="fas fa-circle"></i>
                <br />
                <button
                  style={{
                    border: "none",
                    background: "none",
                    color: "#ffff",
                    fontSize: 22,
                    padding: 5,
                  }}
                >
                  Camo
                </button>
              </div>
              <div
                onClick={() => {
                  this.renderImages("flag");
                }}
                className="col-md-4"
              >
                <i
                  style={{
                    color: "blue",
                  }}
                  class="fas fa-circle"
                ></i>
                <br />
                <button
                  style={{
                    border: "none",
                    background: "none",
                    color: "#ffff",
                    fontSize: 22,
                    padding: 5,
                  }}
                >
                  Flag
                </button>
              </div>
              <div
                onClick={() => {
                  this.renderImages("all");
                }}
                className="col-md-12"
              >
                <button
                  style={{
                    border: "none",
                    background: "none",
                    color: "#ffff",
                    fontSize: 22,
                    padding: 5,
                  }}
                >
                  All
                </button>
              </div>
            </div>
          </div>
          <div style={{ background: "#ffff" }} className="col-md-10">
            <div style={{ color: "black" }} className="row">
              {this.displayProducts()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
