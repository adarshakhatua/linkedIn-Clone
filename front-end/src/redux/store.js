import { legacy_createStore as createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { componentReducer } from "./component/reducer";
import { postReducer } from "./post/reducer";
import { userDataReducer } from "./userData/reducer";


const rootReducer = combineReducers({
    component: componentReducer,
    post: postReducer,
    userData:userDataReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)));