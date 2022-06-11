import React, {useEffect} from "react";
import {Content} from "antd/es/layout/layout";
import {Col, Row} from "antd";
import SpinnerContainer from "../../Spiner/SpinnerContainer";
import {StatisticsTwitter} from "../../Statistic/TwitterStatistics/StatisticsTwitter";
import {TwitterTabs} from "../TwitterTabs";
import {MainInfoAboutInstrument} from "./MainInfoAboutInstrument";
import {useDispatch, useSelector} from "react-redux";
import {getTwitterNews} from "../../../Selector/selector";
import {requestTwitterNewsLastData} from "../../../redux/TwitterNewsReducer";
import {TwitterSentimentType} from "../../../type/types";

type TwitterProps = {
  instrument:any
  instrumentphoto:string
  stocksymbols:string
  lastValueData:any
  logo:string
  twitterSentiment: Array<TwitterSentimentType>
}

export const TwitterFull: React.FC<TwitterProps> = React.memo(({instrument, instrumentphoto, stocksymbols, lastValueData, twitterSentiment}) =>  {
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(requestTwitterNewsLastData(instrument));
  }, [dispatch,instrument]);
  let twitterNews = useSelector(getTwitterNews);
  if (!lastValueData) {
    return <SpinnerContainer/>;
  }
  const last = lastValueData.stockvalue;
  return (
    <Content style={{width: '100%', height: '100%', minWidth: '100%', minHeight: '100%'}}>
      <MainInfoAboutInstrument instrumentphoto={instrumentphoto} stocksymbols={stocksymbols} value={last}/>
      <Row>
        <Col xs={{span: 24}} xxl={{span: 24}}><StatisticsTwitter twitterSentiment={twitterSentiment}/></Col>
      </Row>
      <Row>
        <Col xs={{span: 24}} xxl={{span: 24}}>
          <TwitterTabs logo={instrumentphoto} instrument={instrument} twitterNews={twitterNews} twitterSentiment={twitterSentiment}/>
        </Col>
      </Row>
    </Content>
  )
})