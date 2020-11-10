import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createRootReducer } from "./reducer";

export function configureStore() {
    const middlewares = [thunk];
    const store = createStore(
        createRootReducer(),
        applyMiddleware(...middlewares)
    );
    return store;
}