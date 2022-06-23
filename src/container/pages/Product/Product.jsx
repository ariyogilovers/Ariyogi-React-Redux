import React, { Component, Fragment } from "react";
import CardProduct from "./CardProduct/CardProduct";
import { connect } from "react-redux";
import "./Product.css";

class Product extends Component {
  // state = {
  //   order: 0,
  // };

  // handleCounterChange = (newValue) => {
  //   this.setState({
  //     order: newValue,
  //   });
  // };

  render() {
    return (
      <fragment>
        <p>Halaman Product</p>
        <hr />

        <div className="header">
          <div className="logo">
            <img
              src="https://etanee.id/img/content/img_logo_etanee_white.svg"
              alt=""
            />
          </div>
          <div className="troley">
            <img src="https://etanee.id/img/icon/ic_cart_white.svg" alt="" />
            <div className="count">{this.props.order}</div>
          </div>
        </div>
        <CardProduct />
      </fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.totalOrder,
  };
};

export default connect(mapStateToProps)(Product);
