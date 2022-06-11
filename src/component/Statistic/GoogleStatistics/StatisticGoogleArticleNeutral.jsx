import React from 'react';
import {Card, Col, Row, Statistic} from 'antd';
import {ImNewspaper} from "@react-icons/all-files/im/ImNewspaper";


const StatisticsArticleNeutral = ({value, percent}) => {
  return (
    <Row gutter={20}>
      <Col span={24}>
        <Card bordered={false} size="small">
          <Statistic value={value} valueStyle={{color: '#649DD1', fontSize: '20px'}}
                     prefix={<ImNewspaper/>}/>
          <Statistic suffix="%" value={percent} precision={1}
                     valueStyle={{color: '#649DD1', fontSize: '14px'}}/>
        </Card>
      </Col>
    </Row>
  )
};

export default StatisticsArticleNeutral;