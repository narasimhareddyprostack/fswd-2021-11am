import React, { Component } from "react";

import { useDispatch, useSelector } from "react-redux";
import { incrAction, decrAction } from "../redux/product/product.actions";
let ProductList = () => {
  let product = useSelector((state) => state.product);

  let dispatch = useDispatch();
  let incrHandler = () => {
    dispatch(incrAction());
  };
  let decrHandler = () => {
    dispatch(decrAction());
  };
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8">
            <pre>{JSON.stringify(product)}</pre>
            <table className="table table-striped table-bordered">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Product Name</th>
                  <th scope="col">Image</th>
                  <th scope="col">No of Product</th>
                  <th scope="col">Product Price</th>
                  <th scope="col">Product Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{product.product_Name}</td>
                  <td>
                    <img
                      src={product.product_Image}
                      height="50px"
                      width="50px"
                    />
                  </td>
                  <td>
                    <i
                      className="fa fa-minus-circle"
                      aria-hidden="true"
                      onClick={decrHandler}
                    ></i>
                    {product.product_QTY}
                    <i
                      className="fa fa-plus-circle"
                      aria-hidden="true"
                      onClick={incrHandler}
                    ></i>
                  </td>
                  <td>{product.product_Price}</td>
                  <td>{product.product_QTY * product.product_Price}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
