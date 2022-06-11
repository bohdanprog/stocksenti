import moment from "moment";
import {ChartI, GoogleSentimentType, StocksType, TwitterSentimentType} from "../type/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./ReduxStore";
import {chartController, googleNewsController, stocksController, twitterNewsController} from "../api/Api";

let initialState = {
  stocksInfo: [] as Array<StocksType>,
  sentimentGoogleInfo: [] as Array<GoogleSentimentType>,
  sentimentTwitterInfo: [] as Array<TwitterSentimentType>,
  chartInfo: [] as Array<ChartI>,
  loading: true as boolean
};

type InitialState = typeof initialState;

const StocksReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case 'SET_STOCK_DAY_DATE': {
      return {
        ...state,
        stocksInfo: action.getStocksDayData,
        loading: false
      }
    }
    case 'SET_STOCK_WEEK_DATE': {
      return {
        ...state,
        stocksInfo: action.getStocksWeekData,
        loading: false
      }
    }
    case 'SET_STOCK_MONTH_DATE': {
      return {
        ...state,
        stocksInfo: action.getStocksMonthData,
        loading: false
      }
    }
    case 'SET_STOCK_YEAR_DATE': {
      return {
        ...state,
        stocksInfo: action.getStocksYearData,
        loading: false
      }
    }
    case 'SET_CHART_DAY_DATE': {
      return {
        ...state,
        chartInfo: action.getChartDayData,
      }
    }
    case 'SET_CHART_WEEK_DATE': {
      return {
        ...state,
        chartInfo: action.getChartWeekData,
      }
    }
    case 'SET_CHART_MONTH_DATE': {
      return {
        ...state,
        chartInfo: action.getChartMonthData,
      }
    }
    case 'SET_CHART_YEAR_DATE': {
      return {
        ...state,
        chartInfo: action.getChartYearData,
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
  setStocksDayData: (getStocksDayData: InitialState) => ({type: 'SET_STOCK_DAY_DATE', getStocksDayData} as const),
  setStocksWeekData: (getStocksWeekData: InitialState) => ({type: 'SET_STOCK_WEEK_DATE', getStocksWeekData} as const),
  setStocksMonthData: (getStocksMonthData: InitialState) => ({type: 'SET_STOCK_MONTH_DATE', getStocksMonthData} as const),
  setStocksYearData: (getStocksYearData: InitialState) => ({type: 'SET_STOCK_YEAR_DATE', getStocksYearData} as const),
  setChartDayData: (getChartDayData: InitialState) => ({type: 'SET_CHART_DAY_DATE',getChartDayData} as const),
  setChartWeekData: (getChartWeekData: InitialState) => ({type: 'SET_CHART_WEEK_DATE',getChartWeekData} as const),
  setChartMonthData: (getChartMonthData: InitialState) => ({type: 'SET_CHART_MONTH_DATE',getChartMonthData} as const),
  setChartYearData: (getChartYearData: InitialState) => ({type: 'SET_CHART_YEAR_DATE',getChartYearData} as const),
  setSentimentGoogleDayData: (getSentimentGoogleDayData: InitialState) => ({type: 'SET_SENTIMENT_GOOGLE_DAY_DATE',getSentimentGoogleDayData} as const),
  setSentimentGoogleWeekData: (getSentimentGoogleWeekData: InitialState) => ({type: 'SET_SENTIMENT_GOOGLE_WEEK_DATE', getSentimentGoogleWeekData} as const),
  setSentimentGoogleMonthData: (getSentimentGoogleMonthData: InitialState) => ({type: 'SET_SENTIMENT_GOOGLE_MONTH_DATE', getSentimentGoogleMonthData} as const),
  setSentimentGoogleYearData: (getSentimentGoogleYearData: InitialState) => ({type: 'SET_SENTIMENT_GOOGLE_YEAR_DATE', getSentimentGoogleYearData} as const),
  setSentimentTwitterDayData: (getSentimentTwitterDayData: InitialState) => ({type: 'SET_SENTIMENT_TWITTER_DAY_DATE', getSentimentTwitterDayData} as const),
  setSentimentTwitterWeekData: (getSentimentTwitterWeekData: InitialState) => ({type: 'SET_SENTIMENT_TWITTER_WEEK_DATE', getSentimentTwitterWeekData} as const),
  setSentimentTwitterMonthData: (getSentimentTwitterMonthData: InitialState) => ({type: 'SET_SENTIMENT_TWITTER_MONTH_DATE', getSentimentTwitterMonthData} as const),
  setSentimentTwitterYearData: (getSentimentTwitterYearData: InitialState) => ({type: 'SET_SENTIMENT_TWITTER_YEAR_DATE', getSentimentTwitterYearData} as const),
}
// thunk creator
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>


/////chart
export const requestChartDay = (getStocksDayData: string): ThunkType => {
  return async (dispatch) => {
    let sDate = new Date();
    let yesterday = sDate.setDate((sDate.getDate() - 1));
    let endDate = moment(yesterday).format('YYYY-MM-DD HH:mm:ss');
    let response = await chartController.chartStream(getStocksDayData, endDate)
    dispatch(actions.setChartDayData(response.data));
  };
};
export const requestChartWeek = (getStocksWeekData: string): ThunkType => {
  return async (dispatch) => {
    const currentDate = new Date();
    let DayOfWeekAgo = currentDate.setDate(currentDate.getDate() - 7);
    let dateTime: any = moment(DayOfWeekAgo).format('YYYY-MM-DD HH:mm:ss');
    let response = await chartController.chartStream(getStocksWeekData, dateTime);
    dispatch(actions.setChartWeekData(response.data));
  };
};
export const requestChartMonth = (getStocksMonthData: string): ThunkType => {
  return async (dispatch) => {
    let currentDate = new Date();
    let dayOfMonth = currentDate.setMonth(currentDate.getMonth() - 1);
    let dateTime: any = moment(dayOfMonth).format('YYYY-MM-DD HH:mm:ss');
    let response = await chartController.chartStream(getStocksMonthData, dateTime)
    dispatch(actions.setChartMonthData(response.data));
  };
};
export const requestChartYear = (getStocksYearData: string): ThunkType => {
  return async (dispatch) => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let dateTime: any = moment(currentYear).format('YYYY-MM-DD HH:mm:ss');
    let response = await chartController.chartStream(getStocksYearData, dateTime)
    dispatch(actions.setChartYearData(response.data));
  };
};

