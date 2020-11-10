import { combineReducers } from "redux";
import { counterReducer } from "../store/modules/counter/resucers"

export const createRootReducer = () =>
    combineReducers({
        counter: counterReducer
    });