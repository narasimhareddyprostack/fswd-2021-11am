import { wishReducer } from "./wish/wish.reducer";
import { combineReducers } from "redux";

let rootReducer = combineReducers({ wishMessage: wishReducer });

export { rootReducer };
