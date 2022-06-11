import moment from "moment";
import {GoogleSentimentType, StocksType, TwitterSentimentType} from "../type/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./ReduxStore";
import {googleNewsController, stocksController, twitterNewsController} from "../api/Api";

let initialState = {
  stocksInfo: [] as Array<StocksType>,
  sentimentGoogleInfo: [] as Array<GoogleSentimentType>,
  sentimentTwitterInfo: [] as Array<TwitterSentimentType>
};

export type InitialState = typeof initialState;

const StocksReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case 'SET_STOCK_DAY_DATE': {
      return {
        ...state,
        stocksInfo: action.getStocksDayData,
      }
    }
    case 'SET_STOCK_WEEK_DATE': {
      return {
        ...state,
        stocksInfo: action.getStocksWeekData,
      }
    }
    case 'SET_STOCK_MONTH_DATE': {
      return {
        ...state,
        stocksInfo: action.getStocksMonthData,
      }
    }
    case 'SET_STOCK_YEAR_DATE': {
      return {
        ...state,
        stocksInfo: action.getStocksYearData,
      }
    }
    case 'SET_SENTIMENT_GOOGLE_DAY_DATE': {
      return {
        ...state,
        sentimentGoogleInfo: action.getSentimentGoogleDayData,
      }
    }
    case 'SET_SENTIMENT_GOOGLE_WEEK_DATE': {
      return {
        ...state,
        sentimentGoogleInfo: action.getSentimentGoogleWeekData,
      }
    }
    case 'SET_SENTIMENT_GOOGLE_MONTH_DATE': {
      return {
        ...state,
        sentimentGoogleInfo: action.getSentimentGoogleMonthData,
      }
    }
    case 'SET_SENTIMENT_GOOGLE_YEAR_DATE': {
      return {
        ...state,
        sentimentGoogleInfo: action.getSentimentGoogleYearData,
      }
    }
    case 'SET_SENTIMENT_TWITTER_DAY_DATE': {
      return {
        ...state,
        sentimentTwitterInfo: action.getSentimentTwitterDayData,
      }
    }
    case 'SET_SENTIMENT_TWITTER_WEEK_DATE': {
      return {
        ...state,
        sentimentTwitterInfo: action.getSentimentTwitterWeekData,
      }
    }
    case 'SET_SENTIMENT_TWITTER_MONTH_DATE': {
      return {
        ...state,
        sentimentTwitterInfo: action.getSentimentTwitterMonthData,
      }
    }
    case 'SET_SENTIMENT_TWITTER_YEAR_DATE': {
      return {
        ...state,
        sentimentTwitterInfo: action.getSentimentTwitterYearData,
      }
    }
    default:
      return state;
  }
};

type ActionsTypes = InferActionsTypes<typeof actions>
//action creator
const actions = {
  setStocksDayData: (getStocksDayData: string) => ({type: 'SET_STOCK_DAY_DATE', getStocksDayData} as const),
  setStocksWeekData: (getStocksWeekData: string) => ({type: 'SET_STOCK_WEEK_DATE', getStocksWeekData} as const),
  setStocksMonthData: (getStocksMonthData: string) => ({
    type: 'SET_STOCK_MONTH_DATE',
    getStocksMonthData
  } as const),
  setStocksYearData: (getStocksYearData: InitialState) => ({type: 'SET_STOCK_YEAR_DATE', getStocksYearData} as const),
  setSentimentGoogleDayData: (getSentimentGoogleDayData: string) => ({
    type: 'SET_SENTIMENT_GOOGLE_DAY_DATE',
    getSentimentGoogleDayData
  } as const),
  setSentimentGoogleWeekData: (getSentimentGoogleWeekData: string) => ({
    type: 'SET_SENTIMENT_GOOGLE_WEEK_DATE',
    getSentimentGoogleWeekData
  } as const),
  setSentimentGoogleMonthData: (getSentimentGoogleMonthData: string) => ({
    type: 'SET_SENTIMENT_GOOGLE_MONTH_DATE',
    getSentimentGoogleMonthData
  } as const),
  setSentimentGoogleYearData: (getSentimentGoogleYearData: string) => ({
    type: 'SET_SENTIMENT_GOOGLE_YEAR_DATE',
    getSentimentGoogleYearData
  } as const),
  setSentimentTwitterDayData: (getSentimentTwitterDayData: string) => ({
    type: 'SET_SENTIMENT_TWITTER_DAY_DATE',
    getSentimentTwitterDayData
  } as const),
  setSentimentTwitterWeekData: (getSentimentTwitterWeekData: string) => ({
    type: 'SET_SENTIMENT_TWITTER_WEEK_DATE',
    getSentimentTwitterWeekData
  } as const),
  setSentimentTwitterMonthData: (getSentimentTwitterMonthData: string) => ({
    type: 'SET_SENTIMENT_TWITTER_MONTH_DATE',
    getSentimentTwitterMonthData
  } as const),
  setSentimentTwitterYearData: (getSentimentTwitterYearData: string) => ({
    type: 'SET_SENTIMENT_TWITTER_YEAR_DATE',
    getSentimentTwitterYearData
  } as const),
}
// thunk creator
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

