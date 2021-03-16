import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { incrAction, decrAction } from "../redux/counter/counter.actions";
let Counter = () => {
  let dispatch = useDispatch();
  let x = useSelector((state) => {
    return state;
  });
  let incrHandler = () => {
    dispatch(incrAction());
  };
  let decrHandler = () => {
    dispatch(decrAction());
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <pre>{JSON.stringify(x)}</pre>
                <h1> Counter : {x.counterNumber} </h1>
              </div>
              <div className="card-body">
                <button className="btn btn-success" onClick={incrHandler}>
                  Incrment
                </button>
                <button className="btn btn-primary ml-5" onClick={decrHandler}>
                  Decrement
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counter;
