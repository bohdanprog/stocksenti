import React from 'react';
import {Card, Col, Row, Statistic} from "antd";

const StatisticsArticleSummary = ({value}) => {
  return(
  <Row>
    <Col span={24}>
      <Card bordered={false} size="small" >
        <Statistic valueStyle={{fontSize: '18px'}} value={value}/>
      </Card>
    </Col>
  </Row>
  )
};

export default StatisticsArticleSummary;