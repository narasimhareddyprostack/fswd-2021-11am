import { wishReducer } from "./wish/wish.reducer";
import { couterReducer } from "./counter/counter.reducer";
import { combineReducers } from "redux";

let rootReducer = combineReducers({
  wishMessage: wishReducer,
  counter: couterReducer,
});

export { rootReducer };
