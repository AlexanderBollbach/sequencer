import { createStore, compose, applyMiddleware } from "redux";

import { audioMiddleware, clockMiddleware } from "./Middleware";
import rootReducer from "Redux/Reducers/RootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(audioMiddleware, clockMiddleware);

export default createStore(rootReducer, composeEnhancers(middleware));
