import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";

import { compose } from "redux";
import { rootReducer } from "../Servises/reducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
   rootReducer ,composeEnhancers(applyMiddleware(thunk))
)