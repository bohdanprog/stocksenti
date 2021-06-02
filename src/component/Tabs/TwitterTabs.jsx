import React from 'react';
import {Col, Layout, Row} from "antd";
import classes from "../Diagram/Diagram.module.css";
import {ListTwitter} from "../ListNews/ListTwitter/ListTwitter";
import {DiagramContainer} from "../Diagram/DiagramContainer";
import {ButtonTwitter} from "../Button/ButtonTwitter";

export const TwitterTabs = ({logo, instrument, twitterNews, twitterSentiment}) => {
  return (
    <Layout className={classes.containerTabs}>
      <ButtonTwitter instrument = {instrument} style={{ alignItems: 'left'}}/>
      {/*<DiagramContainer instrument={instrument} twitterSentiment={twitterSentiment}/>*/}
      <Row>
        <Col xs={{span: 24}} xxl={{span: 24}} style={{float:'left'}}>
          <ListTwitter logo={logo} instrument={instrument} twitterNews={twitterNews}/>
        </Col>
      </Row>
    </Layout>
  )
}