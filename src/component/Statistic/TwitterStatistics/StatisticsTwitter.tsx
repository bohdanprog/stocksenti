import React from 'react';
import {Col, Divider, Row} from "antd";
import {TwitterSentimentType} from "../../../type/types";
import {LogoSocial} from "../../../Avatar/LogoSocial";
import StatisticTwitterSummaryArticle from './StatisticTwitterSummaryArticle';
import StatisticTwitterArticlePositive from './StatisticTwitterArticlePositive';
import StatisticTwitterArticleNegative from './StatisticTwitterArticleNegative';
import LogoTwitter from "../../../assets/twitter-icon.svg";
import StatisticTwitterArticleNeutral from "./StatisticTwitterArticleNeutral";

type StatisticsTabsPropsType = {
  twitterSentiment: Array<TwitterSentimentType>
}

export const StatisticsTwitter: React.FC<StatisticsTabsPropsType> = React.memo(({twitterSentiment}) => {
  const getTwitterCount: number = twitterSentiment.reduce((prev, cur) => prev + cur.tweetperiodscount, 0);
  const getTwitterPositiveCount: number = twitterSentiment.reduce((prev, cur) => prev + cur.tweetperiodspositivecount, 0);
  const getTwitterNegativeCount: number = twitterSentiment.reduce((prev, cur) => prev + cur.tweetperiodsnegativecount, 0);
  const getTwitterNeutralCount: number = twitterSentiment.reduce((prev, cur) => prev + cur.tweetperiodsneutralcount, 0);

  var getTwitterPositiveAverage = 0;
  var getTwitterNegativeAverage = 0;
  var getTwitterNeutralAverage = 0;

  if(twitterSentiment.length>0){
    const getTwitterPositiveCountFirst = twitterSentiment[0].tweetperiodsreachpositivesum;
    const getTwitterPositiveCountLast = twitterSentiment[twitterSentiment.length - 1].tweetperiodsreachpositivesum;
  
    if(getTwitterPositiveCountLast !==0){
      getTwitterPositiveAverage = (getTwitterPositiveCountLast - getTwitterPositiveCountFirst) / getTwitterPositiveCountLast* 100;
    }else{
      getTwitterPositiveAverage = (getTwitterPositiveCountLast - getTwitterPositiveCountFirst) / 1* 100;
    }

    const getTwitterNegativeCountFirst = twitterSentiment[0].tweetperiodsreachnegativesum;
    const getTwitterNegativeCountLast = twitterSentiment[twitterSentiment.length - 1].tweetperiodsreachnegativesum;
    if(getTwitterNegativeCountLast !==0){
      getTwitterNegativeAverage = (getTwitterNegativeCountLast-getTwitterNegativeCountFirst) / getTwitterNegativeCountLast* 100;
    }else  {
      getTwitterNegativeAverage = (getTwitterNegativeCountLast-getTwitterNegativeCountFirst) / 1* 100;
    }
  
    const getTwitterNeutralCountFirst = twitterSentiment[0].tweetperiodsreachneutralsum;
    const getTwitterNeutralCountLast = twitterSentiment[twitterSentiment.length - 1].tweetperiodsreachneutralsum;
    if(getTwitterNeutralCountLast !==0){
      getTwitterNeutralAverage = (getTwitterNegativeCountLast-getTwitterNeutralCountFirst) / getTwitterNeutralCountLast* 100;
    }else  {
      getTwitterNeutralAverage = (getTwitterNegativeCountLast-getTwitterNeutralCountFirst) / 1* 100;
    }
  }

  return (
    <>
      <Divider style={{margin: 5, padding: 0}}/>
      <Row justify='start' style={{display:'flex', marginLeft: '1rem'}}>
        <LogoSocial logo={LogoTwitter}/>
        <Col xs={{span: 5}} xxl={{span: 2}}><StatisticTwitterSummaryArticle value={getTwitterCount}/></Col>
        <Col xs={{span: 5}} xxl={{span: 2}}><StatisticTwitterArticlePositive percent={getTwitterPositiveAverage}
                                                                             value={getTwitterPositiveCount}/></Col>
        <Col xs={{span: 5}} xxl={{span: 2}}><StatisticTwitterArticleNegative percent={getTwitterNegativeAverage}
                                                                              value={getTwitterNegativeCount}/></Col>
        <Col xs={{span: 5}} xxl={{span: 2}}><StatisticTwitterArticleNeutral percent={getTwitterNeutralAverage}
                                                                             value={getTwitterNeutralCount}/></Col>
      </Row>
    </>
  )
})