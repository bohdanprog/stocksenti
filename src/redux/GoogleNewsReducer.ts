import {googleNewsController} from "../api/Api";
import moment from "moment";
import {GoogleNewsType} from "../type/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./ReduxStore";
const SET_DAY_DATE = 'SET_DAY_DATE';
const SET_YEAR_DATE = 'SET_YEAR_DATE';
const SET_MONTH_DATE = 'SET_MONTH_DATE';
const SET_WEEK_DATE = 'SET_WEEK_DATE';

let initialState = {
    googleInfo: [{
        "id": undefined,
        "instrument": null,
        "createddate": null,
        "titlesentiment": null,
        "link": null,
        "title": null,
        "articleproviderlogolink": null,
        "searchphrase": null,
        "articlesentiment": null,
        "articlesentimentscore": null,
        "relatedsentenceswithsentiments": null,
        "articleprovider": null
    }] as Array <GoogleNewsType>
};

export type InitialState = typeof initialState;

const googleNewsReducer = (state = initialState, action:ActionsType)  => {
    switch (action.type) {
      case SET_DAY_DATE: {
        return {
          ...state,
          googleInfo: action.getDayData,
        }
      }
      case SET_WEEK_DATE: {
        return {
          ...state,
          googleInfo: action.getWeekData,
        }
      }
      case SET_MONTH_DATE: {
        return {
          ...state,
          googleInfo: action.getMonthData,
        }
      }
      case SET_YEAR_DATE: {
        return {
          ...state,
          googleInfo: action.getYearData,
        }
      }
      default:
        return state;
    }
  };

//action type
type ActionsType = setGoogleNewsDayDataActionType | setGoogleNewsWeekDataActionType | setGoogleNewsMonthDataActionType | setGoogleNewsYearDataActionType
type setGoogleNewsDayDataActionType ={
    type: typeof SET_DAY_DATE
    getDayData: InitialState
}
type setGoogleNewsWeekDataActionType ={
    type: typeof SET_WEEK_DATE
    getWeekData: InitialState
}
type setGoogleNewsMonthDataActionType ={
    type: typeof SET_MONTH_DATE
    getMonthData: InitialState
}
type setGoogleNewsYearDataActionType ={
    type: typeof SET_YEAR_DATE
    getYearData: InitialState
}

//action creator
export const setGoogleNewsDayData = (getDayData:InitialState): setGoogleNewsDayDataActionType => ({type: SET_DAY_DATE, getDayData});
export const setGoogleNewsWeekData = (getWeekData:InitialState): setGoogleNewsWeekDataActionType => ({type: SET_WEEK_DATE, getWeekData});
export const setGoogleNewsMonthData = (getMonthData:InitialState):setGoogleNewsMonthDataActionType => ({type: SET_MONTH_DATE, getMonthData});
export const setGoogleNewsYearData = (getYearData:InitialState): setGoogleNewsYearDataActionType => ({type: SET_YEAR_DATE, getYearData});

// thunk creator
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const requestGoogleNewsDayData = (getDayData:InitialState):ThunkType => {
  return async (dispatch) => {
    let response = await googleNewsController.googleNewsStream(getDayData);
      dispatch(setGoogleNewsDayData(response.data));
  };
};

export const requestGoogleNewsWeekData = (getWeekData:InitialState):ThunkType => {
  return async (dispatch) => {
    const currentDate = new Date();
    let DayOfWeekAgo = currentDate.setDate(currentDate.getDate() - 7);
    let dateTime = moment(DayOfWeekAgo).format('YYYY-MM-DD');
    let response = await googleNewsController.googleNewsStream(getWeekData, dateTime);
    dispatch(setGoogleNewsWeekData(response.data));
  };
};

export const requestGoogleNewsMonthData = (getMonthData:InitialState):ThunkType => {
  return async (dispatch) => {
    let currentDate = new Date();
    let dayOfMonth = currentDate.setMonth(currentDate.getMonth() - 1);
    let dateTime = moment(dayOfMonth).format('YYYY-MM-DD');
    let response = await googleNewsController.googleNewsStream(getMonthData, dateTime);
      dispatch(setGoogleNewsMonthData(response.data));
  };
};

export const requestGoogleNewsYearData = (getYearData:InitialState):ThunkType => {
  return async (dispatch) => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let dateTime = moment(currentYear).format('YYYY-MM-DD');
    let response = await googleNewsController.googleNewsStream(getYearData, dateTime);
      dispatch(setGoogleNewsYearData(response.data));
  };
};

export default googleNewsReducer;