//Stocks
export const requestStocksDay = (getStocksDayData: string): ThunkType => {
  return async (dispatch) => {
    let response = await stocksController.stocksStream(getStocksDayData)
    dispatch(actions.setStocksDayData(response.data));
  };
};
export const requestStocksWeek = (getStocksDayData: string): ThunkType => {
  return async (dispatch) => {
    const currentDate = new Date();
    let DayOfWeekAgo = currentDate.setDate(currentDate.getDate() - 7);
    let dateTime: any = moment(DayOfWeekAgo).format('YYYY-MM-DD[T]HH:mm:ss');
    let response = await stocksController.stocksStream(getStocksDayData, dateTime);
    dispatch(actions.setStocksWeekData(response.data));
  };
};
export const requestStocksMonth = (getStocksDayData: string): ThunkType => {
  return async (dispatch) => {
    let currentDate = new Date();
    let dayOfMonth = currentDate.setMonth(currentDate.getMonth() - 1);
    let dateTime: any = moment(dayOfMonth).format('YYYY-MM-DD[T]HH:mm:ss');
    let response = await stocksController.stocksStream(getStocksDayData, dateTime)
    dispatch(actions.setStocksMonthData(response.data));
  };
};
export const requestStocksYear = (getStocksDayData: string): ThunkType => {
  return async (dispatch) => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let dateTime: any = moment(currentYear).format('YYYY-MM-DD[T]HH:mm:ss');
    let response = await stocksController.stocksStream(getStocksDayData, dateTime)
    dispatch(actions.setStocksYearData(response.data));
  };
};

//Sentiment Google
export const requestGoogleSentimentDay = (getGoogleSentimentDayData: string): ThunkType => {
  return async (dispatch) => {
    let response = await googleNewsController.googleNewsPeriodStream(getGoogleSentimentDayData)
    dispatch(actions.setSentimentGoogleDayData(response.data));
  };
};
export const requestGoogleSentimentWeek = (getGoogleSentimentWeekData: string): ThunkType => {
  return async (dispatch) => {
    const currentDate = new Date();
    let DayOfWeekAgo = currentDate.setDate(currentDate.getDate() - 7);
    let dateTime: any = moment(DayOfWeekAgo).format('YYYY-MM-DD[T]HH:mm:ss');
    let response = await googleNewsController.googleNewsPeriodStream(getGoogleSentimentWeekData, dateTime)
    dispatch(actions.setSentimentGoogleWeekData(response.data));
  };
};
export const requestGoogleSentimentMonth = (getGoogleSentimentMonthData: string): ThunkType => {
  return async (dispatch) => {
    let currentDate = new Date();
    let dayOfMonth = currentDate.setMonth(currentDate.getMonth() - 1);
    let dateTime: any = moment(dayOfMonth).format('YYYY-MM-DD[T]HH:mm:ss');
    let response = await googleNewsController.googleNewsPeriodStream(getGoogleSentimentMonthData, dateTime)
    debugger;
    dispatch(actions.setSentimentGoogleMonthData(response.data));
  };
};
export const requestGoogleSentimentYear = (getGoogleSentimentYearData: string): ThunkType => {
  return async (dispatch) => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let dateTime: any = moment(currentYear).format('YYYY-MM-DD[T]HH:mm:ss');
    let response = await googleNewsController.googleNewsPeriodStream(getGoogleSentimentYearData, dateTime)
    dispatch(actions.setSentimentGoogleYearData(response.data));
  };
};

//Sentiment Twitter
export const requestTwitterSentimentDay = (getTwitterSentimentDayData: string): ThunkType => {
  return async (dispatch) => {
    let response = await twitterNewsController.twitterNewsPeriodStream(getTwitterSentimentDayData)
    dispatch(actions.setSentimentTwitterDayData(response.data));
  };
};
export const requestTwitterSentimentWeek = (getTwitterSentimentWeekData: string): ThunkType => {
  return async (dispatch) => {
    const currentDate = new Date();
    let DayOfWeekAgo = currentDate.setDate(currentDate.getDate() - 7);
    let dateTime: any = moment(DayOfWeekAgo).format('YYYY-MM-DD[T]HH:mm:ss');
    let response = await twitterNewsController.twitterNewsPeriodStream(getTwitterSentimentWeekData, dateTime);
    debugger;
    dispatch(actions.setSentimentTwitterWeekData(response.data));
  };
};
export const requestTwitterSentimentMonth = (getTwitterSentimentMonthData: string): ThunkType => {
  return async (dispatch) => {
    let currentDate = new Date();
    let dayOfMonth = currentDate.setMonth(currentDate.getMonth() - 1);
    let dateTime: any = moment(dayOfMonth).format('YYYY-MM-DD[T]HH:mm:ss');
    let response = await twitterNewsController.twitterNewsPeriodStream(getTwitterSentimentMonthData, dateTime)
    dispatch(actions.setSentimentTwitterMonthData(response.data));
  };
};
export const requestTwitterSentimentYear = (getTwitterSentimentYearData: string): ThunkType => {
  return async (dispatch) => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let dateTime: any = moment(currentYear).format('YYYY-MM-DD[T]HH:mm:ss');
    let response = await twitterNewsController.twitterNewsPeriodStream(getTwitterSentimentYearData, dateTime)
    dispatch(actions.setSentimentTwitterYearData(response.data));
  };
};
export default StocksReducer;
