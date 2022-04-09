import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import GameReducer from "./reducers/game.reducer";

const RootReducer = combineReducers({
  game: GameReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
