import React from 'react';
import {Card, Col, Row, Statistic} from 'antd';
import {ArrowUpOutlined} from '@ant-design/icons'


const Statistics = (props) => {
  return(
  <Row gutter={20}>
    <Col span={24}>
      <Card bordered={false} size="small" >
        <Statistic
          title="Active"
          value={11.28}
          precision={2}
          valueStyle={{ color: '#3f8600', fontSize:'20px' }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
  </Row>
  )
};

export default Statistics;