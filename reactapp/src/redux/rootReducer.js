import { wishReducer } from "./wish/wish.reducer";
import { couterReducer } from "./counter/counter.reducer";
import { combineReducers } from "redux";
import { productReducer } from "./product/product.reducer";

let rootReducer = combineReducers({
  wishMessage: wishReducer,
  counter: couterReducer,
  product: productReducer,
});

export { rootReducer };
