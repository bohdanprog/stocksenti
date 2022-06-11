// import {twitterNewsController} from "../api/Api";
import {TwitterNewsType} from "../type/types";
import {AppStateType, InferActionsTypes} from "./ReduxStore";
import {ThunkAction} from "redux-thunk";
import {twitterNewsController} from "../api/Api";

let initialState = {
    twitterInfo:[] as Array <TwitterNewsType>
};

export type InitialState = typeof initialState;

const twitterNewsReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
      case 'SET_TWITTER_NEWS_LAST': {
        return {
          ...state,
          twitterInfo: action.getLastData,
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

// export const requestTwitterNewsWeekData = (getWeekData:InitialState):ThunkType => {
//   return async (dispatch) => {
//     const currentDate = new Date();
//     let DayOfWeekAgo = currentDate.setDate(currentDate.getDate() - 7);
//     let dateTime = moment(DayOfWeekAgo).format('YYYY-MM-DD');
//     let response = await twitterNewsController.twitterNewsStream(getWeekData, dateTime);
//     dispatch(setTwitterNewsWeekData(response.data));
//   };
// };
//
// export const requestTwitterNewsMonthData = (getMonthData:InitialState):ThunkType => {
//   return async (dispatch) => {
//     let currentDate = new Date();
//     let dayOfMonth = currentDate.setMonth(currentDate.getMonth() - 1);
//     let dateTime = moment(dayOfMonth).format('YYYY-MM-DD');
//     let response = await twitterNewsController.twitterNewsStream(getMonthData, dateTime);
//       dispatch(setTwitterNewsMonthData(response.data));
//   };
// };
//
// export const requestTwitterNewsYearData = (getYearData:InitialState):ThunkType => {
//   return async (dispatch) => {
//     let currentDate = new Date();
//     let currentYear = currentDate.getFullYear();
//     let dateTime = moment(currentYear).format('YYYY-MM-DD');
//     let response = await twitterNewsController.twitterNewsStream(getYearData, dateTime);
//       dispatch(setTwitterNewsYearData(response.data));
//   };
// };

export default twitterNewsReducer;
