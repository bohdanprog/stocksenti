import React from 'react';
import {Col, Divider, Row} from "antd";
import {GoogleSentimentType} from "../../../type/types";
import {LogoSocial} from "../../../Avatar/LogoSocial";
import StatisticGoogleSummaryArticle from './StatisticGoogleSummaryArticle';
import StatisticGoogleArticlePositive from './StatisticGoogleArticlePositive';
import StatisticGoogleArticleNegative from './StatisticGoogleArticleNegative';
import StatisticGoogleArticleNeutral from "./StatisticGoogleArticleNeutral";
import SpinnerContainer from "../../Spiner/SpinnerContainer";
import LogoGoogle from "../../../assets/Google.png";

type StatisticsTabsPropsType = {
  googleSentiment: Array<GoogleSentimentType>
}

export const StatisticsGoogle: React.FC<StatisticsTabsPropsType> = React.memo(({googleSentiment}) => {
  if (!googleSentiment) {
    return <SpinnerContainer/>
  }
  let getGooglePositiveAverage = 0;
  let getGoogleNegativeAverage = 0;
  let getGoogleNeutralAverage = 0;
  let getGoogleCount = 0;
  let getGooglePositiveCount = 0
  let getGoogleNegativeCount = 0
  let getGoogleNeutralCount = 0
  debugger;
  if(googleSentiment.length>0) {

  getGoogleCount = googleSentiment.reduce((prev, cur) => prev + cur.googlenewsperiodscount, 0);
  getGooglePositiveCount = googleSentiment.reduce((prev, cur) => prev + cur.googlenewsperiodstitlepositivecount, 0);
  getGoogleNegativeCount = googleSentiment.reduce((prev, cur) => prev + cur.googlenewsperiodstitlenegativecount, 0);
  getGoogleNeutralCount = getGoogleCount - getGooglePositiveCount - getGoogleNegativeCount;

  const getGooglePositiveCountFirst = googleSentiment[0].googlenewsperiodscontentpossum;
  const getGooglePositiveCountLast = googleSentiment[googleSentiment.length - 1].googlenewsperiodscontentpossum;  

  if(getGooglePositiveCountLast !== 0){
    getGooglePositiveAverage = (getGooglePositiveCountLast - getGooglePositiveCountFirst) / getGooglePositiveCountLast * 100;
  }else{
    getGooglePositiveAverage = (getGooglePositiveCountLast - getGooglePositiveCountFirst) / 1 * 100;
  }
  
  const getGoogleNegativeCountFirst = googleSentiment[0].googlenewsperiodscontentnegsum;
  const getGoogleNegativeCountLast = googleSentiment[googleSentiment.length - 1].googlenewsperiodscontentnegsum;
  if(getGoogleNegativeCountLast !== 0){
    getGoogleNegativeAverage = (getGoogleNegativeCountLast - getGoogleNegativeCountFirst) / getGoogleNegativeCountLast* 100;
  }else{
    getGoogleNegativeAverage = (getGoogleNegativeCountLast - getGoogleNegativeCountFirst) / 1* 100;
  }

  const getGoogleNeutralCountFirst = googleSentiment[0].googlenewsperiodscontentneusum;
  const getGoogleNeutralCountLast = googleSentiment[googleSentiment.length - 1].googlenewsperiodscontentneusum;
  if(getGoogleNeutralCountLast !== 0){
    getGoogleNeutralAverage = (getGoogleNeutralCountLast - getGoogleNeutralCountFirst) / getGoogleNeutralCountLast* 100;
  }else{
    getGoogleNeutralAverage = (getGoogleNeutralCountLast - getGoogleNeutralCountFirst) / 1* 100;
  }
  }

  return (
    <>
      <Divider style={{margin:5, padding:0}} />
      <Row justify='start' style={{display:'flex', marginLeft: '1rem'}}>
        <LogoSocial logo={LogoGoogle}/>
        <Col xs={{span: 5}} xxl={{span: 2}}><StatisticGoogleSummaryArticle value={getGoogleCount}/></Col>
        <Col xs={{span: 5}} xxl={{span: 2}}><StatisticGoogleArticlePositive percent={getGooglePositiveAverage}
                                                                             value={getGooglePositiveCount}/></Col>
        <Col xs={{span: 5}} xxl={{span: 2}}><StatisticGoogleArticleNegative percent={getGoogleNegativeAverage}
                                                                             value={getGoogleNegativeCount}/></Col>
        <Col xs={{span: 5}} xxl={{span: 2}}><StatisticGoogleArticleNeutral percent={getGoogleNeutralAverage}
                                                                            value={getGoogleNeutralCount}/></Col>
      </Row>
    </>
  )
})