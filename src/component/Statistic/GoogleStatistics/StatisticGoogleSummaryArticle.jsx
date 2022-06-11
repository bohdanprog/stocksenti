import React from 'react';
import {Card, Col, Row, Statistic} from "antd";
import classes from "../Statistic.module.css";

const StatisticsArticleSummary = ({value}) => {
  return(
  <Row>
    <Col span={24} className={classes.size} >
      <Card bordered={false} size="small">
        <Statistic className={classes.size} valueStyle={{fontSize: '18px'}}  value={value}/>
      </Card>
    </Col>
  </Row>
  )
};

export default StatisticsArticleSummary;