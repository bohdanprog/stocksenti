import React from 'react';
import {Card, Col, Row, Statistic} from 'antd';
import {ImNewspaper} from "@react-icons/all-files/im/ImNewspaper";
import {FallOutlined} from "@ant-design/icons";
import classes from "../Statistic.module.css"

const StatisticsArticleNegative = ({value, percent}) => {
  return (
    <Row gutter={20}>
      <Col span={24}>
        <Card bordered={false} size="small" className={classes.container}>
          <Statistic value={value} suffix={<FallOutlined />}
                     valueStyle={{color: 'red', fontSize: '18px'}}/>
          <Statistic suffix="%" value={percent} precision={1}
                     valueStyle={{color: 'red', fontSize: '14px'}}/>
        </Card>
      </Col>
    </Row>
  )
};

export default StatisticsArticleNegative;