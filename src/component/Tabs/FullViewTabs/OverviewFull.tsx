import React from "react";
import {Content} from "antd/es/layout/layout";
import {Col, Row} from "antd";
import {OverviewTabs} from "../OverviewTabs";
import SpinnerContainer from "../../Spiner/SpinnerContainer";
import {StatisticsGoogle} from "../../Statistic/GoogleStatistics/StatisticsGoogle";
import {StatisticsTwitter} from "../../Statistic/TwitterStatistics/StatisticsTwitter";
import {MainInfoAboutInstrument} from "./MainInfoAboutInstrument";
import {GoogleSentimentType, TwitterSentimentType} from "../../../type/types";

type OverviewProps = {
  instrument:string
  instrumentphoto:string
  stocksymbols:string
  lastValueData: any
  googleSentiment: Array<GoogleSentimentType>
  twitterSentiment: Array<TwitterSentimentType>
}

export const OverviewFull: React.FC<OverviewProps> = React.memo(({instrument, instrumentphoto, stocksymbols,
                                                                   lastValueData, twitterSentiment, googleSentiment}) =>  {
  if (!lastValueData) {
    return <SpinnerContainer/>;
  }
  const last = lastValueData.stockvalue;
  return (
    <Content style={{width: '100%', height: '100%', minWidth: '100%', minHeight: '100%', justifyContent:'end'}}>
      <MainInfoAboutInstrument instrumentphoto={instrumentphoto} stocksymbols={stocksymbols} value={last}/>
      <Row>
        <Col xs={{span: 24}} xxl={{span: 24}}><StatisticsGoogle googleSentiment={googleSentiment}/></Col>
        <Col xs={{span: 24}} xxl={{span: 24}}><StatisticsTwitter twitterSentiment={twitterSentiment}/></Col>
      </Row>
      <Row>
        <Col xs={{span: 24}} xxl={{span: 24}}>
          <OverviewTabs  instrument={instrument} googleSentiment={googleSentiment} twitterSentiment={twitterSentiment}/>
        </Col>
      </Row>
    </Content>
  )
})