import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
import instrumentsReducer from "./instrumentsReducer";
import appReducer from "./appReducer";
import twitterNewsReducer from "./TwitterNewsReducer";
import stocksReducer from './stocksReducer';
import googleNewsReducer from './GoogleNewsReducer';
import postsReducer from "./postsReducer";
//combine Reducers

let rootReducer = combineReducers({
  instrumentsInfo: instrumentsReducer,
  googleNews: googleNewsReducer,
  twitterNews: twitterNewsReducer,
  app: appReducer,
  stocks: stocksReducer,
  posts: postsReducer,
});

export type RootReducerType = typeof rootReducer; // (globalState: AppStateType) = AppStateType
export type AppStateType = ReturnType<RootReducerType>

type PropertiesTypes <T> = T extends {[key:string] : infer U} ? U: never;
export type InferActionsTypes <T extends {[key:string]: (...args:any[]) => any}> = ReturnType<PropertiesTypes <T>>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//create store
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));

// @ts-ignore
window.store = store;

export default store;
