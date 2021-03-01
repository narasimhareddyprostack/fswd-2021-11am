import React from "react";
let SingleCard = () => {
  return (
    <>
      <div className="card">
        <img src={ImageOne} alt="ImageOne" />
        <div className="card-body">
          <p>loremloremloremloremloremloremlorem</p>
          <button className="btn btn-primary"> Book Now</button>
        </div>
      </div>
    </>
  );
};
export default SingleCard;
