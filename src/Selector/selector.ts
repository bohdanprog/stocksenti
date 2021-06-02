import {AppStateType} from "../redux/ReduxStore";


export const getGoogleNews = (state: AppStateType) => {
  // @ts-ignore
  return state.googleNews.googleNewsInfo
}

export const getFilter = (state: AppStateType) => {
  // @ts-ignore
  return state.googleNews.filter
}

export const getCheck = (state: AppStateType) => {
  // @ts-ignore
  return state.googleNews.articlesentiment
}

export const getStock = (state: AppStateType) => {
  // @ts-ignore
  return state.stocks.stocksInfo
}

export const getGoogleSentiment = (state: AppStateType) => {
  // @ts-ignore
  return state.stocks.sentimentGoogleInfo
}

export const getTwitterSentiment = (state: AppStateType) => {
  // @ts-ignore
  return state.stocks.sentimentTwitterInfo
}

export const getInstrumentInfo = (state: AppStateType) => {
  return state.instrumentsInfo.entityConfigList
}

export const getTwitterNews = (state:AppStateType)=> {
  // @ts-ignore
  return state.twitterNews.twitterInfo
}

export const GetAllPost = (state:AppStateType) => {
  // @ts-ignore
  return state.posts.posts;
}