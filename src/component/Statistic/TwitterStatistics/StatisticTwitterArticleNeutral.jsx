import React from 'react';
import {Card, Col, Row, Statistic} from 'antd';
import {ImNewspaper} from "@react-icons/all-files/im/ImNewspaper";


const StatisticsArticleAverage = ({value, percent}) => {
  return (
    <Row gutter={20}>
      <Col span={24}>
        <Card bordered={false} size="small">
          <Statistic value={value} prefix={<ImNewspaper/>}
                     valueStyle={{color: '#649DD1', fontSize: '18px'}}/>
          <Statistic suffix="%" value={percent} precision={1}
                     valueStyle={{color: '#649DD1', fontSize: '16px'}}/>
        </Card>
      </Col>
    </Row>
  )
};

export default StatisticsArticleAverage;