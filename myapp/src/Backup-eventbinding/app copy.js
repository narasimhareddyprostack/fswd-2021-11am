import React from "react";
import Product from "./Product/Product";

import Table from "./Table/Table";
import Navbar from "./Navbar/Navbar";

import ProductInfo from "./ProductInfo/ProductInfo";

class App extends React.Component {
  name = "Iphone 5s";
  price = 56000;
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <Table />
        <hr />
        <ProductInfo x={"Hello"} y={"GM"} productName={this.name} />
      </React.Fragment>
    );
  }
}

export default App;
