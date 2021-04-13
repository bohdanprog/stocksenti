import React from 'react';
import {Col, Layout, Row} from "antd";
import {Content} from "antd/es/layout/layout";
import Statistic from "../Statistic/Statistic";
import classes from '../Diagram/Diagram.module.css';
import TabsContainer from "../Tabs/Tabs";

const Tesla = (props) => {
  return (
    <Content>
      <Layout style={{height:'100%', width:'100%', backgroundColor:'#fff'}}>
        <Row gutter={[20]} style={{padding:'0,10px'}} justify='space-between' align='center'>
          <Col xs={{span: 12}} xxl={{span: 6}} span={6}><Statistic/></Col>
          <Col xs={{span: 12}} xxl={{span: 6}} span={6}><Statistic/></Col>
          <Col xs={{span: 12}} xxl={{span: 6}} span={6}><Statistic/></Col>
          <Col xs={{span: 12}} xxl={{span: 6}} span={6}><Statistic/></Col>
        </Row>
        <Layout className={classes.containerTabs} style={{alignItems: 'center'}}>
          <div style={{height:'100%', width:'100%'}}>
        <TabsContainer logo={props.logo} instrument ={props.instrument}/>
          </div>
        </Layout>
      </Layout>
      </Content>
  )
}

export default Tesla;