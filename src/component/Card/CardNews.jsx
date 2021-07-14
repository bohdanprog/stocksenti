import React from 'react';
import {Card, Col, Row} from "antd";
import Meta from "antd/es/card/Meta";
import moment from "moment";
import classes from "../Diagram/Diagram.module.css";
import SpinnerContainer from "../Spiner/SpinnerContainer";

const CardNews = (props) => {
  if (!props.title) {
    return <SpinnerContainer/>;
  }
  return (
    <div className={classes.CardNews}>
      <Row gutter={[20]} style={{justifyContent:'start'}}>
      <Col xs={{span: 24 }} xxl={{span: 6}} span={12} style={{margin:10}} >
      <Card
        extra={props.relatedsentenceswithsentiments}
        style={{ width: 330 }}
        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}
        title={props.articleprovider}
        hoverable={true}>
        <Meta title={<p>props.title</p>}/>
        <span>{moment(props.date).format("DD-MM-YYYY hh:mm")}</span>
      </Card>
      </Col>
      </Row>
    </div>
  )
}

export default CardNews;