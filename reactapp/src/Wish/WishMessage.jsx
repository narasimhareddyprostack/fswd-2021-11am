import React from "react";
import {
  sayGMAction,
  sayGAAction,
  sayGNAction,
} from "../redux/wish/wish.action";
import { useSelector, useDispatch } from "react-redux";
let WishMessage = () => {
  const dispatch = useDispatch();
  sayGM = () => {
    //dispatch redux action
    dispatch(sayGMAction);
  };
  sayGA = () => {
    //dispatch redux action
    dispatch(sayGAAction);
  };
  sayGN = () => {
    //dispatch redux action
    dispatch(sayGNAction);
  };
  return (
    <React.Fragment>
      <h1> Wish Comp Message</h1>
      <div className="conatiner">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h4>Message : Hello</h4>
              </div>
              <div className="card-body">
                <button className="btn btn-primary ml-3" onClick={this.sayGM}>
                  GM
                </button>
                <button className="btn btn-success ml-3" onClick={this.sayGA}>
                  {" "}
                  GA
                </button>
                <button className="btn btn-danger ml-3" onClick={this.sayGN}>
                  {" "}
                  GN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WishMessage;
