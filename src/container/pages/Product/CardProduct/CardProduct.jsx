import React, { Component } from "react";
import Counter from "./Counter";

class CardProduct extends Component {
  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/colonel_ori_pack10.jpg"
            alt="product-image"
            className="sec"
          />
        </div>
        <p className="product-title">Daging Ayam</p>
        <p className="product-price">Rp 4000</p>
        <Counter />
      </div>
    );
  }
}

export default CardProduct;
