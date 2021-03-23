import React, { useRef } from "react";

import ImageOne from "../assets/img/card_1.jpg";
import ImageTwo from "../assets/img/card_2.jpg";
let ImgEx = () => {
  let imgRef = useRef();

  let changeImage = () => {
    console.log("print HTML Tag", imgRef.current.alt);
    imgRef.current.src = ImageTwo;
  };
  return (
    <>
      <img src={ImageOne} alt="Test" height="50%" width="50%" ref={imgRef} />
      <button onClick={changeImage} disabled>
        {" "}
        Change
      </button>
    </>
  );
};

export default ImgEx;
