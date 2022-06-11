import {TwitterNewsType} from "../type/types";
import {AppStateType, InferActionsTypes} from "./ReduxStore";
import {ThunkAction} from "redux-thunk";
import {twitterNewsController} from "../api/Api";

let initialState = {
    twitterInfo:[] as Array <TwitterNewsType>,
    loading: true as boolean
};

export type InitialState = typeof initialState;

const twitterNewsReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
      case 'SET_TWITTER_NEWS_LAST': {
        return {
          ...state,
          twitterInfo: action.getLastData,
          loading: false
        }
      }
      default:
        return state;
    }
  };

//action creator
type ActionsTypes = InferActionsTypes<typeof actions>

const actions = {
    setTwitterNewsLast100 :(getLastData:InitialState) => ({type: 'SET_TWITTER_NEWS_LAST', getLastData} as const),
}

// thunk creator
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const requestTwitterNewsLastData = (getDayData:InitialState):ThunkType => {
  return async (dispatch) => {
    let response = await twitterNewsController.twitterNewsStream(getDayData);
      dispatch(actions.setTwitterNewsLast100(response.data));
  };
};
export default twitterNewsReducer;
