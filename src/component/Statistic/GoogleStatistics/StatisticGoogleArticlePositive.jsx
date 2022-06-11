import React from 'react';
import {Card, Col, Row, Statistic} from 'antd';
import {RiseOutlined} from "@ant-design/icons";

const StatisticsArticlePositive = ({value, percent}) => {
  return(
    <Row>
      <Col span={24}>
        <Card bordered={false} size="small">
          <Statistic suffix={<RiseOutlined />} value={value}
                     valueStyle={{color: '#3f8600', fontSize: '18px'}}/>
          <Statistic suffix="%" value={percent} precision={1}
                     valueStyle={{color: '#3f8600', fontSize: '14px'}}/>
        </Card>
      </Col>
    </Row>
  )
};

export default StatisticsArticlePositive;