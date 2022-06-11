import React from 'react';
import {Card, Col, Row, Statistic} from "antd";


const StatisticsArticleSummary = ({value}) => {
  return(
  <Row gutter={20}>
    <Col span={24}>
      <Card bordered={false} size="small" >
        <Statistic value={value} valueStyle={{fontSize:'18px' }}/>
      </Card>
    </Col>
  </Row>
  )
};

export default StatisticsArticleSummary;