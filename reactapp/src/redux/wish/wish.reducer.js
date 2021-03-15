import { GOODMONRING, GOODAFTERNOON, GOODNIGHT } from "./wish.action";
let initialState = {
  message: "Hello,",
  value: "",
};
let wishReducer = (state = initialState, action) => {
  console.log("inside", action);
  switch (action.type) {
    case GOODMONRING:
      return { message: "Good Morning - Reducer", value: action.payload };
    case GOODAFTERNOON:
      return { message: "Good Afternoon -Reducer" };
    case GOODNIGHT:
      return { message: "Good Night - Reducer" };
    default:
      return state;
  }
};
export { wishReducer };
