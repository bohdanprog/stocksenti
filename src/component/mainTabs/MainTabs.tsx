import React, {useEffect} from "react";
import {TabsConnect} from "../Tabs/Tabs";
import {useDispatch, useSelector} from "react-redux";
import {requestGoogleSentimentDay, requestStocksDay, requestTwitterSentimentDay} from "../../redux/stocksReducer";
import {getGoogleSentiment, getStock, getTwitterSentiment} from "../../Selector/selector";
import {GoogleSentimentType, TwitterSentimentType} from "../../type/types";
import SpinnerContainer from "../Spiner/SpinnerContainer";

type PropsType = {
  instrument: string
  stocksymbols: string
  instrumentphoto: string
}

export const MainTabs: React.FC<PropsType> = React.memo(({instrument, instrumentphoto, stocksymbols}) => {

  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(requestTwitterSentimentDay(instrument))
    dispatch(requestGoogleSentimentDay(instrument))
    dispatch(requestStocksDay(instrument))
  }, [dispatch, instrument]);
  const stocksData = useSelector(getStock);
  let lastValueData = stocksData.pop();
  const twitterSentiment:Array<TwitterSentimentType> = useSelector(getTwitterSentiment);
  const googleSentiment: Array<GoogleSentimentType> = useSelector(getGoogleSentiment);
  if (lastValueData === false) {
    return <SpinnerContainer/>;
  }
  return (
    <React.Fragment>
      <TabsConnect instrument={instrument} instrumentphoto={instrumentphoto} googleSentiment={googleSentiment}
                   twitterSentiment={twitterSentiment} stocksymbols={stocksymbols} lastValueData={lastValueData}
                   logo={instrumentphoto}/>
    </React.Fragment>
  )
})