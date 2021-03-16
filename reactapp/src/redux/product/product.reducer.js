import { INCR, DECR } from "./product.actions";
let initialState = {
  product_Name: "SAMSUNG Galaxy F62 (Laser Green, 128 GB)",
  product_Image:
    "https://rukminim1.flixcart.com/image/224/224/klb78nk0/mobile/m/2/k/galaxy-f62-sm-e625fzggins-samsung-original-imagygxxse8gbaby.jpeg?q=90",
  product_Price: 22000,
  product_QTY: 1,
};

let productReducer = (state = initialState, action) => {
  let { type } = action;
  switch (type) {
    case INCR:
      return {
        ...state,
        product_QTY: state.product_QTY + 1,
      };
    case DECR:
      return { ...state, product_QTY: state.product_QTY - 1 };
    default:
      return state;
  }
};

export { productReducer };
