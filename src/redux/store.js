import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import logger from "redux-logger";
import authReducer from "./reducers/auth";
import tasksReducer from "./reducers/tasks";
import themeReducer from "./reducers/theme";

const rootReducer = combineReducers({
    auth: authReducer,
    tasks: tasksReducer,
    theme: themeReducer
});

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
            thunk//,
            // logger
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : args => args
    )
);

export default store;
