import {AppStateType} from "../redux/ReduxStore";


export const getGoogleNews = (state: AppStateType) => {
  // @ts-ignore
  return state.googleNews.googleNewsInfo
}

export const googleLoading = (state: AppStateType) => {
  // @ts-ignore
  return state.googleNews.loading
}

export const twitterLoading = (state: AppStateType) => {
  // @ts-ignore
  return state.twitterNews.loading
}

export const setButtonLoading = (state: AppStateType) => {
  // @ts-ignore
  return state.stocks.loading
}

export const getFilter = (state: AppStateType) => {
  // @ts-ignore
  return state.googleNews.filter
}

export const getCheck = (state: AppStateType) => {
  // @ts-ignore
  return state.googleNews.articlesentiment
}

export const getChart = (state: AppStateType) => {
  // @ts-ignore
  return state.stocks.chartInfo
}
export const getStock = (state: AppStateType) => {
  // @ts-ignore
  return state.stocks.stocksInfo
}

export const getPostLoader = (state: AppStateType) => {
  // @ts-ignore
  return state.posts.loading
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
  // @ts-ignore
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