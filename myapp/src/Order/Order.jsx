import React, { Component } from "react";

class Order extends Component {
  render() {
    let { dSize, dObj } = this.props;
    return (
      <>
        <pre>{JSON.stringify(this.props)}</pre>
        <pre>{JSON.stringify(dSize)}</pre>
        <pre>{JSON.stringify(dObj)}</pre>
        <h5> {dSize[0]} </h5>
        <hr />
        <h6> {dObj.totalPrice}</h6>
        <h1> {this.props.method1()}</h1>
      </>
    );
  }
}

export default Order;
