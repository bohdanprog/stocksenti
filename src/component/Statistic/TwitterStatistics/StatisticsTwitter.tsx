import React from 'react';
import {Col, Divider, Row} from "antd";
import {TwitterSentimentType} from "../../../type/types";
import {LogoSocial} from "../../../Avatar/LogoSocial";
import StatisticTwitterSummaryArticle from './StatisticTwitterSummaryArticle';
import StatisticTwitterArticlePositive from './StatisticTwitterArticlePositive';
import StatisticTwitterArticleNeutral from './StatisticTwitterArticleNeutral';
import StatisticTwitterArticleNegative from './StatisticTwitterArticleNegative';
import LogoTwitter from "../../../assets/twitter-icon.svg";

type StatisticsTabsPropsType = {
  twitterSentiment: Array<TwitterSentimentType>
}

export const StatisticsTwitter: React.FC<StatisticsTabsPropsType> = React.memo(({twitterSentiment}) => {
  const getTwitterCount: number = twitterSentiment.reduce((prev, cur) => prev + cur.tweetperiodscount, 0);
  const getTwitterPositiveCount: number = twitterSentiment.reduce((prev, cur) => prev + cur.tweetperiodspositivecount, 0);
  const getTwitterNegativeCount: number = twitterSentiment.reduce((prev, cur) => prev + cur.tweetperiodsnegativecount, 0);
  const getTwitterNeutralCount: number = twitterSentiment.reduce((prev, cur) => prev + cur.tweetperiodsneutralcount, 0);

  const getTwitterPositiveCountFirst = twitterSentiment[0].tweetperiodsreachpositivesum;
  const getTwitterPositiveCountLast = twitterSentiment[twitterSentiment.length - 1].tweetperiodsreachpositivesum;
  const getTwitterPositiveAverage = getTwitterPositiveCountFirst / getTwitterPositiveCountLast;

  const getTwitterNegativeCountFirst = twitterSentiment[0].tweetperiodsreachnegativesum;
  const getTwitterNegativeCountLast = twitterSentiment[twitterSentiment.length - 1].tweetperiodsreachnegativesum;
  const getTwitterNegativeAverage = getTwitterNegativeCountFirst / getTwitterNegativeCountLast;

  const getTwitterNeutralCountFirst = twitterSentiment[0].tweetperiodsreachneutralsum;
  const getTwitterNeutralCountLast = twitterSentiment[twitterSentiment.length - 1].tweetperiodsreachneutralsum;
  const getTwitterNeutralAverage = getTwitterNeutralCountFirst / getTwitterNeutralCountLast;

  return (
    <>
      <Divider style={{margin: 0, padding: 0}}/>
      <Row justify='center' align='middle' style={{display:'flex'}}>
        <LogoSocial logo={LogoTwitter}/>
        <Col xs={{span: 6}} xxl={{span: 4}}><StatisticTwitterSummaryArticle value={getTwitterCount}/></Col>
        <Col xs={{span: 6}} xxl={{span: 4}}><StatisticTwitterArticlePositive percent={getTwitterPositiveAverage}
                                                                              value={getTwitterPositiveCount}/></Col>
        <Col xs={{span: 6}} xxl={{span: 4}}><StatisticTwitterArticleNegative percent={getTwitterNegativeAverage}
                                                                              value={getTwitterNegativeCount}/></Col>
        {/*<Col xs={{span: 6}} xxl={{span: 4}}><StatisticTwitterArticleNeutral percent={getTwitterNeutralAverage}*/}
        {/*                                                                     value={getTwitterNeutralCount}/></Col>*/}
      </Row>
    </>
  )
})