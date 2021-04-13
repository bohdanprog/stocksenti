import React from 'react';
import {Col, Row} from "antd";
import {Content} from "antd/es/layout/layout";
import Statistic from "../Statistic/Statistic";


const Bitcoin = (props) => {
  return (
    <React.Fragment>
      <Content>
        <Row gutter={[48, 8]} justify='space-around' align='center'>
          <Col span={6}><Statistic/></Col>
          <Col span={6}><Statistic/></Col>
          <Col span={6}><Statistic/></Col>
          <Col span={6}><Statistic/></Col>
        </Row>
      </Content>
    </React.Fragment>
  )

}



export default Bitcoin;