//Stocks
export const requestStocksDay = (getStocksDayData: string): ThunkType => {
  return async (dispatch) => {
    let response = await stocksController.stocksStream(getStocksDayData)
    dispatch(actions.setStocksDayData(response.data));
  };
};
export const requestStocksWeek = (getStocksWeekData: string): ThunkType => {
  return async (dispatch) => {
    const currentDate = new Date();
    let DayOfWeekAgo = currentDate.setDate(currentDate.getDate() - 7);
    let dateTime: any = moment(DayOfWeekAgo).format('YYYY-MM-DD[T]HH:mm:ss');
    let response = await stocksController.stocksStream(getStocksWeekData, dateTime);
    dispatch(actions.setStocksWeekData(response.data));
  };
};
export const requestStocksMonth = (getStocksMonthData: string): ThunkType => {
  return async (dispatch) => {
    let currentDate = new Date();
    let dayOfMonth = currentDate.setMonth(currentDate.getMonth() - 1);
    let dateTime: any = moment(dayOfMonth).format('YYYY-MM-DD[T]HH:mm:ss');
    let response = await stocksController.stocksStream(getStocksMonthData, dateTime)
    dispatch(actions.setStocksMonthData(response.data));
  };
};
export const requestStocksYear = (getStocksYearData: string): ThunkType => {
  return async (dispatch) => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let dateTime: any = moment(currentYear).format('YYYY-MM-DD[T]HH:mm:ss');
    let response = await stocksController.stocksStream(getStocksYearData, dateTime)
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
