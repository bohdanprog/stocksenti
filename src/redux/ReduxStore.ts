import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
//от сюда thunk импортируем это thunkMiddleware
import stockReducer from "./stockReducer";
import googleNewsReducer from "./GoogleNewsReducer";
import appReducer from "./appReducer";
//combine Reducers

let rootReducer = combineReducers({
  stocksInfo: stockReducer,
  googleNews: googleNewsReducer,
  app: appReducer,
});

type RootReducerType = typeof rootReducer; // (globalState: AppStateType) = AppStateType
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//create store
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));

// @ts-ignore
window.store = store;

export default store;
