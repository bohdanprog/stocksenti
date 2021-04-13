// import {twitterNewsController} from "../api/Api";
import moment from "moment";
const SET_DAY_DATE = 'SET_DAY_DATE';
const SET_YEAR_DATE = 'SET_YEAR_DATE';
const SET_MONTH_DATE = 'SET_MONTH_DATE';
const SET_WEEK_DATE = 'SET_WEEK_DATE';

type InitialStateType = {
    twitterInfo:[{
        "Logitude": null|number,
        "Latitude": null|number,
        "Location": null|string,
        "ProcessedSentence": null|string,
        "id": null|number,
        "location": null|string,
        "instrument": null|string,
        "content": null|string,
        "createdDate": null|number,
        "twitterId": null|number,
        "search": null|string,
        "accountID": null|string,
        "reach": null|number,
        "compound": null|number,
        "neg": null|number,
        "neu": null|number,
        "processedSentence": null|string,
        "pos": null|number,
        "logitude": null|number,
        "latitude": null|number
    }]
}

let initialState: InitialStateType = {
    twitterInfo:[{
        "Logitude": 0,
        "Latitude": 0,
        "Location": "string",
        "ProcessedSentence": "string",
        "id": 0,
        "location": "string",
        "instrument": "string",
        "content": "string",
        "createdDate": null,
        "twitterId": 0,
        "search": "string",
        "accountID": "string",
        "reach": 0,
        "compound": 0,
        "neg": 0,
        "neu": 0,
        "processedSentence": "string",
        "pos": 0,
        "logitude": 0,
        "latitude": 0
    }]
};


const twitterNewsReducer = (state = initialState, action:any) => {
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

//action creator
export const setTwitterNewsDayData = (getDayData:any) => (
  {type: SET_DAY_DATE, getDayData});

export const setTwitterNewsMonthData = (getMonthData:any) => (
  {type: SET_MONTH_DATE, getMonthData});

export const setTwitterNewsWeekData = (getWeekData:any) => (
  {type: SET_WEEK_DATE, getWeekData});

export const setTwitterNewsYearData = (getYearData:any) => (
  {type: SET_YEAR_DATE, getYearData});

// thunk creator

// export const requestTwitterNewsDayData = (getDayData:any) => {
//   return async (dispatch:any) => {
//     let response = await twitterNewsController.twitterNewsStream(getDayData);
//       dispatch(setTwitterNewsDayData(response.data));
//   };
// };
//
// export const requestTwitterNewsWeekData = (getWeekData:any) => {
//   return async (dispatch:any) => {
//     const currentDate = new Date();
//     let DayOfWeekAgo = currentDate.setDate(currentDate.getDate() - 7);
//     let dateTime = moment(DayOfWeekAgo).format('YYYY-MM-DD');
//     let response = await twitterNewsController.twitterNewsStream(getWeekData, dateTime);
//     dispatch(setTwitterNewsWeekData(response.data));
//   };
// };
//
// export const requestTwitterNewsMonthData = (getMonthData:any) => {
//   return async (dispatch:any) => {
//     let currentDate = new Date();
//     let dayOfMonth = currentDate.setMonth(currentDate.getMonth() - 1);
//     let dateTime = moment(dayOfMonth).format('YYYY-MM-DD');
//     let response = await twitterNewsController.twitterNewsStream(getMonthData, dateTime);
//       dispatch(setTwitterNewsMonthData(response.data));
//   };
// };
//
// export const requestTwitterNewsYearData = (getYearData:any) => {
//   return async (dispatch:any) => {
//     let currentDate = new Date();
//     let currentYear = currentDate.getFullYear();
//     let dateTime = moment(currentYear).format('YYYY-MM-DD');
//     let response = await twitterNewsController.twitterNewsStream(getYearData, dateTime);
//       dispatch(setTwitterNewsYearData(response.data));
//   };
// };

export default twitterNewsReducer;
