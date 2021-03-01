import React from "react";
import ImageOne from "../assets/img/card_1.jpg";
import ImageTwo from "../assets/img/card_2.jpg";
import ImageThree from "../assets/img/card_3.jpg";
import ImageFour from "../assets/img/card_4.jpg";

let Cards = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img src={ImageOne} alt="ImageOne" />
              <div className="card-body">
                <p>loremloremloremloremloremloremlorem</p>
                <button className="btn btn-primary"> Book Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src={ImageTwo} alt="ImageOne" />
              <div className="card-body">
                <p>loremloremloremloremloremloremlorem</p>
                <button className="btn btn-primary"> Book Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src={ImageThree} alt="ImageOne" />
              <div className="card-body">
                <p>loremloremloremloremloremloremlorem</p>
                <button className="btn btn-primary"> Book Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src={ImageFour} alt="ImageOne" />
              <div className="card-body">
                <p>loremloremloremloremloremloremlorem</p>
                <button className="btn btn-primary"> Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
