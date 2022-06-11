import {googleNewsController} from "../api/Api";
import {GoogleNewsType} from "../type/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./ReduxStore";

let initialState = {
  googleNewsInfo: [] as Array<GoogleNewsType>,
  loading: true as boolean
};

type InitialState = typeof initialState;

const googleNewsReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case 'SET_LAST_DATA': {
      return {
        ...state,
        googleNewsInfo:action.getLastData,
        loading: false,
      }
    }
    default:
      return state;
  }
};

type ActionsTypes = InferActionsTypes<typeof actions>

//action creator
const actions = {
  setGoogleNewsLastData: (getLastData: InitialState) => ({type: 'SET_LAST_DATA', getLastData} as const),
}

// thunk creator
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const requestGoogleNewsLastData = (getLastData: string): ThunkType => {
  return async (dispatch) => {
    let response = await googleNewsController.googleNewsStream(getLastData);
    dispatch(actions.setGoogleNewsLastData(response.data));
  };
};

// export const requestGoogleNewsDayData = (getDayData:InitialState):ThunkType => {
//   return async (dispatch) => {
//     let response = await googleNewsController.googleNewsStream(getDayData);
//       dispatch(actions.setGoogleNewsDayData(response.data));
//   };
// };
//
// export const requestGoogleNewsWeekData = (getWeekData:InitialState):ThunkType => {
//   return async (dispatch) => {
//     const currentDate = new Date();
//     let DayOfWeekAgo = currentDate.setDate(currentDate.getDate() - 7);
//     let dateTime = moment(DayOfWeekAgo).format('YYYY-MM-DD');
//     let response = await googleNewsController.googleNewsStream(getWeekData, dateTime);
//     dispatch(actions.setGoogleNewsWeekData(response.data));
//   };
// };
//
// export const requestGoogleNewsMonthData = (getMonthData:InitialState):ThunkType => {
//   return async (dispatch) => {
//     let currentDate = new Date();
//     let dayOfMonth = currentDate.setMonth(currentDate.getMonth() - 1);
//     let dateTime = moment(dayOfMonth).format('YYYY-MM-DD');
//     let response = await googleNewsController.googleNewsStream(getMonthData, dateTime);
//       dispatch(actions.setGoogleNewsMonthData(response.data));
//   };
// };
//
// export const requestGoogleNewsYearData = (getYearData:InitialState):ThunkType => {
//   return async (dispatch) => {
//     let currentDate = new Date();
//     let currentYear = currentDate.getFullYear();
//     let dateTime = moment(currentYear).format('YYYY-MM-DD');
//     let response = await googleNewsController.googleNewsStream(getYearData, dateTime);
//       dispatch(actions.setGoogleNewsYearData(response.data));
//   };
// };

export default googleNewsReducer;
