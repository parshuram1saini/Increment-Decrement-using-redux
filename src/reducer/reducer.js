import ChangeTheNumber from "./updown";
import { combineReducers } from "redux"; // it use for combine the all reducer  . it's object
const RootReducer = combineReducers({
  ChangeTheNumber, // first reducer of  increment / decrement number
});

export default RootReducer;
