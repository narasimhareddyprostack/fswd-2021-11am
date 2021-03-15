import { INCR, DECR } from "./counter.action";

let intialState = {
  qty: 100,
};
let couterReducer = (state = intialState, action) => {
  switch (action.type) {
    case INCR:
      return {
        qty: state.qty + 1,
      };
    case DECR:
      return {
        qty: state.qty - 1,
      };
    default:
      return state;
  }
};

export { couterReducer };
