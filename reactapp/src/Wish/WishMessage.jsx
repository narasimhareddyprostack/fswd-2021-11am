import React from "react";
import {
  sayGMAction,
  sayGAAction,
  sayGNAction,
} from "../redux/wish/wish.action";
import { useSelector, useDispatch } from "react-redux";

let WishMessage = () => {
  const dispatch = useDispatch();

  let x = useSelector((state) => {
    return state.wishMessage;
  });
  let counter = useSelector((state) => {
    return state.counter;
  });

  let state = useSelector((state) => {
    return state;
  });
  let newGM = () => {
    //logic
  };
  let sayGM = () => {
    console.log("Testing First");
    //dispatch redux action
    dispatch(sayGMAction(100));
  };
  let sayGA = () => {
    //dispatch redux action
    dispatch(sayGAAction(100));
  };
  let sayGN = () => {
    //dispatch redux action
    dispatch(sayGNAction());
  };
  return (
    <React.Fragment>
      <h1> Wish Comp Message</h1>
      <div className="conatiner">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <pre>{JSON.stringify(x)}</pre>
                <pre>{JSON.stringify(counter)}</pre>
                <pre>{JSON.stringify(state)}</pre>
                <h4>Message : {x.message} </h4>
              </div>
              <div className="card-body">
                <button className="btn btn-primary ml-3" onClick={sayGM}>
                  GM
                </button>
                <button className="btn btn-success ml-3" onClick={sayGA}>
                  GA
                </button>
                <button className="btn btn-danger ml-3" onClick={sayGN}>
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
