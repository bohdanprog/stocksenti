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
  const getGoogleCount = googleSentiment.reduce((prev, cur) => prev + cur.googlenewsperiodscount, 0);
  const getGooglePositiveCount = googleSentiment.reduce((prev, cur) => prev + cur.googlenewsperiodstitlepositivecount, 0);
  const getGoogleNegativeCount = googleSentiment.reduce((prev, cur) => prev + cur.googlenewsperiodstitlenegativecount, 0);
  const getGoogleNeutralCount = getGoogleCount - getGooglePositiveCount - getGoogleNegativeCount;

  const getGooglePositiveCountFirst = googleSentiment[0].googlenewsperiodscontentpossum;
  const getGooglePositiveCountLast = googleSentiment[googleSentiment.length - 1].googlenewsperiodscontentpossum;
  const getGooglePositiveAverage = getGooglePositiveCountFirst / getGooglePositiveCountLast;

  const getGoogleNegativeCountFirst = googleSentiment[0].googlenewsperiodscontentnegsum;
  const getGoogleNegativeCountLast = googleSentiment[googleSentiment.length - 1].googlenewsperiodscontentnegsum;
  const getGoogleNegativeAverage = getGoogleNegativeCountFirst / getGoogleNegativeCountLast;

  const getGoogleNeutralCountFirst = googleSentiment[0].googlenewsperiodscontentneusum;
  const getGoogleNeutralCountLast = googleSentiment[googleSentiment.length - 1].googlenewsperiodscontentneusum;
  const getGoogleNeutralAverage = getGoogleNeutralCountFirst / getGoogleNeutralCountLast;

  return (
    <>
      <Divider style={{margin:0, padding:0}} />
      <Row justify='center' align='middle' style={{display:'flex'}}>
        <LogoSocial logo={LogoGoogle}/>
        <Col xs={{span: 6}} xxl={{span: 4}}><StatisticGoogleSummaryArticle value={getGoogleCount}/></Col>
        <Col xs={{span: 6}} xxl={{span: 4}}><StatisticGoogleArticlePositive percent={getGooglePositiveAverage}
                                                                             value={getGooglePositiveCount}/></Col>
        <Col xs={{span: 6}} xxl={{span: 4}}><StatisticGoogleArticleNegative percent={getGoogleNegativeAverage}
                                                                             value={getGoogleNegativeCount}/></Col>
        {/*<Col xs={{span: 10}} xxl={{span: 4}}><StatisticGoogleArticleNeutral percent={getGoogleNeutralAverage}*/}
        {/*                                                                    value={getGoogleNeutralCount}/></Col>*/}
      </Row>
    </>
  )
})