import React, {useEffect} from "react";
import {Content} from "antd/es/layout/layout";
import {Col, Row} from "antd";
import SpinnerContainer from "../../Spiner/SpinnerContainer";
import {StatisticsGoogle} from "../../Statistic/GoogleStatistics/StatisticsGoogle";
import {GoogleTabs} from "../GoogleTabs";
import {MainInfoAboutInstrument} from "./MainInfoAboutInstrument";
import {useDispatch, useSelector} from "react-redux";
import {getGoogleNews, googleLoading} from "../../../Selector/selector";
import {requestGoogleNewsLastData} from "../../../redux/GoogleNewsReducer";
import {GoogleSentimentType} from "../../../type/types";

type GoogleProps ={
  instrument:string
  instrumentphoto:string
  stocksymbols:string
  lastValueData:any
  googleSentiment: Array<GoogleSentimentType>
}
export const GoogleFull: React.FC<GoogleProps> = React.memo(({instrument, instrumentphoto, stocksymbols, lastValueData, googleSentiment}) =>  {
  let googleNews = useSelector(getGoogleNews);
  let loading = useSelector(googleLoading);
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestGoogleNewsLastData(instrument));
  }, [dispatch,instrument]);

  if (!lastValueData || !instrument ||!googleNews) {
    return <SpinnerContainer/>;
  }
  const last = lastValueData.stockvalue;
  return (
    <Content>
      <MainInfoAboutInstrument instrumentphoto={instrumentphoto} stocksymbols={stocksymbols} value={last}/>
      <Row>
        <Col xxl={{span: 24}}>
          <StatisticsGoogle googleSentiment={googleSentiment}/>
          </Col>
      </Row>
      <Row>
        <Col xxl={{span: 24}}>
          <GoogleTabs loading={loading} instrument={instrument} googleNews={googleNews} googleSentiment={googleSentiment}/>
        </Col>
      </Row>
    </Content>
  )
})