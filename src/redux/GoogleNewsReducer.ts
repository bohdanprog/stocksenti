import {googleNewsController} from "../api/Api";
import {GoogleNewsType} from "../type/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./ReduxStore";

let initialState = {
  googleNewsInfo: [] as Array<GoogleNewsType>,
    // articlesentiment: '' as string
};

export type InitialState = typeof initialState;
// export type FilterData = typeof initialState.filterData;
// export type SentimentType = typeof initialState.articlesentiment;

const googleNewsReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case 'SET_LAST_DATA': {
      return {
        ...state,
        googleNewsInfo:action.getLastData,

      }
    }
    // case "SET_FILTER_DATA": {
    //   return {
    //     ...state,
    //     fgoogleNewsInfo: action.title
    //   }
    // }
    // case 'SET_RESULTS': {
    //   debugger
    //   return{
    //     ...state,
    //     articlesentiment:action.sentiment
    //   }
    // }
    // case 'SET_DAY_DATE': {
    //   return {
    //     ...state,
    //     stocksInfo: action.getDayData,
    //   }
    // }
    // case 'SET_WEEK_DATE': {
    //   return {
    //     ...state,
    //     stocksInfo: action.getWeekData,
    //   }
    // }
    // case 'SET_MONTH_DATE': {
    //   return {
    //     ...state,
    //     stocksInfo: action.getMonthData,
    //   }
    // }
    // case 'SET_YEAR_DATE': {
    //   return {
    //     ...state,
    //     stocksInfo: action.getYearData,
    //   }
    // }
    default:
      return state;
  }
};

type ActionsTypes = InferActionsTypes<typeof actions>

//action creator
const actions = {
  setGoogleNewsLastData: (getLastData: InitialState) => ({type: 'SET_LAST_DATA', getLastData} as const),
  // setFilterData: (filterData: FilterData) => ({type: 'SET_FILTER_DATA', title: filterData} as const),
  // setSentimentData: (sentiment: SentimentType) => ({type: 'SET_RESULTS', sentiment} as const),
  // setGoogleNewsDayData: (getDayData: InitialState) => ({type: 'SET_DAY_DATE', getDayData} as const),
  // setGoogleNewsWeekData: (getWeekData: InitialState) => ({type: 'SET_WEEK_DATE', getWeekData} as const),
  // setGoogleNewsMonthData: (getMonthData: InitialState) => ({type: 'SET_MONTH_DATE', getMonthData} as const),
  // setGoogleNewsYearData: (getYearData: InitialState) => ({type: 'SET_YEAR_DATE', getYearData} as const),
}

// thunk creator
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const requestGoogleNewsLastData = (getLastData: string): ThunkType => {
  return async (dispatch) => {
    let response = await googleNewsController.googleNewsStream(getLastData);
    dispatch(actions.setGoogleNewsLastData(response.data));
  };
};

export const requestGoogleNewsFindArticleStream = (title:Array<GoogleNewsType>): ThunkType => {
  return async (dispatch) => {
    debugger
    // @ts-ignore
    dispatch(actions.setGoogleNewsLastData(title));
  };
};

// export const requestGoogleNewsFilterResultsStream = (positive:string, negative:string,neutral:string, instrument: string): ThunkType => {
//   debugger;
//   return async (dispatch) => {
//     dispatch(actions.setSentimentData(positive|| negative ||neutral));
//     let response = await googleNewsController.googleNewsFilterArticleStream(positive|| negative ||neutral, instrument);
//     dispatch(actions.setGoogleNewsLastData(response.data));
//   };
// };
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
