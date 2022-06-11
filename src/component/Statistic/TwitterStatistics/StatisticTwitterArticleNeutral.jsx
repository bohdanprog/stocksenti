import React from 'react';
import {Card, Col, Row, Statistic} from 'antd';


export const StatisticsArticleNeutral = ({value, percent}) => {
  return (
    <Row gutter={20}>
      <Col span={24}>
        <Card bordered={false} size="small">
          <Statistic value={value} valueStyle={{color: '#649DD1', fontSize: '16px'}}/>
          <Statistic suffix="%" value={percent} precision={1} valueStyle={{color: 'grey', fontSize: '10px'}}/>
        </Card>
      </Col>
    </Row>
  )
};

export default StatisticsArticleNeutral;