import { GOODMONRING, GOODAFTERNOON, GOODNIGHT } from "./wish.action";
let initialState = {
  message: "Hello,",
};
let wishReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOODMONRING:
      return { message: "Good Morning - Reducer" };
    case GOODAFTERNOON:
      return { message: "Good Afternoon -Reducer" };
    case GOODNIGHT:
      return { message: "Good Night - Reducer" };
    default:
      return state;
  }
};
export { wishReducer };
